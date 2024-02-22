import { LinkProps, ButtonProps } from '@/interfaces/clickable.interface';
import LinkComponent from '@/components/ClickableComponent/LinkComponent/LinkComponent';
import ButtonComponent from '@/components/ClickableComponent/ButtonComponent/ButtonComponent';

function isPropsForLinkElement(
  props: ButtonProps | LinkProps
): props is LinkProps {
  return 'href' in props;
}

const ClickableComponent = (props: ButtonProps | LinkProps) => {
  if (isPropsForLinkElement(props)) {
    return <LinkComponent {...props} />;
  }
  return <ButtonComponent {...props} />;
};

export default ClickableComponent;
