import './App.css';
import logo from './images/Substance-Alchemist.png';

function App() {
  return (
    <div>
{/* header */}
      <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Logo" />
              Conf Hawaii
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">Los oradores</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">El lugar y la fecha</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Conviértete en orador</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-compra" href="#">Comprar tickets</a>
                </li>
                
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
      </header>
{/* header */}

{/* footer */}
      <footer id="footer" className="pb-4 pt-4">
        <div className="container">
          <div className="row text-center">
            <div className="col-12 col-lg">
              <a href="#">Preguntas Frecuentes</a>
            </div>
            <div className="col-12 col-lg">
              <a href="#">Contactanos</a>
            </div>
            <div className="col-12 col-lg">
              <a href="#">Prensa</a>
            </div>
            <div className="col-12 col-lg">
              <a href="#">Conferencias</a>
            </div>
            <div className="col-12 col-lg">
              <a href="#">Términos y condiciones</a>
            </div>
            <div className="col-12 col-lg">
              <a href="#">Estudiantes</a>
            </div>
          </div>
        </div>
      </footer>
{/* end footer */}
    </div>
  );
}

export default App;
