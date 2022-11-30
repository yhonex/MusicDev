import React, { useState } from "react";
import { AppState } from "../context/AppContext";
import musicgif3 from "../assets/img/musicgif3.gif";
import note2 from "../assets/img/note2.jpg";

const Albums = () => {
  const { albumsData } = AppState();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const handleSearch = albumsData.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );

  const nextPage = () => {
    if (albumsData.length > currentPage + 2) setCurrentPage(currentPage + 2);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 2);
  };
  return (
    <div className="landing-container">
      <div>
        <img src={musicgif3} alt="" className="imgs" />
      </div>
      <div className="text-container">
        <h2 className="text-title">Busca y escucha tus Albums favoritos!</h2>
        <input
          type="text"
          placeholder="Search Bands"
          className="form-control form-control-sm w-75 ms-5 border-1 text-dark mt-4 text-center"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="butons">
          <button
            type="button"
            className="btn btn-outline-info "
            onClick={prevPage}
          >
            Back
          </button>
          <button
            type="button"
            className="btn btn-outline-info ms-2"
            onClick={nextPage}
          >
            Next
          </button>
        </div>

        {handleSearch.slice(currentPage, currentPage + 2).map((data, index) => {
          return (
            <div className="card-list" key={index}>
              <div className="card-container-album">
                <img src={note2} alt="" className="img-card" />
                <h6 className="mt-5"> {data.name} </h6>
                <h6>del año: {data.year} </h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Albums;
