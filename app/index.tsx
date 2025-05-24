import { View, StyleSheet} from "react-native";
import { Link } from "expo-router";


const styles = StyleSheet.create({
    container: {
        padding:20,
        margin:"auto",
        gap:20
    },
    link: {
        color:"white",
        textAlign:"center",
        backgroundColor:"#1E90FF",
        padding:40,
        borderRadius:10,
        fontSize: 22
    }
})



const Home:React.FC = () => {

    return (
        <View style={styles.container}>
            <Link href="/create_task" style={styles.link}>Ver lista de elementos</Link>
            <Link href="/user_map" style={styles.link}>ver mapa</Link>
        </View>
    )
}

export default Home;
