import Res_card from "./Res_card";
import { reslist } from "../utilits/markdata";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Smmer from "./Smmer";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const Body = () => {
  const [listreslist, setListreslist] = useState([]);
  const [search, setSearch] = useState();
  const [filterserch, setFilterserch] = useState([]);

  useEffect(() => {
    fatchdata();
  }, []);
  const fatchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4387245&lng=78.4453532&collection=83646&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    const fetchedRestaurants =
      json.data.cards.slice(3);
    console.log(fetchedRestaurants);
    setListreslist(fetchedRestaurants);
    setFilterserch(fetchedRestaurants);
  };

  return listreslist.length === 0 ? (
    <Smmer />
  ) : (
    <div className="res-container">
      <div className="fil-container">
      <div className="btn-flt">
        <TextField
          variant="outlined"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
         
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        
        <Button
           variant="contained"
          onClick={() => {
            const filter_serch = listreslist.filter((res) => {
              return res.card.card.info.name.toLowerCase().includes(search.toLowerCase());
            });
            setFilterserch(filter_serch);
          }}
        >
          search
        </Button>
        
        
      </div>
      <div className="topreted">
      <Button
          variant="contained"
          onClick={() => {
            const filterres_list = listreslist.filter((res) => {
              return res.card.card.info.avgRating > 4;
            });

            setFilterserch(filterres_list);
            console.log("not")
          }}
        >
          Topreted
        </Button>

      </div>

      </div>
     

      <div className="res_list"> 
        {filterserch.map((res) => {
          return <Res_card key={res.card.card.info?.id} {...res.card.card.info} />;
        })}
      </div>
    </div>
  );
};
export default Body;
