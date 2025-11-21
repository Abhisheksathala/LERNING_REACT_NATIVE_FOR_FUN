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

function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.greenbox}>Hello World</Text>
        <Text style={styles.red}>Hello World</Text>
        <Text style={styles.blue}>Hello World</Text>
      </View>
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
});

export default App;
