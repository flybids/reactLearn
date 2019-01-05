
//把要用的函数导出去，从而可以在组件中使用

const ADD_NUM = 'cavalry'
const REMOVE_NUM = 'artillery'

export function reducer(state = 100, action) {
    switch (action.type) {
        case ADD_NUM:
            return state+1;
        case REMOVE_NUM:
            return state-1;
        default:
            return state;
    }
}

export function addNum(){
    return {
        type: ADD_NUM
    }
}

export function removeNum(){
    return{
        type: REMOVE_NUM
    }
}

//异步
//返回一个函数
export function removeNumAsync(){ 
   return (dispatch)=> {
       setTimeout(()=>{
        dispatch(removeNum())
       },3000) 
   }
}

