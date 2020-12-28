import React from "react";
import { render } from "@testing-library/react-native";
import SimpleCard from "./index";

test("should test snapshot", () => {
  const page = render(<SimpleCard />);

  expect(page.toJSON()).toMatchSnapshot();
});
