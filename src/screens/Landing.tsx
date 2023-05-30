import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Search from '../components/Search';
import { hp } from '../utils/responsiveSizes';
import InputField from '../components/InputField';
import { CheckBoxInput } from '../components/CheckBox';
import SafeAreaWrapper from '../components/SafeAreaWrapper';
import Header from '../components/Header';

export default function Landing({ navigation }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const handleText = (text: string) => {
    console.log(text);
  };

  return (
    <SafeAreaWrapper>
      <Header />
      <View style={styles.formSection}>
        <InputField
          placeholder="First name e.g Kelly"
          label="First Name"
          onChange={handleText}
        />
        <InputField
          placeholder="Last name e.g Joe"
          label="Last Name"
          onChange={handleText}
        />
        <InputField
          placeholder="Email e.g example@gmail.com"
          label="Email"
          onChange={handleText}
        />
        <InputField
          placeholder="Phone e.g xxx xxx xxxx"
          label="Phone"
          onChange={handleText}
        />
        <View style={styles.emailNotification}>
          <Text style={styles.emailNotificationText}>Email Notifications</Text>

          <CheckBoxInput
            label="Order Status"
            value={toggleCheckBox}
            onValueChange={setToggleCheckBox}
          />
          <CheckBoxInput
            label="Password changes"
            value={toggleCheckBox}
            onValueChange={setToggleCheckBox}
          />
          <CheckBoxInput
            label="Special offers"
            value={toggleCheckBox}
            onValueChange={setToggleCheckBox}
          />
          <CheckBoxInput
            label="Newsletter"
            value={toggleCheckBox}
            onValueChange={setToggleCheckBox}
          />
        </View>

        <Button
          buttonStyle={styles.nextButton}
          textStyle={styles.nextButtonText}
          onPress={() => navigation.navigate('Home')}>
          Next
        </Button>
      </View>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  heroSection: {
    height: hp(43.84),
    padding: hp(2.7),
    marginTop: 20,
    backgroundColor: '#495E57',
  },
  heroTitle: {
    fontSize: hp(4.6),
    color: '#F4CE14',
    fontWeight: '800',
  },
  heroSubtitle: {
    fontSize: hp(2.76),
    color: 'white',
    marginBottom: hp(1.2),
    fontWeight: '600',
  },
  heroDescription: {
    fontSize: hp(2.3),
    color: 'white',
  },
  heroContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  heroItems: {
    width: '60%',
  },
  heroImageContainer: {
    width: '40%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  searchSection: {
    marginTop: 15,
  },
  formSection: {
    padding: hp(2.3),
  },
  emailNotification: {
    marginTop: hp(2.3),
  },
  emailNotificationText: {
    fontSize: hp(2.5),
  },
  notificationCheckBoxes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2.5),
  },
  notificationCheckBoxesText: {
    marginLeft: hp(2.5),
    fontSize: hp(2.6),
  },
  nextButton: {
    backgroundColor: '#F4CE14',
    marginVertical: hp(6.5),
  },
  nextButtonText: {
    color: '#495E57',
  },
});
