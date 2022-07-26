import memesData from "../assets/data/memesData";
import {useState} from "react";

const Meme = () => {
    const [meme, setMeme] = useState({
        randomImage: "http://i.imgflip.com/1bij.jpg",
        topText: "",
        bottomText: "",
    });


    const getRandomMemeImage = () => {
        const memeArray = memesData.data.memes;
        const randomMemeIdx = Math.floor(Math.random() * memeArray.length)
        const {url} = memeArray[randomMemeIdx]
        setMeme((prevState) => {
            return {
                ...prevState,
                randomImage: url
            }
        })
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setMeme((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input
                    className="form--input"
                    placeholder="Top text"
                    type="text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    className="form--input"
                    placeholder="Bottom text"
                    type="text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className="form--button"
                    onClick={getRandomMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage} alt="Meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme;