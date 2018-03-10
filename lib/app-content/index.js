/**
 *****************************************
 * Created by lifx
 * Created on 2018-03-10 18:17:01
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 创建对象
 *****************************************
 */
const el = document.createElement('article');


/**
 *****************************************
 * 设置样式
 *****************************************
 */
el.className = 'abs box';


/**
 *****************************************
 * 挂载对象
 *****************************************
 */
export default function mount(target) {
    target ? target.appendChild(el) : el.parentNode.removeChild(el);
}


/**
 *****************************************
 * 加载子节点
 *****************************************
 */
export function appendChild(child) {
    return el.appendChild(child);
}


/**
 *****************************************
 *
 * 移除子节点
 *****************************************
 */
export function removeChild(child) {
    return el.removeChild(child);
}
