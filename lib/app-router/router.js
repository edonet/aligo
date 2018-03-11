/**
 *****************************************
 * Created by lifx
 * Created on 2018-03-11 12:30:14
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 定义路由模型
 *****************************************
 */
const model = {
    uuid: 0, root: new Map(), router: new Map()
};


/**
 *****************************************
 * 路由对象
 *****************************************
 */
export default class Route {

    /* 初始化路由 */
    constructor() {

        // 定义属性
        this.$$id = model.uuid ++;
        this.$$parent = null;
        this.$$children = [];

        // 定义状态
        this.matched = false;
        this.isExact = false;
        this.isMounted = false;

        // 添加路由
        model.router.set(this.$$id, this);
    }

    /* 匹配路由 */
    match(history) {
        console.log(history);
    }

    /* 挂载路由 */
    mount(route) {

        // 更新状态
        this.$$parent = route;
        this.isMounted = true;

        // 添加节点
        route.$$children.push(this);
    }

    /* 卸载路由 */
    unmount() {
        let list = this.$$parent.$$children,
            idx = list.length;

        // 移除节点
        while (idx --) {
            if (list[idx] === this) {
                list.splice(idx, 1);
                break;
            }
        }

        // 清空父级
        this.$$parent = null;
    }

    /* 销毁路由 */
    destroy() {
        model.router.delete(this.$$id);
    }
}


/**
 *****************************************
 * 挂载路由
 *****************************************
 */
export function mount(route) {
    return model.root.set(route);
}


/**
 *****************************************
 * 卸载路由
 *****************************************
 */
export function unmount(route) {
    return model.root.delete(route);
}
