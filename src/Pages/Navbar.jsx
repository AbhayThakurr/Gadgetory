import React from "react";
import { getAuth } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  // console.log(getAuth());
  const auth = getAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const signOut = () => {
    auth.signOut();
    navigate("/");
  };

  // console.log(useLocation())
  return (
    <div
      style={{
        backgroundColor: "blueviolet",
        display: "flex",
        justifyContent: "space-between",
        padding: "0.3rem",
        position: "sticky",
        top: "0",
        zIndex: "1",
        width: "100%",
      }}
    >
      <div
        style={{
          // width:"50%",
          // backgroundColor:'yellow',
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          // padding:"0.5rem"
        }}
      >
        <img
          src={auth?.currentUser?.photoURL}
          alt="photourl"
          style={{ width: "20%", height: "90%", borderRadius: "50%" }}
        />
        <h3>{auth?.currentUser?.displayName}</h3>
      </div>

      <div
        style={{
          // backgroundColor:'blue',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          // padding:"0.5rem"
        }}
      >
        {location.pathname === "/items" && (
          <Link to={"/add"} type="button" className="btn btn-warning">
            Add Items
          </Link>
        )}

        {location.pathname !== "/items" && (
          <Link to={"/items"} type="button" className="btn btn-warning">
            Back To Items
          </Link>
        )}

        <h3>{auth?.currentUser?.email}</h3>
        <button onClick={signOut} type="button" className="btn btn-danger">
          log out
        </button>
      </div>
    </div>
  );
};

export default Navbar;

// const Navbar = () => {
//   let Links = [
//     { name: "Home", link: "/" },
//     { name: "Add Item", link: "/add" },
//     { name: "About us", link: "/about" },
//     { name: "Contact", link: "/contact" },
//   ];
//   return (
//     <div classNameName="shadow-md w-full">
//       <div classNameName="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
//         <div classNameName="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
//           <span classNameName="text-3xl  mr-1 pt-2">
//             <img src="{}" alt="" />
//           </span>
//           Gadgetory
//         </div>
//         <ul classNameName="md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ">
//           {Links.map((link) => (
//             <li key={link.name} classNameName="md:ml-8 text-xl md:my-0 my-7">
//               <a
//                 href={link.link}
//                 classNameName="text-gray-800 hover:text-gray duration-500"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
