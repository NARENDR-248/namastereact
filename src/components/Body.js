import Res_card from "./Res_card";
import{reslist} from '../utilits/markdata'
import { Button } from "@mui/material";
import { useState } from "react";


const Body = () => {
  const [listreslist,setListreslist]=useState(reslist);
  
  const handleFilter = () => {
    const filterres_list = listreslist.filter((res) => res.data.avgRating >= 4);
    console.log(filterres_list);
    setListreslist(filterres_list);
  };
  
    return (
      <div className="res-container">
        <div className="saerch">saerch</div>
        <Button onClick={handleFilter}>Topreted</Button>
        <div className="res_list">
        {listreslist.map((res) => {
          return <Res_card key={res.data.id} resdata={res} />;
        })}
        
        </div>
      </div>
    );
  };
export default Body;