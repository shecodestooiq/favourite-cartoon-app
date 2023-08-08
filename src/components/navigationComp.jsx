import { Link } from "react-router-dom";

function NavigationComp() {
    return (<div className="nav-bar">
        <h1>Animated Series</h1>
        <ul>
            <Link to="/home"> Home </Link>
            <Link to="/about"> About</Link>
        </ul>


    </div>)
}

export default NavigationComp;