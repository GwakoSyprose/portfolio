import Portfolio from './Portfolio'
import Blog from './Blog'
import Contact from './Contact'
import Logo from '../images/syproseLogo.png'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light static-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} className="img-fluid float-left" style={{

              height: 70

            }} alt="noimage" />
          </a>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#home">Home
                <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead container h-100" id="home">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
          </div>
        </div>
      </header>
      <Blog />
      <Portfolio />
      <hr />
      <Contact />
      <footer className="bg-white">

        <div className="container p-4">

          <div className="text-center p-3 icons">
            <span className="text-white"> © 2021 Copyright </span>
            <a href="https://web.facebook.com/syprose.gwako/" className="fa fa-facebook"></a>
            <a href="https://twitter.com/SyproseGwako" className="fa fa-twitter"></a>
            <a href="https://www.linkedin.com/in/syprose-gwako-4a99b211b/" className="fa fa-linkedin"></a>
            <a href="https://www.instagram.com/__gwako/" className="fa fa-instagram"></a>
            <a href="https://join.skype.com/invite/h025ddywuB8N" className="fa fa-skype"></a>

          </div>
        </div >

      </footer>
    </div >
  );
}

export default App;
