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
        <main className="meme">
            <div className="meme--form" >
                <input
                    className="meme--form--input"
                    placeholder="Top text"
                    type="text"
                />
                <input
                    className="meme--form--input"
                    placeholder="Bottom text"
                    type="text"
                />
                <button
                    className="meme--form--button"
                    onClick={getRandomMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
            <img className="meme--image" src={meme.randomImage} alt="Meme"/>

        </main>
    )
}

export default Meme;