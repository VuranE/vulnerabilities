import { useParams } from "react-router-dom";
import users from "../../data/database.json";

function AccountDetailsPage() {

    const storedUser = JSON.parse(localStorage.getItem("currentUser"));



  const { id } = useParams(); 
  let user;
  if (/^\d+$/.test(id)) {
    
    user = users.find(u => u.id === Number(id));
  } else {
   
    user = users.find(u => u.hash === id);
    if(user){
        if(storedUser.id !== user.id){
            return <h2> Nemate ovlasti za pristupiti ovoj stranici.</h2>
        }
    }
    
  }

        
  

  if (!user) {
    return <h2>Korisnik "{id}" nije pronađen.</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Detalji računa</h1>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Ime:</strong> {user.firstName} {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Uloga:</strong> {user.role}</p>
    </div>
  );
}

export default AccountDetailsPage;
