import React from "react";
import Infos from "./Infos";
import { render } from "@testing-library/react-native";

test("should render given children", () => {
  const page = render(
    <Infos
      propforward="helloWord"
      textStyles={[{ color: "red" }, { color: "red" }]}
      children="axalib"
    />
  );
  const text = page.queryByText("axalib");

  expect(text).toBeTruthy();

  console.log(page.props);
  expect(page.toJSON()).toMatchSnapshot();
});
