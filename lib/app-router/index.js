/**
 *****************************************
 * Created by lifx
 * Created on 2018-03-10 18:59:33
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
import React, { Component, createContext } from 'react';
import { resolve } from 'ailo/lib/path';
import AppHistory from '../app-history';


/**
 *****************************************
 * 定义路由上下文
 *****************************************
 */
const AppRouterContext = createContext({ path: '/' });


/**
 *****************************************
 * 路由组件
 *****************************************
 */
export default class AppRouter extends Component {

    /* 初始化组件 */
    constructor(props, ...args) {
        super(props, ...args);

        // 绑定回调
        this.createHistory = this.createHistory.bind(this);
    }

    /* 渲染组件 */
    render() {

        // 渲染元素
        return (
            <AppHistory>{ this.createHistory }</AppHistory>
        );
    }

    /* 创建历史对象 */
    createHistory({ history }) {
        return (
            <AppRouterContext.Consumer>
                { this.createRoute(history) }
            </AppRouterContext.Consumer>
        );
    }

    /* 创建路由 */
    createRoute(history) {
        return ({ path: context }) => {
            let path = resolve(context, this.props.path || '__404__');

            // 渲染对象
            return (
                <AppRouterContext.Provider value={{ path }}>
                    { this.props.render({ context, path, history }) }
                </AppRouterContext.Provider>
            );
        };
    }
}
