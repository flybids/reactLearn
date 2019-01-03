import React, { Component } from 'react'
import { Map, Marker, NavigationControl, InfoWindow } from 'react-bmap'
import './index.scss'

export default class bMap extends Component {
    render() {
        return (
            <div className={'container'}>
                <Map center={{ lng: 116.402544, lat: 39.928216 }} zoom="11">
                    <Marker position={{ lng: 116.402544, lat: 39.928216 }} />
                    <NavigationControl />
                    <InfoWindow position={{ lng: 116.402544, lat: 39.928216 }} text="内容" title="标题" />
                </Map>
            </div>
        )
    }
}
