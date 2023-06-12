import { useEffect, useState } from 'react';

const TagRank = () => {
    const [tags, setTags] = useState([]);
    const gender = ["남성", "여성", "공용", "남자", "여자", "상의", "하의", "신발", "아우터", "모자", "포인트"];

    useEffect(() => {
      const savedTags = JSON.parse(localStorage.getItem('save')) || [];
      let flattenedTags = savedTags;
  if (savedTags.length > 0 && Array.isArray(savedTags[0])) {
    flattenedTags = savedTags.flat();
    for(var i = 0; i <flattenedTags.length; i++){
      for(var j =0; j < gender.length; j++){
        if( flattenedTags[i]===gender[j]){
          flattenedTags.splice(i, 1);
          i--;
        }
      }
    }
  }
setTags(flattenedTags);
    }, []);

    const tagFrequency = {};
    for (const tag of tags) {
      tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
    }
    const sortedTags = Object.entries(tagFrequency).sort((a, b) => b[1] - a[1]);

    return (
      <div style={{ border: "1px solid black", width: "300px", borderRadius: "5px", opacity: 0.9 }}>
        <div style={{textAlign: "center",height: '50px', fontSize: "25px", backgroundColor: 'black', color: 'white', padding: '5px', opacity: 0.9}}>
          <p>검색 랭킹</p>
        </div>
        <div style={{backgroundColor: 'white', padding: '20px'}}>
        <ul style={{ listStyleType: "none", padding: "0"  }}>
        {sortedTags.slice(0, 7).map(([tag], index) => (
            <li key={index} style={{ fontSize: '18px', marginBottom: '10px'}}>
            <span>
                {index+1}.&nbsp;
            </span>
            {tag}
        </li>
        ))}
        </ul>
        </div>
      </div>
    );
  };

export default TagRank;