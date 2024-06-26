import Res_card, { Promoted_card } from "./Res_card";
import { reslist } from "../utilits/markdata";
import { Button } from "@mui/material";
import { useEffect, useState,useContext } from "react";
import Smmer from "./Smmer";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import useOnlineStatus from "./COSTAMHOOKS/useOnlineStatus";
import ThemeContext from "../utilits/ThemeContext";

const Body = () => {
  const [listreslist, setListreslist] = useState([]);
  const [search, setSearch] = useState("");
  const [filterserch, setFilterserch] = useState([]);
  const { isDarkTheme} = useContext(ThemeContext);

  useEffect(() => {
    fatchdata();
  }, []);
  const fatchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4387245&lng=78.4453532&collection=83646&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    const fetchedRestaurants = json.data.cards.slice(3);
    console.log(fetchedRestaurants);
    setListreslist(fetchedRestaurants);
    setFilterserch(fetchedRestaurants);
  };
  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false){
    return(
      <h1>there is internet problem</h1>
    )
  }
  const Promoted=Promoted_card(Res_card);


  return listreslist.length === 0 ? (
    <Smmer />
  ) : (
    <div className="res-container">
      <div className="flex items-center justify-between m-8">
        <div></div>
        <div className="flex items-center  space-x-4">
          <TextField
            variant="outlined"
            placeholder="Search..."
            className={isDarkTheme?"border-blue-900 w-full":"w-full"}
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
                return res.card.card.info.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              });
              console.log(filter_serch);
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
              console.log("not");
            }}
          >
            Toprated
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap ml-30">
        {filterserch.map((res) => {
          return (
            <Link
              key={res.card.card.info?.id}
              to={/restarent/ + res.card.card.info?.id}
              className="custom-link"
            >
             {
              res.card.card.info.promoted?<Promoted{...res.card.card.info}/>:<Res_card {...res.card.card.info} />

             }
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
