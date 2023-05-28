import './index.css'

const PlayingCards = props => {
  const {imageDetails, getResult} = props
  const {id, imageUrl} = imageDetails

  function onTouchCard() {
    getResult(id)
  }

  console.log(` ${id.toLowerCase()}Button `)

  return (
    <li className="list-image">
      <button
        type="button"
        onClick={onTouchCard}
        className="list-button"
        data-testid={` ${id.toLowerCase()}Button `}
      >
        <img src={imageUrl} alt={id} className="image" />
      </button>
    </li>
  )
}

export default PlayingCards
