import Http from '../../utils/http'

const getProductDetailReq = (param) => Http.get('/getProductDetail',param)


export { getProductDetailReq }
