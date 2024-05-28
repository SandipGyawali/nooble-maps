import { Input } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { MdSearch } from "react-icons/md";

interface SearchBarProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  handleSearchInput: () => void;
}

function SearchBar({
  input,
  setInput,
  handleSearchInput,
}: SearchBarProps): JSX.Element {
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
          setInput(e.target.value);
        }}
      />
      <Icon
        as={MdSearch}
        fontSize={22}
        className="mr-3 cursor-pointer"
        onClick={handleSearchInput}
        color={"gray"}
      />
    </div>
  );
}

export default SearchBar;
