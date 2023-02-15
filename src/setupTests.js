import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifeCycleMethods: true,
});

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      // addListener: function () { },
      // removeListener: function () { }
    };
  };
