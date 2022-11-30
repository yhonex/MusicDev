import React from "react";
import { Link } from "react-router-dom";
import music1 from "../assets/img/music1.png";
import musicgif2 from "../assets/img/musicgif2.gif";

const Homepage = () => {
  return (
    <div className="landing-container">
      <div className="text-container-home">
        <img src={musicgif2} alt="" className="" />
        <h2>Bienvenido a la mejor pagina de musica.</h2>
        <br />
        <h4>Disfurta de tus albunes favoritos!</h4>
        <br />
        <p>Con un click puedes ver las mejores bandas y albunes.</p>
        <Link
          type="button"
          className="btn btn-outline-info"
          as={Link}
          to="/Bands"
        >
          Bandas
        </Link>
        <Link
          type="button"
          className="btn btn-outline-info ms-2"
          as={Link}
          to="/Albums"
        >
          Albums
        </Link>
      </div>
      <div>
        <img src={music1} alt="" className="imgs-home" />
      </div>
    </div>
  );
};

export default Homepage;
