import shopTools from '../util/shoptools'
export default function (state = {},action) {
    let newS = Object.assign({},state)
    let goods = action.data
    switch(action.type){
        case 'CART_ADD':
            shopTools.addUpdate(goods)
            return shopTools.getShop();
        case 'CART_DEL':
            shopTools.delete(goods)
            return shopTools.getShop();
        case 'CART_GOODS_NUM':
            console.log('提交总数',goods)
            let newState = Object.assign({},newS,goods)
            return newState; 
        case 'GET_USER_INFO':
            let newMapInfo = Object.assign({},newS,goods)
            console.log('GET_USER_INFO',newMapInfo)
            return newMapInfo;
        default:
            return shopTools.getShop();
    }
}