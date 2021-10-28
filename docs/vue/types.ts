import { Ref, ToRefs, UnwrapRef } from 'vue'

export interface t_treeNode {
    children: any;
    text: string;
    value: number;
    latency: string;
    count: number;
}

export interface t_TabtreeProps {
    // 多维数组的树形结构数据
    tabTree: t_treeNode[]
    // 层级的标题
    levelTitleList: string[];
    // 继承关系索引键名
    extendKeyName: string;
    // 数据值索引键名
    valueKeyName: string;
    // 数据值索引键名
    labelKeyName: string;
}
