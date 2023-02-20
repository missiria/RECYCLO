import React from "react";
import { View, Text, TextInput } from "react-native";
import Toast from 'react-native-toast-message';

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
        secureTextEntry={name === "password"}
      />
      {/* <Text style={{ color: "red" }}>{errors[name]}</Text> */}
      {/* todo : fix a warning in toast */}
      {errors[name] &&
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Error',
          text2: errors[name],
          visibilityTime: 5000,
          autoHide: true,
          bottomOffset: 40,
        })
      }
    </View>
  );
}
