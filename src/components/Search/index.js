import React, { Component } from 'react';
import { Platform } from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default class Search extends Component {
    state = {
        searchFocused: false,
    }
  render() {
      const { searchFocused } = this.state;
    const { onLocationSelected } = this.props;

    return <GooglePlacesAutocomplete 
            placeholder="Sua Rota"
            placesholderTextColor="#151515"
            onPress={onLocationSelected}
            query={{
                key: "AIzaSyAyeNszvaP42ZPHR4Xho4cBTYShmFg8gNI",
                language: 'pt'
            }}
            textInputProps={{
                onFocus:() => { this.setState ({ searchFocused: true}) },
                onBlur:() => { this.setState ({ searchFocused: false}) },               
                autoCapitalize: "none",
                autoCorrect: false
            }}
            listViewDisplayed={searchFocused}
            fetchDetails
            enablePoweredByContainer={false}
            styles={{
                container: {
                    position: "absolute",
                    top: Platform.select({ ios: 60, android: 40, }),
                    width: "100%",                
                },
                textInputContainer: {
                    flex: 1,
                    backgroundColor: 'transparent',
                    height: 54,
                    borderHorzontal: 20,
                    borderTopWidth: 0,
                    borderBottomWidth: 0
                },
                textInput: {
                    height: 54,
                    margin: 0,
                    borderRadius: 20,
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 20,
                    paddingRight: 0,
                    marginTop: 0,
                    marginLeft: 10,
                    marginRight: 10,
                    elevation: 5,
                    shadowColor: "#000",
                    shadowOpacity: 0.1,
                    shadowOffset: {x: 0, y: 0},
                    shadowRadius: 20,
                    borderWidth: 1,
                    borderColor: "#DDD",
                    fontSize: 20
                },
                listView: {
                    borderWidth: 1,
                    borderColor: '#DDD',
                    borderRadius: 20,
                    backgroundColor: '#FFF',
                    marginHorizontal: 20,
                    elevation: 5,
                    shadowColor: "#000",
                    shadowOpacity: 0.1,
                    shadowOffset: {x: 0, y: 0},
                    shadowRadius: 15,
                    borderWidth: 1,
                    borderColor: "#DDD",
                    fontSize: 20

                },
                description: {
                    fontSize: 18,
                },
                row: {
                    padding: 20,
                    height: 58
                },

            }}
    />;
  }
}