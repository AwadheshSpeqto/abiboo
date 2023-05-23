import logo from "./logo.svg";
import "./App.css";
import Routing from "./component/Utils/Routing";
import Sidebar from "./component/Utils/Sidebar";
import Charts from "./component/adminPanel/Charts";
import Tables from "../src/component/adminPanel/Table/Tables";
import ClientDetails from "./Accounts/ClientDetails/ClientDetails";
// import CustomersMng from "./Accounts/CustomersMng";
import RequestSent from "./Accounts/RequestSent/RequestSent";
import ApiRequest from "./Accounts/ApiRequest/ApiRequest";

function App() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row backGr">

          <div className="col-md-2  ">
            <Sidebar />
          </div>
          <div className="col-md-10 ">
            <div className="col-md-11 mx-auto">
              <Routing />

            </div>
          </div>
          {/* <ClientDetails/> */}
          {/* <CustomersMng/> */}
          {/* <RequestSent/> */}
          {/* <ApiRequest/> */}
        </div>
        </div>
    </>
  );
}

export default App;
