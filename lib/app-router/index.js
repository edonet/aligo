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
import { Component } from 'react';
import { resolve } from 'ailo/lib/path';
import History from './history';


/**
 *****************************************
 * 路由组件
 *****************************************
 */
export default class AppRouter extends Component {

    /* 初始化组件 */
    constructor(props, ...args) {
        super(props, ...args);

        // 定义状态
        this.$$context = '/';
        this.$$path = '/';
    }

    /* 渲染组件 */
    render() {

        // 创建路由
        this.resolveRoutePath();

        // 渲染元素
        return this.props.render(new History(this.$$path, this.$$context));
    }

    /* 创建路由 */
    resolveRoutePath() {
        let fiber = this._reactInternalFiber.return;

        while (fiber) {

            // 判断是否匹配到路由
            if (fiber.type && fiber.type.displayName === 'AppRouter') {
                this.$$context = fiber.stateNode.$$path;
                this.$$path = resolve(this.$$context, this.props.path || './__404__');
                break;
            }

            // 查找上一级
            fiber = fiber.return;
        }
    }
}
