import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../Components/Card";
import { config } from "../config";
import Sidebar from '../Components/Sidebar'
function Dashboard() {
  const [data1, setData] = useState([]);
  let getData = async () => {
    try {
      let res = await axios.get(`${config.api}/enterurl`, {
        headers: {
          Authorization: `${localStorage.getItem("react_app_token")}`,
        },
      });
      setData(res.data);
      console.log(res.data);
      console.log(data1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  let navigate = useNavigate();

  let doLogout = () => {
    localStorage.removeItem("react_app_token");
    navigate("/");
  };

  return (
    <>
    

      <div class="container-fluid">
        <div class="row">
         
<Sidebar></Sidebar>
<main class="col-lg-10 col-md-8 col-sm-6 mx-auto ">
            <div class="pt-3 pb-2 mb-3 border-bottom">
              <h1 class="text-center text-warning p-2  border border-warning bg-light mx-auto rounded" >DASHBOARD</h1>
            </div>
            
            <div className="row">
              <Card info={data1} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
