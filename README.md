## Installation
```js
yarn add vue-google-heatmap
```

You will need an Google Maps Javascript API Key. You can get one here: [Google Cloud Console](https://console.cloud.google.com/)

```js
import VueGoogleHeatmap from 'vue-google-heatmap';

Vue.use(VueGoogleHeatmap, {
  apiKey: API_KEY_HERE
});
```

## Example
```vue
<template>
  <vue-google-heatmap :points="points"
                      :width="400"
                      :height="350" />
</template>

<script>
data() {
  return {
    points: [
      {lat: 37.786117, lng:-122.440119},
      {lat: 37.786564, lng:-122.440209},
      {lat: 37.786905, lng:-122.440270},
      {lat: 37.786956, lng:-122.440279},
      {lat: 37.800224, lng:-122.433520},
      {lat: 37.800155, lng:-122.434101},
      {lat: 37.800160, lng:-122.434430},
      {lat: 37.800378, lng:-122.434527},
      {lat: 37.800738, lng:-122.434598},
      {lat: 37.800938, lng:-122.434650},
      {lat: 37.801024, lng:-122.434889},
      {lat: 37.800955, lng:-122.435392},
      {lat: 37.800886, lng:-122.435959}
    ]
  }
}
</script>
```

![heatmap example](https://i.imgur.com/fzkAFmv.png)

## Available Props
| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| width | [String, Number] | 100% | Specify map width with a number (200), or with a string percentage (100%) |
| height | [String, Number] | 100% | Specify map height with a number (200), or with a string percentage (100%) |
| initial-zoom | Number | 13 | Initial Map Zoom |
| map-type | String | roadmap | Type of map, options: ['roadmap', 'satellite'] |
| lat | Number | 37.775 | Map center latitude |
| lat | Number | -122.434 | Map center longitude |
| points | Array | [] | Points to generate Heatmap with, array of objects [{lat: 37.775, lng: -122.434}] |