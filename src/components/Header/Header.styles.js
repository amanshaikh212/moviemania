import styled from "styled-components";

export const Wrapper =  styled.div`
background : var(--darkGrey);
padding: 0 20px




`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
max-width: var(--maxWidth);
padding: 20px 0;
margin: 0 auto;
color: var(--white);
a{
    color: var(--white);
    text-decoration: none;

}

.login{
    display: block;
    float: right;
    border: 2px solid;
    padding: 5px 30px;
    border-radius: 10%;
    background: var(--lightGrey);
    color: var(--darkGrey);
    font-weight: bold;
    @media screen and (max-width:768px){
        
        
        font-size: var(--fontSmall);
    }
}


`;

export const LogoImg = styled.img`
    width: 200px;
    margin-bottom: 0;
    padding-bottom: 0;
    float: left;
    @media screen and (max-width: 500px){
        width: 150px;
    }

`;


;