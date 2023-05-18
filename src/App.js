import logo from "./logo.svg";
import "./App.css";
import Routing from "./component/Utils/Routing";
import Sidebar from "./component/Utils/Sidebar";
import Charts from "./component/adminPanel/Charts";
import Tables from "./component/adminPanel/Tables";
import ClientDetails from "./component/clientPanel/ClientDetails";

function App() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-3 p-0">
            <Sidebar />
          </div>
          <div className="col-9 p-0 m-0">
            <div className="row">
              <Routing />
            </div>
            
          </div>
          {/* <ClientDetails/> */}
        </div>
      </div>
    </>
  );
}

export default App;
