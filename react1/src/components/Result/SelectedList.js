import Box from "@mui/material/Box";
import { ProductContext } from "../../contexts/Product";
import { useContext } from "react";

const SelectedList = ({ selectedProducts }) => {
  const { product, setProduct } = useContext(ProductContext);
  const category = ["상의", "하의", "신발", "모자", "아우터", "부위테스트"];

  const handleSave = () => {
    setProduct((prevProduct) => {
      const newProduct = [selectedProducts, ...prevProduct];
      return newProduct;
    });
  };

  return (
    <div>
      <Box
        sx={{
          width: 500,
          height: 200,
          border: 1,
          borderRadius: "16px",
        }}
      >
        {selectedProducts.map((product, index) =>
          product ? (
            <div key={index}>
              <p>
                {product.name} Price: {product.price}
              </p>
            </div>
          ) : null
        )}
        <button onClick={handleSave}>save</button>
      </Box>
    </div>
  );
};

export default SelectedList;