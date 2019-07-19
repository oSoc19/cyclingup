import mapboxgl from 'mapbox-gl';
let serviceMap;
let mapContainer;
// eslint-disable-next-line
let jsonData;

export default map => {
  mapContainer = map;
  fetch(
    `http://data-mobility.brussels/geoserver/bm_bike/wfs?service=wfs&version=1.1.0&request=GetFeature&srsName=EPSG:4326&outputFormat=json&typeName=bm_bike:rt_counting`
  )
    .then(response => response.json())
    .then(data => parse(data));
};

const parse = data => {
  jsonData = data;
  console.log(data);
  showMap();
};

const showMap = () => {
  mapboxgl.accessToken =
    process.env.MAPBOX_ACCESS_TOKEN;

  serviceMap = new mapboxgl.Map({
    container: mapContainer,
    style: process.env.MAPBOX_STYLE,
    zoom: 11.5,
    center: [4.355, 50.847]
  });

  window.addEventListener('load', () => {
    serviceMap.resize();
  });
};
