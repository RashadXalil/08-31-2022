let deepEquals = (a, b) => {
  if (a === b) {
    return true
  } else if (Number.isNaN(a) && Number.isNaN(b)) {
    return true
  } else if (
    typeof a == 'object' &&
    typeof b == 'object' &&
    Object.keys(a).length === Object.keys(b).length
  ) {
    if (Array.isArray(a) === Array.isArray(b)) {
      for (const key in a) {
        if (!deepEquals(a[key], b[key])) {
          return false
        } else {
          false
        }
      }
      return true
    }
  }
  return false
}

console.log(deepEquals('abc', 'aba'))
