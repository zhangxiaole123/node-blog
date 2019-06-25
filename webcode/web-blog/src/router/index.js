import Detail from '../components/HelloWorld.vue'
import CardList from '../components/cardList.vue'

const routers = {
    routes: [
        {//列表页
            path: '/',
            name:"list",
            component: CardList
        },
        {//列表页
            path: '/detail',
            name:"detail",
            component: Detail
        }, {//列表页
            path: '/list',
            name:"list",
            component: CardList
        },

    ]
}
export default routers 

