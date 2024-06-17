// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../config/firebase";
// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const user = await createUserWithEmailAndPassword(auth, email, password);
//       console.log(user);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="flex h-screen text-gray-900">
//       <div className="w-11/12 p-8 m-auto bg-white rounded-lg sm:w-96 bg-opacity-80 bg-clip-padding  border-2 border-blue-400 ">
//         <div className="space-y-2">
//           <div>
//             <h1 className="text-2xl font-medium text-center md:text-4xl font-roboto">
//               Create Account
//             </h1>
//           </div>
//           <div>
//             <div className="space-x-1 text-sm text-center md:text-base font-nunito">
//               <span>Already have an account?</span>
//               <Link to="/login" className="font-semibold text-blue-500">
//                 Sign In
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="mt-10">
//           <form onSubmit={handleSubmit} className="text-base font-nunito">
//             <div className="space-y-4">
//               <div className="relative flex items-center">
//                 <input
//                   className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 border border-blue-300 "
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="relative flex items-center">
//                 <input
//                   className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 border border-blue-300"
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               {/* <div className="flex items-start space-x-2 md:items-center">
//                 <input
//                   className="focus:outline-none"
//                   type="checkbox"
//                   name="terms"
//                   id="serviceTerms"
//                 />
//                 <label className="-mt-1 text-sm sm:mt-0" htmlFor="serviceTerms">
//                   <span>I have read and agree to the</span>
//                   <a className="font-semibold text-blue-500" href="">
//                     Terms&nbsp;of&nbsp;Service
//                   </a>
//                 </label>
//               </div> */}
//               <div>
//                 <button
//                   type="submit"
//                   className="w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg"
//                 >
//                   Sign Up
//                 </button>
//               </div>
//             </div>
//           </form>
//           <div className="mt-4">
//             <button className="w-full p-2 text-sm font-normal text-center transition duration-100 bg-white rounded-md md:text-lg font-roboto focus:outline-none hover:shadow-lg border border-blue-200">
//               <span className="flex items-center justify-center gap-4">
//                 <span>Continue with Google</span>
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
