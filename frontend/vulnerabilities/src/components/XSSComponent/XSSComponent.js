import { useState, useEffect } from "react";
import DOMPurify from "dompurify";

function XSSComponent(){

    const [allowed, setAllowed] = useState(false);
    const [name, setName] = useState('');
    
    useEffect(() => {
        document.cookie = "testCookie=1; path=/";
    }, []);

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    const handleName = () =>{
        
        if(allowed){
            //izdvajam scriptu koja se treba pokrenuti kako bi se simulirao xss napad
            const scriptContent = name.match(/<script>([\s\S]*?)<\/script>/)
            if (scriptContent && scriptContent[1]) {
                try{
                    eval(scriptContent[1]) //ako postoji skripta ona ce se izvesti            
                } catch(e){ }          
                
            }
            document.getElementById('output').innerHTML = "Drago nam je da si tu, " + name 
        } else {
            const inputParam = DOMPurify.sanitize(name);
            document.getElementById('output').innerHTML = "Drago nam je da si tu, " + inputParam 
                            
        }                
                                
    }

    return(<>
    <h1>OPIS FUNKCIONALNOSTI</h1>
    <p>Ova sekcija aplikacije omogućava testiranje XSS napada. Napad se može omogućiti ili onemogućiti klikom na checkbox niže.</p>
    <span>Omogućen XSS napad</span><input type="checkbox"  onClick={() => {setAllowed(!allowed)}}></input>
    
    <div>Kada je omogućen xss napad, u input field moguće je unijeti script tag čiji će se sadržaj izvršiti pritiskom na gumb 'Pošalji'. Kada je napad onemogućen, unos se sanitira i skripta se ne izvodi. Za potrebe testiranja postavljen je testni cookie.</div>

    <div> Bok, kako se zoveš? <input type="text"  onChange={handleInputChange}></input> <button onClick={() => { handleName()}}>Pošalji</button></div>
    
    
    <div id="output"> </div>
    
    </>);
}
export default XSSComponent;
