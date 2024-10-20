import React, { useState, useEffect } from "react";
import { productsData } from "../services/data";
import Product from "./Product";
import Right from "./Right";
import css from "../styles/Main.css";
import RightCart from "./RightCart";

const { MainContainer, Left, LeftHeader, SectionDesserts } = css;

const Main = () => {

    const [ countToRight, setCountToRight] = useState(0); // total count of items in the right box
    const [ addedItems, setAddedItems ] = useState([]); // array of added items to cart
    const [ largeScreen, setLargeScreen ] = useState(""); // state for window resizing and changing src image
    const [ oldArrayOfItems, setOldArrayOfItems ] = useState([]); // array of added items but not changed after filtering in RightCart

    useEffect(() => {
        // Handler to call separate img src on window resize
        function handleResize() {
            if (window.innerWidth < 700) {
                setLargeScreen("700");
            } else if (window.innerWidth < 500) {
                setLargeScreen("500");
            }
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <MainContainer>
                <Left>                    
                    <SectionDesserts>
                        <LeftHeader>Desserts</LeftHeader>
                        {productsData.map((data, key) => {
                            return (    
                                <>
                                    <Product
                                        key={key}
                                        image={
                                            largeScreen === "700"
                                              ? data.image.tablet
                                              : largeScreen === "500"
                                              ? data.image.mobile
                                              : data.image.desktop
                                          }
                                        category={data.category}
                                        name={data.name}
                                        price={data.price}
                                        countToRight={countToRight}
                                        setCountToRight={setCountToRight}
                                        addedItems={addedItems}
                                        setAddedItems={setAddedItems}
                                        oldArrayOfItems={oldArrayOfItems}
                                        setOldArrayOfItems={setOldArrayOfItems}
                                    />
                                </>                        
                            );
                        })}
                    </SectionDesserts>                    
                </Left>
                {countToRight > 0
                ? <RightCart countToRight={countToRight} addedItems={addedItems} setAddedItems={setAddedItems} setCountToRight={setCountToRight}  setOldArrayOfItems={setOldArrayOfItems}/>
                : <Right/>
                }
                
            </MainContainer>            
        </>
    )
}

export default Main;