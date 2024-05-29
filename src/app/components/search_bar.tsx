import { Input } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import useStore from "@/app/store/store";

interface SearchBarProps {
  input: string;
}

function SearchBar({ input }: SearchBarProps): JSX.Element {
  const { setSearchInput, fetchPlaces } = useStore();
  return (
    <div
      className="search-box-wrapper flex justify-between items-center 
        border border-gray shadow rounded-3xl mx-2 my-4"
    >
      <Input
        variant="outline"
        placeholder="Search Location..."
        border="none"
        outline="none"
        appearance="none"
        focusBorderColor="transparent"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchInput(e.target.value);
        }}
      />
      <Icon
        as={MdSearch}
        fontSize={22}
        className="mr-3 cursor-pointer"
        onClick={() => {
          fetchPlaces();
        }}
        color={"gray"}
      />
    </div>
  );
}

export default SearchBar;

// https://nominatim.openstreetmap.org/search?q=135+pilkington+avenue,+birmingham&format=json&polygon_kml=1&addressdetails=1
