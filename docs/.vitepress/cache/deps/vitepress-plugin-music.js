import {
  Fragment,
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  nextTick,
  normalizeClass,
  openBlock,
  ref,
  render,
  renderList,
  toDisplayString,
  unref,
  watch
} from "./chunk-PAUCAATC.js";

// node_modules/vitepress-plugin-music/lib/vitepress-plugin-music.js
var g;
var x = (a, r) => new Promise((e, l) => {
  cancelAnimationFrame(g), a.volume = r ? 0 : 1;
  let i = false, c = 30;
  const m = () => {
    a.volume = Math.min(Math.max(a.volume + (r ? c : -c) / 1e3, 0), 1), i = a.volume === 1 || a.volume === 0, i ? e(a.volume) : (c = Math.max(c - 1, 5), g = requestAnimationFrame(m));
  };
  g = requestAnimationFrame(m);
});
var E = { class: "vitepress-music__drawer" };
var T = { class: "vitepress-music__drawer-header" };
var j = createBaseVNode("span", null, "Playlist", -1);
var R = { class: "vitepress-music__drawer-content" };
var z = ["onClick"];
var D = { class: "vitepress-music__trigger" };
var G = ["src"];
var H = defineComponent({
  __name: "template",
  props: {
    list: null
  },
  setup(a) {
    const r = a, e = ref({
      status: 2,
      showList: false,
      currentIndex: 0,
      errorIndexList: []
    }), l = computed(() => r.list.filter((t) => !t.hide)), i = computed(() => e.value.status === 0), c = computed(() => e.value.status === 1), m = computed(() => e.value.status === 2), P = computed(() => ({
      "is-play": i.value,
      "is-pause": c.value,
      "is-stop": m.value,
      "is-show-list": e.value.showList
    })), F = computed(() => l.value[e.value.currentIndex]), k = () => {
      e.value.status = i.value ? 1 : 0;
    }, C = () => {
      e.value.showList = !e.value.showList;
    }, u = ref(), d = (t) => {
      if (t === e.value.currentIndex)
        return k();
      e.value.status = 2, e.value.currentIndex = t < 0 ? l.value.length - 1 : t > l.value.length - 1 ? 0 : t, nextTick(() => e.value.status = 0);
    }, N = () => {
      const { errorIndexList: t, currentIndex: n } = e.value;
      t.includes(n) || t.push(n), t.length < l.value.length && d(n + 1);
    };
    return watch(() => e.value.status, async (t) => {
      switch (t) {
        case 0:
          u.value.play(), x(u.value, true);
          break;
        case 1:
          await x(u.value, false), u.value.pause();
          break;
        case 2:
          await x(u.value, false), u.value.pause();
          break;
      }
    }), (t, n) => {
      var w;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vitepress-music", unref(P)])
      }, [
        createBaseVNode("div", E, [
          createBaseVNode("div", T, [
            createBaseVNode("div", null, [
              createBaseVNode("span", {
                class: "iconfont icon-shouqi",
                onClick: C
              }),
              j
            ]),
            createBaseVNode("span", null, "Total " + toDisplayString(((w = unref(l)) == null ? void 0 : w.length) || 0), 1)
          ]),
          createBaseVNode("ul", R, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(l), (o, h) => (openBlock(), createElementBlock(Fragment, null, [
              o.hide ? createCommentVNode("", true) : (openBlock(), createElementBlock("li", {
                key: o.name,
                class: normalizeClass({
                  active: e.value.currentIndex === h,
                  error: e.value.errorIndexList.includes(h),
                  playing: unref(i) && e.value.currentIndex === h
                }),
                onClick: (J) => d(h)
              }, [
                createBaseVNode("div", null, toDisplayString(o.name), 1),
                createBaseVNode("div", null, toDisplayString(o.author), 1)
              ], 10, z))
            ], 64))), 256))
          ])
        ]),
        createBaseVNode("div", D, [
          createBaseVNode("span", {
            class: "iconfont icon-changpianji",
            onClick: k
          }),
          createBaseVNode("span", {
            class: "iconfont icon-shangyishou",
            onClick: n[0] || (n[0] = (o) => d(e.value.currentIndex - 1))
          }),
          createBaseVNode("span", {
            class: "iconfont icon-xiayishou",
            onClick: n[1] || (n[1] = (o) => d(e.value.currentIndex + 1))
          }),
          createBaseVNode("span", {
            class: "iconfont icon-gedan",
            onClick: C
          })
        ]),
        createBaseVNode("audio", {
          ref_key: "audioRef",
          ref: u,
          src: unref(F).file,
          controls: "controls",
          preload: "auto",
          onEnded: n[2] || (n[2] = (o) => d(e.value.currentIndex + 1)),
          onError: n[3] || (n[3] = (o) => N())
        }, null, 40, G)
      ], 2);
    };
  }
});
var O = (a = []) => {
  if (typeof window > "u")
    return;
  document.getElementsByTagName("body")[0];
  const r = createVNode(H, {
    list: a
  }), e = document.createElement("div");
  render(r, e), document.body.appendChild(e);
};
export {
  O as default
};
//# sourceMappingURL=vitepress-plugin-music.js.map
