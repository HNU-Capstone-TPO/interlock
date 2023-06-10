import React, { useContext, useState } from 'react';
import { SaveRecommendContext } from '../../contexts/SaveRecommend';
import "./InterestedProducts.css";

const InterestedProducts = () => {
  const { recommend } = useContext(SaveRecommendContext);
  const [selectedSet, setSelectedSet] = useState(null);

  const handleSetClick = (index) => {
    if (selectedSet === index) {
      setSelectedSet(null);
    } else {
      setSelectedSet(index);
    }
  };

  const handleReset = () => {
    setSelectedSet([]);
  };

  return (
    <table className="interested-wraptable">
      <h2 className="interested-table-title">
        <td className="interested-table-titlea">
          추천 상품
        </td>
      </h2>
      <div className="interested-set-buttons">
        <td className="interested-table-div0">
          <div className="interested-table-button-wrapper0">
            <td className="interested-table-button0">
              <td className="interested-abc0">
                <td className="interested-mainbacka">
                  <img className="interested-mainbackb" src="/img/logo.png" alt="아우터" width="100%" height="100%"></img>
                </td>
                <td className="interested-mainbacka">
                  <img className="interested-mainbackb" src="/img/logo.png" alt="아우터" width="90%" height="90%"></img>
                </td>
                <td className="interested-mainbacka">
                  <img className="interested-mainbackb" src="/img/logo.png" alt="아우터" width="90%" height="90%"></img>
                </td>
                <td className="interested-mainbacka">
                  <img className="interested-mainbackb" src="/img/logo.png" alt="아우터" width="90%" height="90%"></img>
                </td>
                <td className="interested-mainbacka">
                  <img className="interested-mainbackb" src="/img/logo.png" alt="아우터" width="90%" height="90%"></img>
                </td>
                <td className="interested-mainbacka">
                  <img className="interested-mainbackb" src="/img/logo.png" alt="아우터" width="90%" height="90%"></img>
                </td>
              </td>
              {recommend[0].products.filter((user) => user !== null).map((user, index) => (
                <td className="interested-imga0" key={index}>
                  {user.part === "상의" && (
                    <div className="interested-main">
                      <button className="interested-mainback1" onClick={() => window.open(user.rink, '_blank')}>{user.name}</button>
                      <img src={user.image} alt="6000" width="100%" height="100%"></img> 
                      <img className="interested-mainbacktwo" src="/img/상의로고.PNG" alt="1" width="50%" height="50%"></img>
                    </div>
                  )}
                  {user.part === "하의" && (
                    <div className="interested-main">
                      <button className="interested-mainback1" onClick={() => window.open(user.rink, '_blank')}>{user.name}</button>
                      <img src={user.image} alt="6000" width="100%" height="100%"></img> 
                      <img className="interested-mainbacktwo" src="/img/하의로고.PNG" alt="1" width="50%" height="50%"></img>
                    </div>
                  )}
                  {user.part === "신발" && (
                    <div className="interested-main">
                      <button className="interested-mainback1" onClick={() => window.open(user.rink, '_blank')}>{user.name}</button>
                      <img src={user.image} alt="6000" width="100%" height="100%"></img> 
                      <img className="interested-mainbacktwo" src="/img/신발로고.PNG" alt="1" width="50%" height="50%"></img>
                    </div>
                  )}
                  {user.part === "모자" && (
                    <div className="interested-main">
                      <button className="interested-mainback1" onClick={() => window.open(user.rink, '_blank')}>{user.name}</button>
                      <img src={user.image} alt="6000" width="100%" height="100%"></img> 
                      <img className="interested-mainbacktwo" src="/img/모자로고.PNG" alt="1" width="50%" height="50%"></img>
                    </div>
                  )}
                  {user.part === "아우터" && (
                    <div className="interested-main">
                      <button className="interested-mainback1" onClick={() => window.open(user.rink, '_blank')}>{user.name} {user.part}</button>
                      <img src={user.image} alt="6000" width="100%" height="100%"></img> 
                      <img className="interested-mainbacktwo" src="/img/아우터로고.PNG" alt="1" width="50%" height="50%"></img>
                    </div>
                  )}
                  {user.part === "악세사리" && (
                    <div className="interested-main">
                      <button className="interested-mainback1" onClick={() => window.open(user.rink, '_blank')}>{user.name}</button>
                      <img src={user.image} alt="6000" width="100%" height="100%"></img> 
                      <img className="interested-mainbacktwo" src="/img/악세사리로고.PNG" alt="1" width="50%" height="50%"></img>
                    </div>
                  )}
                </td>
              ))}
            </td>
          </div>
        </td>
        {recommend.slice(1, 5).filter((users) => users !== null).map((users, index) => (
          <td className="interested-table-div1" key={index+1}>
            <div className="interested-table-button-wrapper">
              <button className="interested-table-button" onClick={() => handleSetClick(index+1)}>
                <td className="interested-abc">
                  <img className="interested-imgmain1" src="/img/logo.png" alt="상의" width="100%" height="100%"></img>
                  <img className="interested-imgmain1" src="/img/logo.png" alt="하의" width="100%" height="100%"></img>
                  <img className="interested-imgmain1" src="/img/logo.png" alt="신발" width="100%" height="100%"></img>
                  <img className="interested-imgmain1" src="/img/logo.png" alt="모자" width="100%" height="100%"></img>
                  <img className="interested-imgmain1" src="/img/logo.png" alt="아우터" width="100%" height="100%"></img>
                  <img className="interested-imgmain1" src="/img/logo.png" alt="악세사리" width="100%" height="100%"></img>
                </td>
                <td className="interested-abc1">
                {users.products.filter((item) => item !== null).map((item) => (
                  <td className="interested-imgaa" key={item.id}>
                    {item.part === "상의" && (
                    <div className="interested-main1">
                      <img src={item.image} alt="상의" width="100%" height="100%"></img>
                      <img className="interested-mainbackone" src="/img/상의로고.PNG" alt="1" width="50%" height="50%"></img>
                    </div>
                    )}
                    {item.part === "하의" && (
                    <div className="interested-main1">
                      <img src={item.image} alt="하의" width="100%" height="100%"></img>
                      <img className="interested-mainbackone" src="/img/하의로고.PNG" alt="1" width="50%" height="50%"></img>
                    </div>
                    )}
                    {item.part === "신발" && (
                    <div className="interested-main1">
                      <img src={item.image} alt="신발" width="100%" height="100%"></img>
                      <img className="interested-mainbackone" src="/img/신발로고.PNG" alt="1" width="50%" height="50%"></img>
                    </div>
                    )}
                    {item.part === "모자" && (
                    <div className="interested-main1">
                      <img src={item.image} alt="모자" width="100%" height="100%"></img>
                      <img className="interested-mainbackone" src="/img/모자로고.PNG" alt="1" width="50%" height="50%"></img>
                    </div>
                    )}
                    {item.part === "아우터" && (
                    <div className="interested-main1">
                      <img src={item.image} alt="아우터" width="100%" height="100%"></img>
                      <img className="interested-mainbackone" src="/img/아우터로고.PNG" alt="1" width="50%" height="50%"></img>
                    </div>
                    )}
                    {item.part === "악세사리" && (
                    <div className="interested-main1">
                      <img src={item.image} alt="악세사리" width="100%" height="100%"></img>
                      <img className="interested-mainbackone" src="/img/악세사리로고.PNG" alt="1" width="50%" height="50%"></img>
                    </div>
                    )}
                  </td>
                ))}
                </td>
              </button>

            </div>
          </td>
        ))}
        {selectedSet !== null && (
        <div className="InterestedProducts-table-detail">               
          <table>
            <thead className="InterestedProducts-table-head">
              <td className="InterestedProducts-border-size">
                <td className="InterestedProducts-headcss">
                  상세 보기
                </td>
              </td>
              <button className="interested-Xbutton" onClick={() => setSelectedSet(null)}>
                <img src="/img/Timelinedelete.png" alt="awsdf" width="20px" height="20px"></img>
              </button>
            </thead>
            <td className="interested-info-in">
              {recommend[selectedSet].products.filter((item) => item !== null).map((itema, index) => (
                <td className="InterestedProducts-table-detail2" key={index}>
                  <td className="InterestedProducts-info-detail1">
                    <td className="InterestedProducts-info-name" >
                      {itema.name}
                    </td>
                    <td className="InterestedProducts-info-detail2">
                    <img className="interested-table-detail-img" src={itema.image} alt="모자1" width="80px" height="80px"></img>
                    <td className="interested-info-detail3">
                      <td className="interested-table-info-pricebrand">{itema.price}</td>
                      <td className="interested-table-info-pricebrand">{itema.brand}</td>
                      <td className="interested-table-info-pricebrand">
                          {itema.color.map((color) => {
                            if (color === '검정') {
                              return <img className="interested-color-img" src="/img/color/검정.png" alt="모자1" width="20px" height="20px"></img>;
                            } else if (color === '하양') {
                              return <img className="interested-color-img" src="/img/color/하양.png" alt="모자1" width="20px" height="20px"></img>;
                            } else if (color === '파랑'){
                              return <img className="interested-color-img" src="/img/color/파랑.png" alt="모자1" width="20px" height="20px"></img>;
                            } else if (color === '갈색'){
                              return <img className="interested-color-img" src="/img/color/갈색.png" alt="모자1" width="20px" height="20px"></img>;
                            } else if (color === '노랑'){
                              return <img className="interested-color-img" src="/img/color/노랑.png" alt="모자1" width="20px" height="20px"></img>;
                            } else if (color === '보라'){
                              return <img className="interested-color-img" src="/img/color/보라.png" alt="모자1" width="20px" height="20px"></img>;
                            } else if (color === '분홍'){
                              return <img className="interested-color-img" src="/img/color/분홍.png" alt="모자1" width="20px" height="20px"></img>;
                            } else if (color === '빨강'){
                              return <img className="interested-color-img" src="/img/color/빨강.png" alt="모자1" width="20px" height="20px"></img>;
                            } else if (color === '아이보리'){
                              return <img className="interested-color-img" src="/img/color/아이보리.png" alt="모자1" width="20px" height="20px"></img>;
                            } else if (color === '주황'){
                              return <img className="interested-color-img" src="/img/color/주황.png" alt="모자1" width="20px" height="20px"></img>;
                            } else if (color === '초록'){
                              return <img className="interested-color-img" src="/img/color/초록.png" alt="모자1" width="20px" height="20px"></img>;
                            } else if (color === '회색'){
                              return <img className="interested-color-img" src="/img/color/회색.png" alt="모자1" width="20px" height="20px"></img>;
                            }
                              else {
                              return color;
                            }
                          })}
                          </td>
                        </td>
                      <td className="interested-table-detail-rink">
                        <a href={itema.rink} target="_blank" rel="noopener noreferrer">
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
    </table>
  );
};

export default InterestedProducts;