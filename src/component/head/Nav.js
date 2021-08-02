

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-background d-none d-lg-flex ">
        <div className="container">
          <a className="navbar-brand text-success" href="#home">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#fd7e14" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg>
            sell on Pablo</a>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">pablo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">food</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimony">others</a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav
