import styles from "./styles";

export const getTheme = (secondary) => {
  const containerStyle = [styles.primaryContainer];
  const textStyle = [styles.primaryText];
  const iconStyle = [styles.primaryIcon];

  if (secondary) {
    containerStyle.push(styles.secondaryContainer);
    textStyle.push(styles.secondaryText);
    iconStyle.push(styles.secondaryIcon);
  }

  return { containerStyle, textStyle, iconStyle };
};
