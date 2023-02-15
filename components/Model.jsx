import React, { useState} from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import Modal from 'react-native-modal';
import FormInput from './FormInput';

const ModalDemo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <Button title="Add Birthday"  onPress={toggleModal} />
      <Modal
        isVisible={isModalVisible}>
        <View>
          <FormInput />
          <View>
            <Text>{'\n'}</Text>
            <Button style={{marginTop:10, padding:10}} title="Close" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop:20,
    // backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ModalDemo;