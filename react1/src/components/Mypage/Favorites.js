import { useContext } from "react";
import { SaveItemContext } from "../../contexts/SaveItem";
import "./Favorites.css";

const Favorites = () => {
  const { users, setUsers } = useContext(SaveItemContext);

  const handleReset1 = () => {
    setUsers([]);
  };

  const handleDeleteClick = (id) => {
    setUsers((prevUsers) => {
      const newUsers = prevUsers.filter((user) => user.id !== id); // id로 비교해서 같은 id인것들을 제거
      localStorage.setItem("users", JSON.stringify(newUsers)); // 로컬 스토리지에 저장
      return newUsers;
    });
  };


  return (
    <table className="table-wrap">
      <h2 className="table-title">찜 목록</h2>
      <table className="my-div">
        {users.map((user) => (
          <td key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.brand} {user.price} {user.tag}</p>
            <button onClick={() => handleDeleteClick(user.id)}>X</button>
          </td>
        ))}
      </table>
    </table>
  );
};

export default Favorites;