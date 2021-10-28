<template>
    <div class="tab-tree">
        <!-- 节点对象组的列表 -->
        <div class="row" :class="['row-' + innerListIdx]" v-for="(innerList, innerListIdx) in activeNodeList" :key="innerListIdx">
            <!-- 节点对象组 -->
            <slot name="title" :list="innerList" :index="innerListIdx">
                <div class="inner-title" v-if="innerList.length && categoryKeyName && innerList[0][categoryKeyName]">
                    <!-- 备用内容 -->
                    {{ innerList[0][categoryKeyName] }}：
                </div>
            </slot>
            <div class="inner-list">
                <div
                    class="itemBox"
                    :class="['item-' + nodeIdx]"
                    v-for="(node, nodeIdx) in innerList"
                    :key="nodeIdx"
                    @click="onclickItem(node, nodeIdx, innerListIdx)"
                >
                    <!-- 节点对象 -->
                    <slot name="item" :item="node" :active="activeNodeValueList[innerListIdx] === node.value">
                        <!-- 备用内容 -->
                        <div class="default-item" :class="{ active: activeNodeValueList[innerListIdx] === node.value }">
                            {{ node[labelKeyName] }}
                        </div>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
interface t_node {
    children: any;
    text: string;
    value: number;
    latency: string;
    count: number;
}
import { onMounted, ref, toRefs, watch } from 'vue';
export default {
    name: 'tab-tree',
    components: {},
    props: {
        // 树形结构数据
        nodeTreeList: {
            type: Array,
            default: () => [],
        },
        // 父子节点继承关系字段名称
        extendKeyName: {
            type: String,
            default: 'children',
        },
        // 节点数值字段名称
        valueKeyName: {
            type: String,
            default: 'value',
        },
        // 节点标题字段名称
        labelKeyName: {
            type: String,
            default: 'text',
        },
        // 节点所属类别字段名称
        categoryKeyName: {
            type: String,
            default: 'category',
        },
        activeNodeValueList: {
            type: Array,
            default: () => [],
        },
        isLog: [Boolean, String, Number],
    },
    emits: ['change'],
    setup(props: any, ctx) {
        const { extendKeyName, valueKeyName, nodeTreeList, categoryKeyName, labelKeyName, isLog } = toRefs(props);
        // 当前激活的节点列表的列表
        const activeNodeList = ref([]);
        // 当前激活的节点列表的值的列表
        const activeNodeValueList = ref([]);
        // 执行初始化
        const init = () => {
            // 初始化第一层的激活的节点列表的列表
            const level_1 = nodeTreeList.value;
            activeNodeList.value[0] = level_1;
            // 先对齐位置
            activeNodeValueList.value = activeNodeValueList.value.slice(0, 0);
            activeNodeList.value = activeNodeList.value.slice(0, 1);
            // 数据回填
            for (let [index, value] of Object.entries(props.activeNodeValueList)) {
                const itemIdx = activeNodeList.value[+index]?.findIndex(item => item.value === value);
                const item = activeNodeList.value[+index][itemIdx];
                if (item) {
                    onclickItem(item, itemIdx, +index);
                } else {
                    break;
                }
            }
        };
        // 监听节点点击(节点，节点的序号，节点的层级)
        const onclickItem = (node: t_node, nodeIdx: number, nodeListIdx: number) => {
            !!isLog.value && window.console.log(`激活：第${nodeListIdx}层 第${nodeIdx}个`, node);
            // 先对齐位置
            activeNodeValueList.value = activeNodeValueList.value.slice(0, nodeListIdx + 1);
            activeNodeList.value = activeNodeList.value.slice(0, nodeListIdx + 1);
            // 记录数据
            activeNodeValueList.value[nodeListIdx] = node[valueKeyName.value];
            // 处理数据
            if (node?.children?.length) {
                // 非末端
                activeNodeList.value[nodeListIdx + 1] = node[extendKeyName.value];
            } else {
                // 末端，执行钩子函数并传递数据
                ctx.emit('change', {
                    node, // 节点
                    nodeIdx, // 节点的序号
                    nodeListIdx, // 节点的层级
                    activeNodeValueList: activeNodeValueList.value, // 激活节点的值列表
                    activeNodeList: activeNodeList.value, // 激活层级的列表
                });
            }
        };
        // 监听组件挂载
        onMounted(init);
        watch(() => props.activeNodeValueList, init);
        return {
            labelKeyName,
            categoryKeyName,
            onclickItem,
            activeNodeList,
            activeNodeValueList,
            extendKeyName,
            valueKeyName,
        };
    },
};
</script>

<style lang="less" scoped>
.row {
    display: flex;
    flex-flow: row nowrap;
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid #eee;
    * {
        box-sizing: border-box;
    }
    .inner-title {
        height: 30px;
        line-height: 30px;
        margin: 8px;
        flex: 0 0 auto;
        min-width: 80px;
    }
    .inner-list {
        display: flex;
        flex-flow: row wrap;
    }
    .default-item {
        height: 30px;
        line-height: 28px;
        padding: 0 16px;
        font-size: 14px;
        border: 1px solid #ccc;
        margin: 8px;
        min-width: 120px;
        text-align: center;
        &:hover {
            cursor: pointer;
        }
        &.active {
            background: #b8dfd8;
        }
    }
}
</style>
