const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

const utils = {

  // returns a debounced function.
  debounce: function (func, wait, immediate) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
  },

  sortObjectArray: (arr, propToSort) => {
    return arr.sort(function (a, b) {
      let x = a[propToSort] === undefined ? 0 : a[propToSort];
      let y = b[propToSort] === undefined ? 0 : b[propToSort];
      return y - x;
    });
  },


  createDisplayDataTree: (sourceData) => {
    let arrToReturn = [];
    let mappedObject = {};
    
    for (let i=0; i<sourceData.length; i++) {
      let {id, parent_objective_id} = sourceData[i];
      if (!parent_objective_id) {
        if(!mappedObject[id]) {
          mappedObject[id] = {
            self: sourceData[i],
            children: []
          };
        } else {
          mappedObject[id].self = sourceData[i];
        }
      } else {
        if (!mappedObject[parent_objective_id]) {
          mappedObject[parent_objective_id] = {
            self: '',
            children: []
          };
        }
        mappedObject[parent_objective_id].children.push(sourceData[i]);
      }
    }

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

  getFilters: (data, filterParam) => {
    let arr = [];
    arr = data.map( elm => elm[filterParam])
    return [...new Set(arr)];
  }

}

export default utils;