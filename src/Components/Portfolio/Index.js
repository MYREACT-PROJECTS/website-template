import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import { Imagewrapper, Overlay, OverlaySpan, PortfolioItem, PortfolioList, PortfolioSection, PortfolioTitle, Image } from './Desgin';

const Portfolio = ()=> {


    const [images,setImages] = useState([])
 
     
      useEffect( ()=>{
        
                                
      
      axios.get('js/data.json').then(res =>{setImages(res.data.portfolio)})
      },[ ])
             
          
      const portfolioImages = images.map( (res) =>{
         return(
            <Imagewrapper key = {res.id} >
            <Image src={res.image} alt=""/>
            <Overlay>
            <OverlaySpan>
                  
            </OverlaySpan>
            </Overlay>
        </Imagewrapper>
              



         
 
         )
        
     })
    

    return(
        <PortfolioSection>
        <PortfolioTitle><span>My</span> Portfolio</PortfolioTitle>
        <PortfolioList>
            <PortfolioItem active>All</PortfolioItem>
            <PortfolioItem>HTML</PortfolioItem>
            <PortfolioItem>Photoshop</PortfolioItem>
            <PortfolioItem>Wordpress</PortfolioItem>
            <PortfolioItem>Mobile</PortfolioItem>
           

        </PortfolioList>
        
        <div class="box">
           
        {portfolioImages}
       

            
        </div>
        
    </PortfolioSection>
    )



   }
         
    

   
    
  

export default Portfolio;