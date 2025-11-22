import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Todo } from '../types';
import React, { useState } from 'react';

interface TodoEditProps {
  todo: Todo;
  onsave: (newtext: string) => void;
  oncancel: () => void;
}

const TodoEdit: React.FC<TodoEditProps> = ({ todo, onsave, oncancel }) => {
  const [text, setText] = useState(todo?.text);

  const handlesave = () => {
    if (text.trim()) {
      onsave(text.trim());
    }
  };

  return (
    <View style={styles.container}>
      <TextInput onChangeText={setText} value={text} style={styles.input} />
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => handlesave()} style={styles.editbtn}>
          <Text>save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={oncancel} style={styles.delbtn}>
          <Text>cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  editbtn: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  delbtn: {
    backgroundColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

export default TodoEdit;
