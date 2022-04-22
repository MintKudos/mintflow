import { cx, __DEV__ } from "@mintflow/utils";
import { DefaultProps } from "@mintflow/theme";
import * as React from "react";

interface IKbdProps extends DefaultProps {}

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    IKbdProps {}

export const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, ...rest }, ref) => {
    return <kbd ref={ref} className={cx("kbd", className)} {...rest} />;
  }
);

if (__DEV__) {
  Kbd.displayName = "Kbd";
}
