import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const AddButton = ({onPress}) => (
  <FAB
    icon="plus"
    style={styles.fab}
    color='#E83A59'
    onPress={onPress}
  />
);

const styles = StyleSheet.create({
  fab: {
    // position: 'absolute',
    margin: 16,
    marginTop:30,
    right: 0,
    bottom: 0,
    backgroundColor:'#141E30'
    
  },
})

export default AddButton;