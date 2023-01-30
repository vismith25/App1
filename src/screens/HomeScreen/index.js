import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';

const HomeScreen = () => {
  const onReadPressed = () => {};

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.ps1}>LEARNING CODE</Text>

        <Text style={styles.ps2}>⭐ Web Application Development</Text>

        <CustomButton
          style={styles.con1}
          text="Read"
          onPress={onReadPressed}
          type="CON"
        />

        <Text style={styles.ps2}>⭐ Web Application Development</Text>

        <CustomButton
          style={styles.con1}
          text="Read"
          onPress={onReadPressed}
          type="CON"
        />

        <Text style={styles.ps2}>⭐ Web Application Development</Text>

        <CustomButton
          style={styles.con1}
          text="Read"
          onPress={onReadPressed}
          type="CON"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 40,
  },

  ps1: {
    marginVertical: 50,
    fontSize: 30,
    color: '#2196f3',
  },

  ps2: {
    fontSize: 20,
  },
});

export default HomeScreen;
