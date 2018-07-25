import Http from '../../utils/http'

const getHomeSwiperReq = () => Http.get('/getHomeSwiper')
const getHomeCategoryReq = () => Http.get('/getHomeCategory')
const getHomeNewProductReq = () => Http.get('/getHomeNewProduct')
const getRecommendProductReq = () => Http.get('/getRecommendProduct')
const getHotProductReq = () => Http.get('/getHotProduct')


export { getHomeSwiperReq, getHomeCategoryReq, getHomeNewProductReq, getRecommendProductReq, getHotProductReq }
