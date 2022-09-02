/**
 * 모킹하려는 API를 설정합니다.
 * 첫 번째 인자로 경로, 두 번째 인자로 request, response, context를 파라미터로 넘겨받는 콜백 함수를 넣어줍니다.
 * response와 context.json을 아래와 같이 조합하면 API 응답 값을 넣을 수 있습니다.
 * 원하는 API가 여러 개라면 handlers 배열에 여러 개를 넣어주면 됩니다.
 */

import { rest } from 'msw';
import { todoListResultData } from './data/todoListResultData';

const handlers = [rest.get('/todos', (_, res, ctx) => res(ctx.json(todoListResultData)))];

export default handlers;
