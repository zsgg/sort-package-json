const order = ['dev', 'build', 'test', 'github']

export default (left, right) => {
  const normalizedLeft = left.replace(/[- _]/g, '')
  const normalizedLeftFirst = normalizedLeft.split(':')[0]
  const normalizedRight = right.replace(/[- _]/g, '')
  const normalizedRightFirst = normalizedRight.split(':')[0]

  const leftOrder = order.findIndex((value) =>
    normalizedLeftFirst.startsWith(value),
  )
  const rightOrder = order.findIndex((value) =>
    normalizedRightFirst.startsWith(value),
  )

  if (leftOrder !== -1 && rightOrder !== -1) return leftOrder - rightOrder
  if (leftOrder !== -1) return 1
  if (rightOrder !== -1) return -1
  return normalizedLeft.localeCompare(normalizedRight)
}
