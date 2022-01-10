var imageMap;

window.onload = function () {
  var ImageMap = function (map, img) {
    var n,
      areas = map.getElementsByTagName("area"),
      len = areas.length,
      coords = [],
      previousWidth = img.naturalWidth;
    for (n = 0; n < len; n++) {
      coords[n] = areas[n].coords.split(",");
    }
    this.resize = function () {
      if (img.offsetWidth == 0) {
        return;
      }

      var n,
        m,
        clen,
        x = img.offsetWidth / previousWidth;
      for (n = 0; n < len; n++) {
        clen = coords[n].length;
        for (m = 0; m < clen; m++) {
          coords[n][m] *= x;
        }
        areas[n].coords = coords[n].join(",");
      }
      previousWidth = img.offsetWidth;
      return true;
    };
    window.onresize = this.resize;
  };

  imageMap = new ImageMap(
    document.getElementById("mapid"),
    document.getElementById("imgid")
  );
  imageMap.resize();
};
