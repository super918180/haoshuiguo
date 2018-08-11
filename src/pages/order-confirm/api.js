import Http from '../../utils/http'

const getDefaultAddressReq = () => Http.post('/getDefaultAddress')

export { getDefaultAddressReq }
