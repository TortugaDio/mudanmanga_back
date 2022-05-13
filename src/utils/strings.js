
function normalizeString(rawText) {
  return rawText
    .trim()
    .normalize(`NFD`)
    .replace(/[\u0300-\u036f]/g, ``)
}

  module.exports = {
    normalizeString,
  }