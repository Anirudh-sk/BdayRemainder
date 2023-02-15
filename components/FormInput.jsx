import React, {useState} from 'react';
import { Text, View} from 'react-native';
import { TextInput } from 'react-native-paper';


const FormInput = () => {
  const [value, setValue] = useState(0);
  return (
    <View>
      <Text style={{margin:10, padding:10}} > Enter the Birthday </Text>
      <View>
        <TextInput  label="Name" />
        
      </View>
    </View>
  );
};

export default FormInput;