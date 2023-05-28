import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  AppContainer,
  ScoreContainer,
  GameContainer,
  ScoreCard,
  CustomScorePara,
  ScoreHeading,
  CustomGameImagesList,
  ResultContainer,
  Container,
  YouHeading,
  CustomImage,
  ResultText,
  PlayButtonContainer,
  PlayButton,
  ResultImagesContainer,
  MainHeading,
  RulesView,
  PopUpView,
  PopUpImage,
} from './StyledComponents'

import PlayingCards from '../GameCard'

import './index.css'

class Game extends Component {
  state = {
    score: 0,
    isGameEnd: false,
    yourImage: '',
    opponentImage: '',
    resultText: '',
  }

  getResult = id => {
    const {choicesList} = this.props

    const randomNumber = Math.floor(Math.random() * 3)

    const opponentId = choicesList[randomNumber].id
    const opponentImageUrl = choicesList[randomNumber].imageUrl
    const yourImageList = choicesList.filter(item => item.id === id)
    const yourImageUrl = yourImageList[0].imageUrl

    console.log(yourImageUrl)

    if (id === opponentId) {
      this.setState({
        isGameEnd: true,
        opponentImage: opponentImageUrl,
        yourImage: yourImageUrl,
        resultText: 'IT IS DRAW',
      })
    } else if (
      (id === 'ROCK' && opponentId === 'SCISSORS') ||
      (id === 'SCISSORS' && opponentId === 'PAPER') ||
      (id === 'PAPER' && opponentId === 'ROCK')
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isGameEnd: true,
        opponentImage: opponentImageUrl,
        yourImage: yourImageUrl,
        resultText: 'YOU WON',
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        isGameEnd: true,
        opponentImage: opponentImageUrl,
        yourImage: yourImageUrl,
        resultText: 'YOU LOSE',
      }))
    }
  }

  renderScoreCard = () => {
    const {score} = this.state

    return (
      <ScoreContainer>
        <MainHeading>
          Rock <br />
          Paper <br />
          Scissors
        </MainHeading>
        <ScoreCard>
          <CustomScorePara>Score</CustomScorePara>
          <ScoreHeading>{score}</ScoreHeading>
        </ScoreCard>
      </ScoreContainer>
    )
  }

  renderGame = () => {
    const {choicesList} = this.props
    return (
      <GameContainer>
        {this.renderScoreCard()}
        <CustomGameImagesList>
          {choicesList.map(image => (
            <PlayingCards
              key={image.id}
              imageDetails={image}
              getResult={this.getResult}
            />
          ))}
        </CustomGameImagesList>
        <RulesView>
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                RULES
              </button>
            }
          >
            {close => (
              <PopUpView>
                <button
                  type="button"
                  className="trigger-button-close"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopUpView>
            )}
          </Popup>
        </RulesView>
      </GameContainer>
    )
  }

  renderResultCard = () => {
    const {resultText, yourImage, opponentImage} = this.state

    return (
      <ResultContainer>
        {this.renderScoreCard()}
        <ResultImagesContainer>
          <Container>
            <YouHeading>YOU</YouHeading>
            <CustomImage src={yourImage} alt="your choice" />
          </Container>
          <Container>
            <YouHeading>OPPONENT</YouHeading>
            <CustomImage src={opponentImage} alt="opponent choice" />
          </Container>
        </ResultImagesContainer>
        <ResultText>{resultText}</ResultText>
        <PlayButtonContainer>
          <PlayButton onClick={this.getGameAgain}>PLAY AGAIN</PlayButton>
        </PlayButtonContainer>
      </ResultContainer>
    )
  }

  getGameAgain = () => {
    this.setState({isGameEnd: false, yourImage: '', opponentImage: ''})
  }

  render() {
    const {isGameEnd} = this.state
    return (
      <AppContainer>
        {isGameEnd ? this.renderResultCard() : this.renderGame()}
      </AppContainer>
    )
  }
}

export default Game
