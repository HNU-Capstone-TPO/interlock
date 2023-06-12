import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

const gender = [
    "남성", "여성", "남자", "여자", "공용", "커플"
]
const where = [
     "결혼식", "면접", "장례식",  "데이트", "소개팅", "미팅", "데일리", "일상", "기념일", "여행", "비즈니스", "학교", "캠퍼스", "공대", "바닷가", "피서", "산", "아웃도어", "산책", "운동", "활동", "소풍", "나들이", "꽃구경"
]
const color = [
    "빨강", "주황", "노랑", "초록", "파랑", "보라", "분홍", "갈색", "검정", "흰색", "아이보리", "회색"
]
const season = [
    "봄", "여름", "가을", "겨울"
]
const fit = [
    "레귤러핏", "루즈핏", "오버핏", "세미오버핏", "오버사이즈", "슬림핏", "스트레이트핏", "와이드핏", "세미와이드핏", "테이퍼드핏"
]
const part = [
    "상의", "하의", "신발", "아우터", "모자", "포인트"
]
const casecase = [
    "패딩", "반팔"
]
const helpcall = [
    "성별이 무엇입니까?",
    "어떤 상황에서 입으실 건가요?",
    "어떤 색상의 옷을 원하시나요?",
    "어떤 부위의 옷을 원하시나요?",
    "어떤 계절에 입으실건가요?",
    "어떤 핏을 원하시나요?",
]

const helpList = [
    "만나는 장소가 어디인가요?",
    "면접을 보는 곳에 공지를 확인하시고 스타일을 지정해주시면 좋아요.",
    "결혼식에선 하얀색 옷은 입지않는게 좋습니다.",
    "장례식에선 어두운 톤으로 입는게 좋아요",
]



const Helper = ({tags}) => {
    const [check, setCheck] = useState(true);
    const [check1, setCheck1] = useState(true);
    const [already, setAlready] = useState([0]);
    const [number, setNumber]=useState(0);
    
    const [helpMessage, setHelpMessage] = useState();

    const next = () => {
        if(already.length===6){
            return;
        }
        let num =(Math.floor(Math.random() * 6));
        while (already.includes(num)) {
            num = Math.floor(Math.random() * 6);
        }
        setNumber(num);
        setAlready(prev => [...prev, num]);
    }

    useEffect(() => {
        if (number===0) { //성별
            console.log(number)
            setHelpMessage(helpcall[0]);//성별
            if(gender.some(a => tags.includes(a))){
                next();
            }
        }else if (number===1) { //상황
            console.log(number)
            setHelpMessage(helpcall[1]);//상황
            if((tags.includes(color[9])||tags.includes(color[10]))&&tags.includes(where[0])){//결혼식
                setHelpMessage(helpList[2])
                setTimeout(() => {next();}, 3000);
            }
            else if(tags.includes(where[1])){//면접
                setHelpMessage(helpList[1])
                setTimeout(() => {next();}, 3000);
            }
            else if(tags.includes(where[2])){//장례식
                setHelpMessage(helpList[3])
                setTimeout(() => {next();}, 3000);
            }
            else if(where.some(a => tags.includes(a))){
                next();
            }
        }
        else if (number===2) {  //색깔
            console.log(number)
            setHelpMessage(helpcall[2]);//상황
            if((tags.includes(color[9])||tags.includes(color[10]))&&tags.includes(where[0])){
                setHelpMessage(helpList[2])
                setTimeout(() => {next();}, 3000);
            }
            else if(color.some(a => tags.includes(a))){
                next();
            }
        }
        else if (number===3) {  //  부위
            console.log(number)
            setHelpMessage(helpcall[3]);
            if(part.some(a => tags.includes(a))){
                next();
            }
        }
        else if (number===4) {  //  계절
            console.log(number)
            setHelpMessage(helpcall[4]);
            if(season.some(a => tags.includes(a))){
                next();
            }
        }
        else if (number===5) {  //  
            console.log(number)
            setHelpMessage(helpcall[5]);
            if(fit.some(a => tags.includes(a))){
                next();
            }
        }  
        
    if(already.length===6&&check){
         setTimeout(() => {setHelpMessage("")}, 5000);
         setCheck(false);
    }
    //setTimeout(() => {setHelpMessage("")}, 10000);
    }, [tags, already]);

    return (
        <div>
            <Box 
            sx={{
        width: '480px',
        height: 200,
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, #F2F2F2 0%, white 50%, #F2F2F2 100%)'
      }}>
                <h3 >{helpMessage}</h3>
            </Box>
        </div>
    )
}

export default Helper;