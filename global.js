/**
 * Created by alex on 2017/6/22.
 */
import * as config from 'SunflowerConfig'

// 系统配置用户
export const sysAdminUserName = 'configadmin';
export const superAdminName = 'superadmin';

// 系统配置用户菜单
export const sysAdminMenus = [{
  class: 'icon-nav-system-set',
  title: '配置中心',
  to: '/ConfigCenter',
  keyWord: 'configCenter',
  icon: 'nav-config-center',
  msg: '节点配置、节点管理'
}];

/**
 * 获取配置变量
 * @param item
 */
export function getConfig(item) {
  return config[item] || '';
};
