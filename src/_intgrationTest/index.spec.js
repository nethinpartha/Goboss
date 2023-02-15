import React from "react";
import moxios from "moxios";
// import { testStore } from "./../testing-utils/utils";

describe("Fetch posts action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("store is updated correctly", () => {
    // const expectedState = {
    //   reducer: {
    //     records: null,
    //     loading: false,
    //     error: null,
    //   },
    //   cast: [
    //     {
    //       id: 1,
    //       image: "/static/media/cast1.a8b7b903.png",
    //       imageBg: "/images/slide1b.webp",
    //       content:
    //         "Bryan Lee Cranston (born March 7, 1956) is an American actor, director, producer, and screenwriter. He is best known for his roles as Walter White in the AMC crime drama series Breaking Bad (2008–2013), Tim Whatley in the NBC sitcom Seinfeld (1994–1997), Hal in the Fox sitcom Malcolm in the Middle (2000– 2006), and Vince Lonigan in the Prime Video crime drama series Sneaky Pete (2015–2019).",
    //       title: "Bryan Cranston",
    //     },
    //     {
    //       id: 2,
    //       image: "/static/media/cast2.008b8aaf.png",
    //       imageBg: "/images/slide1b.webp",
    //       content:
    //         "Aaron Paul (born March 7, 1986) is an American actor. He is best known for his roles as Walter White in the AMC crime drama series Breaking Bad (2008–2013), Tim Whatley in the NBC sitcom Seinfeld (1994–1997), Hal in the Fox sitcom Malcolm in the Middle (2000– 2006), and Vince Lonigan in the Prime Video crime drama series Sneaky Pete (2015–2019).",
    //       title: "Aaron Paul",
    //     },
    //     {
    //       id: 3,
    //       image: "/static/media/cast3.667d84a3.png",
    //       imageBg: "/images/slide1b.webp",
    //       content:
    //         "Anna Gunn (born March 7, 1976) is an American actor, director and producers. shee is best known for his roles as Walter White in the AMC crime drama series Breaking Bad (2008–2013), Tim Whatley in the NBC sitcom Seinfeld (1994–1997), Hal in the Fox sitcom Malcolm in the Middle (2000– 2006), and Vince Lonigan in the Prime Video crime drama series Sneaky Pete (2015–2019).",
    //       title: "Anna Gunn",
    //     },
    //   ],
    //   movie: [
    //     {
    //       id: 1,
    //       image: "/static/media/images@2x.f78c57a9.png",
    //       imageBg: "/images/slide1b.webp",
    //       title: "Money Heist",
    //     },
    //     {
    //       id: 2,
    //       image: "/static/media/img2.36f788d5.png",
    //       imageBg: "/images/slide2b.webp",
    //       title: "Avengers- Infinity war",
    //     },
    //     {
    //       id: 3,
    //       image: "/static/media/slider3.b7f1ed7f.png",
    //       imageBg: "/images/slide3b.webp",
    //       title: "Ford v/s ferrari",
    //     },
    //   ],
    //   continueWatching: [
    //     {
    //       id: 1,
    //       image: "/static/media/images@2x.f78c57a9.png",
    //       imageBg: "/images/slide1b.webp",
    //       title: "Money Heist",
    //       progress: 40,
    //     },
    //     {
    //       id: 2,
    //       image: "/static/media/img2.36f788d5.png",
    //       imageBg: "/images/slide2b.webp",
    //       title: "Avengers- Infinity war",
    //       progress: 10,
    //     },
    //     {
    //       id: 3,
    //       image: "/static/media/slider3.b7f1ed7f.png",
    //       imageBg: "/images/slide3b.webp",
    //       title: "Ford v/s ferrari",
    //       progress: 22,
    //     },
    //   ],
    // };
    // const store = testStore();
    //     moxios.wait(() => {
    //         const request = moxios.requests.mostRecent()
    //         request.respondWith({
    //             status: 200,
    //             response: expectedState
    //         })
    //     })
    //     return store.dispatch(videoInfo()).then(() => {
    //         const newState = store.getState()
    //         expect(newState.posts).toBe(expectedState)
    //     })
  });
});
