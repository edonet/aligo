#!/usr/bin/env node

/**
 *****************************************
 * Created by lifx
 * Created on 2017-11-04 11:07:47
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 执行命令
 *****************************************
 */
switch (process.argv[2]) {
    case '--dist':
    case '--prod':
        require('../scripts/dist');
        break;
    case '--test':
        require('../scripts/test');
        break;
    default:
        require('../scripts/start');
        break;
}
