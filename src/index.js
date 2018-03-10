/**
 *****************************************
 * Created by lifx
 * Created on 2018-03-09 17:27:46
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
import React from 'react';
import render, { AppContainer } from 'aligo';
import App from './app';


/**
 *****************************************
 * 加载文件
 *****************************************
 */
render((
    <AppContainer><App /></AppContainer>
), 'app');


/**
 *****************************************
 * 启用热更新
 *****************************************
 */
if (module.hot) {

    // 接收模块更新
    module.hot.accept(['aligo', './app'], () => {
        let app = require('./app');

        // 渲染组件
        render((
            <AppContainer><app.default /></AppContainer>
        ), 'app');
    });
}
