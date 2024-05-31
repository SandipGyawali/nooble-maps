"use client";
import dynamic from "next/dynamic";
import { Box, Flex } from "@chakra-ui/react";
import SideBar from "./components/sidebar";
import { Suspense, useState } from "react";
import Loading from "./components/loading";
const Map = dynamic(() => import("./components/map_view"), { ssr: false });

export default function Home() {
  return (
    <Flex width={"100vw"} height={"100vh"} className="overflow-hidden">
      <Suspense fallback={<Loading />}>
        <SideBar />
        <Box>
          <Map />
        </Box>
      </Suspense>
    </Flex>
  );
}
