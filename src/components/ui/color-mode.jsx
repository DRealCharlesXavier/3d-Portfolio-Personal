import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { useColorMode as useChakraColorMode } from "@chakra-ui/react";
import { ThemeProvider, useTheme } from "next-themes";
import * as React from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export function ColorModeProvider({ children, ...props }) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props}>
      {children}
    </ThemeProvider>
  );
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const { setColorMode } = useChakraColorMode();

  React.useEffect(() => {
    setColorMode(resolvedTheme || "light");
  }, [resolvedTheme, setColorMode]);

  const toggleColorMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return {
    colorMode: resolvedTheme,
    setColorMode: setTheme,
    toggleColorMode,
  };
}

export function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? dark : light;
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? <LuMoon /> : <LuSun />;
}

export const ColorModeButton = React.forwardRef(function ColorModeButton(
  props,
  ref
) {
  const { toggleColorMode } = useColorMode();
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        size="sm"
        ref={ref}
        className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        icon={<ColorModeIcon />}
        {...props}
      />
    </ClientOnly>
  );
});
