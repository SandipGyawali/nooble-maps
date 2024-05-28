import { List } from "@chakra-ui/react";
import SearchBar from "./search_bar";
import Location from "./list_item";
import { useState } from "react";

/**
 * @Components searchInput
 */
function SideBar(): JSX.Element {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <div className="side-bar-wrapper w-1/3">
      <SearchBar input={searchInput} setInput={setSearchInput} />
      <List spacing={4} marginLeft={6} marginRight={4} marginTop={10}>
        {[1, 2, 3, 4, 5].map((data, index) => (
          <Location key={index} />
        ))}
      </List>
    </div>
  );
}

export default SideBar;
