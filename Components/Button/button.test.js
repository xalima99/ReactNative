import React from "react";
import { render } from "@testing-library/react-native";
import Button from "./index";

const button = render(<Button primary>Hello Word</Button>);

test("Button should match Snapshot", () => {
  expect(button.toJSON()).toMatchSnapshot();
});
