const Meme = () => {
    return (
        <main className="meme">
            <form className="meme--form" action="">
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
            </form>
        </main>
    )
}

export default Meme;