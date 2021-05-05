import express from 'express'
import {Router} from 'express'
import {getPlayer} from './class/User'

const route = Router()
route.use('/:params', getPlayer)

export default route