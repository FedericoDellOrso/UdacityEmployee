import "./App.css";
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import NavigationUda from "./NavigationUda";
import LoadingBar from "react-redux-loading-bar";
import PollShow from "./PollShow";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestiion";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <div className="App">
        {props.loading === true ? (
          <Login />
        ) : (
          <div>
            <NavigationUda />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/questions/:question_id" element={<PollShow />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/add" element={<NewQuestion />} />
            </Routes>
          </div>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({ loading: authedUser === null });

export default connect(mapStateToProps)(App);
