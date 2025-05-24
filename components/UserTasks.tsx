import { View , Text, StyleSheet, ScrollView} from "react-native";
import { useTasks } from "../hooks/useTasks";



const styles = StyleSheet.create({
    container: {
        marginLeft:"auto",
        marginRight:"auto",
        marginTop: 60,
        width:350,
        padding:10,
        flexDirection: "column",
        gap:4,
        borderStyle: "solid",
        borderColor: "rgba(255,255,255,0.3)",
        borderWidth: 5,
        borderRadius: 10
    },
    element: {
        color: "white",
    }
})


export const UserTasks: React.FC = () => {
    
    const tasks = useTasks(state => state.tasks)

    return (
        <ScrollView style={styles.container}>
            {tasks.map((task, index) => <Text style={styles.element} key={index}>{index +1}. {task}</Text>)}
        </ScrollView>
    )
}