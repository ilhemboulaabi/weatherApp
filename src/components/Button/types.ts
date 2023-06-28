export interface ButtonProps {
  label: string;
  onClick: (e: any) => void;
  style?: {
    [key: string]: string;
  };
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  type?: "primary" | "secondary";
}

export interface StyledButtonProps {
  size: string;
  disabled: boolean;
  type: string;
}