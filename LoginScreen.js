import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { appleAuth } from '@invertase/react-native-apple-authentication';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate login success:
    console.log("Login attempted with:", email, password);
    // Navigate to HomeScreen
    navigation.navigate ('HomeStack');
  };
/*
// Function to handle Facebook login
const handleFacebookLogin = async () => {
  try {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    
    if (result.isCancelled) {
      // handle case when user cancels login
      alert('User cancelled the login process');
      return;
    }
    
    // Get the access token
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      // handle case when something went wrong obtaining the access token
      alert('Something went wrong obtaining the access token');
      return;
    }

    // Use the access token for further API calls or send it to your backend
    const accessToken = data.accessToken.toString();
    
    // Navigate to HomeScreen upon successful login
    navigation.navigate('Home');

    // Optionally, you can verify the token from your server
    // by making an API call to your backend with the access token.
  } catch (error) {
    // Handle login errors
    alert('Login failed with error: ' + error);
  }
};

// Function to handle Apple login
const handleAppleLogin = async () => {
  try {
    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // Get the user's credential
    const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

    // Use credentialState to determine if the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {
      // User is authenticated, you can now use their Apple ID credential
      navigation.navigate('Home');

      // You can also send appleAuthRequestResponse.identityToken to your server for verification
    } else {
      // The user is not authorized
      console.log('The user is not authorized');
    }
  } catch (error) {
    // Handle errors from the sign-in request
    console.error('Apple sign-in failed', error);
  }
};
*/

  return (
    <View style={styles.container}>
    <Image
      source={require('./dark_logo_170x100px.png')}
      style={styles.logo}
    />
    <Text style={styles.title}>Logga in</Text>
  {/*
      <TouchableOpacity onPress={handleFacebookLogin} style={styles.button}>
      <Text>Logga in med Facebook</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={handleAppleLogin} style={styles.button}>
      <Text>Logga in med Apple</Text>
    </TouchableOpacity>
  */}

    <TextInput
      value={email}
      onChangeText={setEmail}
      placeholder="Email"
      style={styles.input}
    />

    <TextInput
      value={password}
      onChangeText={setPassword}
      placeholder="Lösenord"
      secureTextEntry
      style={styles.input}
    />

    <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
      <Text style={styles.loginButtonText}>Logga in</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Text style={styles.link}>Glömt ditt lösenord? Klicka här!</Text>
    </TouchableOpacity>

    <View style={styles.registerContainer}>
    <TouchableOpacity>
      <Text>Inget konto?</Text>
    </TouchableOpacity>
    
    <TouchableOpacity>
      <Text style={styles.link}> Skapa ett här!</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 170,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#E7E7E7',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default LoginScreen;