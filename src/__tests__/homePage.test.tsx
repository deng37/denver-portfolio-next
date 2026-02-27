import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomePage from "@/app/page";

describe("Home Page - Portfolio", () => {
  it("Should have my name", () => {
    render(<HomePage />);
    const profession = screen.getByText(/denver/i);
    expect(profession).toBeInTheDocument();
  });

  it("Should have whatsapp link", () => {
    render(<HomePage />);
    const contactBtn = screen.getByRole("link", { name: /whatsapp/i });
    expect(contactBtn).toBeInTheDocument();
    expect(contactBtn).toHaveAttribute("href");
  });
});
