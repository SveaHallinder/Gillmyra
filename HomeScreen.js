import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleLogOut = () => {
    // Logik för utloggning går här
    // Du kanske vill navigera tillbaka till LoginScreen efter utloggning
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Välkommen till startsidan!</Text>
      <Button title="Logga ut" onPress={handleLogOut} />
      {}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
  },
});

export default HomeScreen;