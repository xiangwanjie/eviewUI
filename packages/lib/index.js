import Demo from "./demo";
import Card from "./card";

const componetns = {
  Demo,
  Card
}

const install = function (Vue) { 
  if (install.installed) return;
  Object.keys(componetns).forEach(key => { 
    Vue.component(componetns[key].name, componetns[key]);
  })
}

const API = {
  install
}

export default API;