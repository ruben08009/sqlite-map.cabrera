import React from 'react';
import {View,Image,StyleSheet} from 'react-native';

import {MAP} from '../constants'

const MapPreview = props => {
    const mapPreviewUrl =   `https://maps.googleapis.com/maps/api/staticmap?center=${props.localtion.lat},${props.localtion.lng}Y&zoom=13&size=400x200&maptype=roadmap
                            &markers=color:blue%7Clabel:S%7C40${props.localtion.lat},${props.localtion.lng}
                            &key=${MAP.API_KEY}`

    return(
        <View>
        {props.location ? (
            <Image style={sytles.mapImage} source={{uri:mapPreviewUrl}}/>
         ) : (props.children)}
        </View>
    )
}

    const sytles = StyleSheet.create({
        mapImage:{
            width: '100%',
            height: '100%'
    },
    mapPreview:{
        justifyContent : 'center',
        alignItems : 'center'
    }

    })

    export default MapPreview;
    

