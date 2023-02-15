import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { __parseThemeSelector } from '../../../selectors/themestyleselector';

const HeaderLoadingSkeleton = ({ bgColor }) => {
  return (
    <header>
      <SkeletonTheme color={bgColor} highlightColor={bgColor}>
        <Skeleton height={100} />
      </SkeletonTheme>
    </header >
  );
};

const HomeSection = ({ bgColor }) => {
  return (
    <main style={{ margin: "2rem 2rem" }}>
      <section aria-label={"herobanner-section"} style={{ height: "40vh" }}>
        <SkeletonTheme color={bgColor} highlightColor={bgColor}>
          <Skeleton height={"60vh"}></Skeleton>
        </SkeletonTheme>
      </section>
      <section aria-label={"cards-section"}>
        <SkeletonTheme color={bgColor} highlightColor={bgColor}>
          <Skeleton count={5} height={"20vh"} style={{ margin: "2rem 0" }} />
        </SkeletonTheme>
      </section>
    </main>
  );
};

const DefaultSkeleton = ({ bgColor }) => {
  return (
    <main style={{ margin: "2rem 2rem" }}>
      <SkeletonTheme color={bgColor} highlightColor={bgColor}>
        <Skeleton count={40} height="10vh" />
      </SkeletonTheme>
    </main>
  );
};

export const CastDetailsLoadingSpinner = () => {
  const { colors } = __parseThemeSelector();
  const { bgColor } = colors;
  return (
    <>
      <SkeletonTheme color={bgColor} highlightColor={bgColor}>

        <p>
          <Skeleton height={"60vh"} />
        </p>
        <div>
          <Skeleton count={5} height={"20vh"} style={{ margin: "2rem 0" }} />
        </div>
      </SkeletonTheme>
    </>
  )
}

export const LoadingSkeltonTemplate = ({ page = "default", height = 100, display = true }) => {
  const { colors } = __parseThemeSelector();
  const { bgColor } = colors;
  return (
    <>
        <HeaderLoadingSkeleton  bgColor={bgColor}/>
      {display ? page && page === "default" ? <DefaultSkeleton bgColor={bgColor} /> : <HomeSection bgColor={bgColor} /> : null}
      <footer>
        <SkeletonTheme color={bgColor} highlightColor={bgColor}>
          <Skeleton height={height}></Skeleton>
        </SkeletonTheme>
      </footer>
    </>
  );
};
