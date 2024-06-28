import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"
test('shound be render', () => {
    render(<Contact/>)
    const heading=screen.getByRole("heading")
    expect(heading).toBeInTheDocument();
});
  


test("should be render or not ",()=>{
    render(<Contact/>)
    const inputBox=screen.getAllByRole("textbox")

    expect(inputBox.length).toBe(2)
})