import React, { Component } from 'react'
import './css/index.scss'
import {Link} from 'react-router-dom'
import LazyLoad,{lazyload} from 'react-lazyload'
@lazyload({
    height:200,
    once:true ,
    offset:100,
  })

class Nav extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        fetch('http://47.100.98.54:9020/api/category')
            .then(res=>res.json())
            .then((data)=>{
                if( data.status === 200 ){
                    this.setState({
                        data:data.data
                    })
                }
                //console.log(data)
            })
    }
    render() {
        const data = this.state.data
        return (
            <div className={'nav'}>
            {
                data.length>0&&(
                data.map((item,index)=>{
                    return (
                        <Link to={`/shopbuy/${item.shopid}`} key={index}>
                            <LazyLoad>
                                <img src={item.picurl} alt='item.alt'/>
                            </LazyLoad>
                        </Link>
                    )
                }) 
            )
            }
               {/* <a href=""><img src={require('./img/1.webp')} alt=""/></a>
               <a href=""><img src={require('./img/2.webp')} alt=""/></a>
               <a href=""><img src={require('./img/3.webp')} alt=""/></a>
               <a href=""><img src={require('./img/4.webp')} alt=""/></a>
               <a href=""><img src={require('./img/5.webp')} alt=""/></a>
               <a href=""><img src={require('./img/6.webp')} alt=""/></a>
               <a href=""><img src={require('./img/2.webp')} alt=""/></a>
               <a href=""><img src={require('./img/4.webp')} alt=""/></a>
               <a href=""><img src={require('./img/6.webp')} alt=""/></a>
               <a href=""><img src={require('./img/7.webp')} alt=""/></a>  */}
            </div>
        )
    }
}
export default  Nav