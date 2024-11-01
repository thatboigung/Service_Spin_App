import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, Pressable, ActivityIndicator, Text, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const countryCodes = {
  Zambia: '+260',
  Zimbabwe: '+263',
  // (Add other countries as needed)
};

function Login() {
  const [selectedCountry, setSelectedCountry] = useState('Zambia');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setLoading] = useState(false);

  const navigation = useNavigation();

  // Check if user is already logged in
  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedInUser = await AsyncStorage.getItem('loggedInUser');
      if (loggedInUser) {
        navigation.navigate('Home');
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await fetch('http://192.168.202.92/ServcSpinBackend/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          countryCode: countryCodes[selectedCountry],
          phoneNumber: phoneNumber,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save login status and phone number
        await AsyncStorage.setItem('loggedInUser', JSON.stringify({ phoneNumber, countryCode: countryCodes[selectedCountry] }));
        navigation.navigate('Home');
      } else {
        Alert.alert("Login Failed", data.error || "An error occurred");
      }
    } catch (error) {
      Alert.alert("Error", "Could not connect to the server");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneNumberChange = (input) => {
    const filteredInput = input.replace(/[^0-9]/g, '').slice(0, 9);
    setPhoneNumber(filteredInput);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>

      {/* Country Picker */}
      <Picker
        selectedValue={selectedCountry}
        onValueChange={(itemValue) => setSelectedCountry(itemValue)}
        style={styles.picker}
      >
        {Object.keys(countryCodes).map((country) => (
          <Picker.Item key={country} label={country} value={country} />
        ))}
      </Picker>

      {/* Phone Number Input with Country Code */}
      <View style={styles.phoneInputContainer}>
        <Text style={styles.countryCode}>{countryCodes[selectedCountry]}</Text>
        <TextInput
          style={styles.phoneInput}
          placeholder="Phone number"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />
      </View>

      <Pressable style={styles.button} onPress={handleLogin} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={{ color: 'white', textAlign: 'center' }}>LogIn</Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    height: '100%',
  },
  heading: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: '600',
  },
  picker: {
    marginBottom: 20,
    backgroundColor: 'rgb(240, 237, 237)',
    borderRadius: 8,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(240, 237, 237)',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  phoneInput: {
    fontSize: 16,
    flex: 1,
  },
  button: {
    backgroundColor: 'rgb(56, 66, 252)',
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
  },
});

export default Login;
