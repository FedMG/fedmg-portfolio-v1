export const setListener = (element, event, callback) => {
  element.addEventListener(event, callback)
}

export const setAnimation = (containerStyle, transition, transform) => {
  containerStyle.transition = transition
  containerStyle.transform = transform
}

export const addId = (array, id = 0, len = array.length) =>  {
  if (!Array.isArray(array)){
    return 'Is not an Array'
  } 
  
  if (id >= len) {
    return array
  } else {
    array[id]['id'] = id;
    return run(array, id + 1)
  }
}
