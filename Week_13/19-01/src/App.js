import styled from "styled-components";
import './App.css';

const Button = styled.button`
width: 100px;
height: 100px;

color: black;

`

const ButtonPink = styled(Button)`
background-color: pink;
`

const ButtonRed = styled(Button)`
background-color: red;

&:hover { 
  background-color: white;
  }
`

const ButtonBlue = styled(Button)`
background-color: blue;
`
const ButtonCustom = styled(Button)`
background-color: ${(props) => props.bgColor};
`
const ButtonBoolean = styled(Button)`
background-color: ${(props) => props.isRed ? 'red' : '#b00b69'};
`
const ButtonThemeDark = styled(Button)`
background-color: ${(props) => props.theme.secondary};
`

function App() {
  return (
    <div className="App">
      <Button onClick={() => console.log('Hello')}>bottone style component</Button>

      <ButtonPink onClick={() => console.log('Hello')}>bottone style component</ButtonPink>

      <ButtonRed onClick={() => console.log('Hello')}>bottone style component</ButtonRed>

      <ButtonCustom bgColor='#b00b69'>bottone style component</ButtonCustom>

      <ButtonBoolean isRed={false}>bottone style component</ButtonBoolean>

      <ButtonThemeDark>bottone style component</ButtonThemeDark>
    </div>
  );
}

export default App;
