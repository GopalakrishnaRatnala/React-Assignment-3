import './index.css'

const GameItem = props => {
  const {eachImg, matchGame} = props
  const {id, thumbnailUrl} = eachImg
  const onClickMatchThumbnail = () => {
    matchGame(id)
  }
  return (
    <li>
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickMatchThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default GameItem
