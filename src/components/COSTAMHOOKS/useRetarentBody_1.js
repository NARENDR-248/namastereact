import React from 'react'

const useRetarentBody_1 = () => {
    const [filterserch, setFilterserch] = useState([]);
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
  return filterserch;
}

export default useRetarentBody_1
