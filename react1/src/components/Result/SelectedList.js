import Box from "@mui/material/Box";
import { ProductContext } from "../../contexts/Product";
import { useContext, useState } from "react";
import "./SelectedList.css";

const SelectedList = ({ selectedProducts }) => {
  const { product, setProduct } = useContext(ProductContext);
  const category = ["상의", "하의", "신발", "모자", "아우터", "부위테스트"];
  const [name1, setName1] = useState("");
  const [comment1, setComment1] = useState("");
  const [isClicked1, setIsClicked1] = useState(false);
  var total=0;

  selectedProducts.forEach((product) => {
    if (product) {
      total += product.price;
    }
  });

  const handleSave = () => {
    if (name1) {
      setProduct((prevProduct) => {
        const newProduct = [...prevProduct, { 
          name1: name1, comment1: comment1, products: selectedProducts, score: 0} ];
        return newProduct;
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
      <td className="SelectList-ccc">
          {total > 0 && <div>Total Price: {total}</div>}
         </td>
      <td className="SelectList-hibbb">
        <td className="SelectList-hiaaa">
          <input className="input-name" type="text" style={{width: "100px"}} placeholder="이름" value={name1} onChange={(event) => setName1(event.target.value)} />
          <input className="input-name" type="text" placeholder="이곳에 코멘트를 적어주세요." value={comment1} onChange={(event) => setComment1(event.target.value)} maxLength={70} />
          <div className="SelectedList-jjimbutton1" onClick={() => {handleSave(); setIsClicked1(true);
          setTimeout(() => {setIsClicked1(false);}, 1000); }} style={{ animation: isClicked1? 'SelectedList-jello-horizontal1 0.9s both' : 'none' }}>
            <div style={{border: "none",
  background: "none", display: "flex", borderRadius: "6px", height: "30px", justifyContent: "center"}}>
              <img className="SelectedList-jjimimg1" src="/img/save.png" alt="모자1" width="30px" height="30px"></img>
            </div>
          </div>
        </td>
      </td>
    </table>
  );
};

export default SelectedList;