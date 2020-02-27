/**
 * 异步暂停
 * @param  {number} timeOut 暂停时间
 */
export const sleep = (timeOut: number) =>
  new Promise(resolve => setTimeout(resolve, timeOut))

/**
 * 获取范围内随机数
 * @param  {number} min 最小值
 * @param  {number} max 最大值
 */
export const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min
