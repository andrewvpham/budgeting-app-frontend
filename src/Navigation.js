
function Navigation() {
  return (
    <div className="bg-dark mb-5">
        <div className="container">
            <nav className="navbar navbar-light ">
                <a className="navbar-brand text-light" href="#">Budgeting Tool</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" ></span>
                </button>
                
                <div className="collapse navbar-collapse " id="navbarNav">
                  <a className="nav-link  text-light bi bi-person text-light navb-right" href="#">  Account</a>
                  <a className="nav-link  text-light bi bi-gear text-light navb-right" href="#">  Settings</a>
                  
                </div>
              </nav>
        </div>
    </div>
  );
}

export default Navigation;
