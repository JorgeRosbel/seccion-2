// app/_layout.tsx
import { Slot } from 'expo-router';
import {StatusBar, StyleSheet} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function Layout() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Slot />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex:1,
    paddingBottom: 8
    
  },
});
