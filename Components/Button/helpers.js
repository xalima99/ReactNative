import styles from "./styles";
import { ColoredBackGround, ClearBackGround } from "../../constants/Colors";

export const getStyles = ({
  block,
  outlined,
  disabled,
  primary,
  secondary,
  link
}) => {
  const containerStyles = [styles.containerDefault];
  const textStyles = [styles.textDefault];

  if (secondary && !primary) {
    containerStyles.push(styles.containerSecondary);
    textStyles.push(styles.textSecondary);
    if (outlined) {
      containerStyles.push(styles.containerSecondaryOutlined);
      textStyles.push(styles.textSecondaryOutlined);
      if(link) containerStyles.push(styles.link);
    }
  } else {
    containerStyles.push(styles.containerPrimary);
    textStyles.push(styles.textPrimary);

    if (outlined) {
      containerStyles.push(styles.containerPrimaryOutlined);
      textStyles.push(styles.textPrimaryOutlined);
      if(link) containerStyles.push(styles.link);
    }
  }

  if (disabled && primary) {
    if (outlined) {
      containerStyles.push(styles.containerDisabledOutlined);
      if(link) containerStyles.push(styles.link);
    } else containerStyles.push(styles.containerDisabledPrimary);
    textStyles.push(styles.textDisabledPrimary);
  } else if (disabled && secondary) {
    if (outlined) {
      containerStyles.push(styles.containerDisabledOutlined);
      if(link) containerStyles.push(styles.link);
    } else containerStyles.push(styles.containerDisabledSecondary);
    textStyles.push(styles.textDisabledSecondary);
  }

  if (block) {
    containerStyles.unshift(styles.block);
  }

  // console.log(textStyles)
  return { containerStyles, textStyles };
};

export const requiredPropsCheck = (props, propName, componentName) => {
  if (!props.primary && !props.secondary) {
    return new Error(
      `One of 'primary' or 'secondary' is required by '${componentName}' component.`
    );
  }
};

export const getPressedStateColor = (
  primary,
  secondary,
  outlined,
  link,
  disabled
) => {
  if (primary) {
    if (outlined || link) return ClearBackGround.Fills.AddedBlue;
    return ClearBackGround.Fills.Actived;
  }
  //Gerer les styles onPress

  if (secondary) {
    if (outlined || link ) return ColoredBackGround.Fills.Visited;
    return ColoredBackGround.Fills.Actived;
  }

  return ClearBackGround.Fills.OceanBlueLight;
};
