const UA = window.navigator.userAgent;

export const isiOS = /iPhone/i.test(UA);

export const isAndroid = /android/i.test(UA);

// 添加URL参数检测
export const forceMobile = new URLSearchParams(window.location.search).get('view') === 'mobile';

// 修改isMobile判断，增加forceMobile条件
export const isMobile = isiOS || isAndroid || forceMobile;