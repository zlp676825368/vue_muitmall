import{request} from './request';

export function getHomeData(){
    return request({
        url:'/getHomePageContent',
        method:'POST'
    })
}