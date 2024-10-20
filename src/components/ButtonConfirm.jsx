import React from "react";
import css from "../styles/Button.css";
import cssPopup from "../styles/OrderConfirmed.css";
import cssRight from "../styles/RightCSS.css";
import confirmed from "../assets/images/icon-order-confirmed.svg";
import "reactjs-popup/dist/index.css";
import { productsData } from "../services/data";

const { ButtonCart, ButtonCartDiv } = css;
const { StyledPopup, Modal, OrderImgConfirmed, OrderH1, OrderP, ConfirmedItems } = cssPopup;
const { RightInfo } = cssRight;

const ButtonConfirm = (props) => {

    const { addedItems } = props;

    let toTotal = addedItems.reduce((accumulator, current) => accumulator + (current.price * current.count), 0);    // count total price for confirmation popup window

    const getThumbImage = (name) => {
        for (let i = 0; i < productsData.length; i++) {
          if (productsData[i].name === name) {
            return productsData[i].image.thumbnail;
          }
        }
    };

    function refreshPage() {  // refresh page after confirm order
        window.location.reload(false);
    };
    
    return (
        <>
            <ButtonCartDiv>
                <StyledPopup trigger={<ButtonCart> Confirm order </ButtonCart>} modal nested>
                    {() => (
                        <Modal>
                            <OrderImgConfirmed src={confirmed} />
                            <OrderH1>Order Confirmed</OrderH1>
                            <OrderP>We hope you enjoy your food!</OrderP>
                            <ConfirmedItems>
                            {addedItems.map((element, index) => {                       
                                return (
                                <>
                                    <RightInfo.General key={index}>
                                        <RightInfo.ImageItems>
                                            <RightInfo.OrderImageDiv>
                                                <RightInfo.OrderImage src={getThumbImage(element.name)} alt={'Thumbnail of the ' + element.name }/>
                                            </RightInfo.OrderImageDiv> 
                                            <RightInfo.Info style={{justifyContent: 'flex-start'}}>
                                                <RightInfo.HeaderH4>{element.name}</RightInfo.HeaderH4>
                                                <RightInfo.QuantityPrice>
                                                    <RightInfo.SpanCount>{element.count}x</RightInfo.SpanCount>
                                                    <RightInfo.SpanPrice>@${element.price.toFixed(2)}</RightInfo.SpanPrice>                                                
                                                </RightInfo.QuantityPrice>
                                                
                                            </RightInfo.Info>  
                                        </RightInfo.ImageItems>
                                        <RightInfo.SpanPriceTotal style={{ color: 'hsl(14, 65%, 9%)' }}>${(element.price * element.count).toFixed(2)}</RightInfo.SpanPriceTotal>                             
                                    </RightInfo.General>
                                    <RightInfo.TagHR/>
                                </>
                                )
                            })}
                            <RightInfo.OrderTotal>
                                <RightInfo.TotalP style={{ fontWeight: '400'}}>Order Total</RightInfo.TotalP>
                                <RightInfo.TotalPrice>${toTotal.toFixed(2)}</RightInfo.TotalPrice>
                            </RightInfo.OrderTotal>
                            </ConfirmedItems>                            
                            <ButtonCart onClick={refreshPage}>Start new order</ButtonCart>                            
                        </Modal>
                    )}
                </StyledPopup>
            </ButtonCartDiv>
        </>
    )
}

export default ButtonConfirm;