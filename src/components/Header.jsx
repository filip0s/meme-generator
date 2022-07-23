import trollFace from "../assets/icons/troll-face.svg"

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img className="logo--image" src={trollFace} alt="Troll Face"/>
                <span className="logo--text">Meme generator</span>
            </div>
            <span>
                React Course - Project 3
            </span>
        </header>
    )
}

export default Header;