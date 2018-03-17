export const loaded = new Promise((resolve, reject) => {
  window['vueGoogleMapsInit'] = resolve;
});

export default {
  loaded: false,
  load(apiKey) {
    if (!this.loaded) {
      const scriptElement = document.createElement('SCRIPT');

      const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=visualization&callback=vueGoogleMapsInit`;

      scriptElement.setAttribute('src', url);
      scriptElement.setAttribute('async', '');
      scriptElement.setAttribute('defer', '');
      document.head.appendChild(scriptElement);

      this.loaded = true;
    } else {
      throw new Error('Google Maps has already been loaded.');
    }
  }
};
