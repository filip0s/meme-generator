import {useEffect, useState} from "react";

const Meme = () => {
    const [meme, setMeme] = useState({
        randomImage: "http://i.imgflip.com/1bij.jpg",
        topText: "",
        bottomText: "",
    });

   const [allMemes, setAllMemes] = useState([]);

   useEffect(() => {
       fetch("https://api.imgflip.com/get_memes")
           .then(res => res.json())
           .then(data => setAllMemes(data.data.memes))
   },[]);

   console.log(allMemes)

    const getRandomMemeImage = () => {
        const randomMemeIdx = Math.floor(Math.random() * allMemes.length)
        const {url} = allMemes[randomMemeIdx]
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