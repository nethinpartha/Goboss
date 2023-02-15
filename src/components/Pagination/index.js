import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { LoadingSpinner } from "../../frontend-library/atoms/loadingSpinner"


const style = {
    height: 50,
    border: "1px solid green",
    margin: 6,
    padding: 8,
    color: "white",
    width: "100%"
};

const InfiniteScroller = ({ children, items, setItems, handleFetchMoreData }) => {

    return (
        <>
            <div id="scrollableDiv" style={{ height: "35rem", overflow: "auto", width: "100%" }}>
                <InfiniteScroll
                    dataLength={items.length}
                    next={handleFetchMoreData}
                    hasMore={true}
                    loader={<LoadingSpinner />}
                    scrollableTarget="scrollableDiv"
                >
                    {/* {items.item.map((i, index) => (
                        <div style={style} key={index}>
                            div - #{index}
                        </div>
                    ))} */}
                    {children}
                </InfiniteScroll>
            </div>
        </>
    )
};

export default InfiniteScroller;