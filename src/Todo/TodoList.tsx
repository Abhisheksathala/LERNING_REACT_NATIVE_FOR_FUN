import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Todo } from '../types';
import TodoItems from './TodoItems';

interface TodoListProps {
  todolist: Todo[];
  OnDeleteTodo: (id: string) => void;
  OntogelTodo: (id: string) => void;
  editTodo: (id: string, newtitle: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todolist,
  OnDeleteTodo,
  OntogelTodo,
  editTodo,
}) => {
  return (
    <ScrollView style={styles.container}>
      {todolist.map((todo, index) => {
        return (
          <>
            <TodoItems
              key={index}
              OnDeleteTodo={OnDeleteTodo}
              OntogelTodo={OntogelTodo}
              editTodo={newText => editTodo(todo?.id)}
              todo={todo}
            />
          </>
        );
      })}
    </ScrollView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
