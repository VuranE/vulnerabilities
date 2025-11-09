import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

function BrokenAccessComponent(){

    const [allowed, setAllowed] = useState(false);


    useEffect(() => {
        const currentUser = {
        id: 123,
        hash: "a8f3c2b1e9",
        role: "admin"
    };

    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }, []);
    
    useEffect(() => {
    
    localStorage.setItem("brokenAccessAllowed", JSON.stringify(allowed));
  }, [allowed]);




    return(<>
    <div>
        Ova komponenta prikazuje brokenAccess. Na iduća dva linka korisnik može pristupiti svojim informacijama koristeći svoj account id ili svoju ulogu. 
        Korisnik je defaultno prijavljen kao Marko Markić čiji je accound ID 123. Mijenjanjem idja na par brojeva prije i poslije može pristupiti informacijama o drugim korisnicima. 
        Mijenjanjem parametra sa user na admin omogućeno mu je pristup informacijama o računu administratora.
    </div>
    <span>Omogućen Broken Access napad</span><input type="checkbox"  onClick={() => {setAllowed(!allowed)}}></input>
    {allowed && (<><Link to="/account-details/123" >My account details</Link>
    <Link to="/user/actions" state={{ allowed: true }} >My role actions</Link></>)}


    {!allowed && (<><Link to="/account-details/a8f3c2b1e9">My account details</Link> <Link to="/user/actions" state={{ allowed: false }} >My role actions</Link></>)}



    </>);
}
export default BrokenAccessComponent;

