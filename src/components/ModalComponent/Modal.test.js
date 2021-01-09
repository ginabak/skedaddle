import React from "react";
import { shallow } from "enzyme";
import Modal from "./Modal";

describe("Modal", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper).toMatchSnapshot();
  });
});
