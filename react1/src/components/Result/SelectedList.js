import Box from "@mui/material/Box";
import { ProductContext } from "../../contexts/Product";
import { useContext, useState } from "react";
import "./SelectedList.css";

const SelectedList = ({ selectedProducts }) => {
  const { product, setProduct } = useContext(ProductContext);
  const category = ["상의", "하의", "신발", "모자", "아우터", "부위테스트"];
  const [name1, setName1] = useState("");
  const [comment1, setComment1] = useState("");

  const handleSave = () => {
    if (name1) {
      setProduct((prevProduct) => {
        const newProduct = [...prevProduct];
        newProduct.push({ name1: name1, comment1: comment1, products: selectedProducts, score: 0 });
        return newProduct
      });
    }
  };

  const handleReset = () => {
    setProduct([]);
  };

  return (
    <table className="SelectList-box">
      <td className="SelectList-aaa">
        {selectedProducts.map((product, index) =>
          product? (
            <td className="SelectList-bbb" key={index}>
              <td className="SelectList-bbbname">{product.name}</td>
              <td className="SelectList-bbbprice">Price: {product.price}</td>
            </td>
          ) : null
        )}
      </td>
      <td className="SelectList-hibbb">
        <td className="SelectList-hiaaa">
          <input className="input-name" type="text" placeholder="이름" value={name1} onChange={(event) => setName1(event.target.value)} />
          <input className="input-name" type="text" placeholder="코멘트" value={comment1} onChange={(event) => setComment1(event.target.value)} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleReset}>Reset</button>
        </td>
      </td>
    </table>
  );
};

export default SelectedList;