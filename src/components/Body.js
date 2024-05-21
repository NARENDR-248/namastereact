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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const fetchedRestaurants =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    console.log(fetchedRestaurants);
    setListreslist(fetchedRestaurants);
    setFilterserch(fetchedRestaurants);
  };

  return listreslist.length === 0 ? (
    <Smmer />
  ) : (
    <div className="res-container">
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
              return res.info.name.toLowerCase().includes(search.toLowerCase());
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
              return res.info.avgRating > 4;
            });

            setFilterserch(filterres_list);
            console.log("not")
          }}
        >
          Topreted
        </Button>

      </div>

      <div className="res_list">
        {filterserch.map((res) => {
          return <Res_card key={res.info?.id} {...res.info} />;
        })}
      </div>
    </div>
  );
};
export default Body;
