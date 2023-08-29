<template>
  <tm-app>
    <tm-spin :load="load" tip="加载中" style="min-height: 200rpx">
      <tm-sheet :margin="[0, 0]" :padding="[0, 0]">
        <!-- <tm-image src="https://picsum.photos/620/150" :width="636" :height="150"></tm-image> -->
        <iframe v-if="currentUrl" id="iframe" :src="'https://dm.xbqgx.com?url=' + currentUrl"
          style="border: none; min-height: 400rpx" frameborder="0" scrolling="no"></iframe>
      </tm-sheet>
    </tm-spin>
    <tm-sheet v-if="!load" :margin="[0, 0, 0, 0]">
      <tm-text :font-size="24" _class="text-weight-b" :label="title"></tm-text>
      <tm-divider :border="0" :margin="[6, 6]"></tm-divider>
      <view class="flex flex-row flex-wrap">
        <view v-for="(item, index) in data" :key="index">
          <tm-button :color="item.selected ? 'blue' : 'pink'" :margin="[10]" :shadow="0" size="small" :label="item.id"
            @click="selected(item)">
          </tm-button>
        </view>
      </view>
    </tm-sheet>

  </tm-app>
</template>
<script lang="ts" setup>
import { ref, getCurrentInstance, onMounted } from "vue";
import { onShow, onLoad } from "@dcloudio/uni-app";
import tmApp from "@/tmui/components/tm-app/tm-app.vue";
import tmSheet from "@/tmui/components/tm-sheet/tm-sheet.vue";
import tmSpin from "@/tmui/components/tm-spin/tm-spin.vue";
import tmButton from "../../tmui/components/tm-button/tm-button.vue";
import tmDivider from "../../tmui/components/tm-divider/tm-divider.vue";

const { proxy } = getCurrentInstance();
const load = ref(true);
const title = ref('');
const currentUrl = ref();
const data = ref([] as any);

onLoad((opt: any) => {
  getInfo(opt)
})

const getInfo = (opt: any) => {
  uni.$tm.fetch
    .get("http:/114.55.175.146/api1/api.php?out=json&flag=" + opt.flag + "&id=" + opt.id)
    .then((res: any) => {
      if (res.data?.success) {
        title.value = res.data.title;
        currentUrl.value = res.data.url;
        data.value = res.data?.info[0]?.video.map((item: any) => { return { id: item.split('$')[0], url: item.split('$')[1], selected: false } });
        data.value[0].selected = true;
        load.value = false;
      }
    }).catch((res: any) => {
      uni.showToast({
        title: '查询失败，请稍后再试！',
        icon: 'none',
        mask: true,
        duration: 1000,
      });
    });
}

const selected = (item: any) => {
  if (currentUrl.value != item.url) {
    data.value.forEach((d: any) => d.selected = false);
    item.selected = true;
    currentUrl.value = item.url;
    load.value = true;
    setTimeout(() => {
      load.value = false;
    }, 1000);
  }
}

</script>
<style lang="scss" scoped></style>
