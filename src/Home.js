import React from "react";
import styled from 'styled-components';

const BackgroundImg = styled.div`
    background-image: url('https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80');
    background-position: no-repeat;
    background-size: cover;
    width: 100%;
    margin: 0;
    `;

const OrderNowCta = styled.h1`
    font-size: 7rem;
    color: white;
    text-align: center;
    padding: 21%;
    margin: 0;
    `;

const Home = props => {
    return (
        <BackgroundImg>
            <OrderNowCta>Order Now</OrderNowCta>
        </BackgroundImg>

    )
}

export default Home;