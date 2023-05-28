import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  min-height: 100vh;
  background-color: #223a5f;

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
`

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 10px;
`

export const CustomUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0px;
`

export const MainHeading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Bree Serif';
  color: #ffffff;
`
export const ScoreCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 20px;
`

export const CustomScorePara = styled.p`
  font-size: 23px;
  font-weight: bold;
  font-family: 'Bree Serif';
  color: #223a5f;
`

export const ScoreHeading = styled.p`
  font-size: 28px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #223a5f;
`
export const CustomGameImagesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0px;
  align-self: center;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const ResultImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  align-self: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const YouHeading = styled.h1`
  font-size: 23px;
  font-weight: bold;
  font-family: 'Bree Serif';
  color: #ffffff;
`

export const CustomImage = styled.img`
  height: 100px;
  width: 100px;
`

export const ResultText = styled.p`
  font-size: 25px;
  font-weight: bold;
  font-family: 'Bree Serif';
  color: #ffffff;
  text-align: center;
`

export const PlayButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  border: none;
  border-radius: 7px;
  padding: 10px;
  width: 150px;
`
export const PlayButtonContainer = styled.div`
  text-align: center;
`

export const RulesButtonContainer = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`

export const RulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`
export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vw;
  justify-content: space-between;
  padding: 10px;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`
export const PopUpImage = styled.img`
  width: 100%;
  height: 90%;
  margin-top: auto;
`
