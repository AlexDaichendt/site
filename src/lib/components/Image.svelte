<script lang="ts">
	/**
	 * the output of a vite-imagetools import, using the `meta` query for output
	 * format
	 *
	 * full type:
	 * [code](https://github.com/JonasKruckenberg/imagetools/blob/main/packages/core/src/output-formats.ts),
	 * [docs](https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md#metadata)
	 */
	export let meta: { src: string; width: number; format: string }[];
	// if there is only one, vite-imagetools won't wrap the object in an array
	if (!(meta instanceof Array)) meta = [meta];

	// all images by format
	let sources = new Map<string, typeof meta>();
	meta.map((m) => sources.set(m.format, []));
	meta.map((m) => sources.get(m.format).push(m));

	// fallback image: first resolution of last format
	let image = sources.get([...sources.keys()].slice(-1)[0])[0];

	/**
	 * `source` attribute. default: width of the first resolution specified in the
	 * import.
	 */
	export let sizes = '100vw';

	/** `img` attribute */
	export let alt: string;

	/** `img` attribute */
	export let loading: string = undefined;
</script>

<!--
    @component
    takes the output of a vite-imagetools import (using the `meta` output format)
    and generates a `<picture>` with `<source>` tags and an `<img>`.
  
    usage
  
    - in `global.d.ts`
      ```typescript
      declare module "*&imagetools" {
        const out;
        export default out;
      }
      ```
    - in svelte file
      - typescript
        ```typescript
        import Image from "$lib/Image.svelte";
        import me from "$lib/assets/me.jpg?w=200;400&format=webp;png&meta&imagetools";
        ```
      - html
        ```html
        <span><Image meta="{me}" alt="me" /></span>
        ```
        - it's not necessary to wrap it in a `<span>`, but i like to avoid unnested
          `:global()` selectors in svelte css
      - scss
        ```scss
        span :global(img) {
          border-radius: 50%;
        }
        ```
  
    example generated `<picture>`
  
    ```html
    <picture>
      <source
        sizes="200px"
        type="image/webp"
        srcset="
          /_app/assets/me-3cfc7c5f.webp 200w,
          /_app/assets/me-ab564f98.webp 400w
        "
      />
      <source
        sizes="200px"
        type="image/png"
        srcset="
          /_app/assets/me-2bc09a6d.png 200w,
          /_app/assets/me-6f16cc18.png 400w
        "
      />
      <img src="/_app/assets/me-2bc09a6d.png" alt="me" />
    </picture>
    ```
  
    notes
  
    - from the documentation for
      [`sizes`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes),
  
      > The selected source size affects the intrinsic size of the image (the
      > image’s display size if no CSS styling is applied). If the srcset
      > attribute is absent, or contains no values with a width descriptor, then
      > the sizes attribute has no effect.
  
      there are other things that may also affect the intrinsic (and separately,
      display) size of the image, but this is all we set here.
  
    - the `&imagetools` in the usage above is to make typescript happy. there are
      other workarounds, if you'd prefer a differnet one
      https://github.com/JonasKruckenberg/imagetools/issues/160
    - it'd be nice if we could just use a plain `<img>` tag, but in my bit of
      testing that didn't seem to allow for multiple formats. i was also tempted
      to just use png, but in my bit of testing the webp file was only ~10% (!)
      the size of the png.
  
    assumptions
  
    - this counts on vite-imagetools returning metadata objects in the same order
      as the query values are specified
      - e.g. for `?width=100;200&format=webp;png&meta` we expect the source with
        `width=100` to come before the one with `width=200`, and likewise for
        `webp` and `png`
      - i don't think this is guaranteed, so hopefully it doesn't change. looks
        like it depends on this bit of code
        https://github.com/JonasKruckenberg/imagetools/blob/main/packages/core/src/lib/resolve-configs.ts#L17
  
    references
  
    - responsive images
      - mdn https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
      - css-tricks https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/
    - web
      - html
        - picture https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
        - source https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source
        - img https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
      - js
        - Map https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
      - ts
        - wildcard module declarations https://www.typescriptlang.org/docs/handbook/modules.html#wildcard-module-declarations
    - docs
      - vite-imagetools https://github.com/JonasKruckenberg/imagetools/tree/main/docs
    - other
      - how to generate srcset https://github.com/JonasKruckenberg/imagetools/blob/main/packages/core/src/output-formats.ts
      - `Map` preserves insertion order https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
      - you don't set elements on `Map` objects the way you do on regular objects
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
        (this was really hard to figure out lol)
      - vite-imagetools extensions (to make the import query string shorter)
        - docs https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/extending.md
        - code (options) https://github.com/JonasKruckenberg/imagetools/blob/main/packages/vite/src/types.ts
  -->
<picture>
	{#each [...sources.entries()] as [format, meta]}
		<source
			{sizes}
			type="image/{format}"
			srcset={meta.map((m) => `${m.src} ${m.width}w`).join(', ')}
		/>
	{/each}
	<img src={image.src} {alt} {loading} />
</picture>

<style>
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
</style>
