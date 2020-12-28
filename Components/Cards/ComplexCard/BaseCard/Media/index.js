import React from "react";
import { Image } from "react-native";
import styles from "./styles";
import PropTypes from 'prop-types'

const Media = ({ image }) => {
  return <Image source={image} resizeMode='cover' style={styles.Image} />;
};

Media.PropTypes = {
    image: PropTypes.any.isRequired
}

export default Media;
