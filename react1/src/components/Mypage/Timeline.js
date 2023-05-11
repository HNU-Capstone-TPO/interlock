import { useContext, useState, useEffect } from "react";
import { SaveContext } from "../../contexts/SaveContext";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Timeline = () => {
  const { save, setSave } = useContext(SaveContext);
  const [submitFlag, setSubmitFlag] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate();

  const handleReset = () => {
    setSave([]);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSubmitFlag(true);
  };

  const handleDeleteClick = (index) => {
    setSave((prevSave) => {
      const newSave = [...prevSave];
      newSave.splice(index, 1); // 해당 인덱스의 아이템을 삭제
      localStorage.setItem("save", JSON.stringify(newSave)); // 로컬 스토리지에 저장
      return newSave;
    });
  };

  useEffect(() => {
    if (submitFlag && selectedItem !== null) {
      const formData = new FormData();
      formData.append("query", selectedItem);
      axios
        .post("http://127.0.0.1:8000/search/", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          navigate('/result', {
            state: { users: response.data.users },
          });
        })
        .catch((error) => {
          console.error(error);
        });
      setSubmitFlag(false);
    }
  }, [submitFlag, selectedItem, navigate]);

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
      <h2>타임라인페이지</h2>
      {save.map((item, index) => (
        <div key={index}>
          {item.map((subItem, subIndex) => (
            <div key={subIndex}>
              <p>{subItem}</p>
            </div>
          ))}
      <button onClick={() => handleItemClick(item)}>Send to Server</button>
      <button onClick={() => handleDeleteClick(index)}>X</button> {/* 삭제 버튼 추가 */}
        </div>
      ))}
    </div>
  );
};

export default Timeline;