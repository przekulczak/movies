import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchInput } from "..";

describe("SearchInput", () => {
  const mockOnChange = vi.fn();
  const mockOnSubmit = vi.fn();

  it("renders search input with correct label and placeholder", () => {
    render(
      <SearchInput value="" onChange={mockOnChange} onSubmit={mockOnSubmit} />
    );

    expect(screen.getByLabelText("Search Movies")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search movies...")).toBeInTheDocument();
  });

  it("calls onChange when input value changes", () => {
    render(
      <SearchInput value="" onChange={mockOnChange} onSubmit={mockOnSubmit} />
    );

    const input = screen.getByLabelText("Search Movies");
    fireEvent.change(input, { target: { value: "test" } });

    expect(mockOnChange).toHaveBeenCalledWith("test");
  });

  it("calls onSubmit when search button is clicked", () => {
    render(
      <SearchInput
        value="test"
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );

    const button = screen.getByRole("button", { name: "Search" });
    fireEvent.click(button);

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it("calls onSubmit when Enter key is pressed", () => {
    render(
      <SearchInput
        value="test"
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );

    const input = screen.getByLabelText("Search Movies");
    fireEvent.keyDown(input, { key: "Enter" });

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it("shows loading state when isLoading is true", () => {
    render(
      <SearchInput
        value="test"
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
        isLoading={true}
      />
    );

    expect(
      screen.getByRole("button", { name: "Searching..." })
    ).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
