import { render } from "@testing-library/react";
import Header from "./index";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        pathname: "",
      };
    },
  };
});

describe("Header", () => {
  it("Verify if render", () => {
    const { queryByTestId } = render(<Header />);

    expect(queryByTestId("svg-element")).toBeInTheDocument();
  });
});
