import { Link } from "react-router-dom";

function SideNavbar() {
    return(
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" itemID="accordionSidebar">

            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Todo App</div>
            </Link>

            <hr className="sidebar-divider my-0"/>

            <li className="nav-item">
                <Link className="nav-link" to='/dashboard'>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/payment-method'>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Payment Method</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/daily-payment'>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Daily Payment</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/daily-receipt'>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Daily Receipt</span>
                </Link>
            </li>
        </ul>
    )
}

export default SideNavbar;