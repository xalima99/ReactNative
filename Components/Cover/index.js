import React from "react";
import { View, Image } from "react-native";
import { Video } from "expo-av";
import PropTypes from "prop-types";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const Cover = ({ size, src, isVideo }) => {

  const getSize = (elem) => {
    switch (elem) {
      case "small":
        return 220;

      case "medium":
        return 300;

      case "square":
        return width;

      default:
        return 220;
    }
  };

  if (size === "full") {
    return isVideo ? (
      <Video
        source={src}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: "100%", height: "100%", backgroundColor: "red" }}
      />
    ) : (
      <Image
        resizeMode="cover"
        source={src}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    );
  } else
    return (
      <View
        style={{
          width: "100%",
          minWidth: width,
          height: getSize(size),
          backgroundColor: "red",
        }}
      >
        {isVideo ? (
          <Video
            source={src}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        ) : (
          <Image
            resizeMode="cover"
            source={src}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        )}
      </View>
    );
};

Cover.propTypes = {
  isVideo: PropTypes.bool,
  src: PropTypes.any,
  size: PropTypes.string,
};

Cover.defaulProps = {
  isVideo: false,
};

export default Cover;
