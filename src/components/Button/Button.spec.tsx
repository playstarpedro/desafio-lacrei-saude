import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Header Component", () => {
  const mockOnClick = jest.fn();
  it("should render", () => {
    const { container } = render(<Button>Button text</Button>);
    expect(container).toBeTruthy();
  });

  it("should call onClick", () => {
    render(<Button onClick={mockOnClick}>Button text</Button>);
    const button = screen.getByText("Button text");
    fireEvent.click(button!);
    expect(mockOnClick).toHaveBeenCalled();
  })

  it("should do nothing on calling default onClick", () => {
    const { container } = render(<Button>Button text</Button>);
    const button = screen.getByText("Button text");
    fireEvent.click(button!);
    expect(container).toBeTruthy();
  })

  it("should render primary button", () => {
    const { container } = render(<Button typeStyle="primary">Button text</Button>);
    expect(container).toBeTruthy();
  })

  it("should render secondary button", () => {
    const { container } = render(<Button typeStyle="secondary">Button text</Button>);
    expect(container).toBeTruthy();
  })

  it("should display the right button text", () => {
    render(<Button>The right text</Button>);
    expect(screen.getByText("The right text")).toBeInTheDocument();
  })
});
