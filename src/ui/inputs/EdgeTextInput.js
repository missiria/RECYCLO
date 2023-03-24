import React from "react";
import { Text, TextInput } from "react-native";

export function EdgeTextInput({
  style,
  name,
  keyboardType = "default",
  placeholder,
  props,
  ...rest
}) {
  const { values, handleBlur, handleChange, errors } = props;
  return (
    <>
      <TextInput
        {...rest}
        style={style}
        name={name}
        value={values[name]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onBlur={handleBlur(name)}
        onChangeText={handleChange(name)}
      />
      {/** we add this condition to avoid the render of the Text component if there is no error */}
      {errors[name] && <Text style={{ color: "red" }}>{errors[name]}</Text>}
    </>
  );
}
