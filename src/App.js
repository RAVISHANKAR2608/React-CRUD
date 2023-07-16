import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Users from './components/pages/Users';
import AddUsers from './components/pages/AddUsers';
import ViewUser from './components/pages/ViewUser';
import NotFound from './components/pages/Notfound';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact={true} path="/" element={<Users/>}></Route>
          <Route exact={true} path="/add" element={<AddUsers/>}/>
          <Route exact={true} path="/edit/:i" element={<AddUsers/>}/>
          <Route exact={true} path="/view/:i" element={<ViewUser/>}/>
          <Route exact={true} path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
