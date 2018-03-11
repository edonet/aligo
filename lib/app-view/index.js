/**
 *****************************************
 * Created by lifx
 * Created on 2018-03-10 18:24:09
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { appendChild, removeChild } from '../app-content';
import AppRouter from '../app-router';


/**
 *****************************************
 * 视图组件
 *****************************************
 */
export default class AppView extends Component {

    /* 初始化组件 */
    constructor(props, ...args) {
        super(props, ...args);

        // 创建元素
        this.$$container = document.createElement('section');
        this.$$container.className = 'app-view abs box';

        // 绑定回调
        this.renderElement = this.renderElement.bind(this);

        // 加载元素
        appendChild(this.$$container);
    }

    /* 渲染视图 */
    render() {
        return createPortal(
            <AppRouter path={ this.props.path } render={ this.renderElement } />,
            this.$$container
        );
    }

    /* 渲染元素 */
    renderElement(history) {
        console.log(history);
        return this.props.children;
    }

    /* 即将卸载组件 */
    componentWillUnmount() {
        removeChild(this.$$container);
    }
}
