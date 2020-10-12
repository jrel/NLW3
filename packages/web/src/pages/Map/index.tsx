import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

import './styles.css';
import 'leaflet/dist/leaflet.css';

import markerImg from '../../images/marker.svg';

function Map() {
  return (
    <div id='page-map'>
      <aside>
        <header>
          <img src={markerImg} alt='Happy' />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Lisboa</strong>
          <span>Cascais</span>
        </footer>
      </aside>
      <LeafletMap
        center={[38.7082895, -9.3335445]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      </LeafletMap>
      <Link to='/' className='add'>
        <FiPlus size={32} color='#fff' />
      </Link>
    </div>
  );
}

export default Map;
