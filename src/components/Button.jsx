import React from "react";
import css from "../styles/Button.css";
import image from '../assets/images/icon-add-to-cart.svg'

const { ButtonCSS, ButtonImg, ButtonP } = css;

const Button = (props) => {

    const { action } = props;

    return (
        <>
            <ButtonCSS 
                onMouseEnter={() => action(false)}        
            >
                <ButtonImg
                    src={image}
                    alt='Add to cart image'
                ></ButtonImg>
                <ButtonP>Add to Cart</ButtonP>
            </ButtonCSS>
        </>
    )
}

export default Button;