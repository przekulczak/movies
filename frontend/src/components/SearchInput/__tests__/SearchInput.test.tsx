import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SearchInput } from "../index";

describe("SearchInput", () => {
  it("renders search input with correct label and placeholder", () => {
    render(<SearchInput />);

    expect(screen.getByLabelText("Search Movies")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Type to search...")
    ).toBeInTheDocument();
  });

  it("calls onChange when input value changes", () => {
    const handleChange = vi.fn();
    render(<SearchInput onChange={handleChange} />);

    const input = screen.getByPlaceholderText("Type to search...");
    fireEvent.change(input, { target: { value: "test" } });

    expect(handleChange).toHaveBeenCalled();
  });
});
