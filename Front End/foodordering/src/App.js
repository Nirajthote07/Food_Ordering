// import logo from './logo.svg';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import { darkTheme } from './Theme/DarkTheme';
//import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';

function App() {
  return (
    
     <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
       <NavBar/>

       {/* <Home /> */}
       <RestaurantDetails/>
    
     </ThemeProvider>
  );
}

export default App;
