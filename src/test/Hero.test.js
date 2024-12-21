import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    
    // Find the hero image element by its alt text
    const heroImage = screen.getByAltText("Hero Image");

    // Check if the image is in the document
    expect(heroImage).toBeInTheDocument();

    // Check if the image has the correct src attribute
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });
});
