import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useLocation } from "../hooks/useLocation";



const MapScreen: React.FC = () => {

    const { location } = useLocation()

    return (
        <View style={{ flex: 1 }}>
            <MapView initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0921,
                longitudeDelta: 0.0421
            }}>
                <Marker coordinate={location} title="Estás aquí" />

            </MapView>

        </View>
    )
}

export default MapScreen;