import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

const Splash = () => {
  const navigation = useNavigation();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  console.log('Splash Function');

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
    }, 1500);
  }, [navigation]);
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <View style={styles.circle}>
          <Text style={styles.txt}>JOURNEY</Text>
        </View>
      </Animated.View>
    </View>
  );
};
export default Splash;
