import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar position-sticky top-10 shadow-sm">
                <div className="header px-3">
                    <span>
                        <h2>Royal UI</h2>
                    </span>
                </div>
                <div className="search input-icons">
                    <button className="btn btn-secondary d-inline" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-solid fa-bars mx-2"></i>
                    </button>
                    <ul className="dropdown-menu dropdown">
                        <li><a className="dropdown-item" href="#">Home</a></li>
                        <li><a className="dropdown-item" href="#">Services</a></li>
                        <li><a className="dropdown-item" href="#">Contact Us</a></li>
                        <li><a className="dropdown-item" href="#">About Us</a></li>
                    </ul>
                    <button><i className="fa fa-search mx-2"></i></button>
                    <input type="text" className="" placeholder="search now" />
                </div>
                <div className="logo px-3">
                    <a href="#"><i className="fa-regular fa-bell mx-2"></i></a>
                    <a href="#"><i className="fa-regular fa-envelope mx-2"></i></a>
                    <img src="data:image/jpeg;base64,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"
                        alt="Logo" />
                </div>
            </nav>
        </div>
    )
}

export default Navbar
