import { useContext } from "react";
import { SaveItemContext } from "../../contexts/SaveItem";

const Favorites = () => {
  const { users, setUsers } = useContext(SaveItemContext);

  const handleReset1 = () => {
    setUsers([]);
  };

  return (
    <div>
      <button onClick={handleReset1}>Reset</button>
      <h2>찜 목록</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.id} {user.gender_field} {user.part} {user.color} {user.season} {user.brand} {user.price} {user.tag}</p>
          <img src={process.env.PUBLIC_URL + user.image} alt={user.name} style={{ width: "100px", height: "100px" }}/>
          <a href={user.link} target="_blank" rel="noopener noreferrer">{user.name}</a>
        </div>
      ))}
    </div>
  );
};

export default Favorites;