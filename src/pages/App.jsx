// import dependencies
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

// import my functionality that I've added
import { getUser } from '../utilities/users-services';

// css
import './App.css'

// import pages
import AuthPage from './AuthPage';
import NewResourcePage from './NewResourcePage';
import ResourceHistoryPage from './ResourceHistoryPage';
import ResourcePage from './ResourcePage';

// import components
import NavBar from '../components/NavBar';

function App() {
  const [user, setUser] = useState(getUser());

  // in here
  // use the useState hook to define a state variable called user
  // initialize that to null
  // the setter function should be named according to convention
  return (
    <>
      {
        user
          ?
          <>
            <NavBar user={user} setUser={setUser}/>
            <Routes>
              <Route path='/' element={<ResourceHistoryPage />}/>
              <Route path='/orders/new' element={<NewResourcePage />}/>
              <Route path='/orders' element={<ResourceHistoryPage />}/>
              <Route path='/resource/:id' element={<ResourcePage />}/>
            </Routes>
          </>
          :
          < AuthPage setUser={setUser} />
      }
    </>
  )
}

export default App