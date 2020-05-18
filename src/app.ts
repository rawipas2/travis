// const express = require('express')
import express from 'express'
import apiRoute from './apiRout'
import { createLogger, format, transports } from 'winston'

const app = express()
const PORT = 8080

const logger = createLogger({
	level: 'debug',
	format: format.combine(format.colorize(), format.simple()),
	transports: [new transports.Console()],
})

// logger.error('error message');
// logger.warn('warn message');
// logger.info('info message');
// logger.verbose('verbose message');
// logger.debug('debug message');
// logger.silly('silly message');

app.use('/api', apiRoute)

app.use(function (req, res, next) {
	logger.verbose('Time:' + Date.now())
	next()
})

app.get('/', (req, res) => {
	res.send('hello world')
})

app.listen(PORT, () => {
	// console.log('Open web on port:', PORT)
	logger.info('Open web on port:' + ' ' + PORT)
})
