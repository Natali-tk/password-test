import { ReactNode } from "react";

export type StadartProps = {
  name: string;
  label: string;
  type?: string;
  id: string;
  value?: string | number;
  placeholder?: string | undefined;
  disabled?: boolean;
  children?: ReactNode;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}
