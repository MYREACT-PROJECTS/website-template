import React from 'react';

import { Link } from 'react-router-dom';

import { Anchor, ListItem, Logo, LogoText, MenuLink, NavbarSection, Ulist } from './desgin';



const Navbar = ()=>{
return(
    <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText class="logo-text">Ultra Profile</LogoText>
                </Logo>
                
                
                
                <Ulist>
                    <ListItem><Anchor href = "/">Home</Anchor></ListItem>
                    <ListItem><Anchor href="/Work">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem><Anchor href="#">About</Anchor></ListItem>
                    <ListItem><Anchor href="/Contact">Contact</Anchor></ListItem>
                </Ulist>
            
            </div>
            </NavbarSection>

       
        
)

}

export default Navbar;