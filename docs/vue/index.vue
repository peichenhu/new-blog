<template>
    <div class="list">
        <h2>TestForNull.vue</h2>
        <TestForNull />
        <h2>TreeFlatToTab</h2>
        <button @click="count = count + 1">count ++</button>
        <p>{{ count }}</p>
        <TreeFlatToTab :nodeTreeList="tabTree" @change="change" :count="count" :activeNodeValueList="[1, 1]">
            <!-- <template v-slot:title="{ list, index }">
                <div class="title" :key="index" v-if="list.length && list[0]['category']">${{ list[0]['category'] }}：</div>
            </template>
            <template v-slot:node="{ node, active }">
                <div class="node" :class="{ active }">${{ node.text }}</div>
            </template> -->
        </TreeFlatToTab>
    </div>
</template>

<script>
import { tabTree } from './const';
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
import TestForNull from './components/TestForNull.vue';
import TreeFlatToTab from './components/TreeFlatToTab.vue';
export default {
    components: {
        VueJsonPretty,
        TestForNull,
        TreeFlatToTab,
    },
    data() {
        return {
            count: 0,
            tabTree,
        };
    },
    methods: {
        change(data) {
            console.log('onchange', data);
        },
    },
};
</script>

<style lang="less" scoped>
.node {
    height: 30px;
    line-height: 28px;
    padding: 0 16px;
    font-size: 14px;
    border: 1px solid #ccc;
    margin: 8px;
    min-width: 120px;
    text-align: center;
    &.active {
        background: #b8dfd8;
    }
}
/* style */
</style>
