import { useParams } from "react-router-dom";
import { useState } from "react";
import database from "../../data/database.json";
import rolesData from "../../data/actionPermissions.json";
import { useLocation } from "react-router-dom";

function RolePage() {

    const location = useLocation();

  const { role } = useParams(); 
  const roleInfo = rolesData.find(r => r.role === role);
  const [idToDelete, setIdToDelete] = useState('');
  const [users, setUsers] = useState(database);
  const [newUsername, setNewUsername] = useState('');

  const storedUser = JSON.parse(localStorage.getItem("currentUser"));

  const allowed = JSON.parse(localStorage.getItem("brokenAccessAllowed"));
  
  console.log(allowed);

  const curUser = users.find(u => u.id === Number(storedUser.id));
  if(!allowed){
    if(curUser.role !== role){
     return <h2> Nemate ovlasti za pristupiti ovoj stranici.</h2>
  }
  }
  


  if (!roleInfo) {
    return <h2>Uloga "{role}" ne postoji.</h2>;
  }

  
  function handleDelete() {
    const id = parseInt(idToDelete);
    if (isNaN(id)) {
      alert("Unesi ispravan ID!");
      return;
    }

    setUsers(prev => {
      const newUsers = prev.filter(user => user.id !== id);
      if (newUsers.length === prev.length) {
        alert("Korisnik s tim ID-em ne postoji!");
      }
      return newUsers;
    });

    setIdToDelete("");
    
  }

  const handleInputChange = (e) => {
        setIdToDelete(e.target.value);
    };

    const handleNameChange = (e) => {
        setNewUsername(e.target.value);
    }

    function handleUsernameChange(){
        if (!newUsername.trim()) {
      alert("Unesi novi username!");
      return;
    }

    
    setUsers(prev =>
      prev.map(user =>
        user.id === curUser.id ? { ...user, username: newUsername } : user
      )
    );

   
    const updatedUser = { ...curUser, username: newUsername };
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    alert("Username uspješno promijenjen!");
    setNewUsername("");
    
    

    
    }

  return (
    <>
        {role === "admin" && (
        <>
          <div style={{ marginBottom: "20px" }}>
            <label>
              ID korisnika za obrisati:
              <input
                type="text"
                value={idToDelete}
                onChange={handleInputChange}
                style={{ marginLeft: "10px" }}
              />
            </label>
            <button
              onClick={handleDelete}
              style={{ marginLeft: "10px", cursor: "pointer" }}
            >
              Obriši korisnika
            </button>
          </div>
          <h2>Lista korisnika</h2>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>ID</th>
            <th>Korisničko ime</th>
            <th>Ime i prezime</th>
            <th>Email</th>
            <th>Status</th>
            <th>Uloga</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.email}</td>
              <td>{user.accountStatus}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
      )}

      {role === "user" && (<>
      <h1>Detalji računa</h1>
      <p><strong>ID:</strong> {curUser.id}</p>
      <p><strong>Ime:</strong> {curUser.firstName} {curUser.lastName}</p>
      <p><strong>Email:</strong> {curUser.email}</p>
      <p><strong>Username:</strong> {curUser.username}</p>
      <label>
              Novi username
              <input
                type="text"
                value={newUsername}
                onChange={handleNameChange}
                style={{ marginLeft: "10px" }}
              />
            </label>
            <button
              onClick={handleUsernameChange}
              style={{ marginLeft: "10px", cursor: "pointer" }}
            >
              Promijeni username
            </button>

      </>)}
    </>
  );
}

export default RolePage;
