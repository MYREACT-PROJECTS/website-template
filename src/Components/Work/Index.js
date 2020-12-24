import React from 'react';
import { Span } from '../Home/desgin';
import { Line, PartDesc, PartTitle, WorkPart, WorkSecton, WorkTitle,Icon } from './desgin';
import axios from 'axios';

class Work extends React.Component{
state= {
    works:[]
}
componentDidMount(){
    axios.get('js/data.json').then(res=>{this.setState({works : res.data.works})})
    
}

    render(){
        const {works} = this.state;
        const workList = works.map( (workItem)=>{
            return(
                <WorkPart first ={workItem.id} key= {workItem.id}>
                <Icon className={workItem.icon_name}></Icon>
                <PartTitle>{workItem.title}</PartTitle>
                <Line/>
                <PartDesc>
                    {workItem.body}
                </PartDesc>
            </WorkPart>

            )
        }) 

    return(
        <WorkSecton>
        <div className="container">
            <WorkTitle><Span>My</Span> Work</WorkTitle>
            {workList}
            
        </div>
    </WorkSecton>
    
    
    
 )
}
    

}


export default Work;