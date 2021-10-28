const cloneDeep = data => JSON.parse(JSON.stringify(data));
const tabTreeNode = {
    children: [],
    text: '标题',
    value: 1,
    category: '类别',
};
const loop = (deep = 3, preDeepCount = 5, list = []) => {
    for (let i = 0; i < preDeepCount; i++) {
        tabTreeNode.text = `第 ${deep} 层 第 ${i} 个`;
        tabTreeNode.value = i + 1;
        tabTreeNode.category = `第 ${deep} 层节点的标题`;
        const item = cloneDeep(tabTreeNode);
        list.push(item);
        const ignore = deep === 2 && i === 3;
        if (deep > 0 && !ignore) {
            loop(deep - 1, preDeepCount, item.children);
        }
    }
    return list;
};
const list = loop();
console.log(list);
export const tabTree = list;
