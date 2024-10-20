import styled from "styled-components";

const css = {
    ButtonCSS: styled.button`
        position: absolute;
        left: 60px;
        width: calc(100% - 120px);
        bottom: 0;
        z-index: 99;
        margin-bottom: -15px;
        border-radius: 20px;
        padding: .5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        outline: none;
        border: 1px solid hsl(12, 20%, 44%);
        background-color: white;
        overflow: hidden;
        cursor: pointer;
    `,
    ButtonImg: styled.img`
        width: 15%;
    `,
    ButtonP: styled.p`
        color: hsl(14, 65%, 9%);
        font-weight: 600;
    `,
    ButtonNewHover: {
        ImageDivDecrease: styled.div`
            border-radius: 50%;
            border: 2px solid white;
            display: flex;
            align-items: center;
            padding: 0.5rem .3rem 0.5rem .3rem;
        `,
        HoverImage: styled.img`            
            //padding: .4rem .2rem .4rem .2rem;
        `,
        ImageDivIncrease: styled.div`
            border-radius: 50%;
            border: 2px solid white;
            display: flex;
            align-items: center;
            padding: .3rem;
        `,
    },
    ButtonCartDiv:styled.div`
        width: 100%;
        &:after { // use this to get margin bottom after button when scrolling
            content: "";
            display: block;
            height: 30px;
            width: 100%;
        }
    `,
    ButtonCart: styled.button`
        width: 100%;
        border: 1px solid hsl(14, 86%, 42%);
        background-color: hsl(14, 86%, 42%);
        color: white;
        padding: .7rem;
        border-radius: 20px;
        cursor: pointer ;
    `
}

export default css;