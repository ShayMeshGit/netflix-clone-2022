import React from "react";

export type Props = React.HTMLAttributes<HTMLButtonElement> & {
  type: "button" | "submit";
};
