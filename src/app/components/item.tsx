import { Icon, List, ListItem } from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";

interface Props {
  data: any;
}

function Item({ data }: Props): JSX.Element {
  return (
    <ListItem
      className="flex cursor-pointer hover:bg-gray-200 transition active:bg-gray-300 active:duration-0 py-2 px-0.5 
        rounded-xl transition-linear duration-200 items-center justify-start 
        gap-3 text-sm font-medium"
    >
      <Icon as={IoLocationSharp} fontSize={22} color="black" />
      {data.display_name}
    </ListItem>
  );
}

export default Item;
