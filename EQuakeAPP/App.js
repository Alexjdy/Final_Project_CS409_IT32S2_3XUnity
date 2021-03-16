import * as React from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, Image,Linking, ScrollView, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {WebView} from 'react-native-webview';

import MapView, {Marker} from 'react-native-maps';
 
function Home() {
  return (
<View style={styles.container}>

      <ImageBackground source={require('./screendesigns/homebg.jpg')} style={styles.image}>
     
      <Text style={styles.textBody}>    The name of "Equake" came from the word Earthquake which is inspired from the "The Big One" which is according to some reports, almost 34,000 people could be killed. 
The “Big One” is a worst-case scenario of a 7.2-magnitude earthquake from the West Valley Fault, a 100-kilometer fault that runs through six cities in Metro Manila and nearby provinces.
</Text>
<Text style={styles.textBody2}>        As the taal volcano alert level raised to level 2 it could eventually lead to an eruption and can also cause earthquakes that can damage nearby cities and civilians.
The mobile application focuses on disaster awareness and preparedness of people during, before and after specifically on earthquakes. </Text>
      
      {/*<TextInput style={styles.textField} placeholder="Username"/>*/}
      <Text>{`\n`}</Text>
      
      <TouchableOpacity style={styles.buttonA}
      onPress={() => {Linking.openURL('tel:09123456');}}>
      <Image
        source={require('./img/call.png')}
        style={styles.imgButton}
      />
      </TouchableOpacity>

        </ImageBackground>
      <StatusBar style="auto" />
      </View>
  );
}
function Description() {
  return (
  
<View style={styles.container3}>
<ImageBackground style={styles.image}>
<UpTab.Navigator
      initialRouteName="Description"
      tabBarOptions={{
        activeTintColor: 'black',
      }}
    >
      <UpTab.Screen
        name="Description"
        component={Edescription}
        options={{

        }}
      />
       <UpTab.Screen
        name="Real Time Monitoring"
        component={Classification}
        options={{

        }}
      />

      
    </UpTab.Navigator>
     
</ImageBackground>
      </View>

  );
}
function Edescription(){
  return(
    <View style={styles.container}>
      <ImageBackground source={require('./screendesigns/description.jpg')} style={styles.image}>
      <Text>{`\n`}</Text>
      <SafeAreaView style={styles.container2}>
      <ScrollView style={styles.scrollView}>
    
        <Text style={styles.text}>    An earthquake is what happens when two blocks of the earth suddenly slip past one another. The surface where they slip is called the fault or fault plane. The location below the earth’s surface where the earthquake starts is called the hypocenter, and the location directly above it on the surface of the earth is called the epicenter.</Text>
        <Text>{`\n`}</Text>
        <Text style={styles.text}>    The most significant, historic earthquake zone (geological fault) in the Philippines is located just 10km East of Manila City and is known as the "Marikina Valley Fault System" or, frequently, "Marikina Fault". Archaeological evidence tells us that the Marikina Fault earthquake zone, that runs almost North-South along the Marikina Valley, from Bulacan to Cavite and Laguna, and almost exactly parallels the route of the C-5 circumferential road around Metro Manila, slips every 200-400 years (average every 310 years) delivering a magnitude 6.0-7.0 earthquake (maximum estimated 7.5).</Text>
      </ScrollView>
      
    </SafeAreaView>
    

   
        </ImageBackground>
      
      </View>
  );
}
function Classification() {
  return (
<View style={styles.container}>
<WebView source={{ uri: 'https://hazardhunter.georisk.gov.ph/map' }} />
      </View>
  );
}

function FirstAid() {
  return (
<View style={styles.container}>

<ImageBackground source={require('./screendesigns/firstaid.jpg')} style={styles.image}>
<Text>{`\n`}</Text>
<Text>{`\n`}</Text>
<SafeAreaView style={styles.container4}>
      <ScrollView style={styles.scrollView}>
        <Image style={{width: 320, height: 430}}source={require('./screendesigns/firstaid1.jpg')}></Image>
        <Image style={{width: 320, height: 255}}source={require('./screendesigns/firstaid2.jpg')}></Image>
      </ScrollView>
      
    </SafeAreaView>
    

</ImageBackground>
</View>
  
  );
}

