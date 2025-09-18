import type { ComponentProps } from "react";

export const Label = (props: ComponentProps<"label">) => {
  // biome-ignore lint/a11y/noLabelWithoutControl: ignorei essa regra do lint pois essa label será associada a um input no componente que for usada
  return <label {...props} className="" />;
};
