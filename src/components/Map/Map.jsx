import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import ReactMapGL, { Marker } from 'react-map-gl'
import MapData from './stations.json'
import './Map.css'


const mapBox_Token = 'pk.eyJ1IjoiYXNpZmluZXIiLCJhIjoiY2xoZzN5d21pMDBqbTNlcWpxbjdsN3Z2cyJ9.p2Qxj6yW8TQmLT7DgCix2g';


const Map = () => {

    const [allLocations, setAllLocations] = React.useState(MapData)
    // setAllLocations(MapData)

    // allLocations.features[0].geometry.coordinates[1]
    // console.log('all',allLocations[0].latitude)
    // console.log('all',allLocations)

    

    //Initial view_port
    // const [viewPort, setViewPort] = React.useState({
    //     latitude: 23.8103,
    //     longitude: 90.4125,
    //     zoom: 1,
    // })

  return (
    <div className='mapSectionContainer'>
        <div className='map_visual' style={{ height: '70vh'}}>
        <ReactMapGL
        initialViewState={{
            latitude: 23.6850,
            longitude: 90.3563,
            // latitude: -76.92812,
            // longitude: 38.97863,
            zoom: 5,
        }}
        mapboxAccessToken = {mapBox_Token}
        width = '100%'
        height = '100%'
        transitionDuration = '200'
        // mapStyle='mapbox://styles/asifiner/clhg4449u019i01pnbxexdvrq'
        mapStyle='mapbox://styles/asifiner/clhhb5w8n01e801qy197bfvoz'
        >
        { allLocations.map((location)=>{
            return (
                <Marker
        // latitude={allLocations.features[0].geometry.coordinates[0]}
        // longitude={allLocations.features[0].geometry.coordinates[1]}
        
        latitude={location.latitude}
        longitude={location.longitude}
        >
            <span className='pin'></span>
        </Marker>)
        }) }
        </ReactMapGL>
        </div>
        <div className='map_info'><span>Join us to<br/> Reduce these </span><span style={{marginLeft:15}} className='pin'></span></div>
        
    </div>
    
  )
}

export default Map