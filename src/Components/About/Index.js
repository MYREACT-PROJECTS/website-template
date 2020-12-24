import React from 'react';
import { Creative, CreativeInfo, InfoDesc, InfoDescA, InfoDir, InfoTitle, InfotitleSpan } from './desgin';


const About = ()=>{
return(
    <Creative>
    <div className="container">
        <CreativeInfo>
            <InfoTitle><InfotitleSpan>This is</InfotitleSpan> Me</InfoTitle>
            <InfoDir>Creative Director</InfoDir>
            <InfoDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoDescA href="#">explicabo</InfoDescA> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </InfoDesc>
            <InfoDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad
            </InfoDesc>
        </CreativeInfo>
    </div>
</Creative>
)

}

export default About;