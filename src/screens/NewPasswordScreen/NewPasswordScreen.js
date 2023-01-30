import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const NewPasswordScreen = () => {
  const [code, setcode] = useState(' ');
  const [newPassword, setNewpassword] = useState(' ');

  const Navigation = useNavigation();

  const onSubmitPressed = () => {
    Navigation.navigate('HomeScreen');
  };

  const onSignInPress = () => {
    Navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput placeholder="Code" value={code} setValue={setcode} />
        <CustomInput
          placeholder="Enter your New Password"
          value={newPassword}
          setValue={setNewpassword}
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} type="PASI" />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 50,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },

  text: {
    color: 'gray',
    marginVertical: 10,
  },

  link: {
    color: '#FDB075',
  },
});

export default NewPasswordScreen;
