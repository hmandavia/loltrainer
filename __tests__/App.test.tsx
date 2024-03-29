
import { shallow } from "enzyme";
import React from "react";
import App from "../src/App";

const createTestProps = (props: object) => ({
  ...props
});

describe("App", () => {
  const props = createTestProps({});
  const wrapper = shallow<App>(<App {...props} />);
                               
  describe("rendering", () => {
    it("should render a <View />", () => {
      expect(wrapper.find("View")).toHaveLength(1);
    });
  });
});