import { Icon, ListItem } from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";
import useStore from "@/app/store/store";
import { ItemProps } from "../interface";

function Item({ data }: ItemProps): JSX.Element {
  const { lat, lon, display_name } = data;
  const { setSelectedPosition } = useStore();

  return (
    <ListItem
      className="flex cursor-pointer hover:bg-gray-200 transition active:bg-gray-300
       active:duration-0 py-2 px-0.5 rounded-lg transition-linear duration-200 
       items-center justify-start gap-3 text-sm font-medium"
      onClick={() => {
        console.log(data);
        setSelectedPosition([lat, lon]);
      }}
    >
      <Icon as={IoLocationSharp} fontSize={22} color="black" />
      {display_name}
    </ListItem>
  );
}

export default Item;
