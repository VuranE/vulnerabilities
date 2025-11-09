import { useParams } from "react-router-dom";
import { useState } from "react";
import database from "../../data/database.json";
import rolesData from "../../data/actionPermissions.json";
import BackButton from "../../components/BackButton/BackButton";

function RolePage() {

    

  const { role } = useParams(); 
  
  const [idToDelete, setIdToDelete] = useState('');
  const [users, setUsers] = useState(database);
  const [newUsername, setNewUsername] = useState('');

  const storedUser = JSON.parse(localStorage.getItem("currentUser"));

  const allowed = JSON.parse(localStorage.getItem("brokenAccessAllowed"));
  
  console.log(allowed);

  const curUser = users.find(u => u.id === Number(storedUser.id));
  if(!allowed){
    if(curUser.role !== role){
     return <> <h2> Nemate ovlasti za pristupiti ovoj stranici.</h2> <BackButton /></>
  }
  } else {
    if(role !== "user" && role !== "admin"){
      return <> <h2> Ne postoji ta uloga.</h2> <BackButton /></>
    }
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
    <div className="comp">
        {role === "admin" && (
        <>
          <div>
            <label>
              ID korisnika za obrisati:
              <input
                type="text"
                value={idToDelete}
                onChange={handleInputChange}
                
              />
            </label>
            <button
              onClick={handleDelete}
              
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
      <h1>Promijeni username</h1>
      
      <div><strong>Ime:</strong> {curUser.firstName} {curUser.lastName}</div>
      <div><strong>Username:</strong> {curUser.username}</div>
      <div className="xssInput"><label>
              Novi username 
              <input
                type="text"
                value={newUsername}
                onChange={handleNameChange}
               
              />
            </label> 
            <button
              onClick={handleUsernameChange}
              
            >
              Promijeni username
            </button>
        </div>
      </>)}

      <BackButton />
    </div>
  );
}

export default RolePage;
