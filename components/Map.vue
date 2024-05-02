<template>
  <div id="map">
    <div style="height: 100%; width: 100%" ref="hereMapRef" class="rounded-lg"></div>
  </div>
</template>

<script setup lang="ts">
/* __placeholder__ */
import type { PropType } from "vue";
import { defineProps, ref, onMounted, watch } from "vue";
import { useRuntimeConfig } from "nuxt/app";
// as PropType<any>
const props = defineProps({
  center: {
    type: Object,
    default: { lat: 31.459353, lng: 74.242167 },
  },
  points: { type: Array as PropType<any>, default: [] },
  defaultZoomLevel: { type: Number, default: 13 },
  showInfo: { type: Boolean, default: true },
});

const config = useRuntimeConfig();
let apikey = config.public.MAP_API_KEY;

let platform: any = null;
const hereMapRef = ref();
let map: any = ref();
const duration: any = useDuration();
const distance: any = ref();

onMounted(async () => {
  let p = new window.H.service.Platform({
    apikey: apikey,
  });
  platform = p;
  initializeHereMap();
  if (props.points.length > 1) drawLine();
});

function initializeHereMap() {
  // rendering map
  const mapContainer = hereMapRef.value;
  const H = window.H;
  // Obtain the default map types from the platform object
  var maptypes = platform.createDefaultLayers();

  // Instantiate (and display) a map object:
  map = new H.Map(mapContainer, maptypes.vector.normal.map, {
    zoom: props.defaultZoomLevel,
    center: props.center,
    pixelRatio: window.devicePixelRatio || 1,
    dragBehavior: false, // Disable dragging of the map
    zoomControl: false, // Disable zooming of the map
  });

  addEventListener("resize", () => map.getViewPort().resize());

  new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

  H.ui.UI.createDefault(map, maptypes);
  if (!!props.center) addSvgAtCenter(props.center);
}

function addSvgAtCenter(centerPoints: any) {
  // console.log("addSvgAtCenter centerPoints", centerPoints);
  var svgMarkup =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 40 40" fill="currentColor" height="50" width="50">  <circle cx="10" cy="10" r="20" fill="rgba(0, 0, 0, 0.1)" />  <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" /></svg>';

  // Add the first marker
  const H = window.H;
  var bearsIcon = new H.map.Icon(
      svgMarkup.replace("${FILL}", "blue").replace("${STROKE}", "red")
    ),
    bearsMarker = new H.map.Marker(centerPoints, { icon: bearsIcon });
  map.addObject(bearsMarker);

  const markerBounds = new H.geo.Rect(
    centerPoints.lat,
    centerPoints.lng,
    centerPoints.lat,
    centerPoints.lng
  );
  map.getViewModel().setLookAtData({ bounds: markerBounds });
  map.setZoom(13);
}

function drawLine() {
  map.removeObjects(map.getObjects());

  const H = window.H;

  let originCords = `${props.points[0].lat},${props.points[0].lng}`;

  let destinationCordDifferentName = `${props.points[props.points.length - 1].lat},${
    props.points[props.points.length - 1].lng
  }`;

  let stops: any = [];
  stops = props.points.slice(1, -1).map((obj: any) => `${obj.lat},${obj.lng}`);

  var routingParameters = {
    routingMode: "fast",
    transportMode: "car",
    routeAttributes: "summary",
    representation: "display",
    origin: originCords.trim(),
    destination: destinationCordDifferentName.trim(),
    return: "polyline",
    via: new H.service.Url.MultiValueQueryParameter(stops),
  };

  var router = platform.getRoutingService(null, 8);

  router.calculateRoute(routingParameters, drawLines, function (error: any) {
    console.log("error", error);
    alert(error);
  });
}

function drawLines(result: any) {
  const H: any = window.H;
  // console.log("result", result);

  if (result.routes.length) {
    result.routes[0].sections.forEach((section: any, index: any) => {
      let linestring = new H.geo.LineString.fromFlexiblePolyline(section.polyline);

      // Create a polyline to display the route:
      let routeLine = new H.map.Polyline(linestring, {
        style: { strokeColor: "black", lineWidth: 3 },
      });

      // Create a marker for the start point:
      let startMarker = new H.map.Marker(section.departure.place.location);

      // Create a marker for the end point:
      let endMarker = new H.map.Marker(section.arrival.place.location);

      // Add the route polyline and the two markers to the map:
      map.addObjects([routeLine, startMarker, endMarker]);

      // Set the map's viewport to make the whole route visible:
      map.getViewModel().setLookAtData({ bounds: routeLine.getBoundingBox() });
    });
    let startDate = result.routes[0].sections[0].departure.time;
    let endDate =
      result.routes[0].sections[result.routes[0].sections.length - 1].arrival.time;
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

    let hours = seconds / 3600;
    console.log("Secondss", seconds);
    duration.value = seconds;
  }
}

watch(
  () => props.points,
  (newValue) => {
    console.log("points");
    if (props.points.length > 1) {
      drawLine();
    } else if (props.points.length == 1) {
      map.removeObjects(map.getObjects());
      addSvgAtCenter(props.points[0]);
    } else if (props.points.length == 0) {
      map.removeObjects(map.getObjects());
      addSvgAtCenter(props.center);
    }
  },
  { deep: true }
);
</script>

<style scoped>
#map {
  position: relative;
  width: 100%;
  min-width: 280px;
  text-align: center;
  /* Set an appropriate height for the map */
}

#mapContainer {
  position: absolute;
  top: 25px;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
