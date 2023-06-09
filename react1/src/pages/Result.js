import Ad from "../components/common/Ad";
import RelatedImage from "../components/Result/RelatedImage";
import RelatedLink from "../components/Result/RelatedLink";
import SelectedList from "../components/Result/SelectedList";
import Styling from "../components/Result/Styling";
import './Result.css';
import { useState } from "react";
import { useLocation } from 'react-router-dom';

const Result = () => {
    const [selectedProducts, setSelectedProducts] = useState([null, null, null, null, null, null]);
    
    const location = useLocation();
    const users = location.state.users;
    return (
    <div className="page-top">
        <table className="page-content-left">
            
        </table>
        <table className="page-content">
            <td className="center-section">
            
                <Styling users={users} setSelectedProducts={setSelectedProducts}/>
            </td>
            <td className="bottom-section">
                <SelectedList selectedProducts={selectedProducts}/>
            </td>
        </table>
        <table className="page-content-right">

        </table>
    </div>
    )
}

export default Result;