import Main from './components/Main';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: "Red Hat Text", system-ui;
    font-weight: 400;
    font-style: normal;
    background-color: hsl(20, 50%, 98%);
  }
`;

function App() {
  return (
    <>
      <Reset></Reset>
      <GlobalStyle/>
      <Main></Main>
    </>
    
  );
}

export default App;
