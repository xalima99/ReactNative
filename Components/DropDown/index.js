import React, { useState, useEffect } from "react";
import { View, Pressable, Text, FlatList } from "react-native";
import styles from "./styles";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { getStyle, getText, getCurrentSelected } from "./helper";
import PropTypes from 'prop-types'


const DropDown = ({ disabled, title, items = [], small,setvalue }) => {
  const [visible, setvisible] = useState(false);
  const [btnName, setbtnName] = useState("");
  const [isSelected, setisSelected] = useState(false);
  const [currText, setcurrText] = useState(false);
  const [currVal, setcurrVal] = useState("");
  const [isOn, setisOn] = useState(null);
  
  useEffect(() => {
    title ? setbtnName(title) : items.length ? setbtnName(items[0].label) : 'Select';
  }, []);

  const toggleDrop = () => {
    if (!visible) setvisible(true);
    else setvisible(false);
  };

  const selecting = ({ label, value }) => {
    setvalue({ label, value })
    setisSelected(true);
    toggleDrop();
    setbtnName(label);

    setcurrText(true);
    setcurrVal(label);
    setisOn(label);
  };

  const onItemPressOut = (value) => {
    setcurrText(false);
    setcurrVal(value);
  };

  const keyExtractor = (item) => item.label;

  const renderItem = ({ item }) => {
    return (
      <View>
        <Pressable
          onPressOut={() => onItemPressOut(item.label)}
          onPress={() => selecting(item)}
          style={({ pressed }) => [
            styles.item,
            {
              backgroundColor: pressed ? "#E7EEF3" : "white",
            },
          ]}
        >
          <Text
            style={getCurrentSelected(
              currText,
              currVal,
              item.label,
              item.label,
              isOn
            )}
          >
            {item.label}
          </Text>
          {isOn == item.label ? (
            <MaterialCommunityIcons name="check" size={18} color="#0307A4" />
          ) : null}
        </Pressable>
      </View>
    );
  };

  return (
    <View
      style={{
        width: small ? 80 : "100%",
      }}
    >
      <Pressable
        style={getStyle(disabled)}
        onPress={toggleDrop}
        disabled={disabled}
      >
        <View style={styles.textBox}>
          <Text style={getText(isSelected, disabled)}>{btnName}</Text>
        </View>
        <View style={styles.iconBox}>
          <FontAwesome5
            name="caret-down"
            size={18}
            color={disabled ? "#CDCDCD" : "#000"}
          />
        </View>
      </Pressable>
      <View style={[styles.drop, { display: visible ? "" : "none" }]}>
        <FlatList
          persistentScrollbar={true}
          data={items}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

DropDown.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  setvalue: PropTypes.func.isRequired
}

export default DropDown;
