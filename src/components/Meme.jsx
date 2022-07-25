const Meme = () => {
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
                <button className="meme--form--button">
                    Get a new meme image
                </button>
            </div>
        </main>
    )
}

export default Meme;