import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Icon } from 'react-native-elements';

function MechanicProf() {
  return (
    <View style={{ minHeight: '100%', backgroundColor: 'white', padding: 20 }}>
      <View style={styles.svcProf}>
        <Icon name="user-circle" type="font-awesome" size={50} style={{ marginRight: 20 }} />
        <View>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Tendai Chunks</Text>
          <Text style={styles.textDetails}>4.6 rating - 12km away</Text>
        </View>
      </View>

      <View>
        <Text style={{ fontWeight: '600' }}>About Service Provider</Text>
        <View style={{ height: 100, width: '100%', backgroundColor: 'rgb(224, 224, 224)' }} />
      </View>

      <View>
        <Text style={{ fontWeight: '600' }}>Reveals</Text>
        <View style={{ height: '600', width: '100%', backgroundColor: 'rgb(224, 224, 224)' }} />
      </View>

      <View style={{ position: 'absolute', top:"80%",left:'75%' }}>
        <Pressable style={{ padding: 20, backgroundColor: 'rgb(54, 86, 245)', borderRadius: 8 }}>
          <Text style={{ fontWeight: '600', textAlign: 'center',color:'white' }}>Book Service</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  svcProf: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 20,
  },
});

export default MechanicProf;