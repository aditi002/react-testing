import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    // const h1Elem = screen.getAllByRole('heading',{
    //     level:1
    // })
    // const h1Elem = screen.getAllByRole('heading',{
    //     name: "Hello"
    // })
    // const h1Elem = screen.getByText(/Hello/i);
    const h1Elem = screen.getByText("Hello", {
      exact: false,
    });
    expect(h1Elem).toBeInTheDocument();
  });
  test("renders with name props", () => {
    render(<Greet name={"Adu"} />);
    const h1Elem = screen.getByText("Hello Adu");
    expect(h1Elem).toBeInTheDocument();
  });
});
