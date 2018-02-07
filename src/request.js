// Not sure what this file is doing. The url from constant.js is http://localhost:4000/.
import axios from 'axios'
import { DBC_URL } from './constant'

export default axios
.get(`${DBC_URL}`).catch((error) => {
  console.log(error)
})
