import express from 'express'
import {Router} from 'express'
import {getPlayer, index} from './class/User'

const route = Router()

route.use('/:params', getPlayer)
route.use('/',index)
export default route