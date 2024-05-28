import { Icon, List, ListItem } from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";

interface Props {
  data: Object;
}

function Item({ data }: Props): JSX.Element {
  console.log(data);
  return (
    <ListItem className="flex items-center justify-start gap-3 text-sm font-medium">
      <Icon as={IoLocationSharp} fontSize={22} color="gray" />
      {data.display_name}
    </ListItem>
  );
}

export default Item;
