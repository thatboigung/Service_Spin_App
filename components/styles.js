import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  topbar: {
    paddingLeft: 20,
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    fontWeight: 600,
  },
  iconContainer: {
    alignItems: 'flex-end', 
  },
  sidebar:{
    position:'fixed',
    top:0,
    right:0,
    height:'100%',
    width:'50%',
    backgroundColor:'red'
  }
});

export default styles;