import trollFace from "../assets/icons/troll-face.svg"

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img className="logo--image" src={trollFace} alt="Troll Face"/>
                <span className="logo--title">Meme generator</span>
            </div>
            <span className="project">
                React Course - Project 3
            </span>
        </header>
    )
}

export default Header;