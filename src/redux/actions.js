//包含n个同步和异步的action;
import {AuthHOME,AUTHCATEGORYS,AUTHBRAND} from './action_type';
import {reqHomepage,reqCategorys,reqBrand} from '../api/index';
//同步action
export const autoHome=(homepage)=>({type:AuthHOME,data:homepage});
//同步action获取分类
export const antoCategorys=(categorys)=>({type:AUTHCATEGORYS,data:categorys});
//同步的品牌的action
export const autoBrand=(brands)=>({type:AUTHBRAND,data:brands})

// 异步发送请求获取首页的数据
export const reqhomepage=()=>{
  //返回一个函数
    return dispatch=>{
        reqHomepage().then((response)=>{
            const result=response.data;
            //分发同步actions
            dispatch(autoHome(result))
        })
    }
};
//异步发送请求获取分类的数据
export const reqcategorys=()=>{
    return dispatch=>{
        reqCategorys().then((response)=>{
            const result=response.data;
            dispatch(antoCategorys(result))

        })
    }

}
//异步获取brands
export const reqbrand=()=>{
    return dispatch=>{
        reqBrand().then((response)=>{
            const result=response.data;
            dispatch(autoBrand(result))

        })
    }

}



