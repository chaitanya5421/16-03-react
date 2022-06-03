import React from 'react';
import './App.css';
import ClassComp from './components/ClassComp';
import FuncComp from './components/FuncComp';
import ListsandKeys from './components/ListsandKeys';
import StyledComp from './components/StyledComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import LifeCycleComp from './components/LifeCycleComp';
import Pagination from './components/Pagination';
import Navbar from './components/Navbar';
import RouteComp from './components/RoutingComponents/RouteComp';
import AppC from './components/Hooks/Context/AppC';


export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <FuncComp courseName="ReactJs" Duration="3 Months" />
     <ClassComp courseName="ReactJs" Duration="3 Months" /> */}
     {/* <ListsandKeys /> */}
     {/* <StyledComp /> */}
     {/* <LifeCycleComp /> */}
     {/* <Pagination /> */}
     <Navbar />
     <RouteComp />

    {/* usecontext */}
     {/* <UserContext.Provider value={"Chaitanya"}>
        <AppC />
     </UserContext.Provider> */}
    </div>
  );
}

export default App;
