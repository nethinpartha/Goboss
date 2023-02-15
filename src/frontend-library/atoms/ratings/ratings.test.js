import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../../../testing-utils/utils";
import Ratings from "./ratings";

const setUp = (props = {}) => {
  const component = shallow(<Ratings {...props} />);
  return component;
};

jest.mock("redux-persist", () => {
  const real = jest.requireActual("redux-persist");
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

describe("Ratings Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not through warnings", () => {
      const expectedProps = {
        value: 0,
        name: "",
        precision: 4,
        readOnly: false,
        className: "testClass",
      };

      const propsErr = checkProps(Ratings, expectedProps);

      expect(propsErr).toBeUndefined();
    });
  });

  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        value: 4.5,
        name: "half-rating-read",
        precision: 0.5,
        readOnly: true,
        classname: null,
      };
      wrapper = setUp(props);
    });

    it("it should render without errors", () => {
      const component = findByTestAttr(wrapper, "ratingsComponent");
      expect(component.length).toBe(1);
    });
    it("should render ratings", () => {
      const component = findByTestAttr(wrapper, "ratings");
      expect(component.length).toBe(1);
    });
  });

  describe("have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it("should not render", () => {
      const component = findByTestAttr(wrapper, "ratingsComponent");
      expect(component.length).toBe(0);
    });
  });
});
