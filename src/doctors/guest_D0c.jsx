import Doctor from "./doctor";
import Navbar from "../Home/navbar";
import styles from "./doc.module.css";
import { Link } from "react-router-dom";

function Guestdoc() {
    return (
        <div>
            <Navbar />
            <Doctor />
        </div>
    );
}        
export default Guestdoc;