import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

const Navbar = () => {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Action color='#E83A59' icon="cake" onPress={() => {}} />
      <Appbar.Content color='#E83A59' title="       Birthday Remainder" />
      <Appbar.Action color='#B9345A' icon="alert-circle" onPress={() => {}} />
      
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  
  header: {
    backgroundColor:"#242B2E",
    
  },
});

export default Navbar;