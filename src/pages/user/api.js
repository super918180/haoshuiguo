import Http from '../../utils/http'

const getUserInfoReq = () => Http.get('/getUserInfo')


export { getUserInfoReq}
