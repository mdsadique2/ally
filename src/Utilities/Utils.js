
const utils = {

  createDisplayDataTree: (sourceData) => {
    let arrToReturn = [];
    let mappedObject = {};

    // creating an object to classify parents and children
    sourceData.forEach((elm, i) => {
      let {id, parent_objective_id} = elm;
      
      if (!parent_objective_id) {
        if(!mappedObject[id]) {
          mappedObject[id] = {
            self: elm,
            children: []
          };
        } else {
          mappedObject[id].self = elm;
        }
      } else {
        if (!mappedObject[parent_objective_id]) {
          mappedObject[parent_objective_id] = {
            self: '',
            children: []
          };
        }
        mappedObject[parent_objective_id].children.push(elm);
      }
    });


    // squashing th object in array of objects used in app
    for (let key in mappedObject) {
      if (!mappedObject[key].self) {
        continue;
      }
      let parent = mappedObject[key].self;
      parent.children = mappedObject[key].children;
      arrToReturn.push(parent);
    }
    return arrToReturn;
  },


  // return the unique elements array
  getFilters: (data, filterParam) => {
    let arr = [];
    arr = data.map( elm => elm[filterParam])
    return [...new Set(arr)];
  }

}

export default utils;