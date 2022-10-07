import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../index";
import NavigationUda from "../components/NavigationUda";
import Login from "../components/Login";
import Leaderboard from "../components/Leaderboard";
import NewQuestion from "../components/NewQuestiion";

describe("App test", () => {

  it("Test NewPoll Form", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <NavigationUda />
          <Routes>
            <Route path="/" element={<NewQuestion />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
    const formopt1 = component.getByTestId("formopt1");
    const formopt2 = component.getByTestId("formopt2");
    fireEvent.change(formopt1, { target: { value: "sea" } });
    expect(formopt1.value).toBe("sea");
    fireEvent.change(formopt2, { target: { value: "mountain" } });
    expect(formopt2.value).toBe("mountain");
  });

  it("Test Navbar", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <NavigationUda />
        </Provider>
      </MemoryRouter>
    );

    const leaderboard = component.getByTestId("Leaderboard");
    expect(leaderboard).toBeInTheDocument();
  });

  it("Test leaderboard", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Leaderboard />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    const users = component.getByTestId("users");
    expect(users).toBeInTheDocument();
  });

  it("Test leaderboard snapshot", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<NewQuestion />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });

  it("Test LOGIN", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
    const dropdown = component.getByTestId("dropdown");
    expect(dropdown).toBeInTheDocument();
  });

  it("Test NewPoll Form", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <NavigationUda />
          <Routes>
            <Route path="/" element={<NewQuestion />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
    const newquestiontitle = component.getByTestId("newquestiontitle");
    expect(newquestiontitle).toBeInTheDocument();
  });
});
