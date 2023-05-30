import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import { StyleSheet, Text, View } from 'react-native';
import { hp } from '../utils/responsiveSizes';

function CheckBoxField({
  value,
  onValueChange,
}: {
  value: boolean;
  onValueChange: (value: boolean) => void;
}) {
  return (
    <CheckBox
      disabled={false}
      value={value}
      onValueChange={(newValue: boolean) => onValueChange(newValue)}
      boxType='square'
    />
  );
}

export default CheckBoxField;

export function CheckBoxInput({
  label,
  value,
  onValueChange,
}: {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}) {
  return (
    <View style={styles.notificationCheckBoxes}>
      <CheckBoxField value={value} onValueChange={onValueChange}  />
      <Text style={styles.notificationCheckBoxesText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationCheckBoxes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2.5),
  },
  notificationCheckBoxesText: {
    marginLeft: hp(2.5),
    fontSize: hp(2.6),
  },
});
