import React from 'react'
import './assets/admin/css/styles.css'
import './assets/admin/js/scripts'
import Images from './assets/admin/assets/img/error-404-monochrome.svg'
import {Link} from 'react-router-dom'
function NotFound() {
  return (
        <div id="layoutError">
            <div id="layoutError_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="text-center mt-4">
                                    <img className="mb-4 img-error" draggable="false" alt="img" src={Images} />
                                    <p className="lead">This requested URL was not found on this server.</p>
                                    <Link to="/">
                                        <i className="fas fa-arrow-left me-1"></i>
                                        Return to Dashboard
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutError_footer">
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website {new Date().getFullYear()}</div>
                            <div>
                                <Link to="#">Privacy Policy</Link>
                                &middot;
                                <Link to="#">Terms &amp; Conditions</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
  )
}

export default NotFound