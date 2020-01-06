import{request} from './request';

export function getCateGroys(){
    return request({
        url:'/getHomePageContent',
        method:'POST'
    })
}