import "../style/navbar.scss"
const Navbar = () => {
    return (
        <nav className="container navbar">
            <div className="logo">
                <img src={ require("../images/BEAR LOGO.png") } />
            </div>
            <div className="links">
                <a href="#">Home</a>
                <a href="#Services">Services</a>
                <a href="#Work">Work</a>
                <a href="#About">About us</a>
                <a href="#Blog">Blog</a>

            </div>
        </nav>
    )
}
export default Navbar