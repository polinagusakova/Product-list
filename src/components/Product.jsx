import React, { useState, useEffect } from "react";
import css from "../styles/Main.css";
import Button from "./Button";
import ButtonHover from "./ButtonHover";

const { CardCSS } = css;

const Product = ( props ) => {

    const {
        image, 
        category, 
        name, 
        price, 
        countToRight, 
        setCountToRight, 
        addedItems,
        setAddedItems,
        oldArrayOfItems
        } = props;

    const [ isHover, setIsHover ] = useState(true); // state for hovering buttons on each item
    const [ count, setCount ] = useState(0); // count for each new item

    return (
        <>
            <CardCSS.Card>
                <CardCSS.CardTop>
                    <CardCSS.CardImage>
                        <CardCSS.CardImageImage
                            src={image}
                            alt={"Image for" + name + " leading to product list page"}
                            style={
                                !isHover 
                                ? {border: '2px solid red', width: '99%', height: '98%'} 
                                : {border: 'none', width: '100%', height: '100%'}
                            }
                        />
                        {isHover  
                        ? <Button action={setIsHover}/>  
                        : <ButtonHover 
                            action={setIsHover}
                            countToRight={countToRight} //props to Main and then to Right Components
                            setCountToRight={setCountToRight}
                            count={count}
                            setCount={setCount}
                            name={name}
                            price={price}
                            addedItems={addedItems}
                            setAddedItems={setAddedItems}
                            oldArrayOfItems={oldArrayOfItems}
                        />
                        }
                    </CardCSS.CardImage>
                </CardCSS.CardTop>
                <CardCSS.CardBottom>
                    <CardCSS.CategoryP>{category}</CardCSS.CategoryP>
                    <CardCSS.NameH5>{name}</CardCSS.NameH5>
                    <CardCSS.PriceH6>${price.toFixed(2)}</CardCSS.PriceH6>
                </CardCSS.CardBottom>                
            </CardCSS.Card>
        </>
    )
}

export default Product;