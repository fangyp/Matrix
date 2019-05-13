
const itemHeight = 100

const itemWidth = 100

const columns = 4;

export const getPositionAndSize = (positions = [4, 9]) => {

    const startIndex = positions.shift() || 0;

    const endIndex = positions.pop() || startIndex;

    const startItem_x = startIndex % columns;

    const startItem_y = Math.floor(startIndex / columns);

    const x = startItem_x * itemWidth;//一个item的x轴位置

    const y = startItem_y * itemHeight;

    const endItem_x = endIndex % columns;

    const endItem_y = Math.floor(endIndex / columns);

    const endNext_x = endItem_x + 1;
    const endNext_y = endItem_y + 1;

    const width = (endNext_x - startItem_x) * itemWidth;
    const height = (endNext_y - startItem_y) * itemHeight;
    
    return { x: x, y: y, width: width, height: height };
}
