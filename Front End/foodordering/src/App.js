// import logo from './logo.svg';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import { darkTheme } from './Theme/DarkTheme';
import Home from './component/Home/Home';

function App() {
  return (
    
     <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
       <NavBar/>

       <Home />
    
     </ThemeProvider>
  );
}

export default App;
