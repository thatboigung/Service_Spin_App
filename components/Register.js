import { View, Text, StyleSheet ,Pressable,TextInput} from 'react-native';
import React, { useState } from 'react';
import { Icon } from 'react-native-elements';

function Register() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  
  return(
    <View style={{padding:20,height:'100%',backgroundColor:'white'}}>
         <View>
        <Icon name="user-circle" type="font-awesome" size={120} style={{ marginTop: 20 }} />
        <Text style={{ textAlign: 'center' }}>Add Profile Pic</Text>
      </View>
        
        <View>
         <Text style={styles.textLabel}> Your Service Name </Text>
            <TextInput style={styles.input} placeholder="Driver / Mechanic" value={name} onChangeText={setName} />
        </View>

        <View>
          <Text style={styles.textLabel}> Add Bio</Text>
            <TextInput style={styles.input} placeholder="Let Clients Know About Yourself" value={bio} onChangeText={setBio} />
        </View>

        <View>
          <Text style={styles.textLabel}> Location</Text>
            <TextInput style={styles.input} placeholder="Your Location" value={location} onChangeText={setLocation} />
        </View>

         <View>
         <Text style={styles.textLabel}>Starting Price </Text>
            <TextInput style={styles.input} placeholder="State your starting price" value={location} onChangeText={setLocation} />
        </View>

        <View>
          <Pressable style={{padding:20,backgroundColor:'rgb(54, 86, 245)',borderRadius:8}}>
              <Text style={{fontWeight:'600',textAlign:'center',color:'white'}}> Done </Text>
          </Pressable>
        </View>
       
    </View>
  )
};

const styles = StyleSheet.create({
  textLabel:{
    fontWeight:'600'
  },
    input: {
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: 'rgb(240, 237, 237)',
  },

})

export default Register;