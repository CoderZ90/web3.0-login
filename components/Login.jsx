import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();

  return (
    <div className="gradientBG login-screen">
      <button onClick={authenticate} className="btn">
        Login to the METAVERSE
      </button>
    </div>
  );
};

export default Login;
