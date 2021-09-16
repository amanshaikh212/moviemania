import styled from "styled-components";

export const Wrapper = styled.div`
    color: var(--white);
    background: var(--darkGrey);
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    //background: var(--lightGrey);
    border-color:var(--darkGrey);
    color: var(--lightGrey);
    h3{
        margin: 10px 0 0 0;
        color: var(--lightGrey);
    }

    p{
        margin: 5px 0;
        color: var(--lightGrey);
    }


`;


export const Image = styled.img`
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;


`;