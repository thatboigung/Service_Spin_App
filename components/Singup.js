import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

function SignUp({handleSignUp, setLoading }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');


const handleSubmitSignUp = async () => {
  setLoading(true); // Set loading state before signup attempt
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });
  setLoading(false); // Reset loading state after signup attempt

  if (error) {
    console.error('Error signing up:', error);
  } else {
    console.log('User signed up successfully:', user);
    // Show success popup and redirect to login
    setIsSignupSuccessful(true); // Set state to show popup
    setTimeout(() => {
      setIsSignupSuccessful(false); // Close popup after a delay
      navigation.navigate('Login'); // Navigate to login screen
    }, 2000); // Adjust delay as needed

    // Update user profile with additional data
    const { error: updateError } = await supabase.auth.update({
      data: {
        name,
        username,
      },
    });

    if (updateError) {
      console.error('Error updating user profile:', updateError);
    }
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        required
      />
      <Pressable style={styles.button} onPress={handleSubmitSignUp}>
        <Text style={{ color: 'white', textAlign: 'center' }}>SignUp</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: '600',
  },
  input: {
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: 'rgb(240, 237, 237)',
  },
  button: {
    backgroundColor: 'rgb(56, 66, 252)',
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
  },
  iconContainer: {
    width:'90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default SignUp;
