import _ from 'lodash'

const setUniverse = () => {
  document.getElementById('universe').innerText = _.join(['hello', 'universe-2555'], ' ')
}

export { setUniverse }
