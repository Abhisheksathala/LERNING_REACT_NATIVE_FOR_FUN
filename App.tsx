import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import TextInputComponents from './src/Components/TextInput';
import ScrollViews from './src/Components/ScrollView';
import StyleingDemo from './src/Components/Styleing';
// import FlexLayout from './src/Components/FlexLayout';
// import Touchable from './src/Components/Touchable';
import TodoInput from './src/Todo/TodoInput';
import { useState } from 'react';
import TodoList from './src/Todo/TodoList';
import { Todo } from './src/types';
import RootNavigater2 from './src/Screens/RootNavigater';

// routing
import { NavigationContainer } from '@react-navigation/native';

import RooteNavigator from './src/RooteNavigator';

function App() {
  const [todolist, setTodolist] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodolist([
      ...todolist,
      {
        id: Date.now().toString(),
        text: text,
        completed: false,
      },
    ]);
  };

  const OnDeleteTodo = (id: string) => {
    const DletetTodo = todolist.filter(todo => todo.id !== id);
    setTodolist(DletetTodo);
  };

  const OntogelTodo = (id: string) => {
    const togoletodo = todolist.map((item, _) => {
      return item.id === id
        ? {
            ...item,
            completed: !item.completed,
          }
        : item;
    });
    setTodolist(togoletodo);
  };

  const editTodo = (id: string, newText: string) => {
    console.log(id, newText);

    const updatedTodoList = todolist.map((item, _) => {
      return item.id === id
        ? {
            ...item,
            text: newText,
          }
        : item;
    });

    setTodolist(updatedTodoList);
  };

  return (
    <>
      <View style={[styles.container, styles.hidden]}>
        <Text style={styles.greenbox}>Hello World</Text>
        <Text style={styles.red}>Hello World</Text>
        <Text style={styles.blue}>Hello World</Text>
      </View>
      <View style={styles.hidden}>
        <ScrollView
          contentContainerStyle={styles.scrollviewContent}
          bounces={true}
          nestedScrollEnabled={true}
        >
          <View>
            <Text style={styles.text}>hello</Text>
            <Text style={styles.nestedtext}>
              text compnent can be <Text style={styles.bold}>Nested</Text>
            </Text>
            {/* u can add remote url */}
            <Image
              style={styles.image}
              source={{
                uri: 'https://imgs.search.brave.com/L8lCBInYVNbZ-hnQCyBTf5qcPSAYp_qVOfxBAm1oftI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/NjE4NTA2OC92ZWN0/b3Ivcy1sZXR0ZXIt/cy1tb25vZ3JhbS10/aGUtb3JpZ2luYWwt/Z3JlZW4tcy1sZXR0/ZXItd2l0aC1sZWF2/ZXMtYW5kLWJlcnJp/ZXMtY2xhc3NpYy1z/dHlsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9LXdNY3FR/NW93RjlWMnZUdkM5/T1dVbUxwb1JVOUk1/MWxiOEFkVHgwN3NL/dz0',
              }}
              height={150}
              width={150}
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://imgs.search.brave.com/L8lCBInYVNbZ-hnQCyBTf5qcPSAYp_qVOfxBAm1oftI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/NjE4NTA2OC92ZWN0/b3Ivcy1sZXR0ZXIt/cy1tb25vZ3JhbS10/aGUtb3JpZ2luYWwt/Z3JlZW4tcy1sZXR0/ZXItd2l0aC1sZWF2/ZXMtYW5kLWJlcnJp/ZXMtY2xhc3NpYy1z/dHlsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9LXdNY3FR/NW93RjlWMnZUdkM5/T1dVbUxwb1JVOUk1/MWxiOEFkVHgwN3NL/dz0',
              }}
              height={150}
              width={150}
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://imgs.search.brave.com/L8lCBInYVNbZ-hnQCyBTf5qcPSAYp_qVOfxBAm1oftI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/NjE4NTA2OC92ZWN0/b3Ivcy1sZXR0ZXIt/cy1tb25vZ3JhbS10/aGUtb3JpZ2luYWwt/Z3JlZW4tcy1sZXR0/ZXItd2l0aC1sZWF2/ZXMtYW5kLWJlcnJp/ZXMtY2xhc3NpYy1z/dHlsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9LXdNY3FR/NW93RjlWMnZUdkM5/T1dVbUxwb1JVOUk1/MWxiOEFkVHgwN3NL/dz0',
              }}
              height={150}
              width={150}
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://imgs.search.brave.com/L8lCBInYVNbZ-hnQCyBTf5qcPSAYp_qVOfxBAm1oftI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/NjE4NTA2OC92ZWN0/b3Ivcy1sZXR0ZXIt/cy1tb25vZ3JhbS10/aGUtb3JpZ2luYWwt/Z3JlZW4tcy1sZXR0/ZXItd2l0aC1sZWF2/ZXMtYW5kLWJlcnJp/ZXMtY2xhc3NpYy1z/dHlsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9LXdNY3FR/NW93RjlWMnZUdkM5/T1dVbUxwb1JVOUk1/MWxiOEFkVHgwN3NL/dz0',
              }}
              height={150}
              width={150}
            />
            {/* add local image  */}
            {/* <Image source={require("")}/> */}
            <Button
              color={'green'}
              title="Click me"
              onPress={() => {
                //here u can add same as react bro that it onlick we use onpress
              }}
            />
          </View>
          <TextInputComponents />
          <ScrollViews />
          <StyleingDemo />
        </ScrollView>
      </View>
      {/* <FlexLayout /> */}
      {/* <Touchable /> */}
      <View style={styles.hidden}>
        <TodoInput onAddTodo={addTodo} />
        <TodoList
          OntogelTodo={OntogelTodo}
          OnDeleteTodo={OnDeleteTodo}
          editTodo={editTodo}
          todolist={todolist}
        />
      </View>

      {/* Navtiongation or Routing in the native */}

      <NavigationContainer>
        {/* <RooteNavigator /> */}
        <RootNavigater2 />
      </NavigationContainer>
    </>
  );
}
// view
const styles = StyleSheet.create({
  container: {
    padding: 40,
    gap: 20,
    flexDirection: 'row',
  },
  greenbox: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nestedtext: {
    fontSize: 12,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: 'green',
  },
  bold: {
    fontSize: 23,
    fontWeight: 'bold',
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 34,
  },
  image: {
    resizeMode: 'contain',
  },
  scrollviewContent: {
    padding: 20,
  },
  box: {
    height: 40,
    margin: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignContent: 'center',
  },
  boxtext: {
    color: 'gray',
    fontWeight: 'bold',
  },
  hidden: {
    display: 'none',
  },
});

export default App;
