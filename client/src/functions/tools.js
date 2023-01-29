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

export const createSVGObject = (title, path, svgStyle, pathStyle, fill = true) => {
  return {
    icon: {
      title,
      path,
      svg: {
        role: 'img',
        xmlns: 'http://www.w3.org/2000/svg',
        vbox: '0 0 24 24',
        fill: fill ? 'fill' : 'none'
      },
      styles: {
        svg: svgStyle,
        path: pathStyle
      }
    }
  }
}

export const setUpperCase = (name) => name[0].toUpperCase() + name.slice(1)
