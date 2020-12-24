import React , {component} from  'react';
import logo from './logo.svg';
import './App.css';
import Start from './Components/Index/Start';
import {BrowserRouter , Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Index';
import Profile from './Components/Profile/Index';
import Work from './Components/Work/Index';

class App extends React.Component {
 
  render (){
  return(
    <BrowserRouter>
      <Navbar/>
      <Route exact path = '/' component={Start}></Route>
      <Route exact path = '/Contact' component={Contact}></Route>
      <Route exact path = '/Profile' component={Profile}></Route>
      <Route exact path = '/Work' component={Work}></Route>


      
      </BrowserRouter>
  );
}
}

export default App;
