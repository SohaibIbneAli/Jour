import React, {useState, useEffect} from 'react';
import {FlatList, View, StyleSheet, SafeAreaView} from 'react-native';
import RenderItem from "./components/RenderItem"
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffffff'},
});

export default function Comments({route}) {
  const {userId} = route.params;
  //const [lastUserId,setlastUserId] = useState();

  const [comments, setComments] = useState([]);

  const getData = async () => {
    //console.log('postss.length', postss.length);

    const APIURL =
      'https://jsonplaceholder.typicode.com/comments?postId=' + userId;
    fetch(APIURL)
      .then(response => response.json())
      .then(json => {
        setComments(json);
      });
  };

  useEffect(() => {
    getData();
    //console.log("Not Same")

    //setlastUserId(userId)
    //lastUserId!=userId
  }, []);

  return (
    <View>
      {comments.length > 0 ? (
        <FlatList
          style={styles.flatList}
          data={comments}
          renderItem={({item, index}) => {
            return <RenderItem item={item} index={index} data="comments"   onPress={id =>null} />;
          }}
          style={{marginHorizontal: 12}}
          showsVerticalScrollIndicator={true}
          keyExtractor={(item, index) => index + index}
        />
      ) : null}
    </View>
  );
}
