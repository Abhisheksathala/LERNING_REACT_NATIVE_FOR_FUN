import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const TodoEdit = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.editbtn}>
          <Text>save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.delbtn}>
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
