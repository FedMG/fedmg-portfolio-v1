export const setListener = (element, event, callback) => {
  element.addEventListener(event, callback)
}

export const setAnimation = (containerStyle, transition, transform) => {
  containerStyle.transition = transition
  containerStyle.transform = transform
}

export const addId = (array, id = 0, len = array.length) => {
  if (!Array.isArray(array)) {
    return 'Is not an Array'
  }

  if (id >= len) {
    return array
  } else {
    array[id].id = id
    return addId(array, id + 1)
  }
}

export const setUpperCase = (name) => name[0].toUpperCase() + name.slice(1)

export const isArray = (arr) => Array.isArray(arr)

export const createAndFillIterable = (arr, value) => Array(arr.length).fill(value)
