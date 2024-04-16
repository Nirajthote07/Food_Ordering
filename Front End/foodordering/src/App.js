// import logo from './logo.svg';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import { darkTheme } from './Theme/DarkTheme';
//import Home from './component/Home/Home';
//import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import CustomerRouter from './Routers/CustomerRouter';

function App() {
  return (
    
     <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
       {/* <NavBar/> */}

       {/* <Home /> */}
       {/* <RestaurantDetails/> */}
        {/* <Cart/>     */}
        {/* <Profile /> */}
        <CustomerRouter />
     </ThemeProvider>
  );
}

export default App;
