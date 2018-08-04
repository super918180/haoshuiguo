import Http from '../../utils/http'

const getAddressByIndexReq = () => Http.post('/getAddressByIndex')


export { getAddressByIndexReq }
