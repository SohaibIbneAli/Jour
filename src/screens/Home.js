import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  SafeAreaView,
  FlatList,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import RenderItem from './components/RenderItem';
import SearchBar from './components/SearchBar';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffffff'},
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
  horizentalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 12,
  },
  flatList: {flex: 0.85, marginHorizontal: 12},
  postUserTxt: {fontSize: 15},
  //postIdTxt:{},
  postTitleTxt: {fontSize: 16, color: 'red'},
  //postBodyTxt:{},
});
export default function Home({navigation}) {
  const [limit, setLimit] = useState(0);
  const [postss, setPostss] = useState([]);
  const [filterPostss, setFilterPostss] = useState([]);

  const getData = async () => {
    const APIURL =
      'https://jsonplaceholder.typicode.com/posts?_start=' +
      limit +
      '&_end=' +
      (limit + 10);
    fetch(APIURL)
      .then(response => response.json())
      .then(json => {
        postss.length === 0
          ? (setPostss(json), setFilterPostss(json))
          : setPostss(
              [...postss, ...json],
              setFilterPostss([...filterPostss, ...json]),
            );
      });
  };
  useEffect(() => {
    getData();
  }, [limit]);

  const handleLoadMore = async () => {
    setLimit(limit => limit + 10);
  };

  const postOnPress = id => {
    navigation.push('Comments', {userId: id});
  };

  const filterTitle = text => {
    setFilterPostss(
      postss.filter(i => i.title.toLowerCase().includes(text.toLowerCase())),
    );
  };
  const searchCallBack = text => {
    if (text) {
      filterTitle(text);
    } else {
      setFilterPostss(postss);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="red" hidden={false} />
      <SearchBar
        placeholder="Search Posts(title)"
        callback={text => searchCallBack(text)}
      />
      <FlatList
        style={styles.flatList}
        data={filterPostss}
        renderItem={({item, index}) => {
          return (
            <RenderItem
              item={item}
              index={index}
              data="posts"
              onPress={id => postOnPress(id)}
            />
          );
        }}
        // ItemSeparatorComponent={() => <View style={styles.horizentalLine} />}
        onEndReached={handleLoadMore}
        showsVerticalScrollIndicator={true}
        keyExtractor={(item, index) => index + index}
      />
    </SafeAreaView>
  );
}
