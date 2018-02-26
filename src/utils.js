export const prefix = 'qi-'

export const getPathDepth = (path) => {
  return _.size(_.split(path, '/').filter(x => x !== ''))
}
