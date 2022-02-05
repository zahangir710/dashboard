import { useState } from "react/cjs/react.development";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import TopDashBar from "./components/TopDashBar/TopDashBar";
import Home from "./pages/Home/Home";

function App() {
  const [sideBar, setSideBar] = useState(false);
  const sideBarToggle = () => {
    setSideBar(!sideBar);
  };
  return (
    <div className="wrapper">
      <TopDashBar sideBarToggle={sideBarToggle} sideBar={sideBar} />
      <div className="container">
        <SideBar sideBar={sideBar}></SideBar>
        <Home />
      </div>
    </div>
  );
}

export default App;
