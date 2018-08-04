import Http from '../../utils/http'

const getAddressReq = () => Http.post('/getAddress')


export { getAddressReq }
