import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppStore from "../store/AppStore";
import Header from "../Header";
import ThemeContext from "../../utilits/ThemeContext";

it("should render header", () => {
    const mockIsDarkTheme = false;
    const mockToggleTheme = jest.fn();
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <ThemeContext.Provider value={{ isDarkTheme: mockIsDarkTheme, toggleTheme: mockToggleTheme }}>
        <Header />

        </ThemeContext.Provider>
       
      </Provider>
    </BrowserRouter>
  );

  const LOginBtn=screen.getByText("login")

  expect(LOginBtn).toBeInTheDocument()
});
