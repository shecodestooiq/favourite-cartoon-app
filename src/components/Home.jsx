import CartoonsList from "./CartoonsList";
import headerImg from '../assets/images/cartoons-wallpaper.jpeg'
const Home = ()=>{
    return(
        <>
            <div className="container">
                <div className="imgContainer"><img src={headerImg} alt="header img"></img></div>
                <div className="overlay"></div>
                <div className="centered">
                    <h1>My Favorite Cartoons</h1>
                    <h4>1980 - 2000</h4>
                </div>
            </div>
            <CartoonsList/>
        </>
    );
    
}
export default Home;