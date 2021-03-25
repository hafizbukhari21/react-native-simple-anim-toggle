import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, Image, Animated, Button } from 'react-native';

export default function App() {
  const fade = useRef(new Animated.Value(0)).current
  const [Animstatus, setAnimstatus] = useState(false)
  return (
    <>
        <View style = {styles.container}>
          <Animated.View style = {{...styles.items,opacity:fade}}>
          </Animated.View>
          <Button
            title="Test"
            onPress={
              ()=>{
                setAnimstatus(Animstatus?false:true)
                Animated.timing(
                  fade,
                  {
                    toValue: Animstatus?1:0,
                    duration: 500,
                    useNativeDriver:true
                  }
                ).start();
              }
            }
          />
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"blue"
    
  },
  items:{
    
    width:200,
    height:200,
    backgroundColor:"white"
  }
});
