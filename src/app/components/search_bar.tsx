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
    <div className="w-11/12 m-auto my-4 flex shadow-lg">
      <Input
        borderLeftRadius={6}
        backgroundColor="white"
        borderColor="#4e4d4d73"
        size="sm"
        outline="none"
        placeholder="Search Location..."
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchInput(e.target.value);
        }}
        onMouseEnter={() => {
          submitHandleClick;
        }}
      />
      <button
        className="cursor-pointer rounded-tr rounded-br bg-[#6381E2] 
          hover:bg-[#5172c4] transition-all linear duration-200 
          px-2 text-white font-md"
        onClick={submitHandleClick}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
