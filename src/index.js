import VueGoogleHeatmap from './VueGoogleHeatmap.vue';
import Loader from './loader.js';

VueGoogleHeatmap.install = function(Vue, options) {
  Vue.component(VueGoogleHeatmap.name, VueGoogleHeatmap);

  if (!options) {
    console.error('No Google Map API key provided.');
    return;
  }

  if (options.apiKey) {
    Loader.load(options.apiKey);
  }
};

export default VueGoogleHeatmap;
