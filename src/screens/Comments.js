import React from 'react'
import { FlatList, View,StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#ffffff'},
      });
export default function Comments() {
    return (
     <FlatList
     style={styles.flatList}
     data={postss}
     renderItem={({item, index}) => {
         return <RenderItem item={item} index={index} data="posts" />;
       }}
     // ItemSeparatorComponent={() => <View style={styles.horizentalLine} />}
     style={{marginHorizontal: 12}}
     onEndReached={handleLoadMore}
     showsVerticalScrollIndicator={true}
     keyExtractor={(item, index) => index + index}
     />
    )
}
