import { StyleSheet, View, Text ,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 40,
  },
  sidebarItem: {
    marginTop: 15,
  },
  sidebarText: {
    fontSize: 18,
  },
});

const Sidebar = ({ navigation }) => {
  return (
     <View style={styles.sidebar}>
      <Text style={{ fontSize: 20, fontWeight: '600' }}>Sidebar</Text>
      <View>
        <Icon name="user-circle" type="font-awesome" size={80} style={{ marginTop: 20 }} />
        <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 20, fontWeight: '600' }}>
          Tapuwa
        </Text>
        <Text style={{ textAlign: 'center' }}>Complete your profile (1/3)</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('')}>
          <Text style={{ color: 'gray' }}>Your Location</Text>
          <Text style={styles.sidebarText}>Chicago</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Orders')}>
          <Text style={styles.sidebarText}>Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.sidebarText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('')}>
          <Text style={styles.sidebarText}>Payment Methods</Text>
          <Text style={{ color: 'gray' }}>Cash</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.sidebarText}>Become A Service Provider</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('')}>
          <Text style={styles.sidebarText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('')}>
          <Text style={styles.sidebarText}>Appearance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('')}>
          <Text style={styles.sidebarText}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('')}>
          <Text style={styles.sidebarText}>About</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Auth')}>
          <Text style={{ color: 'red', fontSize: 18 }}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Sidebar;