import styled from 'styled-components';

export const Smedia = styled.div`
    height: 200px;
    overflow: hidden
`

export const Social = styled.div`
    width: 33.33%;
    height:200px;
    float: left;
    box-sizing: border-box;
    padding: 100px 220px 100px 60px
    background: ${props=> props.item  === 6 ? '#498cbf': ''};
    background: ${props=> props.item  === 1 ? '#498cbf': ''};
    background: ${props=> props.item  === 22 ? '#cc2127': ''};
    background: ${props=> props.item  === 0 ? '#44448cbf': ''};

`


export const Icon = styled.i`
    width: 75px ;
    height: 75px;
    background: #fff;
    text-align: center;
    line-height: 75px;
    color: #888;
    float: left;
    margin-right: 10px;
    margin-top: 60px;
    margin-left: 50px;

`

export const SocialDesc = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
   
    padding-top:50px;


`

export const SSpan = styled.span`
    display: block;
    margin-bottom: 8px
`

export const SpanInfo = styled.span`
font-weight: normal
`


