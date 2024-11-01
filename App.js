import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import screens and sidebar
import Sidebar from './components/sidebar';
import Home from './components/Home';
import Orders from './components/Orders';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Chat from './components/Chat';
import MechanicProf from './components/Mechanic';
import Auth from './components/Auth';

const Drawer = createDrawerNavigator();

function App() {
  const [user, setUser] = useState(null);
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.post('/api/auth/verify-token', { token });
          if (response.data.success) {
            setUser(response.data.user);
          } else {
            setIsAuthModalVisible(true);
          }
        } catch (error) {
          console.error('Error verifying token:', error);
          setIsAuthModalVisible(true);
        }
      } else {
        setIsAuthModalVisible(true);
      }
    };

    fetchUser();
  }, []);

  const handleAuthSuccess = async (loggedInUser) => {
    setUser(loggedInUser);
    setIsAuthModalVisible(false);

    try {
      const phoneNumber = loggedInUser.phone_number;
      await AsyncStorage.setItem('phoneNumber', phoneNumber);
    } catch (error) {
      console.error('Error storing phone number:', error);
    }
  };

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <Sidebar {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Orders" component={Orders} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Chat" component={Chat} />
        <Drawer.Screen name="Mechanic" component={MechanicProf} />
      </Drawer.Navigator>

      <Modal visible={isAuthModalVisible} animationType="slide" transparent={true}>
        <Auth onAuthSuccess={handleAuthSuccess} />
      </Modal>
    </NavigationContainer>
  );
}

export default App;
