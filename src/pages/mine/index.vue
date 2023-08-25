<template>
	<tm-app>
		<tm-sheet :margin="[0, 0, 0, 0]">
			<tm-text label="
本解析只做学习交流，不以盈利为目的使用本接口造成的任何后果概不负责
所有资源均来源第三方资源，并不提供影片资源存储，也不参与录制、上传相关视频，视频版权归属其合法持有人所有
本站不对使用者的行为负担任何法律责任。如果有因为本站而导致您的权益受到损害，请与我们联系，我们将理性对待，协助你解决相关问题。免责声明"></tm-text>
		</tm-sheet>
	</tm-app>
</template>
<script lang="ts" setup>
import { ref, getCurrentInstance } from 'vue'
import { onShow, onLoad } from '@dcloudio/uni-app'
import tmApp from '@/tmui/components/tm-app/tm-app.vue'
import tmSheet from '@/tmui/components/tm-sheet/tm-sheet.vue'
import tmText from '@/tmui/components/tm-text/tm-text.vue'
onShow(() => {
	// #ifdef MP-WEIXIN
	// #endif
})

onLoad(() => {
	// #ifdef MP-WEIXIN
	// #endif
})
</script>
<style lang="scss" scoped></style>