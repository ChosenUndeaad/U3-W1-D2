import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import App from "../App";

describe("App component tests", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("Verifica che il componente Welcome venga montato correttamente", () => {
    expect(screen.getByText(/shop/i)).toBeInTheDocument();
  });
});
