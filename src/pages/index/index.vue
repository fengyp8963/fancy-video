<template>
	<tm-app>
		<tm-sheet :margin="[0, 0, 0, 0]">
			<tm-input :searchWidth="120" placeholder="请输入内容" @search="search" prefix="tmicon-search"
				searchLabel="搜索"></tm-input>
		</tm-sheet>

		<tm-divider :border="0" :margin="[12, 12]"></tm-divider>

		<view v-if="type">
			<tm-spin :load="load" tip="加载中" style="min-height: 200rpx">
				<tm-sheet :margin="[0, 0, 0, 0]">
					<tm-text _class="text-overflow-1" label="热门"></tm-text>
				</tm-sheet>
				<tm-divider :border="0" :margin="[12, 12]"></tm-divider>
				<view class="flex flex-row flex-wrap">
					<view v-for="(item, index) in  hots" :key="index">
						<tm-button color="blue" :width="350" :margin="[10]" :shadow="0" size="small" :label="item.name"
							@click="search(item.name)">
						</tm-button>
					</view>
				</view>

				<tm-divider :border="0" :margin="[12, 12]"></tm-divider>

				<tm-sheet :margin="[0, 0, 0, 0]">
					<tm-text _class="text-overflow-1" label="最新"></tm-text>
				</tm-sheet>
				<tm-divider :border="0" :margin="[12, 12]"></tm-divider>

				<view class="flex flex-row flex-wrap">
					<view v-for="(item, index) in news" :key="index">
						<tm-button color="blue" :width="350" :margin="[10]" :shadow="0" size="small" :label="item.name"
							@click="search(item.name)">
						</tm-button>
					</view>
				</view>
			</tm-spin>
		</view>

		<view v-if="!type">
			<tm-spin :load="load" tip="加载中" style="min-height: 200rpx">
				<tm-sheet :margin="[0, 0, 0, 0]">
					<tm-text _class="text-overflow-1" label="查询"></tm-text>
				</tm-sheet>
				<tm-divider :border="0" :margin="[12, 12]"></tm-divider>
				<view class="flex flex-row flex-wrap">
					<view v-for="(item, index) in data" :key="index">
						<tm-button color="blue" :width="726" :margin="[10]" :shadow="0" size="small"
							:label="item.title + ' [' + item.type + ']' + ' [' + item.from + ']'" @click="detail(item)">
						</tm-button>
					</view>
				</view>
			</tm-spin>
		</view>

		<tm-divider :border="0" :margin="[12, 12]"></tm-divider>

	</tm-app>
</template>
<script lang="ts" setup>
import { ref, getCurrentInstance } from "vue";
import { onShow, onLoad } from "@dcloudio/uni-app";
import tmApp from "@/tmui/components/tm-app/tm-app.vue";
import tmSheet from "@/tmui/components/tm-sheet/tm-sheet.vue";
import tmInput from "@/tmui/components/tm-input/tm-input.vue";
import tmText from "@/tmui/components/tm-text/tm-text.vue";

const type = ref(true);

const load = ref(true);
const hots = ref([] as any);
const news = ref([] as any);

const loaded = () => {
	uni.$tm.fetch
		.get("http://114.55.175.146/api2/api/v/")
		.then((res: any) => {
			hots.value = res.data.hot;
			news.value = res.data.new;
			load.value = false;
			type.value = true;
		}).catch((res: any) => {
			uni.showToast({
				title: '查询失败，请稍后再试！',
				icon: 'none',
				mask: true,
				duration: 1000,
			});
			load.value = false;
		});
}
loaded();

const data = ref([] as any);

const search = (val: any) => {
	load.value = true;
	if (!val) {
		loaded();
		return
	};
	uni.$tm.fetch
		.get("http://114.55.175.146/api1/api.php?out=json&wd=" + val)
		.then((res: any) => {
			console.log(res);
			if (res.data?.success) {
				data.value = res.data?.info;
				type.value = false;
			}
			load.value = false;
		}).catch((res: any) => {
			uni.showToast({
				title: '查询失败，请稍后再试！',
				icon: 'none',
				mask: true,
				duration: 1000,
			});
			load.value = false;
		});
}

const detail = (item: any) => {
	uni.navigateTo({
		url: `/pages/detail/index?id=${item.id}&flag=${item.flag}`,
	});
};

</script>
<style lang="scss" scoped></style>