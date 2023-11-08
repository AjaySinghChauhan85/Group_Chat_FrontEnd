import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
import DashBoard from "./Pages/DashBoard";
import { useEffect, useState } from "react";

const App = () => {
  const [userToken,setUserToken] = useState(null);
   useEffect(()=>{
       const userToken = localStorage.getItem("token")
      //  console.log(userToken);
       setUserToken(userToken);
   },[])
  return (
    <div>
      <Routes>
        <Route path="/" element={userToken ?<Navigate to="/dashboard"/> :<Registration/>  } />
        <Route path="/login" element={userToken ?<Navigate to="/dashboard"/> :<Login/>  } />
        <Route path="/dashboard" element={userToken ?<DashBoard/> :<Navigate to="/"/>  } />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
