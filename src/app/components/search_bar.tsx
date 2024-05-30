import { Input } from "@chakra-ui/react";
import useStore from "@/app/store/store";

interface SearchBarProps {
  input: string;
}

function SearchBar({ input }: SearchBarProps): JSX.Element {
  const { setSearchInput, fetchPlaces } = useStore();

  function submitHandleClick() {
    fetchPlaces();
  }

  return (
    <div className="w-fit flex bg-white">
      <Input
        size={"sm"}
        variant="outline"
        placeholder="Search Location..."
        className="border bg-white"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchInput(e.target.value);
        }}
        onMouseEnter={() => {
          submitHandleClick;
        }}
      />
      <button className="cursor-pointer bg-[#6381E2] px-2 text-white font-bold">
        Go
      </button>
    </div>
  );
}

export default SearchBar;

// https://nominatim.openstreetmap.org/search?q=135+pilkington+avenue,+birmingham&format=json&polygon_kml=1&addressdetails=1
