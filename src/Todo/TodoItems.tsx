import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Todo } from '../types';

interface TOdoitemProps {
  todo: Todo;
  OnDeleteTodo: (id: string) => void;
  OntogelTodo: (id: string) => void;
  editTodo: (newtitle: string) => void;
}

const TodoItems: React.FC<TOdoitemProps> = ({
  todo,
  OnDeleteTodo,
  OntogelTodo,
  editTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            OntogelTodo(todo?.id);
          }}
          style={styles.todotext}
        >
          <Text style={[styles.text, todo?.completed && styles.completedtext]}>
            {todo.text}
          </Text>
        </TouchableOpacity>

        <View style={styles.btncontainer}>
          <TouchableOpacity
            onPress={() => setIsEditing(true)}
            style={styles.editbtn}
          >
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.delbtn}>
            <Text onPress={() => OnDeleteTodo(todo.id)}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default TodoItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    padding: 30,
  },
  todotext: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  completedtext: {
    textDecorationLine: 'line-through',
    color: '#888888',
  },
  btncontainer: {
    flexDirection: 'row',
    gap: 5,
  },
  editbtn: {
    backgroundColor: '#007aff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  delbtn: {
    backgroundColor: '#ff3b30',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
