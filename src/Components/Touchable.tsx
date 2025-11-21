import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

const Touchable = () => {
  const [opacityCount, setOpacityCount] = useState(0);
  const [higlightCount,setHiglightCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Touchable compoents</Text>
      <TouchableOpacity
        onPress={() => setOpacityCount(opacityCount + 1)}
        style={styles.btn}
      >
        <Text style={styles.text}>Touchable Opacity </Text>
      </TouchableOpacity>
      <TouchableHighlight
      // onclick
      onPress={()=>setHiglightCount(higlightCount + 1)}
      underlayColor={"red"} style={styles.btn}>
        <Text style={styles.text}>Touchable Opacity </Text>
      </TouchableHighlight>
    </View>
  );
};

export default Touchable;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 20,
  },
  marginBottom: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    paddingLeft: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textDecorationLine: 'underline',
    paddingLeft: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  box: {
    width: 50,
    height: 50,
  },
  redbox: {
    backgroundColor: 'red',
  },
  bluebox: {
    backgroundColor: 'blue',
  },
  yellowbox: {
    backgroundColor: 'yellow',
  },
  colomnContainer: {
    flexDirection: 'column',
    height: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#65a2e9ff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
});
