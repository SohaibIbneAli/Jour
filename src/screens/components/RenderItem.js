import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  itemPost: {
    //backgroundColor: '#F5B7B1',
    borderWidth: 1,
    borderColor: '#F5B7B1',
    borderRadius: 8,
    marginVertical: 12,
    marginBottom: 12,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  postUserTxt: {fontSize: 15},
  //postIdTxt:{},
  postTitleTxt: {fontSize: 16, color: 'red'},
  //postBodyTxt:{},
});
const RenderItems = ({item, index, data,onPress}) => {
  return (
    <TouchableOpacity
      style={styles.itemPost}
      //onPress={() => navigation.push('Comments')}
      onPress={() => {
        onPress();
      }}
      >
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.postUserTxt}>User {item.userId}</Text>
        <Text style={[{marginLeft: 'auto'}, styles.postIdTxt]}>#{item.id}</Text>
      </View>
      <Text style={styles.postTitleTxt}>{item.title}</Text>
      <Text style={styles.postBodyTxt}>{item.body}</Text>
    </TouchableOpacity>
  );
};

export default RenderItems;
