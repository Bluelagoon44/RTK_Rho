export const loggerMiddleware = store => next => action => {
    console.log('Action : ', action);
    next(action)
}