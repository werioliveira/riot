import express from 'express'
import {Router} from 'express'
import {getPlayer} from './class/User'

const route = Router()
route.use('/',(req,res) =>{
    return res.json("Digite nome de invocador após o / da url")
})
route.use('/:params', getPlayer)

export default route