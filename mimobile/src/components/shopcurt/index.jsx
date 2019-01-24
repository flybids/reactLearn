import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCart, delCart, getGoodsNum } from '../../action/cart'

import './css/index.scss'

@connect(
    state => ({ shop: state }),
    { addCart, delCart, getGoodsNum }
)

class Shopcurt extends Component {
    state = {
        goods: [],
        num: 0,
        money: 0,
        adr: 'ShangHai China'
    }
    getData = () => {
        let { carCount } = this.props.shop  //{11: 1, 12: 2, 21: 7,data:5,map:''}
        let shopids = Object.keys(carCount)
        let { goods } = this.state
        console.log('进入购物车',this.props)
        // let id = this.props.match.params.shopid
        shopids.forEach((item, index) => {
            if (!isNaN(item)) {
                //必须判断item是否是数字，才能请求，否则会有错误
                fetch(`http://47.100.98.54:9020/api/buygoods/${item}`)
                    .then(res => res.json())
                    .then(data => {
                        data['num'] = carCount[item]
                        goods.push(data)
                        this.setState({
                            goods,
                        })
                    })
            }

        })
        this.getResoult()

    }
    getResoult = () => {
        let {carCount} = this.props.shop
        console.log('carCount',carCount)
        this.setState({
            adr:carCount.map
        })
        var timer = setTimeout(() => {
            clearTimeout(timer)
            this.totoalPrice()
        }, 200);
    }
    totoalPrice = () => {
        let { getGoodsNum } = this.props
        let goods = this.state.goods
        let count = 0
        let price = 0
        for (let key of goods) {
            count += key.num
            price += key.num * Number(key.price)
        }
        this.setState({
            num: count,
            money: price
        })
        getGoodsNum({
            data: count
        })
    }
    delGoods = (index) => {
        let goods = this.state.goods
        let { delCart } = this.props
        delCart(goods[index].shopid)
        goods.splice(index, 1)
        this.setState({
            goods
        })
        this.totoalPrice()
    }
    addGoods = (index) => {
        let goods = this.state.goods
        let { addCart } = this.props
        addCart({
            id: goods[index].shopid,
            num: 1
        })
        goods[index].num++
        this.setState({
            goods
        })
        this.totoalPrice()

    }
    reduceGoods = (index) => {
        let goods = this.state.goods
        let { addCart } = this.props
        if (goods[index].num) {
            addCart({
                id: goods[index].shopid,
                num: -1
            })
            goods[index].num--
            this.setState({
                goods
            })
            this.totoalPrice()
        }


    }
    componentDidMount() {
        this.getData()
    }
    render() {
        let { goods } = this.state
        return (
            <div className="shopArea mb">
                <p className="location clearFix" v-if="location">
                    <span className="fl">送到地点:{this.state.adr}</span>
                    <span className="fr">编辑地址</span>
                </p>
                {
                    goods.length > 0 && (
                        goods.map((item, index) => {
                            return (
                                <div className="shop " key={index}>
                                    <div className="shopShow">
                                        <div className="pic ">
                                            <img src={item.picurl} width="100%" height="100%" alt="" />
                                        </div>
                                        <div className="des ">{item.des}</div>
                                    </div>

                                    <div className="buyNum ">
                                        <p className=" buyfont">{item.symbol}{item.price}</p>
                                        <p className="addNum ">
                                            <a href="javascript:;" className="reduce" onClick={this.reduceGoods.bind(this, index)}>-</a>
                                            <a href="javascript:;" className="num" >{item.num}</a>
                                            <a href="javascript:;" className="add" onClick={this.addGoods.bind(this, index)}>+</a>
                                        </p>
                                        <a href="javascript:;" className="del" onClick={this.delGoods.bind(this, index)}>删除</a>
                                    </div>
                                </div>
                            )
                        })
                    )
                }


                <div className="totalPrice">
                    {/* <!--<div className="all">
                    <i></i>
                    <span>全选</span>
                </div>--> */}
                    <div className="total">
                        <p className="totalMoney">
                            <span className="font">总计:</span> <span>￥ {this.state.money}</span>
                        </p>
                        <p className="preferential">
                            总金额￥3000 优惠￥0.00
                    </p>
                    </div>
                    <div className="goPayment">
                        <span className="font">去结算</span><span className="num">({this.state.num}件)</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Shopcurt;