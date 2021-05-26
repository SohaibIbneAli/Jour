import React, {useState, useEffect} from 'react';
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
  name:{},
  email:{textDecorationLine: 'underline'}
});
const RenderItems = ({item, index, data, onPress}) => {
  console.log('hii', item);
  const [state, setstate] = useState({User: 'User', Post: 'PostId'});
  // const [state1, setstate1] = useState({"user"})
  console.log(state['User']);
  return (
    <TouchableOpacity
      style={styles.itemPost}
      //onPress={() => navigation.push('Comments')}
      onPress={() => {
        onPress(item.userId);
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.postUserTxt}>
          {data==="posts" ? (state['User']+ " "+item.userId ) : state['Post']+ " "+item.postId }
        </Text>

        <Text style={[{marginLeft: 'auto'}, styles.postIdTxt]}>#{item.id}</Text>
      </View>
     {data==="posts" ? <Text style={styles.postTitleTxt}>{item.title}</Text>:
     
       <>
     <Text style={styles.postTitleTxt}>{item.name}</Text>
     <Text style={styles.email}>{item.email}</Text></>
     }
      <Text style={styles.postBodyTxt}>{item.body}</Text>
    </TouchableOpacity>
  );
};

export default RenderItems;
