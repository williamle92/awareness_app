import Header from "./components/Header";
import "./App.css";
import Login from "./views/Login";
import { useStateValue } from "./StateProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Video from "./views/Meditate";

import socialMedia from "./views/socialMedia";
import Dashboard from "./views/Dashboard";
import Calendar from './components/Calendar'
import SocialMedia from "./views/socialMedia";

function App() {
  const [{ user }] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <BrowserRouter>
          <Header />
        
            <Switch>
              <Route path='/' exact component={Dashboard}/>
              <Route path="/meditate" exact component={Video} />
              <Route path="/login" exact component={Login} />
              <Route path='/dashboard' exact component={SocialMedia}/>
              <Route path='/calendar' exact component={Calendar}/>
         

            </Switch>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
