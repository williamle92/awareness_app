import Header from "./components/Header";
import "./App.css";
import Login from "./views/Login";
import { useStateValue } from "./StateProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Video from "./views/Meditate";
import TodoTracker from "./components/TodoTracker";
import socialMedia from "./views/socialMedia";
import Dashboard from "./views/Dashboard";

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
              <Route path='/' exact component={socialMedia}/>
              <Route path="/meditate" exact component={Video} />
              <Route path="/login" exact component={Login} />
              <Route path='/todotracker' exact component={TodoTracker}/>
              <Route path='dashboard' exact component={Dashboard}/>
            </Switch>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
