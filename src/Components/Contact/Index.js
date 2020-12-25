import React, { Fragment } from 'react';
import {Drop, DropTitle, FormInput, InputExp, TextArea,InputText,InputEmail,InptutSubmit, TitleSpan } from './Desgin';
import Footer from '../Footer/Index';

//import './Desgin.css'
const Contact = ()=>{
return(
    <React.Fragment>
        
 
    <Drop>
            <div class="container">
                <DropTitle><TitleSpan>Drop </TitleSpan>Me A line</DropTitle>
                <form action="">
                    <FormInput>
                        <InputText placeholder="Your Name"/>
                        <InputEmail placeholder="Your Email"/>
                    </FormInput>
                    <InputExp class="sub" placeholder="Your Subject"/>
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <InptutSubmit type="submit" value="Send Message"/>
                </form>
            </div>
        </Drop>
        <Footer/>
        </React.Fragment>
)

}

export default Contact;