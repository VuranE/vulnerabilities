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




    return(<div className="comp">
    <div className="opis">
        Ova komponenta prikazuje lošu kontrolu pristupa. Na iduća dva linka korisnik može pristupiti svojim informacijama koristeći svoj account id ili svoju ulogu. 
        Kako bi se izbjegla potreba za loginom, korisnik je defaultno prijavljen u aplikaciju kao "Mate Matika", role mu je "user", a account ID 123. Mijenjanjem ID parametra na bliske brojeve prijavljeni korisnik može pristupiti informacijama o drugim korisnicima. 
        Mijenjanjem parametra sa user na admin omogućen mu je pristup administratorskim dozvolama. Implementirana je jednostavna demonstracija brisanja usera (napomena: brisanje usera nije trajno te će refresh stranice ponovno postaviti sve usere).
    </div>
    <div className="allow"><strong>Omogućen Broken Access napad</strong><input type="checkbox"  onClick={() => {setAllowed(!allowed)}}></input></div>
    {allowed && (<><Link to="/account-details/123" >My account details</Link>
    <Link to="/user/actions" state={{ allowed: true }} >My role actions</Link></>)}


    {!allowed && (<><Link to="/account-details/a8f3c2b1e9">My account details</Link> <Link to="/user/actions" state={{ allowed: false }} >My role actions</Link></>)}



    </div>);
}
export default BrokenAccessComponent;

