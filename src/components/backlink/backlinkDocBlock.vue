<template>
  <div :class="displayMap[blockID] === 'display' ? '': ''">
    <div
        ref="renderRef"
        @mouseleave="onMouseLeave"
        :style="{
        height: docBacklinkFoldStatus ? '0px' : 'max-content',
        overflow: 'hidden',
        }"
    ></div>
  </div>

</template>

<script setup lang="ts">
import { hideGutterOnTarget } from '@/utils/DOM';
import { Protyle } from 'siyuan';
import { usePlugin } from '@/main';
import { ref, onMounted } from 'vue';
const props = defineProps({
  blockBacklinkData: Object,
  displayMap: Object,
  docBacklinkFoldStatus:Boolean,
  currentDocId:String
})
const renderRef = ref()
let blockID = ref()
const onMouseLeave = (event) => {
  hideGutterOnTarget(event.target)
}
const plugin = usePlugin()
let blockPaths:any[] = props.blockBacklinkData.blockPaths
let length = blockPaths.length
console.log(111111)
blockID.value = blockPaths[length-1].id
console.log(props.blockBacklinkData)
onMounted(() => {
  new Protyle(
    plugin.app,
    renderRef.value,
    {
      blockId: props.currentDocId,
      backlinkData: [props.blockBacklinkData],
      render: {
        background: false,
        title: false,
        gutter: true,
        scroll: false,
        breadcrumb: false,
      }
    }
  )
})

</script>

<style scoped lang="scss">
.protyle {
  background: unset;
  min-height: unset;

  :deep(.protyle-wysiwyg) {
    padding: 0px 36px;

    .protyle-breadcrumb__bar {
      min-height: unset;
      margin-bottom: unset !important;
      flex-wrap: wrap;

      .protyle-breadcrumb__item:only-child {
        display: none;
      }
      .protyle-breadcrumb__item.protyle-breadcrumb__item--active {
        // display: none;

        .protyle-breadcrumb__text {
          display: none;
        }

        & ~ .protyle-breadcrumb__item .protyle-breadcrumb__text{
          display: none;
        }
      }
    }

    .protyle-breadcrumb__bar:not(:first-child) {
      border-top: 1px solid var(--v-border-color);
    }
    .img:not([style]) {
      display: inline-block;
    }
  }
}
</style>