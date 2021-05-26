import React, {useState, useEffect} from 'react';
import {FlatList, View, StyleSheet, SafeAreaView} from 'react-native';
import RenderItem from './components/RenderItem';
import SearchBar from './components/SearchBar';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffffff'},
  flatList: {flex: 0.85, marginHorizontal: 12},
});

export default function Comments({route}) {
  const {userId} = route.params;
  //const [lastUserId,setlastUserId] = useState();

  const [comments, setComments] = useState([]);

  const getData = async () => {
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

    //setlastUserId(userId)
    //lastUserId!=userId
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search Comments(Name)"
        callback={text => searchCallBack(text)}
      />
      {comments.length > 0 ? (
        <FlatList
          style={styles.flatList}
          data={comments}
          renderItem={({item, index}) => {
            return (
              <RenderItem
                item={item}
                index={index}
                data="comments"
                onPress={id => null}
              />
            );
          }}
          showsVerticalScrollIndicator={true}
          keyExtractor={(item, index) => index + index}
        />
      ) : null}
    </View>
  );
}
