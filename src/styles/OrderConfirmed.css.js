import styled from "styled-components";
import Popup from 'reactjs-popup';


/*const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    width: 100%;
    padding: 5px;
  }
  // use your custom style for ".popup-content"
  &-content {
    width: 300px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  }

`;

export default StyledPopup;*/

const cssPopup = {
    StyledPopup: styled(Popup)`
        // use your custom style for ".popup-overlay"
        &-overlay {
            width: 100%;
            padding: 5px;
            @media (max-width: 500px) {
                padding: 0;
            }
        }
        // use your custom style for ".popup-content"
        &-content {
            max-width: 400px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
            border-radius: 10px;
            @media (max-width: 1000px) {
                width: 20rem;
            }
            @media (max-width: 500px) {
                width: 100%;
                margin-left: 0;
            }
        }
    `,
    Modal: styled.div`
        display: flex;
        padding: 1rem;
        flex-direction: column;
        gap: 1rem;
    `,
    OrderImgConfirmed: styled.img`
        width: 8%;
    `,
    OrderH1: styled.h1`
        font-size: 1.5rem;
        color: hsl(14, 65%, 9%);
        font-weight: 700;
    `, 
    OrderP: styled.p`
        font-size: .8rem;
        color: hsl(7, 20%, 60%);
        font-weight: 500;
    `,
    ConfirmedItems: styled.div`
        display: flex;
        padding: 1rem;
        flex-direction: column;
        background-color: hsl(20, 50%, 98%);
    `
}

export default cssPopup;