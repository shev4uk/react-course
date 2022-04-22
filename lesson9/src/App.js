import './App.css';
import Item from './components/Item'
import Counter from './components/Counter'
import Todos from './components/todos/Todos'
import Container from '@mui/material/Container';
import { green } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: green
  }
})

function App() {
  const value = 4;
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        {/* {value}
        <Item value={8} count={0}/>
        <Counter /> */}
        <Todos />
      </Container>
    </ThemeProvider>
  );
}

export default App;
