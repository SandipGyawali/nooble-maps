import { List } from "@chakra-ui/react";
import SearchBar from "./search_bar";
import Item from "./item";
import { useState } from "react";
import useStore from "@/app/store/store";

function SideBar(): JSX.Element {
  const { places, searchInput } = useStore();

  return (
    <div className="side-bar-wrapper w-1/3 overflow overflow-y-scroll scrollbar scrollbar-thin">
      <SearchBar input={searchInput} />
      <List
        spacing={4}
        marginLeft={6}
        marginRight={4}
        marginTop={10}
        marginBottom={6}
      >
        {places.map((place, index) => (
          <Item key={index} data={place} />
        ))}
      </List>
    </div>
  );
}

export default SideBar;
