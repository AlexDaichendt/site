// vite.config.js
import { sveltekit } from "file:///home/alex/Repositories/daichendt.one/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { imagetools } from "file:///home/alex/Repositories/daichendt.one/node_modules/vite-imagetools/dist/index.mjs";
var config = {
  plugins: [
    sveltekit(),
    imagetools({
      defaultDirectives: (id) => {
        if (id.searchParams.has("default"))
          return new URLSearchParams({
            format: "avif;webpc",
            width: "360;720;1280;1920",
            metadata: ""
          });
        return new URLSearchParams();
      }
    })
  ]
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9hbGV4L1JlcG9zaXRvcmllcy9kYWljaGVuZHQub25lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9hbGV4L1JlcG9zaXRvcmllcy9kYWljaGVuZHQub25lL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2FsZXgvUmVwb3NpdG9yaWVzL2RhaWNoZW5kdC5vbmUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xuaW1wb3J0IHsgaW1hZ2V0b29scyB9IGZyb20gJ3ZpdGUtaW1hZ2V0b29scyc7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCd2aXRlJykuVXNlckNvbmZpZ30gKi9cbmNvbnN0IGNvbmZpZyA9IHtcblx0cGx1Z2luczogW1xuXHRcdHN2ZWx0ZWtpdCgpLFxuXHRcdGltYWdldG9vbHMoe1xuXHRcdFx0ZGVmYXVsdERpcmVjdGl2ZXM6IChpZCkgPT4ge1xuXHRcdFx0XHRpZiAoaWQuc2VhcmNoUGFyYW1zLmhhcygnZGVmYXVsdCcpKVxuXHRcdFx0XHRcdHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcblx0XHRcdFx0XHRcdGZvcm1hdDogJ2F2aWY7d2VicGMnLFxuXHRcdFx0XHRcdFx0d2lkdGg6ICczNjA7NzIwOzEyODA7MTkyMCcsXG5cdFx0XHRcdFx0XHRtZXRhZGF0YTogJycsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG5cdFx0XHR9LFxuXHRcdH0pLFxuXHRdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpUyxTQUFTLGlCQUFpQjtBQUMzVCxTQUFTLGtCQUFrQjtBQUczQixJQUFNLFNBQVM7QUFBQSxFQUNkLFNBQVM7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLFdBQVc7QUFBQSxNQUNWLG1CQUFtQixDQUFDLE9BQU87QUFDMUIsWUFBSSxHQUFHLGFBQWEsSUFBSSxTQUFTO0FBQ2hDLGlCQUFPLElBQUksZ0JBQWdCO0FBQUEsWUFDMUIsUUFBUTtBQUFBLFlBQ1IsT0FBTztBQUFBLFlBQ1AsVUFBVTtBQUFBLFVBQ1gsQ0FBQztBQUNGLGVBQU8sSUFBSSxnQkFBZ0I7QUFBQSxNQUM1QjtBQUFBLElBQ0QsQ0FBQztBQUFBLEVBQ0Y7QUFDRDtBQUVBLElBQU8sc0JBQVE7IiwKICAibmFtZXMiOiBbXQp9Cg==
