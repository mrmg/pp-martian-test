import angular from 'angular';
import { ControlPanel } from "./controllers/ControlPanel";
import { OutputPanel } from "./controllers/OutputPanel";
import { MarsGrid } from "./services/MarsGrid";

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    
  }
}

angular.module('app', [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .controller('ControlPanel', ControlPanel)
  .controller('OutputPanel', OutputPanel)
  .service('MarsGrid', MarsGrid)

export default 'app';