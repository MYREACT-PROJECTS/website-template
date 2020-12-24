import React from 'react';
import { Span } from '../Portfolio/Desgin';
import { Icon, Smedia, Social, SocialDesc, SpanInfo, SSpan } from './Desgin2';
//import  './Desgin.css'
import axios from 'axios'



class SocialMedia extends React.Component{
state= {
    social:[]
}

componentDidMount(){
    axios.get('js/data.json').then(res=>{this.setState({social : res.data.social})})
}



render() { 

    const {social}=this.state
    const socialList= social.map((socialItem)=>{
        return(
           
            <Social   key={socialItem.id}  item ={socialItem.id}>
                <Icon className={socialItem.icon}></Icon>
                <SocialDesc>
                    <SSpan> {socialItem.title}</SSpan>
                    <SpanInfo>{socialItem.body}</SpanInfo>
                </SocialDesc>
            </Social>
            
           
       

        )
    }

    )

return(
  <Smedia>
      {socialList}
  </Smedia>
   
)

}
}

export default SocialMedia;