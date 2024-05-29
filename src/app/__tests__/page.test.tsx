import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

describe("Page.", () => {
  it("renders the page", () => {
    render(<Page />);
    screen.debug();
  });
});
