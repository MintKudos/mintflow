import { createMemoClass } from "@mintflow/theme";
import { cx } from "@mintflow/utils";

const variantClasses = {
  solid: "badge-solid",
  outline: "badge-outline",
  light: "badge-light",
};

const sizes = {
  sm: "badge-sm",
  md: "badge-md",
};

export const useBadgeClass = createMemoClass((props) => {
  return cx(
    "badge",
    props.hasShadow && "badge-shadow",
    sizes[props.size],
    variantClasses[props.variant],
  );
});
