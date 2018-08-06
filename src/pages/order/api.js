import Http from '../../utils/http'

const getOrderListReq = (param) => Http.post('/getOrderList', param)

export { getOrderListReq }
