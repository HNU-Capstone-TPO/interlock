import { useContext, useState} from "react";
import { ProductContext } from "../../contexts/Product";
import "./UserSelectItem.css";

const UserSelectItem = () => {
  const { product, setProduct } = useContext(ProductContext);
  const [selectedSet, setSelectedSet] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

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

  const handlePrevClickfirst = () => {
    setCurrentPage(1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevClickend = () => {
    if((product.length % 3) !== 0)
      setCurrentPage(Math.floor((product.length / 3) + 1));
    else
      setCurrentPage((product.length / 3));
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
                <button className="UserSelectItem-table-button" onClick={() => handleSetClick((currentPage-1)*itemsPerPage+index)}>
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
                      {item.part === "신발" && (
                      <div className="UserSelectItem-main1">
                        <img className="UserSelectItem-imgadetail" src={item.image} alt="상의1"></img>
                        <img className="UserSelectItem-mainbackone" src="/img/신발로고.PNG" alt="1" width="50%" height="50%"></img>
                      </div> 
                      )}
                      {item.part === "모자" && (
                      <div className="UserSelectItem-main1">
                        <img className="UserSelectItem-imgadetail" src={item.image} alt="상의1"></img>
                        <img className="UserSelectItem-mainbackone" src="/img/모자로고.PNG" alt="1" width="50%" height="50%"></img>
                      </div> 
                      )}
                      {item.part === "아우터" && (
                      <div className="UserSelectItem-main1">
                        <img className="UserSelectItem-imgadetail" src={item.image} alt="상의1"></img>
                        <img className="UserSelectItem-mainbackone" src="/img/아우터로고.PNG" alt="1" width="50%" height="50%"></img>
                      </div> 
                      )}
                      {item.part === "포인트" && (
                      <div className="UserSelectItem-main1">
                        <img className="UserSelectItem-imgadetail" src={item.image} alt="상의1"></img>
                        <img className="UserSelectItem-mainbackone" src="/img/악세사리로고.PNG" alt="1" width="50%" height="50%"></img>
                      </div> 
                      )}
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
                {(index % 3 === 0) &&
                <div className="UserSelectItem-jjimbutton1" onClick={() => {handleScoreIncrease((((currentPage-1)*itemsPerPage+index))); setIsClicked1(true);
                setTimeout(() => {setIsClicked1(false);}, 1000); }} style={{ animation: isClicked1? 'jello-horizontal1 0.9s both' : 'none' }}>
                  <img className="UserSelectItem-jjimimg1"src="/img/jjim.png" alt="모자1" width="30px" height="30px"></img>
                </div>
                }
                {(index % 3 === 1) &&
                <div className="UserSelectItem-jjimbutton1" onClick={() => {handleScoreIncrease((((currentPage-1)*itemsPerPage+index))); setIsClicked2(true);
                setTimeout(() => {setIsClicked2(false);}, 1000); }} style={{ animation: isClicked2? 'jello-horizontal1 0.9s both' : 'none' }}>
                  <img className="UserSelectItem-jjimimg1"src="/img/jjim.png" alt="모자1" width="30px" height="30px"></img>
                </div>
                }
                {(index % 3 === 2) &&
                <div className="UserSelectItem-jjimbutton1" onClick={() => {handleScoreIncrease((((currentPage-1)*itemsPerPage+index))); setIsClicked3(true);
                setTimeout(() => {setIsClicked3(false);}, 1000); }} style={{ animation: isClicked3? 'jello-horizontal1 0.9s both' : 'none' }}>
                  <img className="UserSelectItem-jjimimg1"src="/img/jjim.png" alt="모자1" width="30px" height="30px"></img>
                </div>
                }
              </td>
              <td className="UserSelectItem-jjimnumber">
                {users.score}
              </td>
            </td>
          </table>
        ))}
        {selectedSet !== null && (
        <div className="UserSelectItem-table-detail1">
          <table> 
            <thaed className="UserSelectItem-table-head">
              <td className="border-size">
                <td className="UserSelectItem-headcss">
                  상세 보기
                </td>
              </td>
              <button className="UserSelectItem-Xbutton" onClick={() => setSelectedSet(null)}>
                <img src="/img/Timelinedelete.png" alt="awsdf" width="20px" height="20px"></img>
              </button>
            </thaed>
            <td className="info-in">
              {product[selectedSet].products.filter((item) => item !== null).map((item, index) => (
                <td className="UserSelectItem-table-detail2" key={index}>
                  <td className="UserSelectItem-info-detail1">
                    <td className="info-name" >
                      {item.name}
                    </td>
                    <td className="UserSelectItem-info-detail2">
                      <img className="UserSelectItem-table-detail-img" src={item.image} alt="모자1" width="80px" height="80px"></img>
                      <td className="UserSelectItem-info-detail3">
                        <td className="UserSelectItem-info-pricebrand">{item.price}</td>
                        <td className="UserSelectItem-info-pricebrand">{item.brand}</td>
                        <td className="UserSelectItem-info-pricebrand">
                        {item.color.map((color) => {
                          if (color === '검정') {
                            return <img className="color-img" src="/img/color/검정.png" alt="모자1" width="20px" height="20px"></img>;
                          } else if (color === '하양') {
                            return <img className="color-img" src="/img/color/하양.png" alt="모자1" width="20px" height="20px"></img>;
                          } else if (color === '파랑'){
                            return <img className="color-img" src="/img/color/파랑.png" alt="모자1" width="20px" height="20px"></img>;
                          } else if (color === '갈색'){
                            return <img className="color-img" src="/img/color/갈색.png" alt="모자1" width="20px" height="20px"></img>;
                          } else if (color === '노랑'){
                            return <img className="color-img" src="/img/color/노랑.png" alt="모자1" width="20px" height="20px"></img>;
                          } else if (color === '보라'){
                            return <img className="color-img" src="/img/color/보라.png" alt="모자1" width="20px" height="20px"></img>;
                          } else if (color === '분홍'){
                            return <img className="color-img" src="/img/color/분홍.png" alt="모자1" width="20px" height="20px"></img>;
                          } else if (color === '빨강'){
                            return <img className="color-img" src="/img/color/빨강.png" alt="모자1" width="20px" height="20px"></img>;
                          } else if (color === '아이보리'){
                            return <img className="color-img" src="/img/color/아이보리.png" alt="모자1" width="20px" height="20px"></img>;
                          } else if (color === '주황'){
                            return <img className="color-img" src="/img/color/주황.png" alt="모자1" width="20px" height="20px"></img>;
                          } else if (color === '초록'){
                            return <img className="color-img" src="/img/color/초록.png" alt="모자1" width="20px" height="20px"></img>;
                          } else if (color === '회색'){
                            return <img className="color-img" src="/img/color/회색.png" alt="모자1" width="20px" height="20px"></img>;
                          }
                            else {
                            return color;
                          }
                        })}
                        </td>
                      </td>
                      <td className="UserSelectItem-info-rink">
                          <a href={item.rink} target="_blank" rel="noopener noreferrer">
                            <img src="/img/rink.png" alt="Ad_1" width="50px" height="50px" />
                          </a>
                        </td> 
                    </td>
                  </td>
                </td>
              ))}
            </td>
          </table>
        </div>
        )}
      </div>
      <td className="UserSelectItem-pagination">
        <button className="UserSelectItem-pagination-click" onClick={handlePrevClickfirst} disabled={currentPage === 1}>
          <img className="UserSelectItem-pagination-animation" src="/img/DRW3F7A.png" alt="awsdf" width="30px" height="30px"></img>
        </button>
        <button className="UserSelectItem-pagination-click" onClick={handlePrevClick} disabled={currentPage === 1}>
          <img className="UserSelectItem-pagination-animation" src="/img/cif00001.png" alt="awsdf" width="30px" height="30px"></img>
        </button>
        <td className="UserSelectItem-pagination-number">{currentPage}</td>
        <button className="UserSelectItem-pagination-click" onClick={handleNextClick} disabled={(product.length < (currentPage * itemsPerPage)+1)}>
          <img className="UserSelectItem-pagination-animation" src="/img/cif000011.png" alt="awsdf" width="30px" height="30px"></img>
        </button>
        <button className="UserSelectItem-pagination-click" onClick={handlePrevClickend} >
          <img className="UserSelectItem-pagination-animation" src="/img/DRWA831D.png" alt="awsdf" width="30px" height="30px"></img>
        </button>
      </td>
    </table>
  );
};

export default UserSelectItem;