export interface IButtonProps {
  type: ButtonType;
  linkTo?: string;
  onClick?: () => void;
  buttonText: string;
  disabled?: boolean;
  width?: string;
}

export enum ButtonType {
  Link,
  Button,
  Submit,
}
