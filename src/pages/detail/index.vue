<template>
  <tm-app>
    <tm-spin :load="load" tip="加载中" style="min-height: 200rpx">
      <tm-sheet :margin="[0, 0]" :padding="[0, 0]">
        <!-- <tm-image src="https://picsum.photos/620/150" :width="636" :height="150"></tm-image> -->
        <iframe v-if="currentUrl.param" id="iframe" :src="currentUrl.url + currentUrl.param" style="border: none" frameborder="0"
          scrolling="no"></iframe>
      </tm-sheet>
      <tm-sheet :margin="[0, 0, 0, 0]">
        <tm-text :font-size="24" _class="text-weight-b" :label="title"></tm-text>
        <tm-divider :border="0" :margin="[6, 6]"></tm-divider>
        <view class="flex flex-row flex-wrap">
          <view v-for="item in data" :key="item.id">
            <tm-button :color="item.selected ? 'blue' : 'pink'" :margin="[10]" :shadow="0" size="small" :label="item.id"
              @click="selected(item)">
            </tm-button>
          </view>
        </view>
      </tm-sheet>
    </tm-spin>
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
const currentUrl = ref({ url: 'https://dm.xbqgx.com?url=', param: '' });
const data = ref([] as any);

onLoad((opt: any) => {
  getInfo(opt)
})

const getInfo = (opt: any) => {
  uni.$tm.fetch
    .get("/api/api.php?out=json&flag=" + opt.flag + "&id=" + opt.id)
    .then((res: any) => {
      if (res.data?.success) {
        title.value = res.data.title;
        currentUrl.value.param = res.data.url;
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
  data.value.forEach((d: any) => d.selected = false);
  item.selected = true;
  currentUrl.value.param = item.url;
}

</script>
<style lang="scss" scoped></style>
