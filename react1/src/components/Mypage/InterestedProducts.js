import React, { useContext, useEffect } from 'react';
import { SaveRecommendContext } from '../../contexts/SaveRecommend';

const InterestedProducts = () => {
  const { recommend, setRecommend } = useContext(SaveRecommendContext);

  const handleReset2 = () => {
    setRecommend([]);
  };

  return (
    <div>
      <button onClick={handleReset2}>Reset</button>
      <h2>관심 상품 페이지</h2>
      {recommend.slice(0, 8).map((users, index) => (
        <div key={index}>
          <h3>{index+1}번세트</h3>
          {users.map((user) => (
            <div key={user.id}>
              <p>{user.id}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default InterestedProducts;