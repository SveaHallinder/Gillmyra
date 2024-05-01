import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import HorseProfile from './HorseProfile';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }
          // You can add more icons for different tabs here
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HorseProfile} />
      {/* Add other tabs for additional screens here */}
    </Tab.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeTab" component={HomeTabScreen} />
      {/* You can add more screens that are part of the Home flow here */}
    </HomeStack.Navigator>
  );
};

const App = () => {
  const [isSplashScreen, setIsSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashScreen(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {isSplashScreen ? (
        // Only show the SplashScreen while isSplashScreen is true
        <RootStack.Screen name="Splash" component={SplashScreen} />
      ) : (
        // After the SplashScreen, the LoginScreen will be shown, followed by the HomeStack
        <>
          <RootStack.Screen name="Login" component={LoginScreen} />
          <RootStack.Screen name="HomeStack" component={HomeStackScreen} />
        </>
      )}
    </RootStack.Navigator>
  </NavigationContainer>
  );
};

export default App;