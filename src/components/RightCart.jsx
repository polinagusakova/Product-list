import React from "react";
import cssRight from "../styles/RightCSS.css";
import image from "../assets/images/icon-remove-item.svg";
import carbonImage from '../assets/images/icon-carbon-neutral.svg'
import ButtonConfirm from "./ButtonConfirm";


const { RightDiv, RightCSS, RightInfo } = cssRight;

const RightCart = (props) => {    

    const { countToRight, addedItems, setAddedItems, setCountToRight, setOldArrayOfItems } = props;

    let toTotal = addedItems.reduce((accumulator, current) => accumulator + (current.price * current.count), 0);    // count total price

    const changeAfterRemove = (name, count, price) => {        
        setCountToRight(prev => prev - count);
        toTotal -= count * price;
        setAddedItems( () => {
            const clonedArray = [...addedItems];
            addedItems.forEach(element => {
                if (element.name === name) {
                    element.count = 0;
                    setOldArrayOfItems(clonedArray);
                }
            })

            return addedItems.filter(a => a.name !== name);            
        });  
    }

    return (
        <>
            <RightDiv>
                <RightCSS.Cart>
                    <RightCSS.CartH2>Your Cart ({countToRight})</RightCSS.CartH2>
                    
                    {addedItems.map((element, index) => {                       
                        return (
                        <>
                            <RightInfo.General key={index}>
                                <RightInfo.Info>
                                    <RightInfo.HeaderH4>{element.name}</RightInfo.HeaderH4>
                                    <RightInfo.QuantityPrice>
                                        <RightInfo.SpanCount>{element.count}x</RightInfo.SpanCount>
                                        <RightInfo.SpanPrice>@${element.price.toFixed(2)}</RightInfo.SpanPrice>
                                        <RightInfo.SpanPriceTotal>${(element.price * element.count).toFixed(2)}</RightInfo.SpanPriceTotal>
                                    </RightInfo.QuantityPrice>
                                </RightInfo.Info>
                                <RightInfo.RemoveImageDiv 
                                    onClick={() => {
                                        changeAfterRemove(element.name, element.count, element.price)
                                    }}>
                                    <RightInfo.RemoveImage 
                                        src={image}
                                        alt="Image for removing added items"                                       
                                    />
                                </RightInfo.RemoveImageDiv>                                
                            </RightInfo.General>
                            <RightInfo.TagHR/>
                        </>
                        )
                    })}
                    
                    <RightInfo.OrderTotal>
                        <RightInfo.TotalP>Order Total</RightInfo.TotalP>
                        <RightInfo.TotalPrice>${toTotal.toFixed(2)}</RightInfo.TotalPrice>
                    </RightInfo.OrderTotal>
                    <RightInfo.CarbonDiv>
                        <RightInfo.CarbonImage
                            src={carbonImage}
                            alt="Icon carbon neutral"
                        />
                        <RightInfo.CarbonP>This is a <span style={{fontWeight: 'bold'}}>carbon-neutral</span> delivery</RightInfo.CarbonP>
                    </RightInfo.CarbonDiv>
                    <ButtonConfirm addedItems={addedItems}/>
                </RightCSS.Cart>
            </RightDiv>
        </>
    )
}

export default RightCart;