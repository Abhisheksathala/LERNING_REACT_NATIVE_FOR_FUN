import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const TextInputComponents = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <View style={style.conatiner}>
        <Text style={style.header}>Text Input Component</Text>
        <TextInput
          placeholder="Type Somthing here..."
          value={value}
          style={style.input}
          onChangeText={setValue}
        />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: '600',
    color: 'red',
    padding: 20,
  },
  conatiner: {
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 20,
  },
});

export default TextInputComponents;
