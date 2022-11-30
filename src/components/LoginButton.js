import { useAuth0 } from "@auth0/auth0-react";
import { AppState } from "../context/AppContext";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { setIslogin } = AppState();

  return (
    <button
      className="btn btn-outline-info mt-3"
      onClick={() => loginWithRedirect().then(setIslogin(true))}
    >
      Login
    </button>
  );
};

export default LoginButton;
