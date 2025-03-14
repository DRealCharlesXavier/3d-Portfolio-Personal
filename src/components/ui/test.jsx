import { useColorMode } from "@chakra-ui/react";

export default function Test() {
  const { colorMode } = useColorMode();
  return <div>Current mode: {colorMode}</div>;
}
