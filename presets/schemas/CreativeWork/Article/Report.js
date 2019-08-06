const { _simpleArticlePrototype } = require('../Article')

const Report = {
  ..._simpleArticlePrototype('Report'),
  description: 'A Report generated by governmental or non-governmental organization.'
}

module.exports = {
  Report
}