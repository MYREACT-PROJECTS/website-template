
import { Sp1,ProfileSkills,ProfileList,ProfileItem,ProfileItemSpan,ProfileItemSpanWeb,SkillsDiv,SkillsTitle,SkillsTitleSpan,SkillsDesc,SkillsBar,SkillsBarTitle,SkillsBarTitlePerc,SkillsBarParent, Prof, Sp2, Sp3, Htitle } from './desgin';
import React ,{useState, useEffect} from 'react';
import axios from 'axios';




const Profile = ()=>{
    const [profile, setProfile] = useState([]);

useEffect( ()=>{
    axios.get('js/data.json').then(res =>{setProfile(res.data.profile)})
},[])

const showingProfile = profile.map( res =>{
return(
    <SkillsBar key= {res.id}>
    <SkillsBarTitle>{res.skill}</SkillsBarTitle>
    <SkillsBarTitlePerc>{res.level} </SkillsBarTitlePerc>
    <SkillsBarParent>
        <Sp1></Sp1>
    </SkillsBarParent>
</SkillsBar>

)

})



return(
   <ProfileSkills>
            <div className="container">
                <Prof>
                    <Htitle ><span>My </span>Profile</Htitle>
                    <ProfileList>
                        <ProfileItem>
                            <ProfileItem>
                            <ProfileItemSpan>Name</ProfileItemSpan>
                            Hamza Nabil
                            </ProfileItem>
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Birthday</ProfileItemSpan>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Address</ProfileItemSpan>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Phone</ProfileItemSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Email</ProfileItemSpan>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Website</ProfileItemSpan>
                            <ProfileItemSpanWeb class="web">www.google.com</ProfileItemSpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </Prof>
                
                <SkillsDiv>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {showingProfile}
                    
                   
                </SkillsDiv>
                
            </div>
        </ProfileSkills>
)

}

export default Profile;
