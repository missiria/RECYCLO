import React from "react";
import { View, Text, TextInput } from "react-native";

export function EdgeTextInput({
  style,
  name,
  keyboardType = "default",
  placeholder,
  props
}) {
  const {values, handleBlur, handleChange, errors} = props;
  return (
    <View>
      <TextInput
        style={style}
        name={name}
        value={values[name]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onBlur={handleBlur(name)}
        onChangeText={handleChange(name)}
      />
      <Text style={{ color: "red" }}>{errors[name]}</Text>
    </View>
  );
}
