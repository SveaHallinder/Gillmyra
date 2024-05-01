import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const NavigationBar = () => {
  // This would be your navigation handler or you can use the navigation prop from react-navigation
  const navigateToScreen = (screenName) => {
    console.log(`Navigate to ${screenName}`);
  };

  return (
    <View style={styles.navBar}>
      {/* Repeat this TouchableOpacity for each icon in your nav bar */}
      <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <Image source={require('./home-icon.svg')} />
      </TouchableOpacity>
      {/* ... other icons */}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#fff',
    // Add any other styling for your nav bar here
  },
  // Add styles for your nav bar icons if needed
});

export default NavigationBar;