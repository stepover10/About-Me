import * as React from  'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  StatusBar,
  Dimensions,
  Button,
  TextInputComponent,
  TextInput
} from 'react-native';
import styled from 'styled-components';
import ViewInsert from 'components/ViewInsert';
import HeaderView from 'containers/header/HeaderView';

const win = Dimensions.get('window');

export default class HelloWorldApp extends React.Component<any> {

  renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };

  _onPressButton = () => {
    alert('You tapped the button!')
  }

  render() {

    return (
      <>
        {/*<View
          style={{
              width: "100%",
              height: 21,
              // backgroundColor: "#F6D036"
        }}>
          <StatusBar
            // translucent
            // animated
            // backgroundColor="blue"
            // barStyle="light-content"
          />
        </View>*/}

        <StatusBar barStyle="light-content" />
        <View style={{flex: 1}}>
          <ScrollView style={{flex:1}}>
            <View style={{flex: 1}}>

              {/*<HeaderView />*/}

              <View style={{flex: 1}}>


                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../images/sample.jpg')}
                    style={styles.image}
                  />
                </View>


                <View style={{
                  padding: 20,
                  elevation: 30,
                  shadowColor: 'black',
                  shadowOffset: {width: 0, height: -10},
                  shadowOpacity: 0.3,
                  shadowRadius: 1 * 5,
                  backgroundColor : 'white'
                }}>

                  <View style={{
                    // backgroundColor : 'white'
                  }}>
                    <Text style={styles.header}>환영합니다!!</Text>
                    <Text style={styles.sub}>
                      가입하시면
                      <Text style={styles.subBold}> 캐시닥</Text> 이
                      치킨을 드려요!!
                    </Text>
                    <Text style={styles.sub}>치킨은 BHC</Text>

                    <ButtonOnPress>
                      <Button
                        onPress={this._onPressButton}
                        title="Press Me"
                        color="#fff"
                      />
                    </ButtonOnPress>

                  </View>

                </View>


              </View>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const ButtonOnPress = styled.View`	
	flex-direction: row;
	justify-content: center;
	background: #000;
	margin-top: 10px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 30
  },
  sub: {
    marginTop: 2,
    marginBottom: 2,
    fontSize: 18,
    fontWeight: '100'
  },
  subBold: {
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    width: null
  }
});
