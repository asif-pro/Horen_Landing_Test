import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import ReactMapGL, { Marker } from 'react-map-gl'
import MapData from './stations.json'


const mapBox_Token = 'pk.eyJ1IjoiYXNpZmluZXIiLCJhIjoiY2xoZzN5d21pMDBqbTNlcWpxbjdsN3Z2cyJ9.p2Qxj6yW8TQmLT7DgCix2g';


const Map = () => {

    const [allLocations, setAllLocations] = React.useState(MapData)

    // allLocations.features[0].geometry.coordinates[1]
    // console.log('all',allLocations)

    //Initial view_port
    // const [viewPort, setViewPort] = React.useState({
    //     latitude: 23.8103,
    //     longitude: 90.4125,
    //     zoom: 1,
    // })

  return (
    <div style={{width: '98.9vw', height: '100vh'}}>
        <ReactMapGL
        initialViewState={{
            latitude: 23.8103,
            longitude: 90.4125,
            // latitude: -76.92812,
            // longitude: 38.97863,
            zoom: 8,
        }}
        mapboxAccessToken = {mapBox_Token}
        width = '100%'
        height = '100%'
        transitionDuration = '200'
        // mapStyle='mapbox://styles/asifiner/clhg4449u019i01pnbxexdvrq'
        mapStyle='mapbox://styles/asifiner/clhgbcqhz016001qt28u779ft'
        >
        <Marker
        latitude={allLocations.features[0].geometry.coordinates[0]}
        longitude={allLocations.features[0].geometry.coordinates[1]}
        >
            <span>Hiiiiiiiiiiiiiiiiiii</span>
        </Marker>
        </ReactMapGL>
    </div>
  )
}

export default Map