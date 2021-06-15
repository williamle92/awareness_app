import Header from './Header';
import './App.css';
import Sidebar from './Sidebar'
import Feed from './components/Feed.js'



function App() {
  return (
    <div className="app">


     <Header />


     <div className="app__body">
      
     <Sidebar />

     <Feed />

       </div>
     {/* Widgets*/}

     </div>

  );
}

export default App;
