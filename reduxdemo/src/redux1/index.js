//createStore 用来创建商店
import {
    createStore
} from 'redux'

//reducer 规则 函数 道 返回新的状态,在组件中使用state
//action 决定要做哪种应对的事件
function reducer(state = 0, action) {
    switch (action.type) {
        case 'cavalry':
            return '骑兵';
        case 'artillery':
            return '大炮';
        default:
            return 'Peaceful';
    }
}

//创建商店
//参数 是 纯函数，不更改默认的状态，此处即state一直是0
const store = createStore(reducer)

//订阅.被触发，可以多次触发
function listener(){
    const currentState = store.getState()
    console.log('currentState:',currentState)
}
store.subscribe(listener)

// 派发事件，传递action
store.dispatch({
    type:'artillery'
})