function AboutUs() {
  return (
<View style={styles.container}>

<ImageBackground source={require('./screendesigns/aboutus.jpg')} style={styles.image}>
<Text>{`\n`}</Text>
<Text>{`\n`}</Text>
<SafeAreaView style={styles.container4}>
      <ScrollView style={styles.scrollView}>
        <Image style={{width: 320, height: 700}}source={require('./screendesigns/aboutus1.jpg')}></Image>
 
      </ScrollView>
      
    </SafeAreaView>
    

</ImageBackground>
</View>
  );
}
function WhatTodo() {
  return (
 
<View style={styles.container3}>
<ImageBackground style={styles.image}>
<UpTab.Navigator
      initialRouteName="Before"
      tabBarOptions={{
        activeTintColor: 'black',
      }}
    >
      <UpTab.Screen
        name="Before"
        component={Before}
        options={{

        }}
      />
       <UpTab.Screen
        name="During"
        component={During}
        options={{

        }}
      />
       <UpTab.Screen
        name="After"
        component={After}
        options={{
        
        }}
      />
      
    </UpTab.Navigator>
     
</ImageBackground>
      </View>
  );
}
//What To Do Sub Items
function Before() {
  return (
<View style={styles.container}>
<ImageBackground source={require('./screendesigns/before.jpg')} style={styles.image}>

</ImageBackground>
</View>
  );
}
function During() {
  return (
<View style={styles.container}>
<ImageBackground source={require('./screendesigns/during.jpg')} style={styles.image}>

</ImageBackground>
</View>
  );
}
function After() {
  return (

<View style={styles.container}>
<ImageBackground source={require('./screendesigns/afterBg.jpg')} style={styles.image}>
  
<SafeAreaView style={styles.container4}>
      <ScrollView style={styles.scrollView}>
        <Image style={{width: 320, height: 450}}source={require('./screendesigns/after1.jpg')}></Image>
        <Image style={{width: 320, height: 370}}source={require('./screendesigns/after2.jpg')}></Image>
      </ScrollView>
      
    </SafeAreaView>
    

</ImageBackground>
</View>
  
  );
}
//What To Do End Sub Items
const Tab = createBottomTabNavigator();
const UpTab = createMaterialTopTabNavigator();
const sideNav = createDrawerNavigator();

function news(){
  return(
    <View style={styles.container}>
      <Text>{`\n`}</Text>
    <WebView source={{ uri: 'https://cnnphilippines.com/news/' }} />
      </View>
  );
}
function maps(){
  return(
    <View style={styles.container}>
      <Text>{`\n`}</Text>
     <UpTab.Navigator
      initialRouteName="Evacuation Area"
      tabBarOptions={{
        activeTintColor: 'black',
      }}
    >
      <UpTab.Screen
        name="Evacuation Area"
        component={Earea}
        options={{

        }}
      />
       <UpTab.Screen
        name="Hospitals"
        component={Hospitals}
        options={{

        }}
      />
      
    </UpTab.Navigator>
  </View>
  );
}
function Earea(){
  return(
    <View style={styles.container}>
    <MapView style={styles.map} initialRegion={{
            latitude: 14.676208,
            longitude: 121.043861,
            latitudeDelta: 1,
            longitudeDelta: 0.6,
    }}>
  <Marker
     title={'Marikina City'}
     description={'Kapitan Moy Elementary School'}
     coordinate={{latitude: 14.6484079, longitude: 121.1168178}}
     />
  <Marker
     title={'Caloocan City'}
     description={'Pangarap Elementary School'}
     coordinate={{latitude: 14.764101, longitude: 121.0892293}}
     />
  <Marker
     title={'Manila City'}
     description={'Baseco Evacuation Center'}
     coordinate={{latitude: 14.5890841, longitude: 120.9585555}}
     />
    </MapView>
  </View>
  );
}
function Hospitals(){
  return(
    <View style={styles.container}>
    <MapView style={styles.map} initialRegion={{
            latitude: 14.676208,
            longitude: 121.043861,
            latitudeDelta: 1,
            longitudeDelta: 0.6,
    }}>
  <Marker
     title={'Manila City'}
     description={'Metropolitan Medical Center'}
     coordinate={{latitude: 14.6096242, longitude: 120.9762532}}
     />
  <Marker
     title={'Quezon City'}
     description={'St. Lukes Medical Center'}
     coordinate={{latitude: 14.6225416, longitude: 121.0210459}}
     />
  <Marker
     title={'Makati City'}
     description={'Makati Medical Center'}
     coordinate={{latitude: 14.5590246, longitude: 121.0124126}}
     />
    </MapView>
  </View>
  );
}
function MyTabs() {
  return (
    
    <sideNav.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'black',
        
      }}
    >

      <sideNav.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <sideNav.Screen
        name="Description"
        component={Description}
        options={{
          tabBarLabel: 'Description',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="description" color={color} size={size} />
          ),
        }}
      />
