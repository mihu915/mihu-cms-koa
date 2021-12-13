const { BAN_DELETE_ID } = require('../app/config')
const { errorTypes } = require('../error/error-types')

const verifyDelete = (urlName, id) => {
  if (!BAN_DELETE_ID[urlName]) return
  else if (BAN_DELETE_ID[urlName].includes(id)) {
    throw new Error(errorTypes.PROHIBIT_DELETION)
  }
}

module.exports = {
  verifyDelete
}
