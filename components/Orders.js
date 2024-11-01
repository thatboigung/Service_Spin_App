import React, { useState } from 'react';
import { View, Text, StyleSheet ,Pressable} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

function Orders() {
const navigation = useNavigation();
  return (
  <View>

    <View style={styles.navBarOrders}>
    <Text style={styles.textNavbar}>All </Text>
    <Text style={styles.textNavbar}>Pending</Text>
    <Text style={styles.textNavbar}>Accepted</Text>
    <Text style={styles.textNavbar}>OnGoing</Text>
    </View>

  <View style={styles.ordersList}> 
      <Pressable style={styles.svcProf} onPress={() => navigation.navigate('Chat')}>
       <Icon name="user-circle" type="font-awesome" size={50} />
       <View>
          <Text style={styles.textName}> Tendai Chunks</Text>
          <Text style={styles.textDetails}>Booked Repaire Service Of Truck</Text>
       </View>
      </Pressable>
        <Pressable style={styles.svcProf}>
       <Icon name="user-circle" type="font-awesome" size={50} />
       <View>
          <Text style={styles.textName}> Vimbai Vuzz</Text>
          <Text style={styles.textDetails}>Booked Car repaire service</Text>
       </View>
      </Pressable>
        <Pressable style={styles.svcProf}>
       <Icon name="user-circle" type="font-awesome" size={50} />
       <View>
          <Text style={styles.textName}> Gym Sunda</Text>
          <Text style={styles.textDetails}>Booked Repaire Service Of Truck</Text>
       </View>
      </Pressable>
        <Pressable style={styles.svcProf}>
       <Icon name="user-circle" type="font-awesome" size={50} />
       <View>
          <Text style={styles.textName}> Hall Fame</Text>
          <Text style={styles.textDetails}>You Orderd Delivery Service of Cars</Text>
       </View>
      </Pressable>
        <Pressable style={styles.svcProf}>
       <Icon name="user-circle" type="font-awesome" size={50} />
       <View>
          <Text style={styles.textName}> James Bond</Text>
          <Text style={styles.textDetails}>Booked Repaire Service of Lambo</Text>
       </View>
      </Pressable>
  </View>

  
  
  </View>
  );
}

const styles = StyleSheet.create({
    navBarOrders:{
      display:'flex',
      flexDirection:'row',
      marginTop:20,
      padding:20
    },
    textNavbar:{
      padding:10,
      backgroundColor:'rgb(227, 227, 227)',
      borderRadius:8,
      fontSize:16,
      marginRight:10
    },  svcProf:{
      display:'flex',
      flexDirection:'row',
      marginTop:10
  },
  ordersList:{
    padding:20
  },
  textName:{
    fontSize:17,
    fontWeight:'600',
    marginLeft:10
  },
  textDetails:{
    marginLeft:10,
    color:'gray'
  }
 
});

export default Orders;