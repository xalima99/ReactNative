import React, { useState } from "react";
import { View, LayoutAnimation, UIManager, Platform, Text } from "react-native";
import PropTypes from "prop-types";
import Media from "./Media";
import styles from "./styles";
import SSPtext from "../../../Common/SSPText";
import Cta from "../CTA";
import DropIcon from "./DropIcon/index.";
import TextContent from "./TextContent";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const BaseCard = ({
  cta,
  image,
  title,
  subtitle,
  multiline,
  onLike,
  onSave,
  onShare,
  actionTitle,
  actionTitle2,
  action,
  action2,
  children,
}) => {
  const [isDefault, setisDefault] = useState(true);
  const [numberLines, setnumberLines] = useState(3);
  const [expand, setexpand] = useState("more");

  const Toggler = () => {
    if (numberLines === 3) {
      setnumberLines(6);
      setexpand("less");
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    } else {
      setnumberLines(3);
      setexpand("more");
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
  };

  return (
    <View style={styles.container}>
      {image && <Media image={image} />}
      <View style={styles.contentContainer}>
        <View style={styles.HeadContainer}>
          <View style={styles.TitleContainer}>
            {title && <Text style={{ fontSize: 18 }}>{title}</Text>}
            {subtitle && (
              <Text font="Regular" style={{ fontSize: 14 }}>
                {subtitle.toUpperCase()}
              </Text>
            )}
          </View>
          <View style={styles.DropBox}>
            {multiline && <DropIcon onPress={Toggler} expand={expand} />}
          </View>
        </View>
        {children && (
          <TextContent numberLines={numberLines}>{children}</TextContent>
        )}
        {cta && (
          <Cta
            actionTitle={actionTitle}
            actionTitle2={actionTitle2}
            action={action}
            action2={action2}
            onLike={onLike}
            onSave={onSave}
            onShare={onShare}
            isDefault={isDefault}
          />
        )}
      </View>
    </View>
  );
};

BaseCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  Media: PropTypes.string,
  action: PropTypes.func,
  actionTitle: PropTypes.string,
  action2: PropTypes.func,
  actionTitle2: PropTypes.string,
  like: PropTypes.bool,
  onLike: PropTypes.func,
  save: PropTypes.bool,
  onSave: PropTypes.func,
  share: PropTypes.bool,
  onShare: PropTypes.func,
  isDefault: PropTypes.bool,
  cta: PropTypes.bool,
  multiline: PropTypes.bool,
  children: PropTypes.string,
};

export default BaseCard;
