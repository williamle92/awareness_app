import Header from './Header';
import './App.css';
import Sidebar from './Sidebar'
import Feed from './components/Feed.js'
import Login from './views/Login';



function App() {
  const user = null;
  return (
    <div className='app'>
      {!user ? <Login/>: 
      (
      <>
      <Header/>
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      </>
        
        )}



    </div>
  )};

export default App;
