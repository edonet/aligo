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
import Route, { mount, unmount } from './router';
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

        // 定义属性
        this.$$parent = null;
        this.$$route = new Route();
        this.$$history = new History(props.path);
        this.$$mounted = false;
    }

    /* 渲染组件 */
    render() {

        // 创建路由
        this.resolveRoutePath();

        // 渲染元素
        return this.props.render(this.$$history);
    }

    /* 挂载完成 */
    componentDidMount() {
        this.$$parent || mount(this.$$route);
        this.$$mounted = true;
    }

    /* 即将卸载 */
    componentWillUnmount() {
        this.$$parent || unmount(this.$$route);
        this.$$mounted = false;
    }

    /* 创建路由 */
    resolveRoutePath() {

        // 挂载路由
        if (!this.$$mounted) {
            let fiber = this._reactInternalFiber.return;

            while (fiber) {

                // 判断是否匹配到路由
                if (fiber.type && fiber.type.displayName === 'AppRouter') {
                    this.$$parent = fiber.stateNode;
                    this.$$history.context = this.$$parent.$$history.path;
                    this.$$history.path = this.$$history.resolve(this.props.path || '__404__');
                    break;
                }

                // 查找上一级
                fiber = fiber.return;
            }
        }

        // 更新路径
        if (this.$$parent) {
            this.$$history.context = this.$$parent.$$history.path;
            this.$$history.path = this.$$history.resolve(this.props.path || '__404__');
        }
    }
}
