/**
 *****************************************
 * Created by lifx
 * Created on 2018-03-10 22:28:21
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
import { resolve, match } from 'ailo/lib/path';
import history from '../history';


/**
 *****************************************
 * 创建历史对象
 *****************************************
 */
export default class History {

    /* 初始化历史对象 */
    constructor(path = '/', context = '/') {
        this.context = context;
        this.path = this.resolve(path);
    }

    /* 获取【url】路由 */
    get url() {
        return history.pathname;
    }

    /* 获取切换方式 */
    get method() {
        return history.method;
    }

    /* 获取历史记录 */
    get histories() {
        return history.histories;
    }

    /* 获取历史记录长度 */
    get length() {
        return history.length;
    }

    /* 解析路径 */
    resolve(path) {
        return resolve(this.context, path);
    }

    /* 匹配路由 */
    match(path) {
        return match(this.context, path);
    }

    /* 跳转到路由 */
    go(path, state) {
        return history.go(this.resolve(path), state);
    }

    /* 替换到路由 */
    replace(path, state) {
        return history.replace(this.resolve(path), state);
    }

    /* 返回路由 */
    goBack(path, state) {

        // 返回到指定路由
        if (typeof path === 'string') {
            return history.goBack(this.resolve(path), state);
        }

        // 返回步数
        return history.goBack(path, state);
    }

    /* 监听路由变化 */
    subscribe(callback) {
        return history.subscribe(callback);
    }
}
