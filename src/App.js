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
    </div>
  );
}

export default App;
