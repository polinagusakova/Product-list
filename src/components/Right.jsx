import React from "react";
import css from "../styles/RightCSS.css";
import image from "../assets/images/illustration-empty-cart.svg";

const { RightDiv, RightCSS } = css;

const Right = () => {

    return (
        <>
            <RightDiv>
                <RightCSS.Cart style={{justifyContent: 'spaceBetween'}}>
                    <RightCSS.CartH2>Your Cart (0)</RightCSS.CartH2>
                    <RightCSS.CartImage
                        src={image}  
                        alt="Image of empty cart in main page"
                    />
                    <RightCSS.CartP>Your added items will appear here</RightCSS.CartP>
                </RightCSS.Cart>
            </RightDiv>
        </>
    )
}

export default Right;