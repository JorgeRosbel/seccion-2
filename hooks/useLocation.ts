import * as Location from 'expo-location';
import { useEffect, useState } from "react";

interface ILocation {
    latitude:number | null,
    longitude: number | null;
}


const getLocationPermission = async():Promise<boolean> => {

    try{
        const { status } = await Location.requestForegroundPermissionsAsync();
        return status === "granted"
    }
    catch(error:unknown) {
        console.error("Error al obtener permiso de usuario", error)

        return false
    }
};


export const useLocation = () => {
    const [location, setLocation] = useState<ILocation>({ latitude: null, longitude: null });

    useEffect(() => {
        getLocationPermission().
            then(response => {
                if (response)
                    Location.getCurrentPositionAsync({})
                        .then(loc => setLocation({ latitude: loc.coords.latitude, longitude: loc.coords.longitude }))

            })
    }, []);

    return { location };

}


