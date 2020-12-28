import React from "react";
import Link from "./index";
import { render, fireEvent } from "@testing-library/react-native";

it("Test Link", () => {
  const page = render(
    <Link textStyles={[{ color: "red" }, { color: "red" }]} primary>
      Hello Word
    </Link>
  );

  expect(page.toJSON()).toMatchSnapshot();
});
