import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import left from "./icons/left-chevron.svg";
import right from "./icons/right-chevron.svg";
import { CarousalStyle } from "../../styles/layouts/component/styledcomponent/movicardstyle";
import "../../styles/layouts/component/scss/moviecardstyle.scss";
import { __isThemeOfType } from "../../utils/tenant";

const Carousel = ({
  title = "",
  style,
  children,
  displayCard = 5,
  primaryTxtColor,
  classnameparam,
}) => {
  const [activeItemIndex, setActiveIndex] = useState(1);
  function changeActiveItem(activeItemNewIndex) {
    setActiveIndex(activeItemNewIndex);
  }
  // media query display
  const iconStyle = {
    width: "44px",
    height: "76px",
  };
  const marginLeft = {
    marginLeft: "3rem",
  };

  const marginRight = {
    marginRight: "3rem",
  };

  return (
    <>
      <CarousalStyle />
      <section className="carousel-container">
        {title && (
          <div
            className="carousel-title"
            style={{ ...(style && style.displayMode ? style.displayMode : {}) }}
          >
            {title}
            {style && <hr className="horzontal-fill" />}
          </div>
        )}
        <div className="carousel-content">
          <ItemsCarousel
            // Placeholder configurations
            enablePlaceholder
            numberOfPlaceholderItems={5}
            minimumPlaceholderTime={1000}
            placeholderItem={
              <div
                style={{
                  height: 250,
                  background: "#202020",
                }}
              ></div>
            }
            {...(__isThemeOfType()
              ? {
                  classes: {
                    itemsInnerWrapper: "carousel-item-styling-dorm",
                    itemsWrapper: `carousel-itemsWrapper-dorm ${
                      classnameparam ? classnameparam : ""
                    }`,
                    itemWrapper: "carousel-itemWrapper-dorm",
                    rightChevronWrapper: "carousel-rightChevron-dorm",
                    leftChevronWrapper: "carousel-leftChevron-dorm",
                  },
                }
              : {
                  classes: {
                    itemsInnerWrapper: "carousel-item-styling",
                    itemsWrapper: `carousel-itemsWrapper ${
                      classnameparam ? classnameparam : ""
                    }`,
                    itemWrapper: `carousel-itemWrapper`,
                    rightChevronWrapper: "carousel-rightChevron",
                    leftChevronWrapper: "carousel-leftChevron",
                  },
                })}
            // Carousel configurations
            numberOfCards={displayCard}
            gutter={22.5}
            showSlither={false}
            firstAndLastGutter={true}
            freeScrolling={true}
            // Active item configurations
            requestToChangeActive={changeActiveItem}
            activeItemIndex={activeItemIndex}
            activePosition={"center"}
            chevronWidth={24}
            rightChevron={
              <img src={right} style={{ ...iconStyle }} alt="right chevron" />
            }
            leftChevron={
              <img src={left} style={{ ...iconStyle }} alt="left chevron" />
            }
            outsideChevron={true}
          >
            {children}
          </ItemsCarousel>
        </div>
      </section>
    </>
  );
};

export { Carousel };
