import styles from "./styles";
import { ColoredBackGround, ClearBackGround } from "../../constants/Colors";

export const getStyles = ({ block, light, visited, primary, secondary }) => {
  const containerStyles = [styles.containerDefault];
  const textStyles = [styles.textDefault];

  if (secondary && !primary) {
    textStyles.push(styles.textSecondary);
    if (light) {
      textStyles.push(styles.textSecondaryOutlined);
    }
  } else {
    textStyles.push(styles.textPrimary);

    if (light) {
      textStyles.push(styles.textPrimaryOutlined);
    }
  }

  if (visited && primary) {
    if (light) {
      textStyles.push(styles.containerDisabledOutlined);
    } else textStyles.push(styles.containerDisabledPrimary);
  } else if (visited && secondary) {
    if (light) {
      textStyles.push(styles.containerDisabledOutlined);
    } else textStyles.push(styles.containerDisabledSecondary);
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

export const getTextColor = (isPressed, primary, secondary, light) => {
  if (primary) {
    if (light === true) return ClearBackGround.Fills.Actived;
    return ClearBackGround.Fills.Actived;
  }
  //Gerer les styles onPress

  if (secondary) {
    if (light) return ClearBackGround.Fills.Actived;
    return ClearBackGround.Fills.Actived;
  }

  return ClearBackGround.Fills.OceanBlueLight;
};
