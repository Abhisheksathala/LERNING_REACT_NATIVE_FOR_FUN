import { StyleSheet, Text, View, ScrollView } from 'react-native';

const ScrollViews = () => {
  return (
    <>
      <View>
        <ScrollView
          bounces={true}
          contentContainerStyle={''}
          showsHorizontalScrollIndicator={true}      nestedScrollEnabled={true}
        >
          {Array.from({ length: 20 }).map((_, index) => {
            return (
              <>
                <View key={index} style={styles.box}>
                  <Text style={styles.boxtext}>{index + 1}</Text>
                </View>
              </>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default ScrollViews;

const styles = StyleSheet.create({
  box: {
    height: 40,
    margin: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignContent: 'center',
  },
  boxtext: {
    fontWeight: 'bold',
  },
});
