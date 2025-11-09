import { useParams } from "react-router-dom";
import users from "../../data/database.json";
import BackButton from "../../components/BackButton/BackButton";


function AccountDetailsPage() {

    const storedUser = JSON.parse(localStorage.getItem("currentUser"));

    const allowed = JSON.parse(localStorage.getItem("brokenAccessAllowed"));
  


  const { id } = useParams(); 
  let user;
  if (/^\d+$/.test(id)) {
    
    user = users.find(u => u.id === Number(id));
    if(user){
      if(!allowed){
        if(storedUser.id !== user.id){
            return <> <h2> Nemate ovlasti za pristupiti ovoj stranici.</h2> <BackButton /></>
        }
      }
        
    }
    
    
  } else {
   
    user = users.find(u => u.hash === id);
    if(user){
        if(storedUser.id !== user.id){
            return <> <h2> Nemate ovlasti za pristupiti ovoj stranici.</h2> <BackButton /></>
        }
    }
    
  }

  if(allowed){
    if (!user) {
      return <><h2>Korisnik "{id}" nije pronađen.</h2> <BackButton /></>;
    }
  } else {
    if(!user){
      return <> <h2> Nemate ovlasti za pristupiti ovoj stranici.</h2> <BackButton /></>;
    }
  }
        
  


  return (<div className="comp">
    <div>
  <h1>Detalji računa</h1>
  <table border="1" cellPadding="8" >
    <tbody>
      <tr>
        <th style={{ textAlign: "left" }}>ID</th>
        <td>{user.id}</td>
      </tr>
      <tr>
        <th style={{ textAlign: "left" }}>Ime</th>
        <td>{user.firstName} {user.lastName}</td>
      </tr>
      <tr>
        <th style={{ textAlign: "left" }}>Username</th>
        <td>{user.username}</td>
      </tr>
      <tr>
        <th style={{ textAlign: "left" }}>Email</th>
        <td>{user.email}</td>
      </tr>
      <tr>
        <th style={{ textAlign: "left" }}>Uloga</th>
        <td>{user.role}</td>
      </tr>
      <tr>
        <th style={{ textAlign: "left" }}>Datum rođenja</th>
        <td>{user.birthDate}</td>
      </tr>
      <tr>
        <th style={{ textAlign: "left" }}>Adresa</th>
        <td>{user.address}</td>
      </tr>
      <tr>
        <th style={{ textAlign: "left" }}>Status</th>
        <td>{user.accountStatus}</td>
      </tr>
      <tr>
        <th style={{ textAlign: "left" }}>Datum registracije</th>
        <td>{user.registrationDate}</td>
      </tr>
    </tbody>
  </table>
</div>

    <BackButton />
  </div>
    
  );
}

export default AccountDetailsPage;


