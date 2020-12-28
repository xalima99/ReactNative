import React from "react";
import { render } from "@testing-library/react-native";

import Floating from "./index";

it("Tests Snapshot", () => {
  const snap = render(<Floating />).toJSON();
  expect(snap).toMatchSnapshot();
});
