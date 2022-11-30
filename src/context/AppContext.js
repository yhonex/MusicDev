import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchApiBands, fetchApiAlbums } from "../config/Api";

const ContextApp = createContext();

const AppContext = ({ children }) => {
  const [bandsData, setBandsData] = useState([]);
  const [albumsData, setAlbumsData] = useState([]);

  const fetchBandsData = async () => {
    const res = await axios.get(fetchApiBands());
    setBandsData(res.data);
  };

  const fetchAlbumsData = async () => {
    const res = await axios.get(fetchApiAlbums());
    setAlbumsData(res.data);
  };

  useEffect(() => {
    fetchBandsData();
  }, []);
  useEffect(() => {
    fetchAlbumsData();
  }, []);

  return (
    <ContextApp.Provider value={{ bandsData, albumsData }}>
      {children}
    </ContextApp.Provider>
  );
};

export default AppContext;

export const AppState = () => {
  return useContext(ContextApp);
};
