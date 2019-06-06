import React, { Component } from 'react'
import getNevadaJSONData from './stateParks';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
  
export class GoogleMaps extends Component{

    constructor(props){
        super(props)
        this.state = {
            query: ''
        }
        this.initMap = this.initMap.bind(this);
    }

    componentDidMount(){
        this.initMap();
    }

    handleChange = (event) => {
        var searchBox;
        searchBox = new window.google.maps.places.SearchBox(
            document.getElementById('input'), {types: ['geocode']});

        this.map.addListener('bounds_changed', function() {
            searchBox.setBounds(this.map.getBounds());
        }.bind(this));
        var points = [];
       searchBox.addListener('places_changed', function(){
            var places = searchBox.getPlaces();
            if (places.length == 0) {
                return;
            }

            points.forEach(function(p) {
                p.setMap(null);
            });
            points = [];

            var bounds = new window.google.maps.LatLngBounds();
            places.forEach(function(place){
                if (!place.geometry) {
                    alert("Returned place contains no geometry");
                    return;
                }
                var icon = {
                    url: place.icon,
                    size: new window.google.maps.Size(71, 71),
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(17, 34),
                    scaledSize: new window.google.maps.Size(25, 25)
                };
                var newmarker = new window.google.maps.Marker({
                    map: this.map,
                    title: place.name,
                    position: place.geometry.location,
                });
                points.push(newmarker);
                if (place.geometry.viewport) {
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            }.bind(this))
            this.map.fitBounds(bounds);
       }.bind(this))
    }

    initMap(){
        const InitialCenter = new window.google.maps.LatLng(38.8026, -116.4194);
        const mapOptions = {
            zoom: 6,
            center: InitialCenter,
            gestureHandling: 'cooperative',
            zoomControl: true,
        }
        this.map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

        const stateParks = getNevadaJSONData();

        for(let park of stateParks) {
                this.marker = new window.google.maps.Marker({
                map: this.map,
                position: new window.google.maps.LatLng(park.location[0], park.location[1]),
                title: park.name
              })

            this.marker.setMap(this.map);
            this.infoWindow = new window.google.maps.InfoWindow();
            window.google.maps.event.addListener(this.marker, 'click', function(event){

                var latLng = new window.google.maps.LatLng(park.location[0], park.location[1]);
                var contentString = '<div id="content">'+
                '<div id="siteNotice">'+
                '<h3 id="firstHeading" class="firstHeading">' + park.name + '</h3>'+
                '<div id="bodyContent">'+ '<br/>' +
                '<b>Hours : </b>' + park.timings + '<br/>' +
                '<b>Fee :  </b>'+ park.fee + '<br/>' +
                '<b>For More Info Visit : </b>' + '<a target= "_blank" href=' + park.website + '> ' + park.name + '</a>' +
                '</div>';
                this.infoWindow.setContent(contentString);
                this.infoWindow.setPosition(latLng);
                this.infoWindow.setOptions({
                    pixelOffset: new window.google.maps.Size(0, -40)
                })
                this.infoWindow.open(this.map);
            }.bind(this))
        }
    }

    render(){
        return(
            <div>
                <InputBase
                    style={{width: '300px'}}
                    id ='input'
                    placeholder="Search Google Maps"
                    inputProps={{ 'aria-label': 'Search Google Maps' }}
                    onChange={this.handleChange}
                />
                <IconButton  aria-label="Search">
                    <SearchIcon />
                </IconButton>
                <Button variant="outlined" color="primary" onClick={this.initMap}>Back to Nevada State Parks</Button>
                <div id="map" style={{height: "400px", width: '600px'}}></div>
            </div>
        );
    }
}

