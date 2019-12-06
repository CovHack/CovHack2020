import React from 'react'
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'
import { graphql, useStaticQuery } from 'gatsby'
import './Map.scss'
import 'leaflet/dist/leaflet.css'

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})


const AlwaysOpenMarker = props => {
  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  }
  return <Marker ref={initMarker} {...props}/>
}

export const Map = () => {
  const {accessToken, url, id, attribution, location} = useStaticQuery(mapQuery).site.siteMetadata.map
  if (typeof window !== 'undefined') {

    return (
      
      <div className="map-responsive mt-5 mb-5">
        <LeafletMap className="leaflet-map"center={location.position} zoom={16}>
          <TileLayer
            url={url}
            id={id}
            accessToken={accessToken}
            attribution={attribution}
            />
            <AlwaysOpenMarker position={location.position}>
              <Popup>
                <b>{location.name}</b>
                <br/>{location.description}
              </Popup>
            </AlwaysOpenMarker>
        </LeafletMap>
      </div>
    )
  }
  return null
    
}

const mapQuery = graphql`
  {
    site {
      siteMetadata {
        map {
          url
          id
          accessToken
          attribution
          location {
            name
            position
            description
          }
        }
      }
    }
  }
`
