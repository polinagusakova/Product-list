import React, {useEffect, useState} from "react";
import css from "../styles/Button.css";
import decrease from "../assets/images/icon-decrement-quantity.svg";
import increase from "../assets/images/icon-increment-quantity.svg";

const { ButtonNewHover, ButtonCSS, ButtonP } = css;

const ButtonHover = (props) => {

    const { 
        action, 
        count, 
        setCount, 
        countToRight, 
        setCountToRight,
        name,
        price,
        addedItems,
        setAddedItems, 
        oldArrayOfItems
    } = props;

    useEffect(() => { // update count when specific item was deleted
        oldArrayOfItems.forEach(element => {
            if (element.count === 0 && element.name === name) {
                setCount(0);
            } 
        })
    }, [])
    
    const toDecrease = () => {
        if (count > 0 && countToRight > 0) {
            setCount(prev => prev - 1);
            setCountToRight(prev => prev - 1); //changing total count and send it back to Product => Main => Right

            addedItems.forEach(element => {
                if (element.name === name) {
                    element.count -= 1;
                } 
            })
        } 
    }

    const toIncrease = () => {
        setCount(prev => prev + 1);
        setCountToRight(prev => prev + 1); 
        if (addedItems.find(u=>u.name === name)) {
            addedItems.forEach(element => {
                if (element.name === name) {
                    element.count += 1;
                } 
            });
        } else {
            const newItem = {name: name, price: price, count: count + 1 };

            setAddedItems(prevItems => [...prevItems, newItem]);
        } 
    }

    
    return (
        <>
            <ButtonCSS 
                style={{border: '1px solid hsl(14, 86%, 42%)', backgroundColor: 'hsl(14, 86%, 42%)', justifyContent: 'space-around'}}                
                onMouseLeave={() => action(true)}                    
            >
                <ButtonNewHover.ImageDivDecrease onClick={toDecrease}>
                    <ButtonNewHover.HoverImage
                        src={decrease}
                        alt='Decrease quantity of item image'
                    />
                </ButtonNewHover.ImageDivDecrease>
                
                <ButtonP style={{color: 'white'}}>{count}</ButtonP>

                <ButtonNewHover.ImageDivIncrease onClick={toIncrease}>
                    <ButtonNewHover.HoverImage
                        src={increase}
                        alt='Increase quantity of item image'
                    />
                </ButtonNewHover.ImageDivIncrease>
            </ButtonCSS>
        </>
    )
}

export default ButtonHover;