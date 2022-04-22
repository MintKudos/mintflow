import { MintflowProvider, extendTheme } from "@mintflow/react";
import { useState, useMemo } from "react";
import { withPerformance } from "storybook-addon-performance";
import { light, dark, midnight, pale, dawn, bee, cool } from "./themes";

import "./styles.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const withMintflow = (StoryFn: Function) => {
  const [colorScheme, setColorScheme] = useState("light");
  const theme = useMemo(
    () =>
      extendTheme({
        cursor: colorScheme === "light" ? "pointer" : "default",
        colorSchemes: {
          light,
          dark,
          midnight,
          pale,
          dawn,
          bee,
          cool,
        },
      }),
    [colorScheme]
  );

  const density = colorScheme === "light" ? "comfortable" : "compact";

  return (
    <MintflowProvider theme={theme} colorScheme={colorScheme} density={density}>
      <div
        id="story-wrapper"
        className="space-y-4"
        style={{ minHeight: "100vh" }}
      >
        <div className="flex mb-4 justify-items-end">
          <button
            onClick={() =>
              setColorScheme((prev) => (prev === "light" ? "dark" : "light"))
            }
          >
            Change theme
          </button>
        </div>
        <StoryFn />
      </div>
    </MintflowProvider>
  );
};

export const decorators = [withMintflow, withPerformance];
