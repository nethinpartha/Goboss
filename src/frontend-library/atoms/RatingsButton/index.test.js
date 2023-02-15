import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../../../testing-utils/utils";
import RatingsButton from "./index";

describe("Ratings Button component", () => {
  describe("Checking Proptypes", () => {
    it("Should not  throw warnings", () => {
      const expectedProps = {
        buttonText: "Example button text",
        emitEvent: () => {},
      };

      const propErr = checkProps(RatingsButton, expectedProps);
      expect(propErr).toBeUndefined();
    });

    describe("Render", () => {
      let wrapper;
      let mockFn;
      beforeEach(() => {
        mockFn = jest.fn();
        const props = {
          buttonText: "Text 1",
          emitEvent: mockFn,
        };

        wrapper = shallow(<RatingsButton {...props} />);
      });

      it("Should render a button", () => {
        const button = findByTestAttr(wrapper, "buttonComponent");
        expect(button.length).toBe(1);
      });

      it("Should emit callback on click event", () => {
        const button = findByTestAttr(wrapper, "buttonComponent");
        button.simulate("click");
        const callBack = mockFn.mock.calls.length;
        expect(callBack).toBe(1);
      });
    });
  });
});
