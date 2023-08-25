<template>
	<tm-app>
		<tm-sheet :margin="[0, 0, 0, 0]">
			<tm-input :searchWidth="120" placeholder="请输入内容" @search="search" prefix="tmicon-search"
				searchLabel="搜索"></tm-input>
		</tm-sheet>
		<view v-for="item in data" :key="item.id">
			<tm-divider :border="0" :margin="[12, 12]"></tm-divider>
			<tm-sheet :margin="[0, 0, 0, 0]">
				<tm-text _class="text-overflow-1" :label="item.title + ' ' + item.flag_name"
					@click="detail(item)"></tm-text>
			</tm-sheet>
		</view>
	</tm-app>
</template>
<script lang="ts" setup>
import { ref, getCurrentInstance } from "vue";
import { onShow, onLoad } from "@dcloudio/uni-app";
import tmApp from "@/tmui/components/tm-app/tm-app.vue";
import tmSheet from "@/tmui/components/tm-sheet/tm-sheet.vue";
import tmInput from "@/tmui/components/tm-input/tm-input.vue";
import tmText from "@/tmui/components/tm-text/tm-text.vue";

const search = (val: any) => {
	if (!val) return;
	uni.$tm.fetch
		.get("/api/api.php?out=json&wd=" + val)
		.then((res: any) => {
			console.log(res);
			if (res.data?.success) {
				data.value = res.data?.info;
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

const data = ref([
	{
		id: 1,
		title: "",
		flag: 1,
		flag_name: ""
	},
]);

const detail = (item: any) => {
	uni.navigateTo({
		url: `/pages/detail/index?id=${item.id}&flag=${item.flag}`,
	});
};

</script>
<style lang="scss" scoped></style>


假定， 已确定的指标： 发电量、用电量、上网电量、购买电量；
基于上述的4个确定的指标，计算或累加得到的指标：发电量（日|月|年|总）、自发自用、自给自主、收益等等 