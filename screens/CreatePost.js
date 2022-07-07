import React, { Component } from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, Platform, StatusBar, Dimensions,ScrollView,TextInput } from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";

let customFonts = {
	"Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class CreateStory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fontsLoaded: false,
      previewImage:"image_1"
		};
	}

	async _loadFontsAsync() {
		await Font.loadAsync(customFonts);
		this.setState({ fontsLoaded: true });
	}

	componentDidMount() {
		this._loadFontsAsync();
	}

	render() {
		if (!this.state.fontsLoaded) {
			return <AppLoading />
		} else {
      let preview_images={
        image_1:require('../assets/image_1.jpg'),
        image_2:require('../assets/image_2.jpg'),
        image_3:require('../assets/image_3.jpg'),
        image_4:require('../assets/image_4.jpg'),
        image_5:require('../assets/image_5.jpg'),
        image_6:require('../assets/image_6.jpg'),
        image_7:require('../assets/image_7.jpg')

      }
			return(
			<View style={styles.container}>
				<SafeAreaView style={styles.droidSafeArea} />
				<View style={styles.appTitle}>
					<View style={styles.appIcon}>
						<Image
							source={require("../assets/logo.png")}
							style={styles.iconImage}
						></Image>
					</View>
					<View style={styles.appTitleTextContainer}>
						<Text style={styles.appTitleText}>New Story</Text>
					</View>
				</View>
        <View style={styles.fieldsContainer}>
        <Image source={preview_images[this.state.previewImage]} style={styles.previewImage}/>
        <View style={{height:RFValue(this.state.dropdownHeight)}}>
        <DropDownPicker
        items={[
          {label:'image 1',value:"image_1"},
          {label:'image 2',value:"image_2"},
          {label:'image 3',value:"image_3"},
          {label:'image 4',value:"image_4"},
          {label:'image 5',value:"image_5"},
        ]}
        defaultValue={this.state.previewImage}
        open={this.state.dropdownHeight==240?true:false}
        onOpen={()=>{
          this.setState({
            dropdownHeight:240
          })
        }}
        onClose={()=>{
          this.setState({
            dropdownHeight:40
          })
        }}
        style={{backgroundColor:"transparent",borderWidth:1,bordercolor:'white'}}
        textStyle={{
          color:this.state.dropdownHeight==240?"black":'white',
          fontFamily:'Bubblegum-Sans'
        }}
        onSelectItem={(item)=>
        this.setState({
          previewImage:item.value,
        })
        }
        />
        </View>
        
      <ScrollView>
      <TextInput style={[
        styles.inputFont,
        styles.inputFontExtra,
        styles.inputTextBig
      ]}
      onChangeText={(caption)=>
      this.setState({caption})}
      multiline={true}
      placeholder={"caption"}
      numberOfLines={4}
      placeholderTextColor="white"/>
      </ScrollView>
      </View>
        <View style={{flex:0.08}}/>
			</View>)
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#15193c"
	},
	droidSafeArea: {
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
	},
	appTitle: {
		flex: 0.07,
		flexDirection: "row"
	},
	appIcon: {
		flex: 0.3,
		justifyContent: "center",
		alignItems: "center"
	},
	iconImage: {
		width: "100%",
		height: "100%",
		resizeMode: "contain"
	},
	appTitleTextContainer: {
		flex: 0.7,
		justifyContent: "center"
	},
	appTitleText: {
		color: "white",
		fontSize: RFValue(28),
		fontFamily: "Bubblegum-Sans"
	},
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain",
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    marginTop: RFValue(10),
    fontFamily: "Bubblegum-Sans",
  },
  inputFontExtra: {
    marginTop: RFValue(15),
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5),
  },
})