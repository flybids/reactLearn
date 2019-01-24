import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addCart} from '../../action/cart'
import {Link} from 'react-router-dom'

import './css/index.scss'

@connect(
    state=>({abc:state}),
    {addCart}
)

class Shop extends Component {
    state={
        data:{},
        num:0,
        id:''
    }
    componentDidMount(){
        let id = this.props.match.params.shopid
        fetch(`http://47.100.98.54:9020/api/buygoods/${this.props.match.params.shopid}`)
         .then(res=>res.json())
         .then(data=>{
             this.setState({
                 data,
                 id
             })
         })
        
    }
    reduceGoods=()=>{
        let num = this.state.num
        num>=1&&num--
        this.setState({
            num
        })
    }
    addGoods=()=>{
        let num = this.state.num
        num++
        this.setState({
            num
        })
    }
    submitCart = ()=>{
        let {addCart} = this.props
        let {id,num} = this.state
        num>0 && (
            addCart({
                id,
                num
            })
        )
    }
    render() {
        console.log('====================================');
        console.log(this.props);
        console.log('====================================');
        let {des,picurl,price,symbol,title,shopid} = this.state.data
        return (
            <div className="mb ">
                <div className="shopdedatils">
                    <img src={picurl} width="80%" alt={title}/>
                    <h3 className={'title'}>{title}</h3>
                    <h3 className={'des'}>{des}</h3>
                    <p className="money">
                        <span className="symbol">{symbol}</span>
                        <span className="price">{price}</span>
                    </p>
                    <p className="courier">快递：包邮 <span className="fr">12</span></p>
                    <div className="buyNum clearFix">
                        <p className="fl buyfont">购买数量</p>
                        <p className="addNum fr">
                            <a href="javascript:;" className="reduce" onClick={this.reduceGoods}>-</a>
                            <a href="javascript:;" className="num">{this.state.num}</a>
                            <a href="javascript:;" className="add" onClick={this.addGoods}>+</a>
                        </p>
                    </div>
                    <div className="buy">
                        <a href="javascript:;" className="addCart" onClick={this.submitCart}>加入购物车</a>
                        <Link to={`/shopcurt`} className="nowBuy" > 立即购买</Link>
                    </div >
                </div >
            </div >
        )
    }
}
export default Shop;
