import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Homepage from "./pages/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import Albums from "./components/Albums";
import Bands from "./components/Bands";
import Headerbar from "./layouts/Navbar";
import LoginPage from "./pages/LoginPage";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <div className="App">
          <Routes>
            <Route path="/" element={<Headerbar />}>
              <Route index element={<Homepage />} />
              <Route path="Albums" element={<Albums />} />
              <Route path="Bands" element={<Bands />} />
              <Route path="*" element={<Navigate Replace to="/" />} />
            </Route>
          </Routes>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default App;
