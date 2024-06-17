import "./Login.css";
import { auth } from "../config/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/items");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          height: "100vh",
        }}
      >
        {/* <img src="https://static.vecteezy.com/system/resources/previews/012/871/371/original/google-search-icon-google-product-illustration-free-png.png" alt="login-with-google" style={{ width: "5%" }} />
                <button style={{ padding: "1.5rem", fontSize: "1.5rem", fontFamily: "sans-serif", fontWeight: "bold", color: "red", borderRadius: "5%" }}
                    onClick={signInWithGoogle}
                >

                    Login with Google</button> */}
        <div className="login-container">
          <button className="login-button" onClick={signInWithGoogle}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/871/371/original/google-search-icon-google-product-illustration-free-png.png"
              alt="Google Logo"
              className="google-logo"
            />
            Login with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;

// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { auth } from "../config/firebase";
// import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState({});
//   const navigate = useNavigate();
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });
//   }, []);
//   const isLoggedIn = user ? true : false;

//   useEffect(() => {
//     if (isLoggedIn) {
//       navigate("/");
//     }
//   }, [isLoggedIn, navigate]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("Logging the User");
//       const user = await signInWithEmailAndPassword(auth, email, password);
//       console.log("User Logged In");
//       console.log(user);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div classNameName="flex h-screen text-gray-900">
//       <div classNameName="w-11/12 p-8 m-auto bg-white rounded-lg sm:w-96 bg-opacity-80 bg-clip-padding border-2 border-blue-400 ">
//         <div classNameName="space-y-2">
//           <div>
//             <h1 classNameName="text-2xl font-medium text-center md:text-4xl font-roboto">
//               Welcome Back!
//             </h1>
//           </div>
//           <div>
//             <div classNameName="space-x-1 text-sm text-center md:text-base font-nunito">
//               <span>New to SimpleForm?</span>
//               <Link to="/register" classNameName="font-semibold text-blue-500">
//                 Sign Up
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div classNameName="mt-10">
//           <form onSubmit={handleLogin} classNameName="text-base font-nunito">
//             <div classNameName="space-y-4">
//               <div classNameName="relative flex items-center">
//                 <input
//                   classNameName="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 border border-blue-300"
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div classNameName="relative flex items-center">
//                 <input
//                   classNameName="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 border border-blue-300"
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>

//               <div>
//                 <button
//                   type="Submit"
//                   classNameName="w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg"
//                 >
//                   Sign In
//                 </button>
//               </div>
//             </div>
//           </form>
//           <div classNameName="mt-4">
//             <button classNameName="w-full p-2 text-sm font-normal text-center transition duration-100 bg-white rounded-md md:text-lg font-roboto focus:outline-none hover:shadow-lg border border-blue-200">
//               <span classNameName="flex items-center justify-center gap-4">
//                 <span>Continue with Google</span>
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
