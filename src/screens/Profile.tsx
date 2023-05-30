import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../components/SafeAreaWrapper';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { CheckBoxInput } from '../components/CheckBox';
import { hp } from '../utils/responsiveSizes';

const Profile = () => {
  return (
    <SafeAreaWrapper>
      <View style={styles.profileContainer}>
        <View style={styles.profileAvatar}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/Profile.png')}
              style={styles.image}
            />
          </View>
          <Button buttonStyle={styles.changeButton}>Change</Button>
          <Button
            buttonStyle={styles.removeButton}
            textStyle={styles.removeButtonText}>
            Remove
          </Button>
        </View>

        <View>
          <InputField
            placeholder="First name e.g Kelly"
            label="First Name"
            onChange={() => {}}
          />
          <InputField
            placeholder="Last name e.g Joe"
            label="Last Name"
            onChange={() => {}}
          />
          <InputField
            placeholder="Email e.g example@gmail.com"
            label="Email"
            onChange={() => {}}
          />
          <InputField
            placeholder="Phone e.g xxx xxx xxxx"
            label="Phone"
            onChange={() => {}}
          />
          <View>
          <Text style={styles.emailNotificationText}>Email Notifications</Text>

            <CheckBoxInput
              label="Order Status"
              value={false}
              onValueChange={() => {}}
            />
            <CheckBoxInput
              label="Password changes"
              value={false}
              onValueChange={() => {}}
            />
            <CheckBoxInput
              label="Special offers"
              value={false}
              onValueChange={() => {}}
            />
            <CheckBoxInput
              label="Newsletter"
              value={false}
              onValueChange={() => {}}
            />
            <Text>Profile</Text>
          </View>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  profileAvatar: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: hp(4.3)
  },
  imageContainer: {
    width: hp(7.3),
    height: hp(7.3),
    borderRadius: 30,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  changeButton: {
    borderRadius: 12,
    marginHorizontal: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  removeButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#495E57',
    flexGrow: 0,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius:0
  },
  removeButtonText: {
    color: '#495E57',
  },
  emailNotificationText: {
    fontSize: hp(2.5),
  },
});
