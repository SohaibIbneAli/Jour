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
  const [filterComments, setFilterComments] = useState([]);

  const getData = async () => {
    const APIURL =
      'https://jsonplaceholder.typicode.com/comments?postId=' + userId;
    fetch(APIURL)
      .then(response => response.json())
      .then(json => {
        setComments(json);
        setFilterComments(json);
      });
  };

  useEffect(() => {
    getData();

    //setlastUserId(userId)
    //lastUserId!=userId
  }, []);

  const filterEmail = text => {
    setFilterComments(
      comments.filter(i => i.email.toLowerCase().includes(text.toLowerCase())),
    );
  };
  const searchCallBack = text => {
    if (text) {
      filterEmail(text);
    } else {
      setFilterComments(comments);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search Comments(Email)"
        callback={text => searchCallBack(text)}
      />
      {comments.length > 0 ? (
        <FlatList
          style={styles.flatList}
          data={filterComments}
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
