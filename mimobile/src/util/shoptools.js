let shopTools = {}
let shop = JSON.parse(window.localStorage.getItem('shopInfo') || '{}') 

shopTools.addUpdate = function (params) {
    // 判断实付已存在商品id
    if(shop[params.id]){
        shop[params.id] += params.num
    }else{
        shop[params.id] = params.num
    }
    this.saveShops()
}

shopTools.delete = function(id){
    delete shop[id]
    this.saveShops()
}

shopTools.getShop = function(){
    return shop;
}

//存储
shopTools.saveShops = function () {
    window.localStorage.setItem('shopInfo',JSON.stringify(shop))
}

export default shopTools;