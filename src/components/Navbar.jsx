

import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(
    <div className="navbar">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/about" className="navbar-item">About</Link>
    </div>);
    
}
export default Navbar;