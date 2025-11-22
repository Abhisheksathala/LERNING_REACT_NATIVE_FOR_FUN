import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [text, setText] = useState<string>('');

  const handletodo = () => {
    if (text.trim()) {
      onAddTodo(text.trim());
      setText('');
    }
  };
  return (
    <>
      <View style={styles.container}>
        {/* <Text>TODO</Text> */}
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="enetr the todo..."
          style={styles.input}
          onSubmitEditing={handletodo}
        />
        <TouchableOpacity onPress={handletodo} style={styles.addtodoBtn}>
          <Text style={styles.addtodoBtntext}>Add</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 1,
  },
  addtodoBtn: {
    backgroundColor: '#007aff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addtodoBtntext: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
