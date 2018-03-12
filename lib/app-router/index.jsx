/**
 *****************************************
 * Created by lifx
 * Created on 2018-03-12 22:18:08
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
import React, { Component, createContext } from 'react';
import history from '../history';


/**
 *****************************************
 * 创建上下文
 *****************************************
 */
export const AppHistoryContext = createContext({ history });


/**
 *****************************************
 * 路由器组件
 *****************************************
 */
export default class AppRouter extends Component {

    /* 更新前处理 */
    componentWillUpdate() {
        console.log('willUpdate');
    }

    /* 渲染组件 */
    render() {
        return (
            <AppHistoryContext.Provider value={{ history }}>
                { this.props.children }
            </AppHistoryContext.Provider>
        );
    }

    /* 挂载完成后处理 */
    componentDidMount() {
        this.$$unsubscribe = history.subscribe(() => this.forceUpdate());
        this.componentDidUpdate();
    }

    /* 更新完成后处理 */
    componentDidUpdate() {
        console.log('didUpdate');
    }

    /* 卸载前处理 */
    componentWillUnmount() {
        this.$$unsubscribe();
        this.$$unsubscribe = null;
    }
}
