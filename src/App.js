import React from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import AddEmployee from "./Components/AddEmployee/AddEmployee";
import ApplyLeave from "./Components/ApplyLeave/ApplyLeave";

const App = () => {
  return (
    <div>
      {/* <ApplyLeave /> */}
      <Header />
      <Sidebar />
      {/* <AddEmployee /> */}
    </div>
  );
};

export default App;
