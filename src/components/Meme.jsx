const Meme = () => {
  return (
      <div className="meme">
          <form className="meme--form" action="">
              <input type="text"/>
              <input type="text"/>
              <button className="meme--form--button">
                  Get a new meme image
              </button>
          </form>
      </div>
  )
}

export default Meme;