import { Icon, List, ListItem } from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";

function Location(): JSX.Element {
  return (
    <ListItem className="flex gap-3">
      <Icon as={IoLocationSharp} fontSize={22} />
      Lorem Ipsume dolor sit amet,
    </ListItem>
  );
}

export default Location;
