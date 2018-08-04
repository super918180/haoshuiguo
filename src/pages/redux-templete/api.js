import Http from '../../utils/http'

const getAddressReq = () => Http.get('/getAddress')


export { getAddressReq }
