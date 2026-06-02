import styles from './styles.module.scss';
import { BUTTON_VARIANTS } from './Button.constants';

export default function Button({
  href = '#',
  children,
  variant = [BUTTON_VARIANTS.PRIMARY],
}) {
  return (
    <a href={href} className={styles[variant]}>
      {children}
    </a>
  );
}
