import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-success sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-success sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-success sidebar sidebar-dark accordion");
    }
  };
  const changeStyle1 = () => {
    if (
      style == "navbar-nav bg-gradient-success sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-success sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  return (
    <div>
      <body id="page-top">
        {/*  <!-- Page Wrapper --> */}
        <div id="wrapper">
          {/*  <!-- Sidebar --> */}
          <ul className={style} id="accordionSidebar">
            {/*  <!-- Sidebar - Brand --> */}
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="#"
            >
              <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
              </div>
              <div className="sidebar-brand-text mx-3">SPCL</div>
              <div className="text-center d-none d-md-inline">
                <button
                  className="rounded-circle border-0"
                  id="sidebarToggle"
                  onClick={changeStyle}
                ></button>
              </div>
            </a>

            {/*   <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/*  <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </a>
            </li>

            {/*  <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/*   <!-- Heading --> */}
            <div className="sidebar-heading">MAIN</div>

            {/*  <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <i className="fas fa-fw fa-cog"></i>
                <span>Courses</span>
              </a>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Course Components:</h6>
                  <a className="collapse-item" href="buttons.html">
                    Course Contents
                  </a>
                  <a className="collapse-item" href="cards.html">
                    Course Assignment
                  </a>
                  <a className="collapse-item" href="cards.html">
                    Course Material
                  </a>
                </div>
              </div>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i className="fas fa-fw fa-wrench"></i>
                <span>Utilities</span>
              </a>
              <div
                id="collapseUtilities"
                className="collapse"
                aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Custom Utilities:</h6>
                  <a className="collapse-item" href="utilities-color.html">
                    Colors
                  </a>
                  <a className="collapse-item" href="utilities-border.html">
                    Borders
                  </a>
                  <a className="collapse-item" href="utilities-animation.html">
                    Animations
                  </a>
                  <a className="collapse-item" href="utilities-other.html">
                    Other
                  </a>
                </div>
              </div>
            </li>

            {/*  <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">Add-ons</div>

            {/*  <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapsePages"
                aria-expanded="true"
                aria-controls="collapsePages"
              >
                <i className="fas fa-fw fa-folder"></i>
                <span>Saved Documents</span>
              </a>
              <div
                id="collapsePages"
                className="collapse"
                aria-labelledby="headingPages"
                data-parent="#accordionSidebar"
              >
                {/* <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Login Screens:</h6>
                  <a className="collapse-item" href="login.html">
                    Login
                  </a>
                  <a className="collapse-item" href="register.html">
                    Register
                  </a>
                  <a className="collapse-item" href="forgot-password.html">
                    Forgot Password
                  </a>
                  <div className="collapse-divider"></div>
                  <h6 className="collapse-header">Other Pages:</h6>
                  <a className="collapse-item" href="404.html">
                    404 Page
                  </a>
                  <a className="collapse-item" href="blank.html">
                    Blank Page
                  </a>
                </div> */}
              </div>
            </li>

            {/* <!-- Nav Item - Charts --> */}
            <li className="nav-item">
              <a className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Charts</span>
              </a>
            </li>

            {/*  <!-- Nav Item - Tables --> */}
            <li className="nav-item">
              <a className="nav-link" href="tables.html">
                <i className="fas fa-fw fa-table"></i>
                <span>Tables</span>
              </a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />

            {/*   <!-- Sidebar Toggler (Sidebar) --> */}
            {/*   <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                        </div> */}

            {/*  <!-- Sidebar Message --> */}
            <div className="sidebar-card d-none d-lg-flex">
              <img
                className="sidebar-card-illustration mb-2"
                src="img/undraw_rocket.svg"
                alt="..."
              />
              <p className="text-center mb-2">
                <strong>Scholars-Pro Connect LLP</strong> is packed with premium
                features, components, and more!
              </p>
              <a className="btn btn-success btn-sm" href="#">
                Upgrade to Pro!
              </a>
            </div>
          </ul>
          {/*  <!-- End of Sidebar --> */}

          {/*  <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/*  <!-- Main Content --> */}
            <div id="content">
              {/*  <!-- Topbar --> */}
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                  onClick={changeStyle1}
                >
                  <i className="fa fa-bars"></i>
                </button>

                {/*  <!-- Topbar Search --> */}
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-success" type="button">
                        <i className="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>

                {/*  <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">
                  {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                  <li className="nav-item dropdown no-arrow d-sm-none">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="searchDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-search fa-fw"></i>
                    </a>
                    {/*   <!-- Dropdown - Messages --> */}
                    <div
                      className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                      aria-labelledby="searchDropdown"
                    >
                      <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control bg-light border-0 small"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fas fa-search fa-sm"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>

                  {/*  <!-- Nav Item - Alerts --> */}
                  <li className="nav-item dropdown no-arrow mx-1">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="alertsDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-bell fa-fw"></i>
                      {/*  <!-- Counter - Alerts --> */}
                      <span className="badge badge-danger badge-counter">
                        3+
                      </span>
                    </a>
                    {/*   <!-- Dropdown - Alerts --> */}
                    <div
                      className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="alertsDropdown"
                    >
                      <h6 className="dropdown-header">Notifications</h6>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="mr-3">
                          <div className="icon-circle bg-primary">
                            <i className="fas fa-file-alt text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div className="small text-gray-500">May 2, 2024</div>
                          <span className="font-weight-bold">
                            Hey!! You Successfully Enrolled in our Course 🥳
                          </span>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="mr-3">
                          <div className="icon-circle bg-success">
                            {/* <i className="fas fa-donate text-white"></i> */}
                            <i className="fas fa-file-alt text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div className="small text-gray-500">May 9, 2024</div>
                          Course Material Saved to your Dashboard !
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="mr-3">
                          <div className="icon-circle bg-warning">
                            {/* <i className="fas fa-exclamation-triangle text-white"></i> */}
                            <i className="fas fa-file-alt text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div className="small text-gray-500">
                            May 20, 2024
                          </div>
                          We Have Launched a New Course for you 🤓, Have a
                          look..
                        </div>
                      </a>
                      <a
                        className="dropdown-item text-center small text-gray-500"
                        href="#"
                      >
                        Show All Alerts
                      </a>
                    </div>
                  </li>

                  {/*  <!-- Nav Item - Messages --> */}
                  <li className="nav-item dropdown no-arrow mx-1">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="messagesDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-envelope fa-fw"></i>
                      {/*  <!-- Counter - Messages --> */}
                      <span className="badge badge-danger badge-counter">
                        7
                      </span>
                    </a>
                    {/*   <!-- Dropdown - Messages --> */}
                    <div
                      className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="messagesDropdown"
                    >
                      <h6 className="dropdown-header">Message Center</h6>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="img/undraw_profile_1.svg"
                            alt="..."
                          />
                          <div className="status-indicator bg-success"></div>
                        </div>
                        <div className="font-weight-bold">
                          <div className="text-truncate">
                            Hi there! I am wondering if you can help me with a
                            problem I've been having.
                          </div>
                          <div className="small text-gray-500">
                            Emily Fowler · 58m
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="img/undraw_profile_2.svg"
                            alt="..."
                          />
                          <div className="status-indicator"></div>
                        </div>
                        <div>
                          <div className="text-truncate">
                            I have the photos that you ordered last month, how
                            would you like them sent to you?
                          </div>
                          <div className="small text-gray-500">
                            Jae Chun · 1d
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="img/undraw_profile_3.svg"
                            alt="..."
                          />
                          <div className="status-indicator bg-warning"></div>
                        </div>
                        <div>
                          <div className="text-truncate">
                            Last month's report looks great, I am very happy
                            with the progress so far, keep up the good work!
                          </div>
                          <div className="small text-gray-500">
                            Morgan Alvarez · 2d
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img className="rounded-circle" src="#" alt="..." />
                          <div className="status-indicator bg-success"></div>
                        </div>
                        <div>
                          <div className="text-truncate">
                            Am I a good boy? The reason I ask is because someone
                            told me that people say this to all dogs, even if
                            they aren't good...
                          </div>
                          <div className="small text-gray-500">
                            Chicken the Dog · 2w
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item text-center small text-gray-500"
                        href="#"
                      >
                        Read More Messages
                      </a>
                    </div>
                  </li>

                  <div className="topbar-divider d-none d-sm-block"></div>

                  {/* <!-- Nav Item - User Information --> */}
                  <li className="nav-item dropdown no-arrow">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                        Your Name
                      </span>
                      <img
                        className="img-profile rounded-circle"
                        src="img/undraw_profile.svg"
                      />
                    </a>
                    {/*  <!-- Dropdown - User Information --> */}
                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                        Settings
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                        Activity Log
                      </a>
                      <div className="dropdown-divider"></div>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-toggle="modal"
                        data-target="#logoutModal"
                      >
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              {/*  <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">
                {/*  <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                  {/* <a
                    href="#"
                    className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                  >
                    <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                    Generate Report
                  </a> */}
                </div>

                {/*  <!-- Content Row --> */}
                <div className="row">
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              Attendance
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              80.52%
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-calendar fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                              Courses Completed
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              1/3
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-graduation-cap fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                              Tasks
                            </div>
                            <div className="row no-gutters align-items-center">
                              <div className="col-auto">
                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                  50%
                                </div>
                              </div>
                              <div className="col">
                                <div className="progress progress-sm mr-2">
                                  <div
                                    className="progress-bar bg-info a1"
                                    role="progressbar"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                              Your Progress
                            </div>
                            <div className="row no-gutters align-items-center">
                              <div className="col-auto">
                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                  10.21%
                                </div>
                              </div>
                              <div className="col">
                                <div className="progress progress-sm mr-2">
                                  <div
                                    className="progress-bar bg-info a1"
                                    role="progressbar"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-bullseye fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  <!-- Content Row --> */}

                <div className="row">
                  <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                      {/*  <!-- Card Header --> */}
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Lecture Schedule
                        </h6>
                      </div>
                      {/*  <!-- Card Body --> */}
                      <div className="card-body">
                        <div className="chart-area">
                          <h1>Calendar</h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*  <!-- Pie Chart --> */}
                  <div className="col-xl-4 col-lg-5">
                    <div className="card shadow mb-4">
                      {/*  <!-- Card Header --> */}
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Test Schedules
                        </h6>
                      </div>
                      {/*  <!-- Card Body --> */}
                      <div className="card-body">
                        <div className="chart-pie pt-4 pb-2">
                          <canvas id="myPieChart"></canvas>
                        </div>
                        <div className="mt-4 text-center small">
                          <span className="mr-3">
                            <i className="fas fa-circle text-success"></i> Today
                          </span>
                          <span className="mr-3">
                            <i className="fas fa-circle text-info"></i> This
                            week
                          </span>
                          <span className="mr-3">
                            <i className="fas fa-circle text-primary"></i> Next
                            Week
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*   <!-- Content Row --> */}
                <div className="row">
                  {/*   <!-- Content Column --> */}
                  <div className="col-lg-6 mb-4">
                    {/* <!-- Project Card Example --> */}
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Your Courses
                        </h6>
                      </div>
                      <div className="card-body">
                        <h4 className="small font-weight-bold">
                          Software Development
                          <span className="float-right">20%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div
                            className="progress-bar bg-danger a2"
                            role="progressbar"
                          ></div>
                        </div>
                        <h4 className="small font-weight-bold">
                          Data Science
                          <span className="float-right">40%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div
                            className="progress-bar bg-warning a3"
                            role="progressbar"
                          ></div>
                        </div>
                        <h4 className="small font-weight-bold">
                          Artificial Intelligence
                          <span className="float-right">60%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div
                            className="progress-bar a7"
                            role="progressbar"
                          ></div>
                        </div>
                        <h4 className="small font-weight-bold">
                          Machine Learning
                          <span className="float-right">80%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div
                            className="progress-bar bg-info a4"
                            role="progressbar"
                          ></div>
                        </div>
                        <h4 className="small font-weight-bold">
                          Web Development
                          <span className="float-right">Complete!</span>
                        </h4>
                        <div className="progress">
                          <div
                            className="progress-bar bg-success a5"
                            role="progressbar"
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Color System --> */}
                    <div className="row">
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-primary text-white shadow">
                          <div className="card-body">
                            Primary
                            <div className="text-white-50 small">#4e73df</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-success text-white shadow">
                          <div className="card-body">
                            Success
                            <div className="text-white-50 small">#1cc88a</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                          <div className="card-body">
                            Info
                            <div className="text-white-50 small">#36b9cc</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-warning text-white shadow">
                          <div className="card-body">
                            Warning
                            <div className="text-white-50 small">#f6c23e</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-danger text-white shadow">
                          <div className="card-body">
                            Danger
                            <div className="text-white-50 small">#e74a3b</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-secondary text-white shadow">
                          <div className="card-body">
                            Secondary
                            <div className="text-white-50 small">#858796</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-light text-black shadow">
                          <div className="card-body">
                            Light
                            <div className="text-black-50 small">#f8f9fc</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                          <div className="card-body">
                            Dark
                            <div className="text-white-50 small">#5a5c69</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Illustrations
                        </h6>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4 a6"
                            src="img/undraw_posting_photo.svg"
                            alt="..."
                          />
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Laborum velit iusto optio delectus molestias
                          labore illum, nobis fuga vitae cum sunt nesciunt quas
                          repellat cumque perferendis corrupti. Deserunt,
                          mollitia neque.
                        </p>
                        <a target="_blank" rel="nofollow" href="#">
                          See More
                        </a>
                      </div>
                    </div>

                    {/* <!-- Approach --> */}
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Card
                        </h6>
                      </div>
                      <div className="card-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Officia temporibus repellat, quaerat ratione
                          iusto nemo iure rem necessitatibus earum aliquam quas
                          iste quo beatae id fugiat recusandae tempora, sed
                          quisquam?
                        </p>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nesciunt provident esse debitis necessitatibus
                          voluptatibus quos tempora, quasi nostrum, fugit
                          deleniti reprehenderit corporis? Fuga ad et qui
                          distinctio? Fuga, est neque.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*   <!-- /.container-fluid --> */}
            </div>
            {/*   <!-- End of Main Content -->

                                        <!-- Footer --> */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Scholars-Pro Connect LLP 2024</span>
                </div>
              </div>
            </footer>
            {/* <!-- End of Footer --> */}
          </div>
        </div>

        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>

        {/*  <!-- Logout Modal--> */}
        <div
          className="modal fade"
          id="logoutModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a className="btn btn-primary" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Dashboard;
