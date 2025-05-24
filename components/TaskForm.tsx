import { View, Text, TextInput, StyleSheet,Pressable } from "react-native";
import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import AntDesign from '@expo/vector-icons/AntDesign';


const formStyles = StyleSheet.create({
    form: {
        flexDirection:"column",
        alignItems: "center",
        padding:9,
        borderColor:"rgba(255,255,255,0.5)",
        borderWidth:1,
        borderStyle: "solid",
        borderRadius: 3,
        gap:5,
        marginLeft:"auto",
        marginRight:"auto",
        marginTop: 60 
    },
    box: {flexDirection:"column", padding: 3, gap:7, width:300 },
    text: { color:"#ffffff"},
    input: {
        backgroundColor:"#F5F5F5",
        color:"#000000",
        borderRadius: 3,
        textAlign:"center",
    },
    button: {
        backgroundColor:"#1E90FF", width: 100, padding: 10, marginTop: 9
    },
    optionsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        gap:80,
    },
    deleteBtn: {
        
    }
})

export const TaskForm:React.FC = () => {

    const [formState, setFormState] = useState<string>('');
    const addTask = useTasks(state => state.addTask);
    const resetTasks = useTasks(state => state.resetTasks);


    const handleInput = (text:string) => {
        setFormState(text)
    }

    const handleClick = () => {
        formState !== "" && addTask(formState);
        setFormState("")
    };

    return(
        <View style={formStyles.form}>

            <View style={formStyles.box}>
                <Text style={formStyles.text}>Ingresar nueva tarea</Text>
                <TextInput value={formState} onChangeText={handleInput} autoFocus style={formStyles.input} />
            </View>

            <View style={formStyles.optionsContainer}>
                <Pressable onPress={handleClick} style={formStyles.button}>
                    <Text style={{ textAlign: "center", color:"white", fontWeight: 600 }}>Agregar</Text>
                </Pressable>

                <Pressable onPress={() => resetTasks()} style={formStyles.deleteBtn}>
                    <AntDesign name="delete" size={32} color="white" />
                </Pressable>

            </View>
            
            

        </View>
    )
}