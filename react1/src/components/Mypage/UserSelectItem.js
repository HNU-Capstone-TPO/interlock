import { useContext, useState} from "react";
import { ProductContext } from "../../contexts/Product";
import "./UserSelectItem.css";

const UserSelectItem = () => {
  const { product, setProduct } = useContext(ProductContext);
  const [selectedSet, setSelectedSet] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  

  const handleReset = () => {
    setProduct([]);
  };

  const handleSetClick = (index) => {
    if (selectedSet === index) {
      setSelectedSet(null);
    } else {
      setSelectedSet(index);
    }
  };


  const handleScoreIncrease = (index) => {
    const newProduct = [...product];
    newProduct[index].score++;
    setProduct(newProduct);
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const itemsPerPage = 3;

  const pageItems = product.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


  return (
    <table className="UserSelectItem-table-wrap">
      <h2 className="UserSelectItem-table-title">
        <td className="UserSelectItem-table-titlea">
          선택 품목 확인
        </td>
      </h2>
      <div className="UserSelectItem-set-buttons">
        {pageItems.map((users, index) => (
          <table className="UserSelectItem-itemset">
            <td className="UserSelectItem-table-div1" key={index}>
              <div className="UserSelectItem-table-button-wrapper">
                <button className="UserSelectItem-table-button" onClick={() => handleSetClick(index)}>
                <td className="UserSelectItem-abc">
                  <img className="UserSelectItem-imgmain1" src="/img/logo.png" alt="상의" width="100%" height="100%"></img>
                  <img className="UserSelectItem-imgmain1" src="/img/logo.png" alt="하의" width="100%" height="100%"></img>
                  <img className="UserSelectItem-imgmain1" src="/img/logo.png" alt="신발" width="100%" height="100%"></img>
                  <img className="UserSelectItem-imgmain1" src="/img/logo.png" alt="모자" width="100%" height="100%"></img>
                  <img className="UserSelectItem-imgmain1" src="/img/logo.png" alt="아우터" width="100%" height="100%"></img>
                  <img className="UserSelectItem-imgmain1" src="/img/logo.png" alt="악세사리" width="100%" height="100%"></img>
                </td>
                <td className="UserSelectItem-abc">
                {users.products.filter((item) => item !== null).map((item, index1) => (
                  <td className="UserSelectItem-imga" key={index1}>
                      {item.part === "상의" && (
                      <div className="UserSelectItem-main1">
                        <img className="UserSelectItem-imgadetail" src={item.image} alt="상의1"></img>
                        <img className="UserSelectItem-mainbackone" src="/img/상의로고.PNG" alt="1" width="50%" height="50%"></img>
                      </div> 
                      )}
                      {item.part === "하의" && (
                        <div className="UserSelectItem-main1">
                        <img className="UserSelectItem-imgadetail" src={item.image} alt="하의1"></img>
                        <img className="UserSelectItem-mainbackone" src="/img/하의로고.PNG" alt="1" width="50%" height="50%"></img>
                        </div>
                      )}
                      {item.part === "신발" && <img className="UserSelectItem-imgadetail" src={item.image} alt="신발1"></img>}
                      {item.part === "모자" && <img className="UserSelectItem-imgadetail" src={item.image} alt="모자1"></img>}
                      {item.part === "아우터" && <img className="UserSelectItem-imgadetail" src={item.image} alt="아우터1"></img>}
                      {item.part === "악세사리" && <img className="UserSelectItem-imgadetail"src={item.image} alt="악세사리1"></img>}
                  </td>
                ))}
                </td>
                </button>
              </div>
            </td>
            <td className="UserSelectItem-username">
              작성자: {users.name1}
            </td>
            <td className="UserSelectItem-comment">
              코멘트: {users.comment1}
            </td>
            <td className="UserSelectItem-jjim">
              <td className="UserSelectItem-jjimbuttonwrap" key={index}>
                <button className="UserSelectItem-jjimbutton" onClick={() => handleScoreIncrease(((currentPage-1)*itemsPerPage+index))}>
                  <img className="UserSelectItem-jjimimg1"src="/img/jjim.png" alt="모자1" width="30px" height="30px"></img>
                  <img className="UserSelectItem-jjimimg2"src="/img/1.png" alt="모자1" width="30px" height="30px"></img>
                </button>
              </td>
              <td className="UserSelectItem-jjimnumber">
                {users.score}
              </td>
            </td>
          </table>
        ))}
        {selectedSet !== null && (
        <div className="UserSelectItem-table-detail">
          <table> 
            <thaed className="UserSelectItem-table-head">
              <td className="UserSelectItem-headcss">
                상세 보기
               </td>
              <button className="UserSelectItem-Xbutton" onClick={() => setSelectedSet(null)}>
                X
              </button>
            </thaed>
            <tbody>
              {product[selectedSet].products.filter((item) => item !== null).map((item, index) => (
                <tr className="UserSelectItem-table-detail2" key={index}>
                  <td className="UserSelectItem-table-detail-img">
                    <img src="/img/Ad_1.jpg" alt="모자1" width="80px" height="80px"></img>
                  </td>
                  <td className="UserSelectItem-table-set">
                    <td className="UserSelectItem-table-detail-name">{item.name}</td>
                    <td className="UserSelectItem-table-detail-price">{item.price}</td>
                    <td className="UserSelectItem-table-detail-rink">
                      <a href={item.rink} target="_blank" rel="noopener noreferrer">
                        <img src="/img/Ad_1.jpg" alt="Ad_1" width="80px" height="80px" />
                      </a>
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}
      </div>
      <td className="UserSelectItem-pagination">
        <button className="UserSelectItem-pagination-click" onClick={handlePrevClick} disabled={currentPage === 1}>
          <img className="UserSelectItem-pagination-animation" src="/img/left.png" alt="awsdf" width="30px" height="30px"></img>
        </button>
        <td className="UserSelectItem-pagination-number">{currentPage}</td>
        <button className="UserSelectItem-pagination-click" onClick={handleNextClick} disabled={(product.length < (currentPage * itemsPerPage)+1)}>
          <img className="UserSelectItem-pagination-animation" src="/img/right.png" alt="awsdf" width="30px" height="30px"></img>
        </button>
      </td>
    </table>
  );
};

export default UserSelectItem;