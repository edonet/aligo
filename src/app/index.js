/**
 *****************************************
 * Created by lifx
 * Created on 2018-03-10 18:00:40
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
import React from 'react';
import { AppView } from 'aligo';


/**
 *****************************************
 * 【App】组件
 *****************************************
 */
export default function App() {
    return (
        <AppView path="user">
            <AppView path="about">app@!@!</AppView>
        </AppView>
    );
}
