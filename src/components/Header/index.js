import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import MovieManiaLogo from '../../images/react-movie-logo.png';
import { useLocation } from "react-router";
import TMDBLogo from '../../images/tmdb_logo.svg';
import { Context } from "../../context";
import { Wrapper, Content, LogoImg} from "./Header.styles";
import { useContext } from "react";
const Header = () =>{
    const [user] = useContext(Context);
    console.log(user);
    const location = useLocation();
    return(
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg src={MovieManiaLogo} alt='MovieMania'/>
            </Link>
            
            {
                user ? (
                    location.pathname!=='/login'?
                    (<span className="login">{user.username} </span>):(<span></span>)
                    
                ):
                (
                    location.pathname!=='/login'?
                    (<Link to='/login'>
                        <span className="login">Log in</span>
                    </Link>):(<span></span>)
                    
                )
            }


            
        </Content>


    </Wrapper>
    );
};



export default Header;