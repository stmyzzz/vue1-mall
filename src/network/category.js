import {request} from './request'

export function getCategory(){
    return request({
        url:'/category'
    }).catch(err =>{
        err
    })
}

export function getCateItem(maitKey){
    return request({
        url:'/subcategory',
        params:{
            maitKey
        }
    }).catch(err =>{
        err
    })
    }
