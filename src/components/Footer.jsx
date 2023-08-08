import { Link } from "react-router-dom";

function Footer() {
    return (<div className="footer-nav">
        <h1>Animated Series</h1>
        <ul>
            <Link to="/home"> Home </Link>
            <Link to="/about"> About</Link>
        </ul>

    </div>)
}

export default Footer;