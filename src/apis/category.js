import request from '@/utils/http'

export function getCatrgoryAPI() {
    return request({
        url:'/category',
        params: {
            id
        }
    })
} 