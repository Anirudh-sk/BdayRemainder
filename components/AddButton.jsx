import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const AddButton = () => (
  <FAB
    icon="plus"
    style={styles.fab}
    color='#E83A59'
    onPress={() => console.log('Pressed')}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor:'#242B2E'
    
  },
})

export default AddButton;