import { Link } from "react-router-dom";

const Nav = () => {
    return (<><nav className="navbar navbar-expand-sm navbar-light bg-light">
    <div className="container">
            <Link to="/" className="navbar-brand"><img src="https://thenounproject.com/api/private/icons/2079570/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0" width="50" height="50" alt="icon"/></Link>
      {/* <a className="navbar-brand" href="index.html"> 
      </a> */}
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
                  {/* <a className="nav-link active" href="index.html" aria-current="page">Home </a> */} <Link to="/" className="nav-link active"><span className="visually-hidden">(current)</span></Link>
              </li>
              <li className="nav-item">
                    <Link to="/aboutus" className="nav-link active">About Us</Link>
                  {/* <a className="nav-link" href="aboutus.html">About Us</a> */}
              </li>
              <li className="nav-item">
                  {/* <a className="nav-link" href="products.html">Products</a> */}
                  <Link to="/products" className="nav-link active">Products</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">FAQ</a> */}
                <Link to="/faq" className="nav-link active">FAQ</Link>
            </li>
              <li className="nav-item">
                  {/* <a className="nav-link" href="contactus.html">Contact Us</a> */}
                  <Link to="/contactus" className="nav-link active">Contact Us</Link>
              </li>
          </ul>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
          <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h1 className="modal-title">Login</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">

                          <div className="mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                            <label for="username" className="form-label">Username</label>
                            <input type="text"
                              className="form-control" name="username" id="username" aria-describedby="helpId" placeholder="Username"/>
                          </div>

                          <div className="mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                            </svg>
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" id="password" placeholder="Password"/>
                          </div>
                          
                      </div>
                      <div className="modal-footer">
                          <Link to="/wip"><button type="button" className="btn btn-primary">Login</button></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
</div>
</nav></>);
}
 
export default Nav;