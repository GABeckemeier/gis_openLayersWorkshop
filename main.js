import 'ol/ol.css';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import sync from 'ol-hashed';
import DragAndDrop from 'ol/interaction/DragAndDrop';
import Modify from 'ol/interaction/Modify';

const source = new VectorSource();

const map = new Map({
  target: 'map-container',
  const layer = new VectorLayer({
    source: source
  });
  map.addLayer(layer);
  map.addInteraction(new DragAndDrop({
    source: source,
    formatConstructors: [GeoJSON]
  }));
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
sync(map);
map.addInteraction(new Modify({
  source: source
}));
