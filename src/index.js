function log(message) {
  if (location.url.contains('.webflow.io')) {
    console.log(message);
  }
}