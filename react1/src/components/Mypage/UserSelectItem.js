import { useContext } from "react";
import { ProductContext } from "../../contexts/Product";

const UserSelectItem = () => {
  const { product, setProduct } = useContext(ProductContext);

  const handleReset = () => {
    setProduct([]);
  };

  return (
    <div>
      <h2>선택 품목 확인</h2>
      {product.map((users, index) => (
        <div key={index}>
          <h3>Product {index + 1}</h3>
          {users.filter((item) => item !== null).map((item, index) => (
            <div key={index}>
              <p>
                {item.name} - {item.price}
              </p>
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleReset}>초기화</button>
    </div>
  );
};

export default UserSelectItem;