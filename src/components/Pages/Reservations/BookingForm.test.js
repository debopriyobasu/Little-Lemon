import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders static text in BookingForm", () => {
  render(<BookingForm />);
  const linkElement = screen.getByText(/Choose date/i);
  expect(linkElement).toBeInTheDocument();
});
