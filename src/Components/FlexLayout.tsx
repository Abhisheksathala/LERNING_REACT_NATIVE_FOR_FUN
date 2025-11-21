import { View, Text, StyleSheet } from "react-native"

const FlexLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Layout useing Flex</Text>
      <Text>Main Axis (Row)</Text>
      <View style={styles.rowContainer} >
        <View style={[styles.box,styles.redbox]} />
        <View style={[styles.box,styles.bluebox]} />
        <View style={[styles.box,styles.yellowbox]} />
      </View>
       <Text>Main Axis (column)</Text>
       <View style={styles.colomnContainer}>
         <View style={[styles.box,styles.redbox]} />
        <View style={[styles.box,styles.bluebox]} />
        <View style={[styles.box,styles.yellowbox]} />
       </View>
    </View>
  )
}

export default FlexLayout

const styles = StyleSheet.create({
  container: {

  },
  marginBottom: {
    marginBottom: 20,
  },
  headerText:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:20,
  textDecorationLine:"underline",
  paddingLeft:20
  },
  rowContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"flex-end",
    marginBottom:16
  },
  box:{
    width:50,
    height:50
  },
  redbox:{
    backgroundColor:"red"
  },
  bluebox:{
    backgroundColor:"blue"
  },
  yellowbox:{
    backgroundColor:"yellow"
  },
  colomnContainer:{
flexDirection:"column",
height:200,
justifyContent:"space-between",
 alignItems:"center",
marginBottom:20
  }
})
