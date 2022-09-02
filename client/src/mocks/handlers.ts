/**
 * 모킹하려하는 API를 가져와 handlers에 넣어줍니다.
 * handler를 따로 분리하는 이유는 연관된 API끼리 묶어주기 위함입니다.
 */

import todoListResultHandler from './api/todoListResult';

const handlers = [...todoListResultHandler];

export default handlers;
