/**
 *****************************************
 * Created by lifx
 * Created on 2018-03-09 17:30:45
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
import React from 'react';
import { AppContainer as AppHotContainer } from 'react-hot-loader';
import mount from '../app-content';
import { AppRouter } from '../app-router';
import AppView from '../app-view';


/**
 *****************************************
 * 容器组件
 *****************************************
 */
export default function AppContainer({ children, ...props }) {
    return (
        <AppHotContainer>
            <div className="abs box" ref={ mount }>
                <AppRouter>
                    <AppView path="/" { ...props }>{ children }</AppView>
                </AppRouter>
            </div>
        </AppHotContainer>
    );
}
