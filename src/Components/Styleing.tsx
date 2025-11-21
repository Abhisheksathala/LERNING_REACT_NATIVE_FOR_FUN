import { View, Text, StyleSheet } from 'react-native';

const StyleingDemo = () => {
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 5,
            marginBottom: 15,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            hello this is the styleing
          </Text>
        </View>
        <View
          style={[
            styles.combainstyle,
            { borderWidth: 2, borderColor: 'purple' },
          ]}
        >
          <Text style={[styles.combainstyleText,{textDecorationLine:"underline"}]}>hello</Text>
        </View>
      </View>
    </>
  );
};

export default StyleingDemo;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  combainstyle: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  combainstyleText:{
    fontSize:14
  }
});
