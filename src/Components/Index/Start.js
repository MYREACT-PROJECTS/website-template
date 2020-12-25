import React , {component} from  'react';
import About from '../About/Index';
import Contact from '../Contact/Index';
import Footer from '../Footer/Index';
import Home from '../Home/Index';
import Portfolio from '../Portfolio/Index';
import Profile from '../Profile/Index';
import SocialMedia from '../SocilaMedia/Index';
import Work from '../Work/Index';


class Start extends React.Component {
 
  render (){
  return(
    <div>
    <Home/>
    <Portfolio/>
    <Work/>
    <Profile/>
    <About/>
    <SocialMedia/>
    <Footer/>
    </div>
  );
}
}

export default Start;
