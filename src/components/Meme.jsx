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

    return (
        <main>
            <div className="form">
                <input
                    className="form--input"
                    placeholder="Top text"
                    type="text"
                />
                <input
                    className="form--input"
                    placeholder="Bottom text"
                    type="text"
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
                <h2 className="meme--text top"></h2>
                <h2 className="meme--text bottom"></h2>
            </div>

        </main>
    )
}

export default Meme;