import styled from "styled-components";

const css = {
    MainContainer: styled.div`
        display: flex;    
        padding: 5rem;
        max-width: 100rem;
        @media (max-width: 800px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            padding: 1rem 0 1rem 0;
            width: 100%;
            margin-left: 0;
        }
    `,
    Left: styled.div`
        display: flex;
        flex-direction: column;
        flex: 3;
    `,
    LeftHeader: styled.h1`
        font-size: 2rem;
        color: hsl(14, 65%, 9%);
        font-weight: 700;
        grid-row: 1;
        grid-column: 1 / -1;
        text-align: left;
    `,
    Right: styled.div`
        flex: 1;
        background-color: white;
        padding: 1rem;
        max-height: 20rem;
    `,
    SectionDesserts: styled.section`
        display: grid;
        /* Automatically fills the entire width of the grid container */
        grid-template-columns: repeat(auto-fill, 300px);
        width: 100%; 
        justify-content: center;
        justify-items: center; /* Place the card in the center */
        column-gap: 1rem; /* Indentation between columns */
        row-gap: 2rem; /* Indentation between rows */
        margin: 0 auto;        
    `,
    CardCSS: {
        Card: styled.div`
            width: 300px;
            box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column; /* place elements in a column */
            border-radius: 20px;
        `,
        CardTop: styled.div`
            position: relative;
            border-radius: 20px;
            margin-bottom: 1rem;
        `,
        CardImage: styled.div`
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;            
            position: relative;
        `,
        CardImageImage: styled.img`
            width: 100%;
            height: 99%;
            object-fit: contain; /* Embedding an image into a container */
            border-radius: 20px;
        `,
        CardBottom: styled.div`
            display: flex;
            flex-direction: column;
            flex: 1 0 auto; /* take up the entire remaining height of the card */
            padding: 10px;
            gap: .5rem;
        `,
        CategoryP: styled.p`
            font-size: .8rem;
            color: hsl(7, 20%, 60%);
            font-weight: 600;
        `,
        NameH5: styled.h5`
            font-size: 1rem;
            color: hsl(14, 65%, 9%);
            font-weight: 700;
        `,
        PriceH6: styled.h6`
            font-size: 1rem;
            color: hsl(14, 86%, 42%);
            font-weight: 600;
        `
    }
}

export default css;