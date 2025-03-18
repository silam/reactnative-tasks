import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, PixelRatio, Button, TouchableOpacity, Pressable } from 'react-native';
import { theme } from './theme';
import { ShoppingListItem } from './components/ShoppingListItem';


export default function App() {

  
  return (
    <View style={styles.container}>
      
     <ShoppingListItem name="coffee"></ShoppingListItem>
     <ShoppingListItem name="Tea" isCompleted={true}></ShoppingListItem>
     <ShoppingListItem name="Sugar" isCompleted></ShoppingListItem>
     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#1a759f", 
    paddingHorizontal: 8, 
    paddingVertical:16},
  itemText: {fontSize: 18, fontWeight: 200},
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1
  }
});
