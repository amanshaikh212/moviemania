import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    max-width: 320px;
    padding: 20px;
    color: var(--darkGrey);
    font-weight: bold;
    input{
        width: 100%;
        height: 30px;
        border: 1px solid;
        color: var(--darkGrey);
        border-radius: 20px;
        margin: 10px 0;
        padding: 10px;
        

    }

    .error{
        color: red;
    }
    p{
        color: var(--darkGrey);
        font-weight: bold;
    }
    button{
        display: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    color: var(--white);
    border: none;
    font-size: var(--fontBig);
    margin: 20px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;
    
    :hover{
        opacity: 0.8;
    }
    }
    

`;