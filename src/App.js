import logo from "./logo.svg";
import "./App.css";
import Routing from "./component/Utils/Routing";
import Sidebar from "./component/Utils/Sidebar";
import Charts from "./component/adminPanel/Charts";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <div className="row">
              <Routing />
            </div>
            <div className="row">
              <Charts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
