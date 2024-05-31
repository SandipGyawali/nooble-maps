import { Box, List } from "@chakra-ui/react";
import SearchBar from "./search_bar";
import Item from "./item";
import useStore from "@/app/store/store";

/**
 * @Note sidebar with search bar and searched location list.
 * @returns JSX Element
 */
function SideBar(): JSX.Element {
  const { places, searchInput } = useStore();

  return (
    <div
      className={`side-bar-wrapper w-[350px] 
        z-50 absolute
        ${places.length === 0 ? "h-fit bg-transparent" : "h-full bg-white"}
      `}
    >
      <SearchBar input={searchInput} />
      <List spacing={6} marginTop={10} marginLeft={2} marginRight={2}>
        <Box>
          {places.map((place, index) => (
            <Item key={index} data={place} />
          ))}
        </Box>
      </List>
    </div>
  );
}

export default SideBar;
