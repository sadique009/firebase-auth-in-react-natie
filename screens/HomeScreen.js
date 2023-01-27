import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {auth} from '../firebase/config';
import {Alert} from 'react-native/Libraries/Alert/Alert';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch(err => {
        Alert(err.message);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email : {auth.currentUser?.email}</Text>
      {/* {auth.currentUser?.email }..this checks if currentUser is undefined, and if it is, 
      it will not check for email and leave it as 'undefined', if we had not written ?, 
      then it would have checked for email no matter what, and that could crash our app.*/}
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 16,
  },
  text: {
    color: 'black',
    fontWeight: '400',
    fontSize: 18,
  },
});
