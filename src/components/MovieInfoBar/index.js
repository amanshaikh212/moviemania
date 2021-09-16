import React from "react";
import PropTypes from 'prop-types';
import { calcTime,convertMoney } from "../../helpers";

import { Wrapper,Content } from "./MovieInfoBar.styles";

const MovieInfoBar = ({time,budget,revenue}) =>(
    <Wrapper>
        <Content>
            <div className="column">
                <span>Duration: {calcTime(time)}</span>
                
            </div>
            <div className="column">
                <span>Budget: {convertMoney(budget)}</span>

            </div>
            <div className="column">
                <span>Revenue: {convertMoney(revenue)}</span>

            </div>
        </Content>
    </Wrapper>
);

MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
};

export default MovieInfoBar;
