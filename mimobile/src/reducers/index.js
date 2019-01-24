import {combineReducers} from 'redux'
import carCount from './carCount'
import user from './user'
export default combineReducers({
    carCount,
    user
})
// 多个不同的reducer函数 合并成 最终的一个reducer函数
// 可以对reducer调用createStore