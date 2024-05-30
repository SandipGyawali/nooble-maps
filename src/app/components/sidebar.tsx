import { Box, List } from "@chakra-ui/react";
import SearchBar from "./search_bar";
import Item from "./item";
import useStore from "@/app/store/store";

function SideBar(): JSX.Element {
  const { places, searchInput } = useStore();

  return (
    <div className="side-bar-wrapper h-fit w-[350px] z-50 mx-14 my-3 rounded-xl border border-gray-400 absolute">
      <SearchBar input={searchInput} />
      <List
        spacing={4}
        // marginLeft={6}
        // marginRight={4}
        // marginTop={10}
        // marginBottom={6}
      >
        <Box className="">
          {places.map((place, index) => (
            <Item key={index} data={place} />
          ))}
        </Box>
      </List>
    </div>
  );
}

export default SideBar;
