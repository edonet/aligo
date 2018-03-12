/**
 *****************************************
 * Created by lifx
 * Created on 2018-03-12 20:00:49
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
 * 创建历史对象上下文
 *****************************************
 */
const AppHistoryContext = createContext({ history });


/**
 *****************************************
 * 历史对象组件
 *****************************************
 */
export default AppHistoryContext.Consumer;


/**
 *****************************************
 * 历史对象监听组件
 *****************************************
 */
export class AppHistoryProvider extends Component {

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
    }

    /* 卸载前处理 */
    componentWillUnmount() {
        this.$$unsubscribe();
        this.$$unsubscribe = null;
    }
}
