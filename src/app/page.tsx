"use client";
import dynamic from "next/dynamic";
import { Box, Flex } from "@chakra-ui/react";
import SideBar from "./components/sidebar";
import { Suspense, useEffect, useState } from "react";
import Loading from "./components/loading";
const Map = dynamic(() => import("./components/map_view"), { ssr: false });

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Flex width={"100vw"} height={"100vh"} className="overflow-hidden">
      <Suspense fallback={<Loading />}>
        {isVisible ? (
          <>
            <SideBar />
            <Box width="75vw">
              <Map />
            </Box>
          </>
        ) : (
          ""
        )}
      </Suspense>
    </Flex>
  );
}
