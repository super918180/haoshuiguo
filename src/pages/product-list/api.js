import Http from '../../utils/http'

const getProductListReq = (param) => Http.post('/getProductList', param)

export { getProductListReq }
