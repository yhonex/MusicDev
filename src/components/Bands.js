import React, { useState } from "react";
import { AppState } from "../context/AppContext";
import musicgif1 from "../assets/img/musicgif1.gif";
import note1 from "../assets/img/note1.jpg";

const Bands = () => {
  const { bandsData } = AppState();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const handleSearch = bandsData.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );

  const nextPage = () => {
    if (bandsData.length > currentPage + 2) setCurrentPage(currentPage + 2);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 2);
  };

  return (
    <div className="landing-container">
      <div>
        <img src={musicgif1} alt="" className="imgs" />
      </div>
      <div className="text-container">
        <h2 className="text-title">Busca y escucha tus bandas favoritos!</h2>
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
              <div className="card-container">
                <img src={note1} alt="" className="img-card" />
                <h5 className="mt-2"> {data.name} </h5>
                <h5>Genero: {data.genreCode} </h5>
                <h5>Formada en el año: {data.year} </h5>
                <h5> en: {data.country} </h5>
                <h5>
                  y sus mienbros son:
                  <br />
                  {data.members.map((member, index) => {
                    return (
                      <div className="card-menbers" key={index}>
                        <h6> {member.name}&nbsp;&nbsp; </h6>
                      </div>
                    );
                  })}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bands;
