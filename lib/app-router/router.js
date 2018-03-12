/**
 *****************************************
 * Created by lifx
 * Created on 2018-03-12 22:38:08
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
 * 创建路由模型
 *****************************************
 */
const model = { matched: null, curr: null };


/**
 *****************************************
 * 匹配路由状态
 *****************************************
 */
export function matchState(context, pathname, callback) {
    let url = history.pathname,
        path = resolve(context, pathname || '__404__'),
        state;

    // 过滤【404】以下的路由
    if (context.endsWith('/__404__')) {
        return { url, path, mathced: false, isExact: false };
    }

    // 处理【404】路由
    if (!pathname) {
        let matched = context === '/' || url.startsWith(context + '/');

        // 处理匹配信息
        if (matched) {
            let level = path.length;

            // 更新匹配路由
            if (!model.matched || model.matched.level < level) {
                model.matched = { path, level, callback };
            }
        }

        // 返回匹配结果
        return { url, path, matched, isExact: false };
    }

    // 获取匹配状态
    state = match(url, path);

    // 更新匹配信息
    if (state.isExact) {
        model.matched = { path, level: Infinity, callback };
    }

    // 返回状态
    return state;
}
