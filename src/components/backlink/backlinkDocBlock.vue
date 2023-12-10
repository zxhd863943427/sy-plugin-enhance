<template>
  <div :class="displayMap[blockID] === 'display' ? '': ''">
    <div
        ref="renderRef"
        @mouseleave="onMouseLeave"
        @click="renderProtyle"
        :style="{
        height: docBacklinkFoldStatus ? '0px' : 'max-content',
        overflow: 'hidden',
        }"
    >
      <div class="protyle">
        <div class="protyle-content">
          <div class="protyle-wysiwyg protyle-wysiwyg--attr">
            <div ref="preBreadcrumb">

            </div>
            <div ref="preRenderRef">

            </div>
          </div>
        </div>
      </div>

    </div>
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
const preRenderRef = ref()
const preBreadcrumb = ref()
let blockID = ref()
let render = false
const onMouseLeave = (event) => {
  hideGutterOnTarget(event.target)
}
const plugin = usePlugin()
let blockPaths:any[] = props.blockBacklinkData.blockPaths
let length = blockPaths.length
console.log(111111)
blockID.value = blockPaths[length-1].id
console.log(props.blockBacklinkData)
const renderProtyle = ()=>{
  if (render){
    return
  }
  console.log("render")
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
  );
  ((renderRef.value as HTMLElement).querySelector('.protyle-wysiwyg.protyle-wysiwyg--attr div.protyle-breadcrumb__item[contenteditable="false"]') as HTMLElement)?.click()
  render = true
}

const getIconByType = (type: string, sub?: string) => {
    let iconName = "";
    switch (type) {
        case "NodeDocument":
            iconName = "iconFile";
            break;
        case "NodeThematicBreak":
            iconName = "iconLine";
            break;
        case "NodeParagraph":
            iconName = "iconParagraph";
            break;
        case "NodeHeading":
            if (sub) {
                iconName = "icon" + sub.toUpperCase();
            } else {
                iconName = "iconHeadings";
            }
            break;
        case "NodeBlockquote":
            iconName = "iconQuote";
            break;
        case "NodeList":
            if (sub === "t") {
                iconName = "iconCheck";
            } else if (sub === "o") {
                iconName = "iconOrderedList";
            } else {
                iconName = "iconList";
            }
            break;
        case "NodeListItem":
            iconName = "iconListItem";
            break;
        case "NodeCodeBlock":
        case "NodeYamlFrontMatter":
            iconName = "iconCode";
            break;
        case "NodeTable":
            iconName = "iconTable";
            break;
        case "NodeBlockQueryEmbed":
            iconName = "iconSQL";
            break;
        case "NodeSuperBlock":
            iconName = "iconSuper";
            break;
        case "NodeMathBlock":
            iconName = "iconMath";
            break;
        case "NodeHTMLBlock":
            iconName = "iconHTML5";
            break;
        case "NodeWidget":
            iconName = "iconBoth";
            break;
        case "NodeIFrame":
            iconName = "iconLanguage";
            break;
        case "NodeVideo":
            iconName = "iconVideo";
            break;
        case "NodeAudio":
            iconName = "iconRecord";
            break;
        case "NodeAttributeView":
            iconName = "iconDatabase";
            break;
    }
    return iconName;
};

const genBreadcrumb = (blockPaths: IBreadcrumb[], renderFirst = false) => {
    let html = "";
    blockPaths.forEach((item, index) => {
        if (index === 0 && !renderFirst) {
            return;
        }
        html += `<span class="protyle-breadcrumb__item${index === blockPaths.length - 1 ? " protyle-breadcrumb__item--active" : ""}" data-id="${item.id}">
    <svg class="popover__block" data-id="${item.id}"><use xlink:href="#${getIconByType(item.type, item.subType)}"></use></svg>
    <span class="protyle-breadcrumb__text" title="${item.name}">${item.name}</span>
</span>`;
        if (index !== blockPaths.length - 1) {
            html += '<svg class="protyle-breadcrumb__arrow"><use xlink:href="#iconRight"></use></svg>';
        }
    });
    return `<div contenteditable="false" style="margin-bottom: 8px" class="protyle-breadcrumb__bar protyle-breadcrumb__bar--nowrap">${html}</div>`;
};


onMounted(() => {
  preBreadcrumb.value.innerHTML = genBreadcrumb(props.blockBacklinkData.blockPaths)
  preRenderRef.value.innerHTML = props.blockBacklinkData.dom
  let unFoldNodeList = (preRenderRef.value as HTMLElement).querySelectorAll(`[data-subtype="u"]>[data-subtype="u"]>[fold='0']`)
  for (let node of unFoldNodeList){
    node.setAttribute('fold','1')
  }
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