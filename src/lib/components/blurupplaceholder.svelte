<script lang="ts">
	import type { Thumbnail } from '$lib/utils/types';

	export let thumbnail: Thumbnail;
</script>

<svg width="100%" height="100%" viewBox="0 0 {thumbnail.width} {thumbnail.height}">
	<filter id="blur" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
		<feGaussianBlur stdDeviation="20 20" edgeMode="duplicate" />
		<feComponentTransfer>
			<feFuncA type="discrete" tableValues="1 1" />
		</feComponentTransfer>
	</filter>
	<image
		filter="url(#blur)"
		xlink:href="data:image/jpeg;base64,{thumbnail.value}"
		x="0"
		y="0"
		height="100%"
		width="100%"
	/>
</svg>
