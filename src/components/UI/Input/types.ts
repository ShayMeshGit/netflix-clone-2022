import React from "react";

export type Props = React.HTMLAttributes<HTMLInputElement> & {
  type: string;
  name: string;
  value: any;
  label: string;
  errorMessage: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
