import Http from '../../utils/http'

const getHotSearchKeyReq = () => Http.get('/getHotSearchKey')


export { getHotSearchKeyReq }
