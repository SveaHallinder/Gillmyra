import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HorseProfile = ({ data }) => {
  return (
    <View style={styles.profileContainer}>
      <Image style={styles.profileImage} source={{ uri: data.imageUrl }} />
      <Text style={styles.profileName}>{data.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    // Add any other styling for the horse profile container here
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    // Add any other styling for the horse profile image here
  },
  profileName: {
    // Add styling for the horse name text
  },
  // Add any additional styles if needed
});

export default HorseProfile;