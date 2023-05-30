import * as React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  PressableProps,
  StyleSheetProperties,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';

interface IButton {
  onPress?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: ViewStyle;
}

const Button = ({
  onPress,
  children,
  disabled,
  textStyle,
  buttonStyle,
}: IButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonWrapper, disabled && styles.disabled, buttonStyle]}
      disabled={disabled}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 8,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 13,
  },
  disabled: {
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 21,
  },
});

export default Button;
