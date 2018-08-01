
import Http from '../../utils/http'

const getShoppingCarts = (param) => Http.post('/getShoppingCarts', param)

export { getShoppingCarts }