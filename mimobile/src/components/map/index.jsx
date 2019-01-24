import React, { Component } from 'react'
import './css/index.scss'
import { getUserInfo } from '../../action/cart'
import {connect} from 'react-redux'
@connect(state=>({shop:state}),{getUserInfo})
//import './js/index'
class Map extends Component {
    componentDidMount(){
        let {BMap,BMAP_STATUS_SUCCESS} = window
        let {getUserInfo} = this.props
        console.log('map',this.props)
var map = new BMap.Map("allmap");
var point = new BMap.Point(116.331398, 39.897445);
var geoc = new BMap.Geocoder();
map.centerAndZoom(point, 12);
var geolocation = new BMap.Geolocation();
geolocation.getCurrentPosition(function (r) {
    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        var mk = new BMap.Marker(r.point);
        var pt=r.point
        map.addOverlay(mk);
        map.panTo(r.point);
        geoc.getLocation(pt, function(rs){
            var addComp = rs.addressComponents;
            getUserInfo({map:addComp.province})
            //alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
        });    
        //alert('您的位置：' + r.point.lng + ',' + r.point.lat);
    } else {
        alert('failed' + this.getStatus());
    }
}, {
    enableHighAccuracy: true
})
// map.addEventListener("click", function(e){        
//     //var pt = e.point;
//     geoc.getLocation(pt, function(rs){
//         var addComp = rs.addressComponents;
//         alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
//     });        
// });
    }
    render() {
        return (
            <div className={'map'} id='allmap'>
                
            </div>
        )
    }
}
export default  Map