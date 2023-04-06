import React from 'react'

function MainContainer() {
    return (
        <div>
            <main className='main-container'>
                <div className="row p-3">
                    <div className="col-9">
                        <h4>RoyalUI DashBoard</h4>
                    </div>
                    <div className="col-3 text-end mx-0">
                        <div className="btn btn-primary pill">Report</div>
                    </div>
                </div>

                <div className="container-fluid p-2">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-5 mx-2">
                                <div className="row justify-content-between">
                                    <div className="col-5 shadow-sm">
                                        <div className="row">
                                            <p className="fs-5 text-muted">SALES</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                <h4 className=" fw-bolder">500$</h4>
                                            </div>
                                            <div className="col-4"><p className=" fs-5 text-center"><i className="fa-solid fa-sack-dollar"></i></p></div>
                                        </div>
                                        <div className="row">
                                            <p>0.2% (90 days)</p>
                                        </div>
                                    </div>
                                    <div className="col-5 shadow-sm">
                                        <div className="row">
                                            <p className="fs-5 text-muted">SALES</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                <h4 className=" fw-bolder">500$</h4>
                                            </div>
                                            <div className="col-4"><p className=" fs-5 text-center"><i className="fa-solid fa-sack-dollar"></i></p></div>
                                        </div>
                                        <div className="row">
                                            <p>0.2% (90 days)</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 shadow-sm">
                                        <div className="row py-2 fs-5">
                                            <p>SALES DETAILS</p>
                                        </div>
                                        <div className="row">
                                            <div className="container fw-light">
                                                <p>Lore harum eligendi odio velit eius tempora. Pariatur modi unde quaerat maxime porro.</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <img src="data:image/png;base64,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" alt="" />
                                        </div>
                                        <div className="row p-2 ">
                                            <div className="col-4 text-center fs-6 fw-light text-muted"></div>
                                            <div className="col-4 text-center fs-6 fw-light text-muted">Today<i className="fa-sharp mx-2 fa-solid fa-angle-down"></i></div>
                                            <div className="col-4 text-center fs-6 fw-light text-muted"><a href="#">View all</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 mx-2">
                                <div className="row justify-content-between">
                                    <div className="col-5 shadow-sm">
                                        <div className="row">
                                            <p className="fs-5 text-muted">SALES</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                <h4 className=" fw-bolder">500$</h4>
                                            </div>
                                            <div className="col-4"><p className=" fs-5 text-center"><i className="fa-solid fa-sack-dollar"></i></p></div>
                                        </div>
                                        <div className="row">
                                            <p>0.2% (90 days)</p>
                                        </div>
                                    </div>
                                    <div className="col-5 shadow-sm">
                                        <div className="row">
                                            <p className="fs-5 text-muted">SALES</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                <h4 className=" fw-bolder">500$</h4>
                                            </div>
                                            <div className="col-4"><p className=" fs-5 text-center"><i className="fa-solid fa-sack-dollar"></i></p></div>
                                        </div>
                                        <div className="row">
                                            <p>0.2% (90 days)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 shadow-sm">
                                        <div className="row py-2 fs-5 pb-0">
                                            <p>PURCHASES</p>
                                        </div>
                                        <div className="row">
                                            <div className="container fw-light">
                                                <p>Lore harum eligendi odio velit eius tempora. Pariatur modi unde quaerat maxime porro.</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <img src="data:image/png;base64,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" alt="" />
                                        </div>
                                        <div className="row p-2 ">
                                            <div className="col-4 text-center fs-6 fw-light text-muted"></div>
                                            <div className="col-4 text-center fs-6 fw-light text-muted">Today <i className="fa-sharp mx-2 fa-solid fa-angle-down"></i></div>
                                            <div className="col-4 text-center fs-6 fw-light text-muted"><a href="#">View all</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MainContainer
