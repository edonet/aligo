/**
 *****************************************
 * Created by lifx
 * Created on 2018-03-09 17:25:09
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
import mount, { unmount } from 'ailo/lib/mount';
import style from './style';
import AppContainer from './app-container';
import AppView from './app-view';


/**
 *****************************************
 * 抛出接口
 *****************************************
 */
export default mount;
export { unmount, style };
export { AppContainer, AppView };
