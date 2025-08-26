import {instance} from "../../common/api/common-api";

export const cryptosAPI = {
    getCryptos() {
        return instance.get(`price?token_id=3375,3306,3369,3393,28902,3988,3379,3312,3396`)
    },
}

// TodolistsTypes
export type GetTodolistsType = {
    addedDate: string
    id: string
    order: number
    title: string
}

