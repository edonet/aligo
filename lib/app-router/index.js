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
import AppRouter, { AppHistoryContext } from './index.jsx';
import { matchState } from './router';


/**
 *****************************************
 * 定义路由上下文
 *****************************************
 */
const AppRouteContext = createContext({ path: '/' });


/**
 *****************************************
 * 路由组件
 *****************************************
 */
export default class AppRoute extends Component {

    /* 初始化组件 */
    constructor(props, ...args) {
        super(props, ...args);

        // 绑定回调
        this.handleHistoryContext = this.handleHistoryContext.bind(this);
    }

    /* 渲染组件 */
    render() {

        // 渲染元素
        return (
            <AppHistoryContext.Consumer>
                { this.handleHistoryContext }
            </AppHistoryContext.Consumer>
        );
    }

    /* 创建历史对象 */
    handleHistoryContext({ history }) {
        return (
            <AppRouteContext.Consumer>
                { this.handleRouteContext(history) }
            </AppRouteContext.Consumer>
        );
    }

    /* 创建路由 */
    handleRouteContext(history) {
        return ({ path: context }) => {
            let { path, onTransition } = this.props,
                state = matchState(context, path, onTransition);

            // 渲染对象
            return (
                <AppRouteContext.Provider value={{ path: state.path }}>
                    { this.props.render({ state, history }) }
                </AppRouteContext.Provider>
            );
        };
    }
}


/**
 *****************************************
 * 抛出接口
 *****************************************
 */
export { AppRouter };
