import styles from "./styles";

export const getTheme = (primary, secondary, disabled) => {
  const containerTheme = [styles.container];

  if (secondary) {
    containerTheme.push(styles.secondary);
  }
  if (disabled) {
    containerTheme.push(styles.primaryDisabled);
  }
  return containerTheme;
};
