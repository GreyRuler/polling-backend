import koaBody from 'koa-body';
import cors from '@koa/cors';
import Router from '@koa/router';
import Koa from 'koa';
// eslint-disable-next-line import/extensions
import createRandomMessage from './createRandomMessage.js';

const server = new Koa();
const router = new Router();
const messages = [];

server.use(cors());
// Подключаем middleware для парсинга тела запроса
server.use(koaBody({
	multipart: true,
}));

// Обработчик GET-запросов
router.get('/messages/unread', (ctx) => {
	ctx.body = {
		status: 'ok',
		timestamp: Date.now(),
		messages,
	};
});

// Обработчик GET-запросов
router.post('/messages/add', (ctx) => {
	messages.push(createRandomMessage());
	ctx.body = {
		status: 'ok',
	};
});

// Подключаем роутер к приложению
server.use(router.routes());
server.use(router.allowedMethods());

// Запускаем сервер
server.listen(3000, () => {
	// eslint-disable-next-line no-console
	console.log('Server started on port 3000');
});
