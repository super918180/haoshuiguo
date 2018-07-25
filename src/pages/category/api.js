import Http from '../../utils/http'

const getCategoryReq = () => Http.get('/getCategory')


export { getCategoryReq }
