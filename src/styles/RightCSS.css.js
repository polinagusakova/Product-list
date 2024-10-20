import styled from "styled-components";

const cssRight = {
    RightDiv: styled.div`
        display: flex;
        flex: 1;
        background-color: white;
        padding: 1rem;
        height: 23rem;
        border-radius: 10px;
        overflow-y: auto;
        
        min-width: 15rem;
    `,
    RightCSS: {
        Cart: styled.div`
            width: 100%;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: .8rem;
            margin-bottom: 1rem;
        `,
        CartH2: styled.h2`
            font-size: 1.3rem;
            font-weight: 700;
            color: hsl(14, 86%, 42%);
            align-self: flex-start;             
            margin-bottom: .5rem;           
        `,
        CartImage: styled.img`
            width: 50%;
        `,
        CartP: styled.p`
            font-size: .9rem;
            color: hsl(7, 20%, 60%);
            font-weight: 600;
        `
    },
    RightInfo: {
        General: styled.div`
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        `,
        Info: styled.div`
            display: flex;
            flex-direction: column;
            gap: .7rem;
        `,
        HeaderH4: styled.h4`
            font-size: .9rem;
            font-weight: 500;
            color: hsl(14, 65%, 9%);
        `,
        QuantityPrice: styled.div`
            display: flex;
            align-items: center;
            gap: 1.5rem;
        `,
        SpanCount: styled.span`
            color: hsl(14, 86%, 42%);
            font-size: .8rem;
            font-weight: 700;
        `,
        SpanPrice: styled.span`
            font-size: .8rem;
            color: hsl(7, 20%, 60%);
            font-weight: 400;
        `,
        SpanPriceTotal: styled.span`
            font-size: .8rem;
            color: hsl(7, 20%, 60%);
            font-weight: 600;
        `,
        RemoveImageDiv: styled.div`
            border-radius: 50%;
            height: 40%;
            display: flex;
            align-items: center;
            padding: 0.1rem .3rem 0.1rem .3rem;
            border: 2px solid hsl(7, 20%, 60%);
            min-width: .5rem;
        `, 
        RemoveImage: styled.img`
            width: 100%;
            align-items: center;
            justify-content: center;
        `,
        OrderTotal: styled.div`
            display: flex;
            width: 100%;
            justify-content: space-between;  
            align-items: center;         
        `,
        TotalP: styled.p`
            font-size: .8rem;
            color: hsl(14, 65%, 9%);
            font-weight: 500;
        `,
        TotalPrice: styled.p`
            font-size: 1.3rem;
            font-weight: 700;
            color: hsl(14, 65%, 9%);
        `,
        TagHR: styled.hr`
            width: 100%;
            border: 1px solid hsl(0, 0%, 93%);
        `,
        CarbonDiv: styled.div`
            background-color: hsl(20, 50%, 98%);
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: .8rem;
            gap: .5rem;
            border-radius: 10px;
        `,
        CarbonP: styled.p`
            font-size: .8rem;
        `,
        CarbonImage: styled.img`
            
        `,
        OrderImageDiv: styled.div`
            height: 3rem;
            width: 2.5rem;
        `, 
        OrderImage: styled.img`
            height: auto;
            width: 2.5rem;
        `,
        ImageItems: styled.div`
            display: flex;
            gap: 1rem;
        `
    }
}

export default cssRight;