import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import useToken from "./useToken";
import SideNavbar from "../partials/SideNavbar";
import TopNavbar from "../partials/TopNavbar";
function App() {

    const {token, setToken } = useToken();

    if(!token){
        return <Login setToken={setToken}/>
    }
    return(
        <div className="wrapper">
            <BrowserRouter>
                <div id="wrapper">
                    <SideNavbar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <TopNavbar />
                            <Routes>
                                <Route path="/" element={<Dashboard/>} />
                                <Route path="/dashboard" element={<Dashboard/>} />
                                <Route path="/payment-method" element={<PaymentMethod/>} />
                                <Route path="/daily-payment" element={<PaymentMethod/>} />
                                <Route path="/daily-receipt" element={<PaymentMethod/>} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;