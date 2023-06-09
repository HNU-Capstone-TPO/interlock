import {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import { useContext } from "react";
import { SaveContext } from "../../contexts/SaveContext";



const Input = ({setTags, onSubmit, tags, button, setButton}) => {
    const [input, setInput] = useState('');
    const [start, setStart] = useState(0);
    const [check, setCheck] = useState(false); 
    const [isDisabled, setIsDisabled] = useState(false);
    //const [button, setButton] = useState('');
    const [btnActive, setBtnActive] = useState();
    const {getSave} = useContext(SaveContext);


    var newTag = null;
    let btn = ['Newbie', 'Expert', 'Search'];

    const toggleActive = (e) => {
        setBtnActive((prev) => {
          setButton(btn[e.target.value][0]);
          return e.target.value;
        });
      };
      useEffect(() => {
        console.log(`Button: ${btnActive}`);
      }, [btnActive]);
    /*
    const removeTag = (tag) => {
      setTags(prevTags => prevTags.filter((t) => t !== tag))
    }
    */
    useEffect(()=>{
      //성별 감지->버튼 활성화
      if(input.includes("공용")||input.includes("남자")||input.includes("여자")){
        setCheck(true);
        setIsDisabled(true);
        console.log("감지");
        console.log(btnActive);
      }
      /*입력 수정
      for(let tag of tags){
        if(!input.includes(tag)&&tags.length!==0){
          removeTag(tag);
          console.log("태그", tag);
          console.log("태그들", tags);
        }
      }
      */
    },[input])

    const handleOnKeyPress = async (e) => {
      if (e.key === "Enter" || e.key === " ") {
        console.log("before:" + start);
        newTag = input.substr(start, input.length).trim();
        if (newTag === "") {
          return;
        }
        await setTags([...tags, newTag]);
        
        setStart(input.length);
        
        /*if (callback) {
          callback();
        }*/
      }
    };
      
    const handleSubmit = async (e) => {
      await handleOnKeyPress({ key: " " });
      onSubmit();
      getSave();
    };

    return (
        <div className="container-box" style={{ width: "100%",  borderRadius: "10px", backgroundColor: "white" }}>
      <div
        className="textfield-wrapper"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="btn-container">
          {btn.map((item, idx) => {
            return (
            <button
              key={idx}
              value={idx}
              className={"btnst" + (idx === Number(btnActive) ? " active" : "")}
              onClick={toggleActive}
            >
              {item}
            </button>
            );
          })}
        </div>

        <textarea
          style={{
            width: "90%",
            border: "none",
            outline: "none",
            resize: "none",
          }}
          placeholder="입력"
          rows={20}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleOnKeyPress(e, e.target.value)}
        ></textarea>
        <Button
          style={{ width: "100px", height: "40px", fontSize: "18px", marginLeft: "auto", marginRight: "25px", marginBottom: "15px"}}
          disabled={!isDisabled}
          variant="contained"
          onClick={handleSubmit}
        >
          검색
        </Button>
      </div>
      </div>
    );
}
export default Input;