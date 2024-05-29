import { useEffect } from "react";

async function Loading() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <span>Loading...</span>;
}

export default Loading;
