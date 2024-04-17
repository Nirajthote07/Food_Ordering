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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action';

function App() {

   const dispatch = useDispatch();
   const jwt = localStorage.getItem('jwt');
   const {auth} = useSelector(store => store);


   useEffect(() =>{
      dispatch(getUser(auth.jwt || jwt));
   },[auth.jwt])




  return (
    
     <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
        <CustomerRouter />

     </ThemeProvider>
  );
}

export default App;
