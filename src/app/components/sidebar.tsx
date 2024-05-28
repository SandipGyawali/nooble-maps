import { List } from "@chakra-ui/react";
import SearchBar from "./search_bar";
import Item from "./item";
import { useState } from "react";
import { PARAMS } from "@/app/interface/index";
import axios from "axios";

/**
 * @Components searchInput
 */

const BASE_URL: string = "https://nominatim.openstreetmap.org/search?";

function SideBar(): JSX.Element {
  const [searchInput, setSearchInput] = useState<string>("");
  const [placesList, setPlacesList] = useState<Array<Object>>([]);

  async function handleSearchInput(): Promise<void> {
    const params: PARAMS = {
      q: searchInput,
      format: "json",
      addressdetails: "1",
    };

    const stringParams: Record<string, string> = {
      q: params.q,
      format: params.format,
      addressdetails: params.addressdetails,
    };

    const queryString: string = new URLSearchParams(stringParams).toString();

    try {
      console.log(`${BASE_URL}${queryString}`);

      const res = await axios.get(`${BASE_URL}${queryString}`);
      setPlacesList(res.data);
    } catch (err: any) {
      console.log(err.message);
    }
  }

  return (
    <div className="side-bar-wrapper w-1/3 overflow overflow-y-scroll scrollbar scrollbar-thin">
      <SearchBar
        input={searchInput}
        setInput={setSearchInput}
        handleSearchInput={handleSearchInput}
      />
      <List
        spacing={6}
        marginLeft={6}
        marginRight={4}
        marginTop={10}
        marginBottom={6}
      >
        {placesList.map((place, index) => (
          <Item key={index} data={place} />
        ))}
      </List>
    </div>
  );
}

export default SideBar;

// https://nominatim.openstreetmap.org/search?q=kathmandu&format=json&addressdetails=1
