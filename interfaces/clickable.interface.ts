interface Clickable {
  style: string;
  text: string;
}

export interface ButtonProps extends Clickable {
  onClick: () => void;
}

export interface LinkProps extends Clickable {
  href: string;
}
