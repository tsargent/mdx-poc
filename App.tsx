/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';

import Demo from './demo.mdx';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Demo components={{h1: Text, h2: Text}} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
