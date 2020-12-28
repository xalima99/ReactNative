import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import TextCTA from "./TextCTA";
import IconCTA from "./IconCTA";
import PropTypes from "prop-types";
import { Cards } from "../../../../constants/Colors";

const Cta = ({
  isDefault,
  action,
  actionTitle,
  action2,
  actionTitle2,
  onLike,
  onSave,
  onShare,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDefault
            ? Cards.Complex.Default.BackGround
            : Cards.Complex.Active.BackGround,
        },
      ]}
    >
      <View
        style={[
          styles.textContainer,
          {
            backgroundColor: isDefault
              ? Cards.Complex.Default.BackGround
              : Cards.Complex.Active.BackGround,
          },
        ]}
      >
        {actionTitle && (
          <TextCTA isDefault={isDefault} onPress={action}>
            {actionTitle.toUpperCase()}
          </TextCTA>
        )}
        {actionTitle2 && (
          <TextCTA isDefault={isDefault} onPress={action2}>
            {actionTitle2.toUpperCase()}
          </TextCTA>
        )}
      </View>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: isDefault
              ? Cards.Complex.Default.BackGround
              : Cards.Complex.Active.BackGround,
          },
        ]}
      >
        <IconCTA isDefault={isDefault} icon="like" onPress={onLike} />
        <IconCTA isDefault={isDefault} icon="save" onPress={onSave} />
        <IconCTA isDefault={isDefault} icon="share" onPress={onShare} />
      </View>
    </View>
  );
};

Cta.propTypes = {
  action: PropTypes.func,
  actionTitle: PropTypes.string,
  action2: PropTypes.func,
  actionTitle2: PropTypes.string,
  onLike: PropTypes.func,
  onSave: PropTypes.func,
  onShare: PropTypes.func,
  isDefault: PropTypes.bool,
};

Cta.defaultProps = {
  isDefault: true,
};
export default Cta;
