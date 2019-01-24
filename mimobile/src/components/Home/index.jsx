import React, { Component } from 'react'
import Head from '../indextop';
import Banner from '../banner';
import Nav from '../nav';
import Recommend from '../recommend';
import Confern from '../confern';
import Goods from '../phone';
import LazyLoad,{lazyload} from 'react-lazyload'
@lazyload({
  height:200,
  once:true ,
  offset:100,
})
class Home extends Component {
  render() {
    return (
      <div>
         <Head/>
        <Banner/>

        <Nav/>
        <Recommend/>
        <Confern/>
        <LazyLoad height={200}>
          <Goods/>
        </LazyLoad>
       
      </div>
    )
  }
}
export default  Home