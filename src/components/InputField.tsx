import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { hp } from '../utils/responsiveSizes';

function InputField({
  label,
  placeholder,
  onChange,
}: {
  label?: string;
  placeholder: string;
  onChange: (text: string) => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={text => onChange(text)}
      />
    </View>
  );
}

export default InputField;

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
  },
  label: {
    marginBottom: 4,
    fontSize: hp(2.6),
  },
  input: {
    borderWidth: 2,
    borderColor: '#DCDCDC',
    padding: 14,
    borderRadius: 6,
  },
});
