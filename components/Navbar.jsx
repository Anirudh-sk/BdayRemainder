import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

const MyComponent = () => {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <Appbar.Header
    >
      <Appbar.Action icon="cake" onPress={() => {}} />
      <Appbar.Content title="Bday Remainder" />
      
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  
  fab: {
    position: 'absolute',
    right: 16,
  },
});

export default MyComponent;