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

    return(<div className="comp">
    
    <div className="opis">Ova sekcija aplikacije omogućava testiranje XSS napada. Napad se može omogućiti ili onemogućiti klikom na checkbox niže.
    Kada je omogućen xss napad, u input field moguće je unijeti script tag čiji će se sadržaj izvršiti pritiskom na gumb 'Pošalji'. Kada je napad onemogućen, unos se sanitizira i skripta se ne izvodi. Za potrebe testiranja, budući da nije implemenitran login, hardkodiran je testni cookie kojem se može pristupiti putem document.cookie</div>
    <div className="allow">
        <strong>Omogućen XSS napad</strong><input type="checkbox"  onClick={() => {setAllowed(!allowed)}}></input>
    
    </div>
    
    <div className="xssInput"> Bok, kako se zoveš? <input
                type="text"
                value={name}
                onChange={handleInputChange}
                style={{ marginLeft: "10px" }}
              /> <button onClick={() => { handleName()}}>Pošalji</button></div>
    
    
    <div id="output"> </div>
    
    </div>);
}
export default XSSComponent;
