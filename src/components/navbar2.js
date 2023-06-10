// import "bootstrap/dist/css/bootstrap.min.css";
// import "../index.css";
// import React, { useContext } from "react";
// import { SignInContext } from "../context/signInContext";
// import jwt_decode from "jwt-decode";

// const NavbarPrincipal = () => {
//   const { isLogged, setIsLogged } = useContext(SignInContext);

//   const handdleLogout = () => {
//     if (isLogged) {
//       localStorage.removeItem("userData");
//       setIsLogged(false);
//     }
//   };

//   const userData = localStorage.getItem("userData");
//   const userName = () => {
//     if (isLogged) {
//       const userDataObj = JSON.parse(userData);
//       // const token = userDataObj["token"];
//       const decodedToken = jwt_decode(userDataObj.access);
//       const userName = decodedToken;
//       console.log(userName);
//     } else {
//       console.log("No hay ningun token");
//     }
//   };

//   return (
//     <div className="fixed-top">
//       <nav className="navbarPrincipal ">
//         <ul className="navbarList2Principal">
//           <li className="navbarItemPrincipal">
//             {isLogged && (
//               <a href=" " className="navbarLink2Principal navbar-home">
//                 Hola, {userName}
//               </a>
//             )}
//           </li>
//           <li className="navbarItemPrincipal">
//             {isLogged && (
//               <a
//                 href="/Home"
//                 className="navbarLinkPrincipal navbar-home"
//                 onClick={handdleLogout}
//               >
//                 Cerrar sesión
//               </a>
//             )}
//           </li>
//         </ul>
//       </nav>
//       <nav className="navbar2Principal">
//         <ul className="navbarListPrincipal">
//           <li className="navbarItemPrincipal">
//             <a href="/Principal" className="navbarLinkPrincipal navbar-home">
//               Página principal
//             </a>
//           </li>
//           <li className="navbarItemPrincipal">
//             <a href=" " className="navbarLinkPrincipal navbar-home ">
//               Lecciones
//             </a>
//           </li>
//           <li className="navbarItemPrincipal">
//             <a href="/Temas" className="navbarLinkPrincipal navbar-home">
//               Temas
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default NavbarPrincipal;
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import React, { useContext } from "react";
import { SignInContext } from "../context/signInContext";
import jwt_decode from "jwt-decode";

const NavbarPrincipal = () => {
  const { isLogged, setIsLogged } = useContext(SignInContext);

  const handdleLogout = () => {
    if (isLogged) {
      localStorage.removeItem("userData");
      setIsLogged(false);
    }
  };

  const userData = localStorage.getItem("userData");
  const userName = () => {
    if (isLogged) {
      const userDataObj = JSON.parse(userData);
      // const token = userDataObj["token"];
      const decodedToken = jwt_decode(userDataObj.access);
      const userName = decodedToken;
      console.log(userName);
    } else {
      console.log("No hay ningun token");
    }
  };

  return (
    <div className="fixed-top">
      <nav className="navbarPrincipal ">
        <ul className="navbarList2Principal">
          <li className="navbarItemPrincipal">
            {isLogged && (
              <a href=" " className="navbarLink2Principal navbar-home">
                Hola, {userName}
              </a>
            )}
          </li>
          <li className="navbarItemPrincipal">
            {isLogged && (
              <a
                href="/Home"
                className="navbarLinkPrincipal navbar-home"
                onClick={handdleLogout}
              >
                Cerrar sesión
              </a>
            )}
          </li>
        </ul>
      </nav>
      <nav className="navbar2Principal">
        <ul className="navbarListPrincipal">
          <li className="navbarItemPrincipal">
            <a href="/Principal" className="navbarLinkPrincipal navbar-home">
              Página principal
            </a>
          </li>
          <li className="navbarItemPrincipal">
            <a href=" " className="navbarLinkPrincipal navbar-home ">
              Lecciones
            </a>
          </li>
          <li className="navbarItemPrincipal">
            <a href="/Temas" className="navbarLinkPrincipal navbar-home">
              Temas
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarPrincipal;

