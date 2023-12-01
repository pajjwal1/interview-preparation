import { createContext } from "react";
import "./App.css";
import UseContextHookExample from "./component/Hooks/UseContextHookExample";
import UseEffectHookExample from "./component/Hooks/UseEffectHookExample";
import UseStateHookExample from "./component/Hooks/UseStateHookExample";
import UseRefHookExample from "./component/Hooks/UseRefHookExample";
import UseMemoHookExample from "./component/Hooks/UseMemoHookExample";
import UseCallbackHookExample from "./component/Hooks/UseCallbackHookExample";
import Parent from "./component/pass data from child to parent/Parent";
import ReduxPractise from "./component/Redux/ReduxPractise";
// import Parent from "./component/memo/Parent";
import ComponentA from "./component/render-props/ComponentA";
import ComponentX from "./component/forward-refs/ComponentX";
import TodoList from "./component/TodoList";
import Pagination from "./component/Pagination";
import DropDowns from "./component/DropDowns";
import SearchBar from "./component/SearchBar";
import Routing from "./component/react-routing/Routing";
import TestCompany from './component/TestCompany';
import RandomCode from "./component/RandomCode";
import ReduxToolkitExample from "./component/Redux-Toolkit/ReduxToolkitExample";
import MainComponent from "./component/redux-saga/MainComponent";
import Deck from './component/Deck/Deck'
import Calculator from "./component/Calculator/Calculator";

const name = createContext();
function App() {
  return (
    <>
    <h1>I'm the boss Component</h1>
      {/* <UseStateHookExample /> */}
      {/* <UseEffectHookExample /> */}
      {/* <name.Provider value={{firstName:"Prajjwal",lastName:"Kumar"}}>
          <UseContextHookExample />
          </name.Provider> */}
      {/* <UseRefHookExample /> */}
      {/* <UseMemoHookExample /> */}
      {/* <UseCallbackHookExample />  */}
      {/* <Parent /> */}
      {/* <ReduxPractise /> */}
      {/* <Parent /> */}
      {/* <ComponentA /> */}
      {/* <ComponentX /> */}
      {/* <TodoList /> */}
      {/* <Pagination /> */}
      {/* <DropDowns /> */}
      {/* <SearchBar /> */}
      {/* <Routing /> */}
      {/* <TestCompany /> */}
      {/* <RandomCode /> */}
      {/* <ReduxToolkitExample /> */}
      {/* <MainComponent /> */}
      {/* <Deck /> */}
      <Calculator />
    </>
  );
}

export default App;
export { name };
