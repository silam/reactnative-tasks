import { TouchableOpacity, View , Text, StyleSheet, Alert, StatusBar} from "react-native";
import { theme } from "../theme";
import { AntDesign } from "@expo/vector-icons/AntDesign";
type Props = {
    name?: string;
    isCompleted?: boolean;
}
export function ShoppingListItem({name, isCompleted} : Props) {

    const handleDelete = ()=>{
          Alert.alert(`Are you sure to delete ${name}?`, "It will be gone for good!",
            [
              {
                text: "Yes",
                onPress: () => console.log("On Yes"),
                style: "destructive"
              },
              {
                text: "Cancel",
                onPress: () => console.log("On Yes"),
                style: "cancel"
              }
            ]
          )
      }

      
    return (
            <View style={[styles.itemContainer, isCompleted? styles.completedContainer: undefined]}>
                        <Text   style={[styles.itemText, isCompleted?styles.completedText: undefined ]}>{name}</Text>
                        <TouchableOpacity style={[styles.button, isCompleted?styles.completedButton: undefined]} 
                                onPress={()=>handleDelete()} 
                                activeOpacity={0.1}>
                            <Text style={styles.buttonText}>Delete</Text>

                            {/* <AntDesign name="closecircle" size={24} color="black" />  */}
                        </TouchableOpacity>
                    {/* <StatusBar style="auto" /> */}
            </View>
    ) ;
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
    borderBottomColor: theme.colorCeruleon, 
    paddingHorizontal: 8, 
    paddingVertical:16
    },
    completedContainer: {
            backgroundColor: theme.colorLightGrey,
            borderBottomColor: theme.colorLightGrey
    },
  itemText: {fontSize: 18, fontWeight: 200},
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6
  },
  completedButton: {
    backgroundColor: theme.colorGrey,
  },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGrey,
    color: theme.colorGrey
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1
  }
});
