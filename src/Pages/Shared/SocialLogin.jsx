import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="text-center my-3">
        <button
          onClick={handleGoogleSignIn}
          className="px-2 bg-blue-600 text-white text-2xl font-semibold hover:bg-blue-500  rounded "
        >
          G
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
