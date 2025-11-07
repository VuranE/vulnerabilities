import BrokenAccessComponent from "../../components/BrokenAccessComponent/BrokenAccessComponent";
import XSSComponent from "../../components/XSSComponent/XSSComponent";

function HomePage(){

    return(<>
        <h1>XSS NAPAD</h1>
        <XSSComponent/>

        <h1>BROKEN ACCESS CONTROL NAPAD</h1>
        <BrokenAccessComponent />
    </>)
}
export default HomePage;