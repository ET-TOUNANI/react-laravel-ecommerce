import React from 'react'
import {Link} from 'react-router-dom'
function Sidebar() {
  return (
    <div>
        <nav classNameName="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div classNameName="sb-sidenav-menu">
                        <div classNameName="nav">
                            <div classNameName="sb-sidenav-menu-heading">Core</div>
                            <Link classNameName="nav-link" to="/admin">
                                <div classNameName="sb-nav-link-icon"><i classNameName="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </Link>
                            <div classNameName="sb-sidenav-menu-heading">Interface</div>
                            <Link classNameName="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div classNameName="sb-nav-link-icon"><i classNameName="fas fa-columns"></i></div>
                                Layouts
                                <div classNameName="sb-sidenav-collapse-arrow"><i classNameName="fas fa-angle-down"></i></div>
                            </Link>
                            <div classNameName="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav classNameName="sb-sidenav-menu-nested nav">
                                    <Link classNameName="nav-link" to="layout-static.html">Static Navigation</Link>
                                    <Link classNameName="nav-link" to="layout-sidenav-light.html">Light Sidenav</Link>
                                </nav>
                            </div>
                            <Link classNameName="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div classNameName="sb-nav-link-icon"><i classNameName="fas fa-book-open"></i></div>
                                Pages
                                <div classNameName="sb-sidenav-collapse-arrow"><i classNameName="fas fa-angle-down"></i></div>
                            </Link>
                            <div classNameName="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav classNameName="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <Link classNameName="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div classNameName="sb-sidenav-collapse-arrow"><i classNameName="fas fa-angle-down"></i></div>
                                    </Link>
                                    <div classNameName="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav classNameName="sb-sidenav-menu-nested nav">
                                    Link      <Link classNameName="nav-link" to="login.html">Login</Link>
                                            <Link classNameName="nav-link" to="register.html">Register</Link>
                                            <Link classNameName="nav-link" to="password.html">Forgot Password</Link>
                                        </nav>
                                    </div>
                                    <Link classNameName="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div classNameName="sb-sidenav-collapse-arrow"><i classNameName="fas fa-angle-down"></i></div>
                                    </Link>
                                    <div classNameName="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav classNameName="sb-sidenav-menu-nested nav">
                                            <Link classNameName="nav-link" to="401.html">401 Page</Link>
                                            <Link classNameName="nav-link" to="404.html">404 Page</Link>
                                            <Link classNameName="nav-link" to="500.html">500 Page</Link>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div classNameName="sb-sidenav-menu-heading">Addons</div>
                            <Link classNameName="nav-link" href="charts.html">
                                <div classNameName="sb-nav-link-icon"><i classNameName="fas fa-chart-area"></i></div>
                                Charts
                            </Link>
                            <Link classNameName="nav-link" to="tables.html">
                                <div classNameName="sb-nav-link-icon"><i classNameName="fas fa-table"></i></div>
                                Tables
                            </Link>
                        </div>
                    </div>
                    <div classNameName="sb-sidenav-footer">
                        <div classNameName="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
    </div>
  )
}

export default Sidebar