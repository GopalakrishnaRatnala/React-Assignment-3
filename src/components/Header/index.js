import './index.css'

const Header = props => {
  const {score, timer} = props
  return (
    <nav>
      <ul className="nav-container">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="match-game-logo"
          />
        </li>
        <li>
          <div className="score-timer-container">
            <p className="score-text">
              Score:<span>{score}</span>
            </p>
            <div className="timer-img-and-timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-img"
              />
              <p className="timer-text">{timer} sec</p>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Header
