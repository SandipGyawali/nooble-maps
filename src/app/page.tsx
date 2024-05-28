"use client";
import dynamic from "next/dynamic";
import { Box, Flex } from "@chakra-ui/react";
import SideBar from "./components/sidebar";
const Map = dynamic(() => import("./components/map_view"), { ssr: false });

export default function Home() {
  return (
    <Flex width={"100vw"} height={"100vh"} className="overflow-hidden">
      <SideBar />
      <Box width={"75vw"}>
        <Map lat={51.55} lng={-0.09} />
      </Box>
    </Flex>
  );
}
