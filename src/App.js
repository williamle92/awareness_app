import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed.js";
import Login from "./views/Login";
import { useStateValue } from "./StateProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Video from "./views/Meditate";
import TodoTracker from "./components/TodoTracker";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <BrowserRouter>
          <Header />
            <Switch>
              <Route path="/meditate" exact component={Video} />
              <Route path="/login" exact component={Login} />
              <Route path='/todotracker' exact component={TodoTracker}/>
            </Switch>
            <div
              className="app__body"
              image={user.photoURL}
              displayName={user.displayName}
            >
              <Sidebar />
              <Feed />
            </div>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
