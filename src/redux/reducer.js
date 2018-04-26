import {AuthHOME,AUTHCATEGORYS,AUTHBRAND} from './action_type';
import {combineReducers} from 'redux';

const init_homepage={};
//首页的状态数据
function homepage(state=init_homepage, action) {
    switch (action.type){
        case AuthHOME:
            return action.data;
        default:
            return state;

    }
};
//分类的状态数据
function classfys(state=[],action) {
    switch (action.type){
        case AUTHCATEGORYS:
            return action.data;
        default:
            return state;
    }

}
//品牌的
function brands(state=[],action) {
    switch (action.type){
        case AUTHBRAND:
            return action.data;
        default:
            return state;
    }


}

export default combineReducers({homepage,classfys,brands})