<sideNav.Screen
        name="Maps"
        component={maps}
        options={{
          tabBarLabel: 'Maps',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}
      />

      <sideNav.Screen
        name="What To Do?"
        component={WhatTodo}
        options={{
          tabBarLabel: 'What To Do',
          drawerIcon: ({ color, size }) => (
            <AntDesign name="questioncircle" color={color} size={size} />
          ),
        }}
      />

    <sideNav.Screen
        name="First Aid"
        component={FirstAid}
        options={{
          tabBarLabel: 'firstaid',
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="first-aid" color={color} size={size} />
          ),
        }}
      />
  
    <sideNav.Screen
        name="News"
        component={news}
        options={{
          tabBarLabel: 'news',
          drawerIcon: ({ color, size }) => (
            <Entypo name="news" color={color} size={size} />
          ),
        }}
      />

    <sideNav.Screen
        name="About Us"
        component={AboutUs}
        options={{
          tabBarLabel: 'About Us',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle" color={color} size={size} />
          ),
        }}
      />

    </sideNav.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
      
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  },
  textHello:{
    color:'white',
    fontSize:40,
    fontWeight: "bold",
    fontFamily: 'Roboto',
    position: 'absolute',
    left: 30,
    top: 100,
  },

  textButton:{
    color:'white',
    fontSize:15,
    fontWeight: "bold",
    fontFamily: 'Roboto',
    
  },

  imgButton:{
    height:100,
    width:100,
    
  },

  imgMenu:{
    height:30,
    width:30,
    
  },

  stylesMenu:{
    height:30,
    width:30,
    position: 'absolute',
    left:15,
    top:50,
  },

  buttonA:{ 
    height: 130, 
    width: 130,
    position: 'absolute',
    left: 120,
    bottom: 20,
    backgroundColor:'#619bd5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
     },

  textName:{
    color:'white',
    fontSize:40,
    fontWeight: "bold",
    fontFamily: 'Roboto',
    
    position: 'absolute',
    left: 30,
    top: 150,
  },

  textSub:{
    color:'black',
    fontSize:24,
    position: 'absolute',
    left: 45,
    top: 450,
    fontWeight:'bold',
  },

  textTitle:{
    color:'black',
    fontSize:24,
    position: 'absolute',
    left: 120,
    top: 420,
  },

  textBody:{
    color:'black',
    fontSize:16,
    position: 'absolute',
    left: 35,
    right: 35,
    top: 150,
    textAlign: "justify"
    //fontWeight:'bold',
  },

  textBody2:{
    color:'black',
    fontSize:16,
    position: 'absolute',
    left: 35,
    right: 35,
    top: 350,
    textAlign: "justify"
    //fontWeight:'bold',
  },

  abutton:{
    width: 50,
    fontSize:24,
    position: 'absolute',
    bottom: 10,
    
  },

  textField:{
    height: 40,
    width:100, 
    borderColor: 'gray', 
    borderWidth: 2,
    paddingLeft: 10,
  },

  tinyLogo: {
    width: 200,
    height: 200,
  },

  container: {
    flex: 1,
    backgroundColor: '#bad5f0',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  image: {
    top:0,
    flex: 1,
    
    justifyContent: "center"
  },
  scrollView: {
    backgroundColor: '#bad5f0',
    color:'black', 
   
  },
  text: {
    color:'black',
    fontSize:16,
    paddingLeft:35,
    paddingRight:35,
    textAlign: "justify"
    
  },
  container2: {
    flex: 1,
    paddingTop: 150,
    
  },
  container3: {
    flex: 1,
    paddingTop: 30,
    
  },
  container4: {
    flex: 1,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 150
  },
  map: {
    flex: 1,
  }

});