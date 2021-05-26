import React from 'react';
import {View, TextInput, StyleSheet, KeyboardAvoidingView} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 0.15, justifyContent: 'center', alignItems: 'center'},
});

export default function SearchBar({placeholder, callback}) {
  return (
    <View style={styles.container}>
      <View searchBar style={{borderRadius: 5, width: '90%', height: '54%'}}>
        <TextInput
          height="100%"
          KeyboardAvoidingView
          placeholder={placeholder}
          onChangeText={text => {
            callback(text);
          }}
          backgroundColor="#BDC3C7"
          style={{
            backgroundColor: '#f8f8f8',
            fontSize: 16,
            borderRadius: 5,
            paddingHorizontal: 2,
            elevation: 1,
          }}
        />
      </View>
    </View>
    // <View style={{backgroundColor:"Red", flex:.15}}><Text>asdfasdf</Text></View>
  );
}
