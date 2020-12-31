import _ from 'lodash';

const currentUniverse = 'universe-2555';

const setUniverse = () => {
  document.getElementById('universe').innerText = `Hello from ${currentUniverse}`;
}

export { setUniverse }
