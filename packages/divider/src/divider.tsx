import { cx, __DEV__ } from "@mintgate/mintflow/utils";
import { DefaultProps } from "@mintgate/mintflow/theme";
import * as React from "react";

interface IDividerProps extends DefaultProps {
  /*The orientation */
  orientation?: "horizontal" | "vertical";
}

export interface DividerProps
  extends React.HTMLAttributes<HTMLHRElement>,
    IDividerProps {}

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ orientation = "horizontal", className, ...props }, ref) => {
    const classes = cx(
      "divider",
      orientation === "vertical" ? "divider-vertical" : "divider-horizontal",
      className
    );

    return (
      <hr
        ref={ref}
        aria-orientation={orientation}
        className={classes}
        {...props}
      />
    );
  }
);

if (__DEV__) {
  Divider.displayName = "Divider";
}
