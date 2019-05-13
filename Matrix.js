

/**
 * n*n中一个item的高度
 */
const itemHeight = 100
/**
 * n*n中一个item的高度
 */
const itemWidth = 100
/**
 * n*n列
 */
const columns = 4;

/**
 * positions = [1,10]
 * 1: n*n中第一个item的下标,也是起始下标
 * 10: n*n中第10个item下标,也是结束下标
 * @param {*} positions 
 */
export const getPositionAndSize = (positions = [4, 9]) => {

    /**
     * 获取起始item下标
     */
    const startIndex = positions.shift() || 0;
    /**
     * 获取结束item下标
     */
    const endIndex = positions.pop() || startIndex;
    /**
     * 起始item坐标取余得到x坐标 4%4 取余 = 0
     */
    const startItem_x = startIndex % columns;
    /**
     * 起始坐标取商得到y坐标  4%4 取商 = 1,那么这个item在4*4矩阵中的下标位置是{x:0,y:1} 也就是第二排中第一个位置
     */
    const startItem_y = Math.floor(startIndex / columns);
    /**
     * 得到起始item位置的x轴位置 x = x * itemWidth 得 0
     */
    const x = startItem_x * itemWidth;//一个item的x轴位置
    /**
     * 得到起始item位置的x轴位置 y= y * itemHeight 得 100
     */
    const y = startItem_y * itemHeight;
    /**
     * 结束item坐标取余得到x坐标 9%4 取余 = 1
     */
    const endItem_x = endIndex % columns;
    /**
     * 结束Item坐标取商得到y坐标  9%4 取商 = 2,那么这个item在4*4矩阵中的下标位置是{x:1,y:2} 也就是第三排中第二个位置
     */
    const endItem_y = Math.floor(endIndex / columns);
    /**
     * 加1是取这个itme的下一个边界 把当前itme包含进去
     */
    const endNext_x = endItem_x + 1;
    const endNext_y = endItem_y + 1;

    /**
     * 算出高度宽度{x:1+1,y:2+1} - {x:0,y:1} x-x,y-y
     */
    const width = (endNext_x - startItem_x) * itemWidth;
    const height = (endNext_y - startItem_y) * itemHeight;
    /**
     * {x: 0, y: 100, width: 200, height: 200}
     */
    return { x: x, y: y, width: width, height: height };
}

