import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../components/SafeAreaWrapper';
import { hp } from '../utils/responsiveSizes';
import Header from '../components/Header';
import Food from '../components/Food';
import FoodCategory from '../components/FoodCategory';
import Button from '../components/Button';

const Home = ({navigation}) => {
  return (
    <SafeAreaWrapper>
      <Header />
      <View style={styles.orderCategory}>
        <Text style={styles.orderCategoryText}>Order category</Text>
        <View style={styles.orderCategorySection}>
          <FoodCategory name="Salad" />
          <FoodCategory name="Salad" />
          <FoodCategory name="Salad" />
        </View>
        <Food
          title="Food"
          description="Pepper flavoured spaghetti with a touch of chilli spicy."
          price="$34"
        />
      </View>
      <Button onPress={()=>navigation.navigate("Profile")}>Next</Button>
    </SafeAreaWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  orderCategory: {
    padding: hp(2.5),
  },
  orderCategoryText: {
    fontSize: hp(3.3),
  },
  orderCategorySection: {
    flexDirection: 'row',
    paddingVertical: hp(1.5),
    marginBottom: hp(2.5),
  },
});
