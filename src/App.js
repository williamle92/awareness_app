import Header from './Header';
import './App.css';
import Sidebar from './Sidebar'
import Feed from './components/Feed.js'
import Login from './views/Login';
import { useStateValue } from './StateProvider';



function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className='app'>
      {!user ? <Login/>: 
      (
      <>
      <Header/>
      <div className="app__body" image={user.photoURL} displayName={user.displayName}>
        <Sidebar />
        <Feed />
      </div>
      </>
        
        )}



    </div>
  )};

export default App;
