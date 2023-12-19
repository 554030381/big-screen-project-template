<template>
  <div class='app'>
    <dashboard class='dashboard'></dashboard>
    <div class='content'>
      <component v-for='(item,idx) in modules' :is='item.component' class='content-bg'
                 :key='idx'></component>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import Dashboard from '@/views/dashboard/index.vue'

// 除了dashboard以外的组件自动导入
const Modules = import.meta.glob('@/views/*/index.vue')
const modules = []
Object.keys(Modules).map(key => {
  if (key !== '/src/views/dashboard/index.vue') {
    let tmp = key.split('/src/views/')[1]
    const dictName = tmp.split('/')[0]
    const component = defineAsyncComponent(Modules[key])
    modules.push({
      name: dictName,
      component
    })
  }
})
// console.log(modules)
</script>

<style lang='scss' scoped>
//顶部
$dashboardHeight: 10%;
$dashboardWidth: 100%;

//grid布局
//卡片中间间隔
$cardGapVertical: 1%;
$cardGapHorizontal: 2%;
//grid布局列数行数 6x8
$gridColumns: 8;
$gridRows: 6;

.app {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  margin: 0 !important;
  padding: 0 !important;
  background: url('/assets/bg.png') no-repeat center;

  .dashboard {
    height: $dashboardHeight;
    width: $dashboardWidth;
  }

  .content {
    height: 100% - $dashboardHeight - $cardGapHorizontal;
    width: 100% - $cardGapVertical * 2;
    margin: auto;
    display: grid;
    grid-template-columns: repeat($gridColumns, calc((100% - $cardGapVertical * ($gridColumns - 1)) / $gridColumns));
    grid-template-rows: repeat($gridRows, calc((100% - $cardGapHorizontal * ($gridRows - 1)) / $gridRows));
    grid-row-gap: $cardGapHorizontal;
    grid-column-gap: $cardGapVertical;

    &-bg {
      background: url('/assets/panel.png') no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
