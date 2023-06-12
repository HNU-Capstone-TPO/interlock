import RelatedImage from "../components/Result/RelatedImage";
import RelatedLink from "../components/Result/RelatedLink";
import SelectedList from "../components/Result/SelectedList";
import Styling from "../components/Result/Styling";
import './Result.css';
import { useState } from "react";
import { useLocation } from 'react-router-dom';

const Result = () => {
    const [selectedProducts, setSelectedProducts] = useState([null, null, null, null, null, null]);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePrevClick = () => {
        setCurrentPage(currentPage - 1);
      };
    
    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
      };

    const itemsPerPage = 1;

    
    
    const location = useLocation();
    const users = location.state.users;

    const pageItems = users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    return (
    <div className="page-top">
        <table className="page-content-left">
        </table>
        <table className="page-content">
            <td className="center-section">
            <td>
                <img className="imga" src="/img/model.png" alt="모자1" width="80px" height="80px"></img>
            </td>
                <Styling users={users} setSelectedProducts={setSelectedProducts}/>
            </td>
            <td className="bottom-section">
                <SelectedList selectedProducts={selectedProducts}/>
            </td>
        </table>
        <table className="page-content-right">
            <td>
                {pageItems.map((user, index) => (
                    <td key={index}> 
                        <img src={user.modelimage} alt="모자1" width="100%" height="350ox"></img>
                    </td>
                ))}
            </td>
            <td className="Result-pagination">
                        <button className="Result-pagination-click" onClick={handlePrevClick} disabled={currentPage === 1}>
                        <img className="Result-pagination-animation" src="/img/left.png" alt="awsdf" width="30px" height="30px"></img>
                        </button>
                        <td className="Result-pagination-number">{currentPage}</td>
                        <button className="Result-pagination-click" onClick={handleNextClick} disabled={(users.length < (currentPage * itemsPerPage)+1)}>
                        <img className="Result-pagination-animation" src="/img/right.png" alt="awsdf" width="30px" height="30px"></img>
                        </button>
                    </td>
            <div style={{ marginTop: "30px", height: '1px', width: "250px", backgroundColor: 'black', opacity: 0.5 }} /> 
            <RelatedLink user={users[0]}/>
        </table>
    </div>
    )
}

export default Result;