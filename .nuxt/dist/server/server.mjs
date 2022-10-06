
// --------------------
// Request: C:/Users/hay12/Documents/Github/hasida-website/node_modules/nuxt3/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/css.mjs ($id_78ceb7bc)
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/plugins/server.mjs ($id_976c69cc)
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/root-component.mjs ($id_aacd1a0e)
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/app-component.mjs ($id_3b454716)
// --------------------
const $id_c11c0030 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/css.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/plugins/server.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/root-component.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/app-component.mjs");

let entry;
const plugins = __vite_ssr_import_1__.normalizePlugins(__vite_ssr_import_3__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp, ssrContext });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_4__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    await nuxt.hooks.callHook("app:beforeMount", vueApp);
    nuxt.hooks.hookOnce("page:finish", () => {
      nuxt.isHydrating = false;
    });
    vueApp.mount("#__nuxt");
    await nuxt.hooks.callHook("app:mounted", vueApp);
    await __vite_ssr_import_0__.nextTick();
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - C:/Users/hay12/Documents/Github/hasida-website/node_modules/nuxt3/dist/app/entry ($id_c11c0030)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /components/shared/title.vue ($id_bb43ca7c)
// - /components/shared/image.vue ($id_f391b48d)
// - /components/contact/contact.vue ($id_f25bc35f)
// - /components/shared/numbered-title.vue ($id_6a77dede)
// - /components/design-concepts/usability-study.vue ($id_d9faf267)
// - /components/design-concepts/design-concepts.vue ($id_cfb829f1)
// - /components/desk-research/desk-research.vue ($id_7af1af8e)
// - /components/hero/hero.vue ($id_2440c08b)
// - /components/hero/steps.vue ($id_500a5757)
// - /components/hero/phones.vue ($id_77a1c138)
// - /components/shared/figma-link.vue ($id_b0e3c6da)
// - /components/resume/resume-image.vue ($id_70328d53)
// - /components/resume/resume-new.vue ($id_7043d697)
// - /components/resume/resume-info/resume-info-experience.vue ($id_a033c4d9)
// - /components/resume/resume-info/resume-info-education.vue ($id_dd1f087e)
// - /components/resume/resume-info/resume-info.vue ($id_76ed9036)
// - /components/resume/resume.vue ($id_eeb28070)
// - /components/screens/screen-number-title.vue ($id_d54691ab)
// - /components/screens/screens.vue ($id_639dbbb9)
// - /components/shared/text-with-figure.vue ($id_96cfc85e)
// - /components/shenkar/shenkar.vue ($id_3a62cf4e)
// - /components/test-validation/basic-flow.vue ($id_9fdd3072)
// - /components/test-validation/low-fidelity.vue ($id_41cd7542)
// - /components/test-validation/text-validation.vue ($id_c900ee7d)
// - /components/text-and-figures/persona.vue ($id_81dd2542)
// - /components/text-and-figures/text-and-figures-big.vue ($id_b6d5f97f)
// - /components/text-and-figures/text-and-figures-small.vue ($id_7553db27)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/hay12/Documents/Github/hasida-website/node_modules/vue/dist/vue.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/hay12/Documents/Github/hasida-website/node_modules/vue/dist/vue.cjs.js".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/index.mjs
// Parents: 
// - C:/Users/hay12/Documents/Github/hasida-website/node_modules/nuxt3/dist/app/entry ($id_c11c0030)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// --------------------
const $id_d8c2af0f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// --------------------
const $id_bf77ef36 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/compat/legacy-app.mjs");

const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.provide("config", options.ssrContext.runtimeConfig.private);
    nuxtApp.payload.config = options.ssrContext.runtimeConfig.public;
  } else {
    nuxtApp.provide("config", __vite_ssr_import_0__.reactive(nuxtApp.payload.config));
  }
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, () => plugin(nuxtApp)) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_2__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
let currentNuxtAppInstance;
const setNuxtAppInstance = (nuxt) => {
  currentNuxtAppInstance = nuxt;
};
Object.defineProperty(__vite_ssr_exports__, "setNuxtAppInstance", { enumerable: true, configurable: true, get(){ return setNuxtAppInstance }});
function callWithNuxt(nuxt, setup) {
  setNuxtAppInstance(nuxt);
  const p = setup();
  if (true) {
    setNuxtAppInstance(null);
  }
  return p;
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    if (!currentNuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return currentNuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/hay12/Documents/Github/hasida-website/node_modules/hookable/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/hay12/Documents/Github/hasida-website/node_modules/hookable/dist/index.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// --------------------
const $id_75047751 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = { ...nuxtApp.vueApp };
      legacyApp.$root = legacyApp;
      legacyApp.constructor = legacyApp;
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/hay12/Documents/Github/hasida-website/node_modules/unenv/runtime/mock/proxy.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/hay12/Documents/Github/hasida-website/node_modules/unenv/runtime/mock/proxy.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// --------------------
const $id_42ae3d5d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useLazyFetch }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useCookie }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_b47c3881 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  Object.assign(await res, __vite_ssr_import_0__.toRefs(data));
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/hay12/Documents/Github/hasida-website/node_modules/vue-router/dist/vue-router.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/hay12/Documents/Github/hasida-website/node_modules/vue-router/dist/vue-router.cjs.js".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_a2ef143e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const asyncData = {
    data: __vite_ssr_import_0__.ref(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(true),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (force) => {
    if (nuxt._asyncDataPromises[key] && !force) {
      return nuxt._asyncDataPromises[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = options.default();
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = asyncData.refresh();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating) {
      asyncData.pending.value = false;
    } else if (instance && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(asyncData.refresh);
    } else {
      asyncData.refresh();
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_43a772c2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_d232db97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    state.value = init();
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/murmurhash-es/dist/index.mjs ($id_fbf6dac3)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_765a0ed7 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/murmurhash-es/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

function useFetch(url, opts = {}) {
  if (!opts.key) {
    const keys = { u: url };
    if (opts.baseURL) {
      keys.b = opts.baseURL;
    }
    if (opts.method && opts.method.toLowerCase() !== "get") {
      keys.m = opts.method.toLowerCase();
    }
    if (opts.params) {
      keys.p = opts.params;
    }
    opts.key = generateKey(keys);
  }
  return __vite_ssr_import_1__.useAsyncData(opts.key, () => $fetch(url, opts), opts);
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(url, opts = {}) {
  return useFetch(url, { ...opts, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
function generateKey(keys) {
  return "$f" + __vite_ssr_import_0__.murmurHashV3(JSON.stringify(keys));
}
;
}


// --------------------
// Request: /node_modules/murmurhash-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 

// --------------------
const $id_fbf6dac3 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/hay12/Documents/Github/hasida-website/node_modules/murmurhash-es/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/hay12/Documents/Github/hasida-website/node_modules/murmurhash-es/dist/index.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_792d64c4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const CookieDefaults = {
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_0__.ref(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const initialValue = cookie.value;
    const nuxtApp = __vite_ssr_import_4__.useNuxtApp();
    nuxtApp.hooks.hookOnce("app:rendered", () => {
      if (cookie.value !== initialValue) {
        writeServerCookie(useSSRRes(nuxtApp), name, cookie.value, opts);
      }
    });
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function useSSRReq(nuxtApp = __vite_ssr_import_4__.useNuxtApp()) {
  return nuxtApp.ssrContext?.req;
}
function useSSRRes(nuxtApp = __vite_ssr_import_4__.useNuxtApp()) {
  return nuxtApp.ssrContext?.res;
}
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(useSSRReq().headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    opts.maxAge = -1;
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(res, name, value, opts = {}) {
  if (res) {
    __vite_ssr_import_2__.appendHeader(res, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/hay12/Documents/Github/hasida-website/node_modules/cookie-es/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/hay12/Documents/Github/hasida-website/node_modules/cookie-es/dist/index.mjs".') })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/hay12/Documents/Github/hasida-website/node_modules/h3/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/hay12/Documents/Github/hasida-website/node_modules/h3/dist/index.mjs".') })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/hay12/Documents/Github/hasida-website/node_modules/destr/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/hay12/Documents/Github/hasida-website/node_modules/destr/dist/index.mjs".') })


// --------------------
// Request: /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/css.mjs
// Parents: 
// - C:/Users/hay12/Documents/Github/hasida-website/node_modules/nuxt3/dist/app/entry ($id_c11c0030)
// Dependencies: 

// --------------------
const $id_78ceb7bc = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/plugins/server.mjs
// Parents: 
// - C:/Users/hay12/Documents/Github/hasida-website/node_modules/nuxt3/dist/app/entry ($id_c11c0030)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// --------------------
const $id_976c69cc = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
__vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default
];
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/plugins/server.mjs ($id_976c69cc)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_b9f3c557 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/plugins/server.mjs ($id_976c69cc)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_cbe5172d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_2__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp._useMeta = (meta) => {
    const headObj = __vite_ssr_import_1__.ref(meta);
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.getAttribute(n) : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    var _a2;
    const key = getTagKey(t);
    if (key) {
      const uncontrolled = head.querySelector(`${t.tagName.toLowerCase()}[${key.name}="${key.value}"]`);
      if (uncontrolled) {
        (_a2 = uncontrolled.parentNode) == null ? void 0 : _a2.removeChild(uncontrolled);
      }
    }
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      for (const name of Object.keys(actualTags)) {
        updateElements(document, name, actualTags[name]);
      }
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/plugin.mjs
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/plugins/server.mjs ($id_976c69cc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/meta.config.mjs ($id_d7ea131e)
// --------------------
const $id_9fd5f35e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/meta.config.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useMeta(__vite_ssr_import_4__.default.globalMeta);
  nuxtApp.vueApp.mixin({
    [__vite_ssr_import_4__.default.mixinKey]() {
      const instance = __vite_ssr_import_0__.getCurrentInstance();
      const options = instance?.type || instance?.proxy?.$options;
      if (!options || !("head" in options)) {
        return;
      }
      __vite_ssr_import_2__.useMeta(options.head);
    }
  });
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// --------------------
const $id_94744df3 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useMeta(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    key: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup: (_props, ctx) => ctx.slots.default
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_ca9295be = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

function useMeta(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useMeta(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/hay12/Documents/Github/hasida-website/node_modules/@vue/shared/dist/shared.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/hay12/Documents/Github/hasida-website/node_modules/@vue/shared/dist/shared.cjs.js".') })


// --------------------
// Request: /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 

// --------------------
const $id_d7ea131e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"}],"link":[],"style":[],"script":[]},"mixinKey":"created"};
}


// --------------------
// Request: /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/plugins/server.mjs ($id_976c69cc)
// Dependencies: 
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// --------------------
const $id_7b587af2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");


if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_0__.$fetch
}

__vite_ssr_exports__.default = () => {}
;
}


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/hay12/Documents/Github/hasida-website/node_modules/ohmyfetch/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/hay12/Documents/Github/hasida-website/node_modules/ohmyfetch/dist/index.mjs".') })


// --------------------
// Request: /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/plugins/server.mjs ($id_976c69cc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/contact/contact.vue ($id_f25bc35f)
// - /components/design-concepts/design-concepts.vue ($id_cfb829f1)
// - /components/design-concepts/usability-study.vue ($id_d9faf267)
// - /components/desk-research/desk-research.vue ($id_7af1af8e)
// - /components/hero/hero.vue ($id_2440c08b)
// - /components/hero/phones.vue ($id_77a1c138)
// - /components/hero/steps.vue ($id_500a5757)
// - /components/resume/resume-image.vue ($id_70328d53)
// - /components/resume/resume-new.vue ($id_7043d697)
// - /components/resume/resume.vue ($id_eeb28070)
// - /components/screens/screen-number-title.vue ($id_d54691ab)
// - /components/screens/screens.vue ($id_639dbbb9)
// - /components/shared/figma-link.vue ($id_b0e3c6da)
// - /components/shared/image.vue ($id_f391b48d)
// - /components/shared/numbered-title.vue ($id_6a77dede)
// - /components/shared/text-with-figure.vue ($id_96cfc85e)
// - /components/shared/title.vue ($id_bb43ca7c)
// - /components/shenkar/shenkar.vue ($id_3a62cf4e)
// - /components/test-validation/basic-flow.vue ($id_9fdd3072)
// - /components/test-validation/low-fidelity.vue ($id_41cd7542)
// - /components/test-validation/text-validation.vue ($id_c900ee7d)
// - /components/text-and-figures/persona.vue ($id_81dd2542)
// - /components/text-and-figures/text-and-figures-big.vue ($id_b6d5f97f)
// - /components/text-and-figures/text-and-figures-small.vue ($id_7553db27)
// - /components/resume/resume-info/resume-info-education.vue ($id_dd1f087e)
// - /components/resume/resume-info/resume-info-experience.vue ($id_a033c4d9)
// - /components/resume/resume-info/resume-info.vue ($id_76ed9036)
// --------------------
const $id_ad8a724c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {
  'Contact': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/contact/contact.vue').then(c => c.default || c)),
  'DesignConcepts': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/design-concepts/design-concepts.vue').then(c => c.default || c)),
  'DesignConceptsUsabilityStudy': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/design-concepts/usability-study.vue').then(c => c.default || c)),
  'DeskResearch': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/desk-research/desk-research.vue').then(c => c.default || c)),
  'Hero': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/hero/hero.vue').then(c => c.default || c)),
  'HeroPhones': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/hero/phones.vue').then(c => c.default || c)),
  'HeroSteps': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/hero/steps.vue').then(c => c.default || c)),
  'ResumeImage': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/resume/resume-image.vue').then(c => c.default || c)),
  'ResumeNew': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/resume/resume-new.vue').then(c => c.default || c)),
  'Resume': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/resume/resume.vue').then(c => c.default || c)),
  'ScreensScreenNumberTitle': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/screens/screen-number-title.vue').then(c => c.default || c)),
  'Screens': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/screens/screens.vue').then(c => c.default || c)),
  'SharedFigmaLink': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/shared/figma-link.vue').then(c => c.default || c)),
  'SharedImage': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/shared/image.vue').then(c => c.default || c)),
  'SharedNumberedTitle': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/shared/numbered-title.vue').then(c => c.default || c)),
  'SharedTextWithFigure': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/shared/text-with-figure.vue').then(c => c.default || c)),
  'SharedTitle': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/shared/title.vue').then(c => c.default || c)),
  'Shenkar': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/shenkar/shenkar.vue').then(c => c.default || c)),
  'TestValidationBasicFlow': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/test-validation/basic-flow.vue').then(c => c.default || c)),
  'TestValidationLowFidelity': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/test-validation/low-fidelity.vue').then(c => c.default || c)),
  'TestValidationTextValidation': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/test-validation/text-validation.vue').then(c => c.default || c)),
  'TextAndFiguresPersona': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/text-and-figures/persona.vue').then(c => c.default || c)),
  'TextAndFiguresBig': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/text-and-figures/text-and-figures-big.vue').then(c => c.default || c)),
  'TextAndFiguresSmall': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/text-and-figures/text-and-figures-small.vue').then(c => c.default || c)),
  'ResumeInfoEducation': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/resume/resume-info/resume-info-education.vue').then(c => c.default || c)),
  'ResumeInfoExperience': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/resume/resume-info/resume-info-experience.vue').then(c => c.default || c)),
  'ResumeInfo': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/resume/resume-info/resume-info.vue').then(c => c.default || c))
}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /components/contact/contact.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /components/shared/title.vue ($id_bb43ca7c)
// - /components/shared/image.vue ($id_f391b48d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/contact/contact.vue?vue&type=style&index=0&scoped=true&lang.less ($id_e8d9232d)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f25bc35f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/shared/title.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/shared/image.vue");


const _sfc_main = {
  components: { Title: __vite_ssr_import_0__.default, Image: __vite_ssr_import_1__.default },
  methods: {
    call() {
      window.open("tel:0527475755");
    },
    openLinkedIn() {
      window.open("https://www.linkedin.com/in/hasida-zohar/", "_blank");
    },
    openMail() {
      window.open("mailto:hasida.zohar@gmail.com");
    },
  },
};

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title = __vite_ssr_import_2__.resolveComponent("Title")
  const _component_Image = __vite_ssr_import_2__.resolveComponent("Image")

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "contact" }, _attrs))} data-v-2de04846><div class="title-wrapper" data-v-2de04846>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Title, {
    title: "Let's keep in touch",
    color: "dark-accent",
    position: "center"
  }, null, _parent))
  _push(`</div><div class="links" data-v-2de04846>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/contact/phone.png",
    alt: "phone"
  }, null, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/contact/linkedin.png",
    alt: "linkedin"
  }, null, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/contact/mail.png",
    alt: "mail"
  }, null, _parent))
  _push(`</div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/contact/contact.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/contact/contact.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-2de04846"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/contact/contact.vue"]]);
}


// --------------------
// Request: /components/shared/title.vue
// Parents: 
// - /components/contact/contact.vue ($id_f25bc35f)
// - /components/shared/numbered-title.vue ($id_6a77dede)
// - /components/desk-research/desk-research.vue ($id_7af1af8e)
// - /components/hero/steps.vue ($id_500a5757)
// - /components/resume/resume-info/resume-info.vue ($id_76ed9036)
// - /components/resume/resume-info/resume-info-experience.vue ($id_a033c4d9)
// - /components/resume/resume-info/resume-info-education.vue ($id_dd1f087e)
// - /components/screens/screens.vue ($id_639dbbb9)
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /components/shenkar/shenkar.vue ($id_3a62cf4e)
// - /components/test-validation/basic-flow.vue ($id_9fdd3072)
// - /components/test-validation/low-fidelity.vue ($id_41cd7542)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/shared/title.vue?vue&type=style&index=0&scoped=true&lang.less ($id_ed53b824)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bb43ca7c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const _sfc_main = {
  name: "Title",
  props: {
    title: String,
    "color": "white" | "accent" | "dark-accent",
    position: "center" | "left" | "right"
  },
  methods: {
    getClass() {
      return this.color + " " + this.position;
    }
  }
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h3${
    __vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
      class: $options.getClass()
    }, _attrs))
  } data-v-ecaed02e>${
    __vite_ssr_import_1__.ssrInterpolate($props.title)
  }</h3>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/shared/title.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/shared/title.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-ecaed02e"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/shared/title.vue"]]);
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /components/shared/title.vue ($id_bb43ca7c)
// - /components/shared/image.vue ($id_f391b48d)
// - /components/contact/contact.vue ($id_f25bc35f)
// - /components/shared/numbered-title.vue ($id_6a77dede)
// - /components/design-concepts/usability-study.vue ($id_d9faf267)
// - /components/design-concepts/design-concepts.vue ($id_cfb829f1)
// - /components/desk-research/desk-research.vue ($id_7af1af8e)
// - /components/hero/steps.vue ($id_500a5757)
// - /components/hero/phones.vue ($id_77a1c138)
// - /components/shared/figma-link.vue ($id_b0e3c6da)
// - /components/hero/hero.vue ($id_2440c08b)
// - /components/resume/resume-image.vue ($id_70328d53)
// - /components/resume/resume-new.vue ($id_7043d697)
// - /components/resume/resume-info/resume-info-experience.vue ($id_a033c4d9)
// - /components/resume/resume-info/resume-info-education.vue ($id_dd1f087e)
// - /components/resume/resume-info/resume-info.vue ($id_76ed9036)
// - /components/resume/resume.vue ($id_eeb28070)
// - /components/screens/screen-number-title.vue ($id_d54691ab)
// - /components/screens/screens.vue ($id_639dbbb9)
// - /components/shared/text-with-figure.vue ($id_96cfc85e)
// - /components/shenkar/shenkar.vue ($id_3a62cf4e)
// - /components/test-validation/basic-flow.vue ($id_9fdd3072)
// - /components/test-validation/low-fidelity.vue ($id_41cd7542)
// - /components/test-validation/text-validation.vue ($id_c900ee7d)
// - /components/text-and-figures/persona.vue ($id_81dd2542)
// - /components/text-and-figures/text-and-figures-big.vue ($id_b6d5f97f)
// - /components/text-and-figures/text-and-figures-small.vue ($id_7553db27)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/hay12/Documents/Github/hasida-website/node_modules/vue/server-renderer/index.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/hay12/Documents/Github/hasida-website/node_modules/vue/server-renderer/index.js".') })


// --------------------
// Request: /components/shared/title.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/shared/title.vue ($id_bb43ca7c)
// Dependencies: 

// --------------------
const $id_ed53b824 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "h3[data-v-ecaed02e] {\n  font-size: 2.25rem;\n  font-weight: 700;\n  line-height: 3.064rem;\n  margin: 0 0 1rem 0;\n  padding: 0;\n}\nh3.center[data-v-ecaed02e] {\n  text-align: center;\n}\nh3.left[data-v-ecaed02e] {\n  text-align: left;\n}\nh3.right[data-v-ecaed02e] {\n  text-align: right;\n}\n.white[data-v-ecaed02e] {\n  color: white;\n}\n.accent[data-v-ecaed02e] {\n  color: #d1c6fe;\n}\n.dark-accent[data-v-ecaed02e] {\n  color: #9e95bf;\n}\n";
}


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /components/shared/title.vue ($id_bb43ca7c)
// - /components/shared/image.vue ($id_f391b48d)
// - /components/contact/contact.vue ($id_f25bc35f)
// - /components/shared/numbered-title.vue ($id_6a77dede)
// - /components/design-concepts/usability-study.vue ($id_d9faf267)
// - /components/design-concepts/design-concepts.vue ($id_cfb829f1)
// - /components/desk-research/desk-research.vue ($id_7af1af8e)
// - /components/hero/steps.vue ($id_500a5757)
// - /components/hero/phones.vue ($id_77a1c138)
// - /components/shared/figma-link.vue ($id_b0e3c6da)
// - /components/hero/hero.vue ($id_2440c08b)
// - /components/resume/resume-image.vue ($id_70328d53)
// - /components/resume/resume-new.vue ($id_7043d697)
// - /components/resume/resume-info/resume-info-experience.vue ($id_a033c4d9)
// - /components/resume/resume-info/resume-info-education.vue ($id_dd1f087e)
// - /components/resume/resume-info/resume-info.vue ($id_76ed9036)
// - /components/resume/resume.vue ($id_eeb28070)
// - /components/screens/screen-number-title.vue ($id_d54691ab)
// - /components/screens/screens.vue ($id_639dbbb9)
// - /components/shared/text-with-figure.vue ($id_96cfc85e)
// - /components/shenkar/shenkar.vue ($id_3a62cf4e)
// - /components/test-validation/basic-flow.vue ($id_9fdd3072)
// - /components/test-validation/low-fidelity.vue ($id_41cd7542)
// - /components/test-validation/text-validation.vue ($id_c900ee7d)
// - /components/text-and-figures/persona.vue ($id_81dd2542)
// - /components/text-and-figures/text-and-figures-big.vue ($id_b6d5f97f)
// - /components/text-and-figures/text-and-figures-small.vue ($id_7553db27)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /components/shared/image.vue
// Parents: 
// - /components/contact/contact.vue ($id_f25bc35f)
// - /components/design-concepts/design-concepts.vue ($id_cfb829f1)
// - /components/design-concepts/usability-study.vue ($id_d9faf267)
// - /components/desk-research/desk-research.vue ($id_7af1af8e)
// - /components/hero/phones.vue ($id_77a1c138)
// - /components/hero/hero.vue ($id_2440c08b)
// - /components/shared/figma-link.vue ($id_b0e3c6da)
// - /components/resume/resume-image.vue ($id_70328d53)
// - /components/screens/screens.vue ($id_639dbbb9)
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /components/shared/text-with-figure.vue ($id_96cfc85e)
// - /components/shenkar/shenkar.vue ($id_3a62cf4e)
// - /components/test-validation/basic-flow.vue ($id_9fdd3072)
// - /components/test-validation/low-fidelity.vue ($id_41cd7542)
// - /components/test-validation/text-validation.vue ($id_c900ee7d)
// - /components/text-and-figures/persona.vue ($id_81dd2542)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/shared/image.vue?vue&type=style&index=0&scoped=true&lang.css ($id_ead8ec92)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f391b48d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const _sfc_main = {
  props: { src: String, alt: String, class: String },
  data() {
    return {
      isMounted: false
    }
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {
    getImageSrc() {
      return (screen.width < 768 ? "/images/mobile" : "/images") + this.src;
    }
  }
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($data.isMounted) {
    _push(`<img${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
      alt: $props.alt,
      src: $options.getImageSrc()
    }, _attrs))} data-v-56c43528>`)
  } else {
    _push(`<!---->`)
  }
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/shared/image.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/shared/image.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-56c43528"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/shared/image.vue"]]);
}


// --------------------
// Request: /components/shared/image.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/shared/image.vue ($id_f391b48d)
// Dependencies: 

// --------------------
const $id_ead8ec92 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\nimg[data-v-56c43528] {\r\n  max-width: 100%;\r\n  max-height: 100%;\n}\r\n";
}


// --------------------
// Request: /components/contact/contact.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/contact/contact.vue ($id_f25bc35f)
// Dependencies: 

// --------------------
const $id_e8d9232d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".contact[data-v-2de04846] {\n  margin-top: 2rem;\n}\n.contact .title-wrapper[data-v-2de04846] {\n  max-width: 419px;\n  margin: 0 auto 2rem auto;\n}\n.contact .links[data-v-2de04846] {\n  display: flex;\n  max-width: 465px;\n  margin: 0 auto;\n  justify-content: center;\n  margin-bottom: 115px;\n}\n.contact .links img[data-v-2de04846] {\n  width: 16%;\n  margin-right: 2rem;\n  cursor: pointer;\n}\n.contact .links img[data-v-2de04846]:last-child {\n  margin-right: 0;\n}\n";
}


// --------------------
// Request: /components/design-concepts/design-concepts.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /components/shared/numbered-title.vue ($id_6a77dede)
// - /components/shared/image.vue ($id_f391b48d)
// - /components/design-concepts/usability-study.vue ($id_d9faf267)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/design-concepts/design-concepts.vue?vue&type=style&index=0&scoped=true&lang.less ($id_74bbbff9)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cfb829f1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/shared/numbered-title.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/shared/image.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/design-concepts/usability-study.vue");

const _sfc_main = {
  components: { NumberedTitle: __vite_ssr_import_0__.default, Image: __vite_ssr_import_1__.default, UsabilityStudy: __vite_ssr_import_2__.default },
};

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NumberedTitle = __vite_ssr_import_3__.resolveComponent("NumberedTitle")
  const _component_Image = __vite_ssr_import_3__.resolveComponent("Image")
  const _component_UsabilityStudy = __vite_ssr_import_3__.resolveComponent("UsabilityStudy")

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "design-concepts" }, _attrs))} data-v-4ebbeb7a>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NumberedTitle, {
    number: "08",
    title: "Design: concept and sketching",
    color: "dark-accent"
  }, null, _parent))
  _push(`<div class="info" data-v-4ebbeb7a><div class="info1" data-v-4ebbeb7a><div class="title" data-v-4ebbeb7a>Research synthesis:</div><div class="content" data-v-4ebbeb7a> The integration of existing knowledge and research findings pertinent to an issue. The aim of synthesis is to increase the generality and applicability of those findings and to develop new knowledge through the process of integration. </div><div class="images" data-v-4ebbeb7a><div class="image1" data-v-4ebbeb7a><div class="italic" data-v-4ebbeb7a>themes and opportunities</div>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
    src: "/Desk_research/themes_and_opportunities.png",
    alt: "themes and opportunities"
  }, null, _parent))
  _push(`</div><div class="image2" data-v-4ebbeb7a><div class="italic" data-v-4ebbeb7a>feature prioritization</div>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
    src: "/Desk_research/feature_prioritization.png",
    alt: "feature prioritization"
  }, null, _parent))
  _push(`</div><div class="arrows" data-v-4ebbeb7a>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
    src: "/shared/arrow.png",
    alt: "arrow"
  }, null, _parent))
  _push(`</div></div></div><div class="info2" data-v-4ebbeb7a><div class="title" data-v-4ebbeb7a>Crazy 8:</div><div class="content" data-v-4ebbeb7a> The integration of existing knowledge and research findings pertinent to an issue. The aim of synthesis is to increase the generality and applicability of those findings and to develop new knowledge through the process of integration. </div><div class="images" data-v-4ebbeb7a><div class="line1" data-v-4ebbeb7a>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
    src: "/Crazy_8/Crazy8_live_chat.png",
    alt: "themes and opportunities"
  }, null, _parent))
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
    src: "/Crazy_8/Crazy8_favorite_shake.png",
    alt: "themes and opportunities"
  }, null, _parent))
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
    src: "/Crazy_8/Crazy8_reco.png",
    alt: "themes and opportunities"
  }, null, _parent))
  _push(`</div><div class="line2" data-v-4ebbeb7a>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
    src: "/Crazy_8/3.png",
    alt: "themes and opportunities"
  }, null, _parent))
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
    src: "/Crazy_8/2.png",
    alt: "themes and opportunities"
  }, null, _parent))
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
    src: "/Crazy_8/1.png",
    alt: "themes and opportunities"
  }, null, _parent))
  _push(`</div><div class="arrows" data-v-4ebbeb7a>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
    src: "/shared/arrow.png",
    alt: "arrow"
  }, null, _parent))
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
    src: "/shared/arrow.png",
    alt: "arrow"
  }, null, _parent))
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
    src: "/shared/arrow.png",
    alt: "arrow"
  }, null, _parent))
  _push(`</div></div></div></div>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_UsabilityStudy, null, null, _parent))
  _push(`</div>`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/design-concepts/design-concepts.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/design-concepts/design-concepts.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-4ebbeb7a"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/design-concepts/design-concepts.vue"]]);
}


// --------------------
// Request: /components/shared/numbered-title.vue
// Parents: 
// - /components/design-concepts/design-concepts.vue ($id_cfb829f1)
// - /components/desk-research/desk-research.vue ($id_7af1af8e)
// - /components/hero/steps.vue ($id_500a5757)
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /components/shared/text-with-figure.vue ($id_96cfc85e)
// - /components/test-validation/text-validation.vue ($id_c900ee7d)
// Dependencies: 
// - /components/shared/title.vue ($id_bb43ca7c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/shared/numbered-title.vue?vue&type=style&index=0&scoped=true&lang.less ($id_2a269152)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6a77dede = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/shared/title.vue");

const _sfc_main = {
  props: {
    number: String,
    title: String,
    color: "white" | "accent" | "dark-accent",
    position: "center" | "left" | "right"
  },
  components: { Title1: __vite_ssr_import_0__.default }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title1 = __vite_ssr_import_1__.resolveComponent("Title1")

  _push(`<!--[--><div class="${
    __vite_ssr_import_2__.ssrRenderClass([$props.color, "number"])
  }" data-v-00482c32>${
    __vite_ssr_import_2__.ssrInterpolate($props.number)
  }</div>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Title1, {
    color: $props.color,
    title: $props.title,
    position: $props.position
  }, null, _parent))
  _push(`<!--]-->`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/shared/numbered-title.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/shared/numbered-title.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-00482c32"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/shared/numbered-title.vue"]]);
}


// --------------------
// Request: /components/shared/numbered-title.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/shared/numbered-title.vue ($id_6a77dede)
// Dependencies: 

// --------------------
const $id_2a269152 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".number[data-v-00482c32] {\n  font-size: 2rem;\n  font-weight: bold;\n  line-height: 2.625rem;\n  margin: 0;\n  padding: 0;\n}\n.white[data-v-00482c32] {\n  color: white;\n}\n.accent[data-v-00482c32] {\n  color: #d1c6fe;\n}\n.dark-accent[data-v-00482c32] {\n  color: #9e95bf;\n}\n";
}


// --------------------
// Request: /components/design-concepts/usability-study.vue
// Parents: 
// - /components/design-concepts/design-concepts.vue ($id_cfb829f1)
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// Dependencies: 
// - /components/shared/image.vue ($id_f391b48d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/design-concepts/usability-study.vue?vue&type=style&index=0&scoped=true&lang.less ($id_b4fc8103)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d9faf267 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/shared/image.vue");

const _sfc_main = {
  components: { Image: __vite_ssr_import_0__.default },
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Image = __vite_ssr_import_1__.resolveComponent("Image")

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "usability-study" }, _attrs))} data-v-4bdcdbc8><div class="title" data-v-4bdcdbc8>Usability study:</div><div class="images" data-v-4bdcdbc8><div class="line1" data-v-4bdcdbc8>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Image, {
    src: "/Usability_study/Usability_study_favorite.png",
    alt: "Favorite page study"
  }, null, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Image, {
    src: "/Usability_study/Usability_study_reco.png",
    alt: "Recommended page study"
  }, null, _parent))
  _push(`</div><div class="line2" data-v-4bdcdbc8>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Image, {
    src: "/Usability_study/Usability_study_live_chat.png",
    alt: "Live chat page study"
  }, null, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/design-concepts/usability-study.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/design-concepts/usability-study.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-4bdcdbc8"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/design-concepts/usability-study.vue"]]);
}


// --------------------
// Request: /components/design-concepts/usability-study.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/design-concepts/usability-study.vue ($id_d9faf267)
// Dependencies: 

// --------------------
const $id_b4fc8103 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".usability-study[data-v-4bdcdbc8] {\n  margin-top: 2.875rem;\n}\n.usability-study .title[data-v-4bdcdbc8] {\n  color: #666666;\n  font-weight: 600;\n  font-size: 1.5rem;\n  line-height: 2.063rem;\n  margin-bottom: 0.625rem;\n}\n.usability-study .images .line1 img[data-v-4bdcdbc8]:first-child {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n.usability-study .images .line1 img[data-v-4bdcdbc8]:first-child {\n    margin-right: 3.188rem;\n    max-width: 617px;\n}\n}\n.usability-study .images .line1 img[data-v-4bdcdbc8]:nth-child(2) {\n  max-width: 70%;\n}\n@media screen and (min-width: 768px) {\n.usability-study .images .line1 img[data-v-4bdcdbc8]:nth-child(2) {\n    max-width: 411px;\n}\n}\n.usability-study .images .line2[data-v-4bdcdbc8] {\n  margin-top: -3rem;\n  margin-bottom: -4rem;\n}\n@media screen and (min-width: 768px) {\n.usability-study .images .line2[data-v-4bdcdbc8] {\n    margin-top: 2.688rem;\n    margin-bottom: 0;\n}\n}\n.usability-study .images .line2 img[data-v-4bdcdbc8] {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n.usability-study .images .line2 img[data-v-4bdcdbc8] {\n    max-width: 615px;\n}\n}\n";
}


// --------------------
// Request: /components/design-concepts/design-concepts.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/design-concepts/design-concepts.vue ($id_cfb829f1)
// Dependencies: 

// --------------------
const $id_74bbbff9 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".design-concepts[data-v-4ebbeb7a] {\n  padding: 2.688rem 1.75em 0;\n}\n@media screen and (min-width: 768px) {\n.design-concepts[data-v-4ebbeb7a] {\n    padding: 2.688rem 6.25rem 0;\n}\n}\n.design-concepts .info[data-v-4ebbeb7a] {\n  color: #666666;\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (min-width: 768px) {\n.design-concepts .info[data-v-4ebbeb7a] {\n    flex-direction: row;\n}\n}\n.design-concepts .info .title[data-v-4ebbeb7a] {\n  font-weight: 600;\n  font-size: 1.5rem;\n  line-height: 2.043rem;\n}\n.design-concepts .info .content[data-v-4ebbeb7a] {\n  font-size: 1.25rem;\n  line-height: 1.703rem;\n}\n.design-concepts .info .images[data-v-4ebbeb7a] {\n  position: relative;\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n@media screen and (min-width: 768px) {\n.design-concepts .info .images[data-v-4ebbeb7a] {\n    align-items: flex-start;\n    flex-direction: row;\n}\n}\n.design-concepts .info .images .italic[data-v-4ebbeb7a] {\n  font-style: italic;\n  font-size: 1rem;\n  line-height: 1.375rem;\n  margin-bottom: 1.125rem;\n}\n.design-concepts .info .images .image1[data-v-4ebbeb7a] {\n  max-width: 215px;\n}\n@media screen and (min-width: 768px) {\n.design-concepts .info .images .image1[data-v-4ebbeb7a] {\n    margin-right: 5.5rem;\n}\n}\n.design-concepts .info .images .image2[data-v-4ebbeb7a] {\n  max-width: 199px;\n}\n.design-concepts .info .info1 .arrows[data-v-4ebbeb7a] {\n  display: none;\n}\n@media screen and (min-width: 768px) {\n.design-concepts .info .info1 .arrows[data-v-4ebbeb7a] {\n    display: block;\n}\n}\n.design-concepts .info .info1 .arrows img[data-v-4ebbeb7a] {\n  position: absolute;\n  width: 17px;\n  height: 48px;\n  transform: rotate(-90deg);\n  left: 250px;\n  top: 94px;\n}\n.design-concepts .info .info2[data-v-4ebbeb7a] {\n  margin-top: 1.75rem;\n}\n@media screen and (min-width: 768px) {\n.design-concepts .info .info2[data-v-4ebbeb7a] {\n    margin-top: 0;\n}\n}\n.design-concepts .info .info2 .images[data-v-4ebbeb7a] {\n  flex-direction: column;\n}\n@media screen and (min-width: 768px) {\n.design-concepts .info .info2 .images[data-v-4ebbeb7a] {\n    margin-top: 4.5rem;\n}\n}\n.design-concepts .info .info2 .images .line1[data-v-4ebbeb7a] {\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (min-width: 768px) {\n.design-concepts .info .info2 .images .line1[data-v-4ebbeb7a] {\n    flex-direction: row;\n}\n}\n.design-concepts .info .info2 .images .line1 img[data-v-4ebbeb7a]:nth-child(2),\n.design-concepts .info .info2 .images .line1 img[data-v-4ebbeb7a]:nth-child(3) {\n  display: none;\n}\n@media screen and (min-width: 768px) {\n.design-concepts .info .info2 .images .line1 img[data-v-4ebbeb7a]:nth-child(2),\n  .design-concepts .info .info2 .images .line1 img[data-v-4ebbeb7a]:nth-child(3) {\n    display: block;\n}\n}\n.design-concepts .info .info2 .images .line1 img[data-v-4ebbeb7a]:first-child {\n  width: 149px;\n  border: 5px solid #d4dbf9;\n}\n@media screen and (min-width: 768px) {\n.design-concepts .info .info2 .images .line1 img[data-v-4ebbeb7a] {\n    height: 100px;\n}\n.design-concepts .info .info2 .images .line1 img[data-v-4ebbeb7a]:first-child {\n    width: 179px;\n    border-right: none;\n}\n.design-concepts .info .info2 .images .line1 img[data-v-4ebbeb7a]:nth-child(2) {\n    width: 173px;\n}\n.design-concepts .info .info2 .images .line1 img[data-v-4ebbeb7a]:nth-child(3) {\n    width: 177px;\n}\n.design-concepts .info .info2 .images .line1 img[data-v-4ebbeb7a] {\n    border-top: 5px solid #d4dbf9;\n    border-left: 5px solid #d4dbf9;\n    border-bottom: 5px solid #d4dbf9;\n}\n.design-concepts .info .info2 .images .line1 img[data-v-4ebbeb7a]:nth-child(3) {\n    border-right: 5px solid #d4dbf9;\n}\n}\n.design-concepts .info .info2 .images .line2[data-v-4ebbeb7a] {\n  margin-top: 4.875rem;\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (min-width: 768px) {\n.design-concepts .info .info2 .images .line2[data-v-4ebbeb7a] {\n    flex-direction: row;\n}\n}\n.design-concepts .info .info2 .images .line2 img[data-v-4ebbeb7a]:first-child {\n  max-width: 183px;\n}\n@media screen and (min-width: 768px) {\n.design-concepts .info .info2 .images .line2 img[data-v-4ebbeb7a]:first-child {\n    margin-right: 2.125rem;\n}\n}\n.design-concepts .info .info2 .images .line2 img[data-v-4ebbeb7a]:nth-child(2) {\n  max-width: 90px;\n  display: none;\n}\n@media screen and (min-width: 768px) {\n.design-concepts .info .info2 .images .line2 img[data-v-4ebbeb7a]:nth-child(2) {\n    margin-right: 2.75rem;\n    display: block;\n}\n}\n.design-concepts .info .info2 .images .line2 img[data-v-4ebbeb7a]:nth-child(3) {\n  max-width: 180px;\n  display: none;\n}\n@media screen and (min-width: 768px) {\n.design-concepts .info .info2 .images .line2 img[data-v-4ebbeb7a]:nth-child(3) {\n    display: block;\n}\n}\n.design-concepts .info .info2 .images .arrows img[data-v-4ebbeb7a] {\n  width: 17px;\n  height: 48px;\n  position: absolute;\n  top: 120px;\n}\n@media screen and (min-width: 1360px) {\n.design-concepts .info .info2 .images .arrows img[data-v-4ebbeb7a] {\n    top: 128px;\n}\n}\n.design-concepts .info .info2 .images .arrows img[data-v-4ebbeb7a]:first-child {\n  left: 75px;\n  top: 130px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n@media screen and (min-width: 768px) {\n.design-concepts .info .info2 .images .arrows img[data-v-4ebbeb7a]:first-child {\n    left: 75px;\n    top: 120px;\n    transform: none;\n}\n}\n@media screen and (min-width: 1360px) {\n.design-concepts .info .info2 .images .arrows img[data-v-4ebbeb7a]:first-child {\n    top: 128px;\n}\n}\n.design-concepts .info .info2 .images .arrows img[data-v-4ebbeb7a]:nth-child(2) {\n  left: 262px;\n  display: none;\n}\n@media screen and (min-width: 768px) {\n.design-concepts .info .info2 .images .arrows img[data-v-4ebbeb7a]:nth-child(2) {\n    display: block;\n}\n}\n.design-concepts .info .info2 .images .arrows img[data-v-4ebbeb7a]:nth-child(3) {\n  left: 420px;\n  display: none;\n}\n@media screen and (min-width: 768px) {\n.design-concepts .info .info2 .images .arrows img[data-v-4ebbeb7a]:nth-child(3) {\n    display: block;\n}\n}\n";
}


// --------------------
// Request: /components/desk-research/desk-research.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /components/shared/numbered-title.vue ($id_6a77dede)
// - /components/shared/image.vue ($id_f391b48d)
// - /components/shared/title.vue ($id_bb43ca7c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/desk-research/desk-research.vue?vue&type=style&index=0&scoped=true&lang.less ($id_9d1fbb39)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7af1af8e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/shared/numbered-title.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/shared/image.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/shared/title.vue");

const _sfc_main = {
  components: { NumberedTitle: __vite_ssr_import_0__.default, Image: __vite_ssr_import_1__.default, Title1: __vite_ssr_import_2__.default },
};

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NumberedTitle = __vite_ssr_import_3__.resolveComponent("NumberedTitle")
  const _component_Image = __vite_ssr_import_3__.resolveComponent("Image")
  const _component_Title1 = __vite_ssr_import_3__.resolveComponent("Title1")

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "desk-research" }, _attrs))} data-v-cd7ff9b8>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NumberedTitle, {
    number: "07",
    title: "Desk research",
    color: "dark-accent"
  }, null, _parent))
  _push(`<div class="graphs" data-v-cd7ff9b8><div class="images" data-v-cd7ff9b8><div class="image1" data-v-cd7ff9b8><div class="italic" data-v-cd7ff9b8> For each of the following features, rate the option that is relevant to you: </div>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
    src: "/Desk_research/Graph_1.png",
    alt: "Features rating"
  }, null, _parent))
  _push(`</div><div class="image2" data-v-cd7ff9b8><div class="italic" data-v-cd7ff9b8> How many times did you drink a protein shake last week? </div>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
    src: "/Desk_research/Graph_2.png",
    alt: "Features rating"
  }, null, _parent))
  _push(`</div></div><div class="results" data-v-cd7ff9b8><div class="result1" data-v-cd7ff9b8>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Title1, {
    title: "Key findings",
    color: "dark-accent"
  }, null, _parent))
  _push(`<ul data-v-cd7ff9b8><li data-v-cd7ff9b8> All participants drink a protein shake because it helps them supplement the amount of protein they need. </li><li data-v-cd7ff9b8> They are interested in a platform through which they can order a protein shake, each time in a different flavor. </li><li data-v-cd7ff9b8>The goal of all participants training is physical growth.</li></ul></div><div class="result2" data-v-cd7ff9b8>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Title1, {
    title: "Pain points",
    color: "dark-accent"
  }, null, _parent))
  _push(`<ul data-v-cd7ff9b8><li data-v-cd7ff9b8> Once a trainee bought a shake, he is forced to use the same flavor for a long time. </li><li data-v-cd7ff9b8> Trainees doesn’t like the process of making the shakes (and cleaning afterwards). </li><li data-v-cd7ff9b8> Trainees will now be able to use the shake instantly after the workout (instead of use it only after they get home &amp; make it). </li></ul></div></div></div></div>`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/desk-research/desk-research.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/desk-research/desk-research.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-cd7ff9b8"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/desk-research/desk-research.vue"]]);
}


// --------------------
// Request: /components/desk-research/desk-research.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/desk-research/desk-research.vue ($id_7af1af8e)
// Dependencies: 

// --------------------
const $id_9d1fbb39 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".desk-research[data-v-cd7ff9b8] {\n  padding: 1rem 1.75rem 0;\n  color: #666666;\n}\n@media screen and (min-width: 768px) {\n.desk-research[data-v-cd7ff9b8] {\n    padding: 1rem 6.25rem 0 6.25rem;\n}\n}\n.desk-research .graphs .images[data-v-cd7ff9b8] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 2rem;\n}\n@media screen and (min-width: 768px) {\n.desk-research .graphs .images[data-v-cd7ff9b8] {\n    flex-direction: row;\n}\n}\n.desk-research .graphs .images .italic[data-v-cd7ff9b8] {\n  font-style: italic;\n  font-size: 1rem;\n  line-height: 1.362rem;\n  margin-bottom: 1rem;\n  color: #666666;\n}\n@media screen and (min-width: 768px) {\n.desk-research .graphs .images .italic[data-v-cd7ff9b8] {\n    margin-bottom: 2.25rem;\n}\n}\n.desk-research .graphs .images .image1[data-v-cd7ff9b8] {\n  max-width: 100%;\n  margin-bottom: 2rem;\n}\n@media screen and (min-width: 768px) {\n.desk-research .graphs .images .image1[data-v-cd7ff9b8] {\n    margin-right: 4.625rem;\n    margin-bottom: 0;\n    max-width: 509px;\n}\n}\n.desk-research .graphs .images .image2 .italic[data-v-cd7ff9b8] {\n  margin-bottom: 1rem;\n}\n@media screen and (min-width: 768px) {\n.desk-research .graphs .images .image2 .italic[data-v-cd7ff9b8] {\n    margin-bottom: 2.75rem;\n}\n}\n.desk-research .graphs .images .image2 img[data-v-cd7ff9b8] {\n  max-width: 285px;\n}\n.desk-research .graphs .results[data-v-cd7ff9b8] {\n  display: flex;\n  flex-direction: column;\n}\n.desk-research .graphs .results .result1[data-v-cd7ff9b8],\n.desk-research .graphs .results .result2[data-v-cd7ff9b8] {\n  margin: 0;\n}\n@media screen and (min-width: 768px) {\n.desk-research .graphs .results[data-v-cd7ff9b8] {\n    flex-direction: row;\n}\n.desk-research .graphs .results .result2[data-v-cd7ff9b8] {\n    margin-left: 4.625rem;\n}\n}\n";
}


// --------------------
// Request: /components/hero/hero.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/hero/steps.vue ($id_500a5757)
// - /components/hero/phones.vue ($id_77a1c138)
// - /components/shared/image.vue ($id_f391b48d)
// - /components/shared/figma-link.vue ($id_b0e3c6da)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/hero/hero.vue?vue&type=style&index=0&scoped=true&lang.less ($id_439029ee)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2440c08b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/hero/steps.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/hero/phones.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/shared/image.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/shared/figma-link.vue");


const _sfc_main = {
  components: { Steps: __vite_ssr_import_1__.default, Phones: __vite_ssr_import_2__.default, Image: __vite_ssr_import_3__.default, FigmaLink: __vite_ssr_import_4__.default },
  methods: {
    openClickable() {
      window.open(
        "https://www.figma.com/proto/1oEBI4jpdVJlQS7cBGkBB6/Final-Project?node-id=536%3A34034&scaling=min-zoom&page-id=536%3A33975&starting-point-node-id=536%3A34034&show-proto-sidebar=1",
        "_blank"
      );
    },
    openProject() {
      window.open("https://www.figma.com/file/1oEBI4jpdVJlQS7cBGkBB6/Final-Project?node-id=536%3A33975",
        "_blank"
      );
    },
  },
};

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FigmaLink = __vite_ssr_import_5__.resolveComponent("FigmaLink")
  const _component_Steps = __vite_ssr_import_5__.resolveComponent("Steps")
  const _component_Phones = __vite_ssr_import_5__.resolveComponent("Phones")

  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "wrapper" }, _attrs))} data-v-c07c5a78><div class="hero" data-v-c07c5a78><div class="title" data-v-c07c5a78>Mr. Pro Shake</div><div class="sub-title" data-v-c07c5a78> The new way to order protein shakes, <br data-v-c07c5a78><b data-v-c07c5a78>discover</b> a new taste every day. </div><div class="figma-links" data-v-c07c5a78>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_FigmaLink, null, {
    default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Open the <br data-v-c07c5a78${
          _scopeId
        }><b data-v-c07c5a78${
          _scopeId
        }>Figma</b> project `)
      } else {
        return [
          __vite_ssr_import_5__.createTextVNode(" Open the "),
          __vite_ssr_import_5__.createVNode("br"),
          __vite_ssr_import_5__.createVNode("b", null, "Figma"),
          __vite_ssr_import_5__.createTextVNode(" project ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<div class="second-link" data-v-c07c5a78>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_FigmaLink, null, {
    default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Clickable <br data-v-c07c5a78${
          _scopeId
        }><b data-v-c07c5a78${
          _scopeId
        }>Figma</b> project `)
      } else {
        return [
          __vite_ssr_import_5__.createTextVNode(" Clickable "),
          __vite_ssr_import_5__.createVNode("br"),
          __vite_ssr_import_5__.createVNode("b", null, "Figma"),
          __vite_ssr_import_5__.createTextVNode(" project ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Steps, null, null, _parent))
  _push(`<div class="phones-wrapper" data-v-c07c5a78>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Phones, null, null, _parent))
  _push(`</div></div>`)
}

const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/hero/hero.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/hero/hero.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-c07c5a78"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/hero/hero.vue"]]);
}


// --------------------
// Request: /components/hero/steps.vue
// Parents: 
// - /components/hero/hero.vue ($id_2440c08b)
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// Dependencies: 
// - /components/shared/title.vue ($id_bb43ca7c)
// - /components/shared/numbered-title.vue ($id_6a77dede)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/hero/steps.vue?vue&type=style&index=0&lang.less ($id_9e544218)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_500a5757 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/shared/title.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/shared/numbered-title.vue");

const _sfc_main = {
  components: { Title1: __vite_ssr_import_0__.default, NumberedTitle: __vite_ssr_import_1__.default },
};

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NumberedTitle = __vite_ssr_import_2__.resolveComponent("NumberedTitle")

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "steps" }, _attrs))}><div class="step-1"><div class="step-number">01</div>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NumberedTitle, {
    number: "01",
    title: "About project",
    color: "white"
  }, null, _parent))
  _push(`<div class="explanation"> Today, trainees purchase a package (2-3 months) of protein in one flavor that they must use for a long time and they also need to prepare it at home (there is no option to prepare it before). We solve this problem by an app where you can order a protein shake up to the training place with a wide range of flavors so that the trainee can choose a different smoothie each day and thus vary the flavors. </div></div><div class="step-2"><div class="step-number">02</div>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NumberedTitle, {
    number: "02",
    title: "What i have done",
    color: "white"
  }, null, _parent))
  _push(`<div class="explanation"><ul><li>Researched on designing for age 20+</li><li>Conducted user research</li><li>Generated user personas</li><li>Created wireframes</li><li>Made prototypes</li><li>Made testes in Lookback</li></ul></div></div><div class="step-3"><div class="step-number">03</div>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NumberedTitle, {
    number: "03",
    title: "Method of approach",
    color: "white"
  }, null, _parent))
  _push(`<div class="explanation"><div class="column"><div><b>Inspiration</b></div><div> User research Interview &amp; questionare Hypothesis generation Secondary research Analogous Inspiration </div></div><div class="column"><div><b>Ideation</b></div><div> Braindumping Creating insights How Might We Top 5 considartions Creating guidlines Rapid prototyping </div></div><div class="column"><div><b>Implementation</b></div><div>Information architecture High fidelity prototype</div></div></div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/hero/steps.vue?vue&type=style&index=0&lang.less");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/hero/steps.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/hero/steps.vue"]]);
}


// --------------------
// Request: /components/hero/steps.vue?vue&type=style&index=0&lang.less
// Parents: 
// - /components/hero/steps.vue ($id_500a5757)
// Dependencies: 

// --------------------
const $id_9e544218 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".steps {\n  position: relative;\n  background: #d1c6fe;\n  color: white;\n  padding: 1.75rem;\n}\n@media screen and (min-width: 768px) {\n.steps {\n    padding: 188px 6.25rem 60px 6.25rem;\n    border-radius: 0px 0px 200px 200px;\n}\n}\n.steps .step-number {\n  display: none;\n  position: absolute;\n  font-size: 15.625rem;\n  color: rgba(255, 255, 255, 0.2);\n  transform: matrix(-1, 0, 0, 1, 0, 0);\n  line-height: 21.25rem;\n  font-weight: bold;\n}\n@media screen and (min-width: 768px) {\n.steps .step-number {\n    display: block;\n}\n}\n.steps .step-1 {\n  position: relative;\n  margin-bottom: 3rem;\n}\n@media screen and (min-width: 768px) {\n.steps .step-1 {\n    margin-bottom: 0;\n}\n}\n.steps .step-1 .step-number {\n  left: -9%;\n  top: -72px;\n}\n@media screen and (min-width: 768px) {\n.steps .step-1 .step-number {\n    top: -49px;\n}\n}\n@media screen and (min-width: 1360px) {\n.steps .step-1 .step-number {\n    top: -186px;\n}\n}\n.steps .step-2 {\n  position: relative;\n  margin-top: 2rem;\n  margin-bottom: 3rem;\n}\n@media screen and (min-width: 768px) {\n.steps .step-2 {\n    margin-bottom: 9.375rem;\n}\n}\n.steps .step-2 .step-number {\n  left: -4%;\n  top: -72px;\n}\n@media screen and (min-width: 768px) {\n.steps .step-2 .step-number {\n    top: 30%;\n    left: 23%;\n}\n}\n@media screen and (min-width: 1360px) {\n.steps .step-2 .step-number {\n    top: 49%;\n    left: 28%;\n}\n}\n.steps .explanation {\n  max-width: 360px;\n  font-size: 1.25rem;\n  font-weight: 600;\n  line-height: 1.703rem;\n}\n.steps .step-3 {\n  position: relative;\n}\n@media screen and (min-width: 768px) {\n.steps .step-3 {\n    margin: 0 10% 5rem 24%;\n    width: 70%;\n}\n}\n.steps .step-3 .step-number {\n  left: -4%;\n  top: -72px;\n}\n@media screen and (min-width: 768px) {\n.steps .step-3 .step-number {\n    top: 0;\n    left: -37%;\n}\n}\n.steps .step-3 .explanation {\n  justify-content: space-between;\n  max-width: 100%;\n}\n.steps .step-3 .explanation .column {\n  margin-top: 1rem;\n  font-size: 1.25rem;\n  line-height: 1.703rem;\n  flex: 0 0 auto;\n}\n.steps .step-3 .explanation .column b {\n  font-size: 1.5rem;\n  line-height: 2.043rem;\n}\n@media screen and (min-width: 768px) {\n.steps .step-3 .explanation {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n.steps .step-3 .explanation .column {\n    margin-top: 0;\n    width: 30%;\n}\n}\n";
}


// --------------------
// Request: /components/hero/phones.vue
// Parents: 
// - /components/hero/hero.vue ($id_2440c08b)
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// Dependencies: 
// - /components/shared/image.vue ($id_f391b48d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/hero/phones.vue?vue&type=style&index=0&scoped=true&lang.less ($id_31d46d48)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_77a1c138 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/shared/image.vue");

const _sfc_main = {
  components: { Image: __vite_ssr_import_0__.default },
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Image = __vite_ssr_import_1__.resolveComponent("Image")

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "wrapper" }, _attrs))} data-v-06b7918f><div class="background" data-v-06b7918f></div><div class="phone phone1" data-v-06b7918f>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Image, {
    src: "/Color_mockups/orange_reco.png",
    alt: "Recommended shake",
    class: "img"
  }, null, _parent))
  _push(`</div><div class="phone phone2" data-v-06b7918f>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Image, {
    src: "/Color_mockups/choose_your_favorite.png",
    alt: "Favorites",
    class: "img"
  }, null, _parent))
  _push(`</div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/hero/phones.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/hero/phones.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-06b7918f"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/hero/phones.vue"]]);
}


// --------------------
// Request: /components/hero/phones.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/hero/phones.vue ($id_77a1c138)
// Dependencies: 

// --------------------
const $id_31d46d48 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".wrapper[data-v-06b7918f] {\n  width: 821px;\n  height: 1267px;\n  position: relative;\n}\n.wrapper .background[data-v-06b7918f] {\n  background-color: #d3e1fd;\n  border-radius: 100px 0px 0px 100px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 77%;\n}\n.wrapper .phone[data-v-06b7918f] {\n  position: absolute;\n  transform: translateY(-50%);\n  width: 392px;\n  height: 792px;\n}\n.wrapper .phone1[data-v-06b7918f] {\n  top: 60%;\n  left: 40%;\n}\n.wrapper .phone2[data-v-06b7918f] {\n  top: 50%;\n  left: 0%;\n}\n@media screen and (min-width: 768px) {\n.wrapper .phone2[data-v-06b7918f] {\n    left: 8%;\n}\n}\n@media screen and (min-width: 1360px) {\n.wrapper .phone2[data-v-06b7918f] {\n    left: 0%;\n}\n}\n";
}


// --------------------
// Request: /components/shared/figma-link.vue
// Parents: 
// - /components/hero/hero.vue ($id_2440c08b)
// - /components/resume/resume-image.vue ($id_70328d53)
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// Dependencies: 
// - /components/shared/image.vue ($id_f391b48d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/shared/figma-link.vue?vue&type=style&index=0&scoped=true&lang.less ($id_9071c503)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b0e3c6da = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/shared/image.vue");

const _sfc_main = {
  components: { Image: __vite_ssr_import_0__.default },
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Image = __vite_ssr_import_1__.resolveComponent("Image")

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "figma-link" }, _attrs))} data-v-75ca9fce><div data-v-75ca9fce>`)
  __vite_ssr_import_2__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div><div data-v-75ca9fce>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Image, {
    src: "/shared/figma.png",
    alt: "Figma"
  }, null, _parent))
  _push(`</div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/shared/figma-link.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/shared/figma-link.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-75ca9fce"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/shared/figma-link.vue"]]);
}


// --------------------
// Request: /components/shared/figma-link.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/shared/figma-link.vue ($id_b0e3c6da)
// Dependencies: 

// --------------------
const $id_9071c503 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".figma-link[data-v-75ca9fce] {\n  cursor: pointer;\n  font-size: 0.625rem;\n  line-height: 0.8rem;\n  text-align: center;\n}\n.figma-link b[data-v-75ca9fce] {\n  font-weight: 700;\n}\n.figma-link img[data-v-75ca9fce] {\n  margin-top: 0.5rem;\n  width: 64px;\n  height: 64px;\n}\n";
}


// --------------------
// Request: /components/hero/hero.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/hero/hero.vue ($id_2440c08b)
// Dependencies: 

// --------------------
const $id_439029ee = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".wrapper[data-v-c07c5a78] {\n  position: relative;\n}\n@media screen and (min-width: 768px) {\n.wrapper[data-v-c07c5a78] {\n    margin-top: -239px;\n}\n}\n.wrapper .hero[data-v-c07c5a78] {\n  padding: 1.5rem 1.5rem 0;\n}\n@media screen and (min-width: 768px) {\n.wrapper .hero[data-v-c07c5a78] {\n    padding: 9rem 6.25rem 0 6.25rem;\n}\n}\n.wrapper .hero .title[data-v-c07c5a78] {\n  margin-top: 1.375rem;\n  margin-bottom: 1rem;\n  font-size: 3rem;\n  color: #9e95bf;\n  font-weight: 700;\n  line-height: 4.086rem;\n}\n.wrapper .hero .sub-title[data-v-c07c5a78] {\n  color: #9e95bf;\n  font-size: 1.5rem;\n  line-height: 2.043rem;\n  margin-bottom: 2rem;\n}\n.wrapper .hero .sub-title b[data-v-c07c5a78] {\n  font-weight: 700;\n}\n.wrapper .phones-wrapper[data-v-c07c5a78] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: none;\n}\n@media screen and (min-width: 768px) {\n.wrapper .phones-wrapper[data-v-c07c5a78] {\n    display: block;\n}\n}\n.wrapper .figma-links[data-v-c07c5a78] {\n  color: #a259ff;\n  display: flex;\n  margin-bottom: 2rem;\n}\n@media screen and (min-width: 768px) {\n.wrapper .figma-links[data-v-c07c5a78] {\n    color: #9e95bf;\n}\n}\n.wrapper .figma-links .second-link[data-v-c07c5a78] {\n  margin-left: 2rem;\n}\n";
}


// --------------------
// Request: /components/resume/resume-image.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /components/resume/resume.vue ($id_eeb28070)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/shared/image.vue ($id_f391b48d)
// - /components/shared/figma-link.vue ($id_b0e3c6da)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/resume/resume-image.vue?vue&type=style&index=0&scoped=true&lang.less ($id_a0034e96)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_70328d53 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/shared/image.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/shared/figma-link.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/shared/image.vue");

const _sfc_main = {
  components: { Image: __vite_ssr_import_1__.default, FigmaLink: __vite_ssr_import_2__.default, Image1: __vite_ssr_import_3__.default },
  methods: {
    openWebsiteProject() {
      window.open(
        "https://www.figma.com/file/1oEBI4jpdVJlQS7cBGkBB6/Final-Project?node-id=703%3A40528",
        "_blank"
      );
    },
  },
};

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FigmaLink = __vite_ssr_import_4__.resolveComponent("FigmaLink")
  const _component_Image = __vite_ssr_import_4__.resolveComponent("Image")

  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "hero" }, _attrs))} data-v-08ee70f2><div class="website-project-figma-link" data-v-08ee70f2>`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_FigmaLink, null, {
    default: __vite_ssr_import_4__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Website <br data-v-08ee70f2${
          _scopeId
        }><b data-v-08ee70f2${
          _scopeId
        }>Figma</b> project `)
      } else {
        return [
          __vite_ssr_import_4__.createTextVNode(" Website "),
          __vite_ssr_import_4__.createVNode("br"),
          __vite_ssr_import_4__.createVNode("b", null, "Figma"),
          __vite_ssr_import_4__.createTextVNode(" project ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><div class="uxui" data-v-08ee70f2><span data-v-08ee70f2>UX</span><span data-v-08ee70f2>UI</span></div><div class="info" data-v-08ee70f2>`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_Image, {
    src: "/me.png",
    alt: "me"
  }, null, _parent))
  _push(`<div class="titles" data-v-08ee70f2><div class="portfolio" data-v-08ee70f2>PORTFOLIO</div><div class="description" data-v-08ee70f2> Hi, I&#39;m Hasida Zohar <br data-v-08ee70f2>a Graphic Designer &amp;<br class="mobile-only" data-v-08ee70f2> UX specialist. <br data-v-08ee70f2>I&#39;d like to combine my two biggest loves, design and psychology, to create something amazing with you. <br data-v-08ee70f2>Skills: Illustrator, Photoshop, InDesign, Sketch, Figma, Zeplin, Miro, Lookback and more. </div></div></div><div class="shapes" data-v-08ee70f2><div class="circle circle1" data-v-08ee70f2></div><div class="circle circle2" data-v-08ee70f2></div><div class="circle circle3" data-v-08ee70f2></div><div class="circle circle4" data-v-08ee70f2></div><div class="circle circle5" data-v-08ee70f2></div><div class="circle circle6" data-v-08ee70f2></div><div class="circle circle7" data-v-08ee70f2></div><div class="circle circle8" data-v-08ee70f2></div><div class="square" data-v-08ee70f2></div><div class="square2" data-v-08ee70f2></div><div class="triangular triangular1" data-v-08ee70f2></div><div class="triangular triangular2" data-v-08ee70f2></div></div></div>`)
}

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/resume/resume-image.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/resume/resume-image.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-08ee70f2"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/resume/resume-image.vue"]]);
}


// --------------------
// Request: /components/resume/resume-image.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/resume/resume-image.vue ($id_70328d53)
// Dependencies: 

// --------------------
const $id_a0034e96 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".hero[data-v-08ee70f2] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (min-width: 768px) {\n.hero[data-v-08ee70f2] {\n    flex-direction: row;\n    height: 1450px;\n}\n}\n.hero > div[data-v-08ee70f2] {\n  flex: 1 0 100%;\n}\n@media screen and (min-width: 768px) {\n.hero > div[data-v-08ee70f2] {\n    flex: 1 0 50%;\n}\n}\n.hero .uxui[data-v-08ee70f2] {\n  display: none;\n  font-size: 21.875rem;\n  color: black;\n}\n.hero .uxui span[data-v-08ee70f2]:nth-child(2) {\n  color: #d1c6fe;\n}\n@media screen and (min-width: 768px) {\n.hero .uxui[data-v-08ee70f2] {\n    display: block;\n    transform: rotate(90deg);\n    position: absolute;\n    top: 303px;\n    left: -20%;\n    z-index: 10;\n}\n}\n.hero .info[data-v-08ee70f2] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 11rem;\n}\n.hero .info img[data-v-08ee70f2] {\n  width: 50vw;\n}\n@media screen and (min-width: 768px) {\n.hero .info[data-v-08ee70f2] {\n    margin-top: 0;\n    margin-left: 20%;\n    justify-content: flex-start;\n}\n.hero .info img[data-v-08ee70f2] {\n    width: 37vw;\n}\n}\n.hero .info .titles[data-v-08ee70f2] {\n  position: relative;\n  z-index: 1;\n  margin-top: 3rem;\n  text-align: center;\n}\n@media screen and (min-width: 768px) {\n.hero .info .titles[data-v-08ee70f2] {\n    text-align: left;\n    margin-top: -2rem;\n}\n}\n.hero .info .titles .portfolio[data-v-08ee70f2] {\n  font-size: 3.625rem;\n  line-height: 4.625rem;\n  font-weight: 400;\n  margin-top: -3rem;\n  text-align: center;\n}\n@media screen and (min-width: 768px) {\n.hero .info .titles .portfolio[data-v-08ee70f2] {\n    line-height: 7.625rem;\n    font-size: 5.625rem;\n    margin-top: 0;\n}\n}\n.hero .info .titles .description[data-v-08ee70f2] {\n  font-weight: 300;\n  font-size: 1.5rem;\n  line-height: 2.5rem;\n  text-align: center;\n  max-width: 550px;\n}\n@media screen and (min-width: 768px) {\n.hero .info .titles .description[data-v-08ee70f2] {\n    font-size: 2rem;\n    line-height: 3.064rem;\n}\n}\n.hero .shapes[data-v-08ee70f2] {\n  display: none;\n  position: absolute;\n}\n@media screen and (min-width: 768px) {\n.hero .shapes[data-v-08ee70f2] {\n    display: block;\n    width: 1360px;\n    height: 1360px;\n    top: 0;\n    left: 0;\n    margin-left: -6.25rem;\n}\n.hero .shapes .circle[data-v-08ee70f2],\n  .hero .shapes .square[data-v-08ee70f2],\n  .hero .shapes .triangular[data-v-08ee70f2] {\n    position: absolute;\n}\n.hero .shapes .circle[data-v-08ee70f2] {\n    border-radius: 100%;\n}\n.hero .shapes .triangular[data-v-08ee70f2] {\n    width: 0;\n    height: 0;\n}\n.hero .shapes .circle1[data-v-08ee70f2] {\n    background-color: #d3e1fdb0;\n    top: 36px;\n    left: 37px;\n    width: 132px;\n    height: 132px;\n}\n.hero .shapes .circle2[data-v-08ee70f2] {\n    background-color: #d3e1fd5e;\n    top: 111px;\n    left: 102px;\n    width: 132px;\n    height: 132px;\n}\n.hero .shapes .circle3[data-v-08ee70f2] {\n    background-color: rgba(209, 198, 254, 0.19);\n    top: 71px;\n    left: 421px;\n    width: 172px;\n    height: 172px;\n}\n.hero .shapes .circle4[data-v-08ee70f2] {\n    background-color: rgba(209, 198, 254, 0.4);\n    top: 153px;\n    right: 169px;\n    width: 172px;\n    height: 172px;\n}\n}\n.hero .shapes .circle5[data-v-08ee70f2] {\n  background-color: rgba(211, 225, 253, 0.37);\n  top: 59px;\n  right: 26px;\n  width: 132px;\n  height: 132px;\n}\n.hero .shapes .circle6[data-v-08ee70f2] {\n  background-color: #f4f6ff;\n  top: 598px;\n  right: 72px;\n  width: 69px;\n  height: 69px;\n}\n.hero .shapes .circle7[data-v-08ee70f2] {\n  background-color: #f4f6ff;\n  top: 272px;\n  left: 69px;\n  width: 69px;\n  height: 69px;\n}\n.hero .shapes .circle8[data-v-08ee70f2] {\n  top: 895px;\n  right: 316px;\n  width: 260px;\n  height: 260.63px;\n  background: rgba(211, 225, 253, 0.41);\n}\n.hero .shapes .square[data-v-08ee70f2] {\n  background-color: #f4f6ff;\n  top: 382px;\n  left: 385px;\n  width: 80px;\n  height: 80px;\n}\n.hero .shapes .square2[data-v-08ee70f2] {\n  top: 1273px;\n  left: 100px;\n  width: 141px;\n  height: 47.11px;\n  background: #f4f6ff;\n  position: absolute;\n}\n.hero .shapes .triangular1[data-v-08ee70f2] {\n  transform: rotate(180deg);\n  top: 717px;\n  left: 420px;\n  border-left: 40px solid transparent;\n  border-right: 40px solid transparent;\n  border-bottom: 70px solid rgba(211, 225, 253, 0.46);\n}\n.hero .shapes .triangular2[data-v-08ee70f2] {\n  transform: rotate(90deg);\n  top: 827px;\n  right: 91px;\n  border-left: 70px solid transparent;\n  border-right: 70px solid transparent;\n  border-bottom: 140px solid rgba(209, 198, 254, 0.42);\n}\n.hero .website-project-figma-link[data-v-08ee70f2] {\n  position: absolute;\n  top: 1rem;\n  left: -3rem;\n  z-index: 15;\n  color: #a259ff;\n  padding: 1rem;\n}\n@media screen and (min-width: 768px) {\n.hero .website-project-figma-link[data-v-08ee70f2] {\n    color: #9e95bf;\n    left: 70px;\n    top: 207px;\n}\n}\n@media screen and (min-width: 768px) {\n.hero .mobile-only[data-v-08ee70f2] {\n    display: none;\n}\n}\n";
}


// --------------------
// Request: /components/resume/resume-new.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/resume/resume-new.vue?vue&type=style&index=0&scoped=true&lang.less ($id_c2efa316)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7043d697 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const _sfc_main = {

}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "resume" }, _attrs))} data-v-087c5a77></div>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/resume/resume-new.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/resume/resume-new.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-087c5a77"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/resume/resume-new.vue"]]);
}


// --------------------
// Request: /components/resume/resume-new.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/resume/resume-new.vue ($id_7043d697)
// Dependencies: 

// --------------------
const $id_c2efa316 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".resume[data-v-087c5a77] {\n  background-color: linear-gradient(179deg, #d1c6fe40, #d3e1fd7d);\n}\n";
}


// --------------------
// Request: /components/resume/resume.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /components/resume/resume-image.vue ($id_70328d53)
// - /components/resume/resume-info/resume-info.vue ($id_76ed9036)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/resume/resume.vue?vue&type=style&index=0&scoped=true&lang.less ($id_f982d83c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_eeb28070 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/resume/resume-image.vue");


const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/resume/resume-image.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/resume/resume-info/resume-info.vue");

const _sfc_main = {
  components: { ResumeImage: __vite_ssr_import_1__.default, ResumeInfo: __vite_ssr_import_2__.default }
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ResumeImage = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "resume" }, _attrs))} data-v-73fb03a4>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_ResumeImage, null, null, _parent))
  _push(`<!-- <ResumeInfo /> --></div>`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/resume/resume.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/resume/resume.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-73fb03a4"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/resume/resume.vue"]]);
}


// --------------------
// Request: /components/resume/resume-info/resume-info.vue
// Parents: 
// - /components/resume/resume.vue ($id_eeb28070)
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// Dependencies: 
// - /components/shared/title.vue ($id_bb43ca7c)
// - /components/resume/resume-info/resume-info-experience.vue ($id_a033c4d9)
// - /components/resume/resume-info/resume-info-education.vue ($id_dd1f087e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/resume/resume-info/resume-info.vue?vue&type=style&index=0&scoped=true&lang.less ($id_9d7189a8)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_76ed9036 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/shared/title.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/resume/resume-info/resume-info-experience.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/resume/resume-info/resume-info-education.vue");

const _sfc_main = {
  components: { Title: __vite_ssr_import_0__.default, ResumeInfoExperience1: __vite_ssr_import_1__.default, ResumeInfoEducation1: __vite_ssr_import_2__.default }
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ResumeInfoExperience1 = __vite_ssr_import_3__.resolveComponent("ResumeInfoExperience1")
  const _component_ResumeInfoEducation1 = __vite_ssr_import_3__.resolveComponent("ResumeInfoEducation1")

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "wrapper" }, _attrs))} data-v-b1957ab4>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_ResumeInfoExperience1, null, null, _parent))
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_ResumeInfoEducation1, null, null, _parent))
  _push(`</div>`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/resume/resume-info/resume-info.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/resume/resume-info/resume-info.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-b1957ab4"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/resume/resume-info/resume-info.vue"]]);
}


// --------------------
// Request: /components/resume/resume-info/resume-info-experience.vue
// Parents: 
// - /components/resume/resume-info/resume-info.vue ($id_76ed9036)
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// Dependencies: 
// - /components/shared/title.vue ($id_bb43ca7c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/resume/resume-info/resume-info-experience.vue?vue&type=style&index=0&scoped=true&lang.less ($id_d6c6226d)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a033c4d9 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/shared/title.vue");

const _sfc_main = {
  components: { Title: __vite_ssr_import_0__.default }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title = __vite_ssr_import_1__.resolveComponent("Title")

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "experience" }, _attrs))} data-v-fb2320be>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Title, {
    color: "accent",
    title: "Experience"
  }, null, _parent))
  _push(`<div class="udacity" data-v-fb2320be><b data-v-fb2320be> Udacity online program- UX bootcamp 2021 <br data-v-fb2320be>Final project: Mr Pro Shake </b><br data-v-fb2320be><span data-v-fb2320be>I designed a Protein Shake Application where trainees can assemble or choose a Protein Shake online and have it delivered right to their gym at the end of their workout.</span><br data-v-fb2320be><b data-v-fb2320be>During this project i used:</b><ul data-v-fb2320be><li data-v-fb2320be>Figma for prototyping.</li><li data-v-fb2320be>Zeplin for assets exporting.</li><li data-v-fb2320be>Miro+Google docs for data research.</li><li data-v-fb2320be>Lookback for user interaction testing.</li></ul></div><div data-v-fb2320be><b data-v-fb2320be> Shenkar college of engeniring 2019-2021 <br data-v-fb2320be>Final project: A Boutique Winery </b><br data-v-fb2320be><span data-v-fb2320be>A complete brand for a company, including a logo, brand book, posters, buisness card, layouts and packaging, and a fresh Wine bottle design.</span></div><div data-v-fb2320be><b data-v-fb2320be>Music Film Festival:</b><br data-v-fb2320be><span data-v-fb2320be>Include a logo, poster, layouts, packaging and a festival book.</span></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/resume/resume-info/resume-info-experience.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/resume/resume-info/resume-info-experience.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-fb2320be"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/resume/resume-info/resume-info-experience.vue"]]);
}


// --------------------
// Request: /components/resume/resume-info/resume-info-experience.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/resume/resume-info/resume-info-experience.vue ($id_a033c4d9)
// Dependencies: 

// --------------------
const $id_d6c6226d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".experience[data-v-fb2320be] {\n  max-width: 535px;\n  font-size: 1.5rem;\n  line-height: 2.043rem;\n  color: #747474;\n}\n.experience b[data-v-fb2320be] {\n  color: #323232;\n}\n.experience .udacity ul[data-v-fb2320be] {\n  list-style: decimal;\n  margin-top: 0;\n}\n@media screen and (min-width: 768px) {\n.experience[data-v-fb2320be] {\n    margin-right: 3rem;\n}\n}\n";
}


// --------------------
// Request: /components/resume/resume-info/resume-info-education.vue
// Parents: 
// - /components/resume/resume-info/resume-info.vue ($id_76ed9036)
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// Dependencies: 
// - /components/shared/title.vue ($id_bb43ca7c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/resume/resume-info/resume-info-education.vue?vue&type=style&index=0&scoped=true&lang.less ($id_29020510)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_dd1f087e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/shared/title.vue");


const _sfc_main = {
  components: { Title1: __vite_ssr_import_0__.default }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title1 = __vite_ssr_import_1__.resolveComponent("Title1")

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "education" }, _attrs))} data-v-a6c2647e>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Title1, {
    color: "accent",
    title: "Education"
  }, null, _parent))
  _push(`<b data-v-a6c2647e>UX Nanodegree 2021</b><br data-v-a6c2647e><b data-v-a6c2647e>Udacity</b> online programs- bootcamp. <br data-v-a6c2647e><b data-v-a6c2647e>Graphic Designer 2019-2021</b><br data-v-a6c2647e><b data-v-a6c2647e>Shenkar</b> College of Engineering and Design, Tel Aviv. <br data-v-a6c2647e><b data-v-a6c2647e>Economics and management 2011-2014</b> Ashkelon Academic College. `)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Title1, {
    color: "accent",
    title: "Languages"
  }, null, _parent))
  _push(`Hebrew, English and Russian. `)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Title1, {
    color: "accent",
    title: "Contact"
  }, null, _parent))
  _push(`<a href="tel: 052-7475755" data-v-a6c2647e>052-7475755</a><br data-v-a6c2647e><a href="mailto: hasida.zohar@gmail.com" data-v-a6c2647e>hasida.zohar@gmail.com</a><br data-v-a6c2647e><a href="https://www.linkedin.com/in/hasida.zohar" data-v-a6c2647e>www.linkedin.com/in/hasida.zohar</a></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/resume/resume-info/resume-info-education.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/resume/resume-info/resume-info-education.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-a6c2647e"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/resume/resume-info/resume-info-education.vue"]]);
}


// --------------------
// Request: /components/resume/resume-info/resume-info-education.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/resume/resume-info/resume-info-education.vue ($id_dd1f087e)
// Dependencies: 

// --------------------
const $id_29020510 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".education[data-v-a6c2647e] {\n  max-width: 100%;\n  font-size: 1.5rem;\n  line-height: 2.043rem;\n  color: #747474;\n}\n@media screen and (min-width: 768px) {\n.education[data-v-a6c2647e] {\n    max-width: 535px;\n}\n}\n.education b[data-v-a6c2647e] {\n  color: #323232;\n}\n";
}


// --------------------
// Request: /components/resume/resume-info/resume-info.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/resume/resume-info/resume-info.vue ($id_76ed9036)
// Dependencies: 

// --------------------
const $id_9d7189a8 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".wrapper[data-v-b1957ab4] {\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (min-width: 768px) {\n.wrapper[data-v-b1957ab4] {\n    flex-direction: row;\n}\n}\n";
}


// --------------------
// Request: /components/resume/resume.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/resume/resume.vue ($id_eeb28070)
// Dependencies: 

// --------------------
const $id_f982d83c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".resume[data-v-73fb03a4] {\n  background: linear-gradient(179deg, #d1c6fe40, #d3e1fd7d);\n  padding: 0 3.25rem 1rem;\n  margin-bottom: -1rem;\n}\n@media screen and (min-width: 768px) {\n.resume[data-v-73fb03a4] {\n    padding: 0 6.25rem 5rem;\n    margin-bottom: 0;\n    background: transparent;\n}\n}\n";
}


// --------------------
// Request: /components/screens/screen-number-title.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /components/screens/screens.vue ($id_639dbbb9)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/screens/screen-number-title.vue?vue&type=style&index=0&scoped=true&lang.less ($id_22e0cc44)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d54691ab = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const _sfc_main = {
  props: { number: String, title: String, textAlign: "left" | "center" | "right" }
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
      class: ["screen-number-title", $props.textAlign]
    }, _attrs))
  } data-v-28d968bc><div class="number" data-v-28d968bc>${
    __vite_ssr_import_1__.ssrInterpolate($props.number)
  }</div><div class="title" data-v-28d968bc>${
    __vite_ssr_import_1__.ssrInterpolate($props.title)
  }</div></div>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/screens/screen-number-title.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/screens/screen-number-title.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-28d968bc"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/screens/screen-number-title.vue"]]);
}


// --------------------
// Request: /components/screens/screen-number-title.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/screens/screen-number-title.vue ($id_d54691ab)
// Dependencies: 

// --------------------
const $id_22e0cc44 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".screen-number-title.left[data-v-28d968bc] {\n  text-align: left;\n}\n.screen-number-title.center[data-v-28d968bc] {\n  text-align: center;\n}\n.screen-number-title.right[data-v-28d968bc] {\n  text-align: right;\n}\n.screen-number-title .number[data-v-28d968bc] {\n  color: #007aff;\n  font-weight: 700;\n  font-size: 3.75rem;\n  line-height: 4rem;\n}\n.screen-number-title .title[data-v-28d968bc] {\n  font-size: 2.5rem;\n  font-weight: 300;\n  line-height: 3.375rem;\n  color: black;\n}\n";
}


// --------------------
// Request: /components/screens/screens.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /components/shared/image.vue ($id_f391b48d)
// - /components/screens/screen-number-title.vue ($id_d54691ab)
// - /components/shared/title.vue ($id_bb43ca7c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/screens/screens.vue?vue&type=style&index=0&scoped=true&lang.less ($id_b000e50a)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_639dbbb9 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/shared/image.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/screens/screen-number-title.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/shared/title.vue");


const _sfc_main = {
  mounted() {
    if (this.isMobile()) {
      this.$refs.screens.classList.add("mobile");
      //init some library here
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://unpkg.com/swiper/swiper-bundle.min.js";

      script.onload = () => {
        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      };

      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/swiper/swiper-bundle.min.css";

      document.head.append(link);

      document.head.append(script);
    }
  },
  methods: {
    isMobile() {
      return (
        "undefined" !== "undefined" &&
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      );
    },
  },
  components: { Image: __vite_ssr_import_0__.default, ScreenNumberTitle: __vite_ssr_import_1__.default, Title: __vite_ssr_import_2__.default },
};

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title = __vite_ssr_import_3__.resolveComponent("Title")
  const _component_ScreenNumberTitle = __vite_ssr_import_3__.resolveComponent("ScreenNumberTitle")
  const _component_Image = __vite_ssr_import_3__.resolveComponent("Image")

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({
    class: "screens",
    ref: "screens"
  }, _attrs))} data-v-0647ad14><div class="title-wrapper" data-v-0647ad14>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Title, {
    title: "Screens",
    color: "white",
    position: "center"
  }, null, _parent))
  _push(`</div>`)
  if (!$options.isMobile()) {
    _push(`<div class="images screen-images" data-v-0647ad14><div class="purple purple1" data-v-0647ad14></div><div class="purple purple2" data-v-0647ad14></div><div class="purple purple3" data-v-0647ad14></div><div class="circle" data-v-0647ad14></div><div class="image image1" data-v-0647ad14>`)
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_ScreenNumberTitle, {
      number: "01",
      title: "Sign in",
      textAlign: "center"
    }, null, _parent))
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/sign_in.png",
      alt: "Sign in"
    }, null, _parent))
    _push(`</div><div class="image image2" data-v-0647ad14>`)
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_ScreenNumberTitle, {
      number: "02",
      title: "Sign up",
      textAlign: "center"
    }, null, _parent))
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/sign_up.png",
      alt: "Sign up"
    }, null, _parent))
    _push(`</div><div class="image image3" data-v-0647ad14>`)
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_ScreenNumberTitle, {
      number: "03",
      title: "Favorite",
      textAlign: "center"
    }, null, _parent))
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/choose_your_favorite.png",
      alt: "Favorite"
    }, null, _parent))
    _push(`</div><div class="image image4" data-v-0647ad14>`)
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_ScreenNumberTitle, {
      number: "04",
      title: "Shake",
      textAlign: "center"
    }, null, _parent))
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/orange.png",
      alt: "Orange shake"
    }, null, _parent))
    _push(`</div><div class="image image5" data-v-0647ad14>`)
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_ScreenNumberTitle, {
      number: "05",
      title: "Recommended",
      textAlign: "center"
    }, null, _parent))
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/green_reco.png",
      alt: "Recommended shakes"
    }, null, _parent))
    _push(`</div><div class="image image6" data-v-0647ad14>`)
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_ScreenNumberTitle, {
      number: "06",
      title: "My cart",
      textAlign: "center"
    }, null, _parent))
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/my_cart.png",
      alt: "My cart"
    }, null, _parent))
    _push(`</div><div class="image image7" data-v-0647ad14>`)
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_ScreenNumberTitle, {
      number: "07",
      title: "Checkout",
      textAlign: "center"
    }, null, _parent))
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/check_out.png",
      alt: "Checkout"
    }, null, _parent))
    _push(`</div></div>`)
  } else {
    _push(`<!---->`)
  }
  if ($options.isMobile()) {
    _push(`<div class="mobile-images" data-v-0647ad14><div class="carousel gallery" data-v-0647ad14><div class="swiper mySwiper" data-v-0647ad14><div class="swiper-wrapper" data-v-0647ad14><div class="swiper-slide" data-v-0647ad14>`)
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/sign_in.png",
      alt: "Sign in"
    }, null, _parent))
    _push(`</div><div class="swiper-slide" data-v-0647ad14>`)
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/sign_up.png",
      alt: "Sign up"
    }, null, _parent))
    _push(`</div><div class="swiper-slide" data-v-0647ad14>`)
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/choose_your_favorite.png",
      alt: "Favorite"
    }, null, _parent))
    _push(`</div><div class="swiper-slide" data-v-0647ad14>`)
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/orange.png",
      alt: "Orange shake"
    }, null, _parent))
    _push(`</div><div class="swiper-slide" data-v-0647ad14>`)
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/green_reco.png",
      alt: "Recommended shakes"
    }, null, _parent))
    _push(`</div><div class="swiper-slide" data-v-0647ad14>`)
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/my_cart.png",
      alt: "My cart"
    }, null, _parent))
    _push(`</div><div class="swiper-slide" data-v-0647ad14>`)
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/check_out.png",
      alt: "Checkout"
    }, null, _parent))
    _push(`</div></div><div class="swiper-button-next" data-v-0647ad14></div><div class="swiper-button-prev" data-v-0647ad14></div><div class="swiper-pagination" data-v-0647ad14></div></div></div></div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div>`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/screens/screens.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/screens/screens.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0647ad14"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/screens/screens.vue"]]);
}


// --------------------
// Request: /components/screens/screens.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/screens/screens.vue ($id_639dbbb9)
// Dependencies: 

// --------------------
const $id_b000e50a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".screens[data-v-0647ad14] {\n  position: relative;\n  height: 4400px;\n  background-color: #d3e1fd;\n  border-radius: 200px;\n  padding: 2.125rem 8.188rem;\n  margin-top: -300px;\n}\n@media screen and (min-width: 768px) {\n.screens .title-wrapper[data-v-0647ad14] {\n    margin-top: 0.5rem;\n}\n.screens .title-wrapper h3[data-v-0647ad14] {\n    font-size: 4.375rem;\n    line-height: 5.996rem;\n}\n}\n.screens .images[data-v-0647ad14] {\n  margin-top: 2rem;\n}\n.screens .images img[data-v-0647ad14] {\n  width: 383px;\n  height: 774px;\n  z-index: 1;\n}\n.screens .images .image[data-v-0647ad14] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n}\n.screens .images .image img[data-v-0647ad14] {\n  margin-top: 0.5rem;\n}\n.screens .images .image.image1[data-v-0647ad14] {\n  left: 50%;\n  transform: translateX(-50%);\n  top: 170px;\n}\n.screens .images .title[data-v-0647ad14] {\n  z-index: 1;\n  position: absolute;\n}\n.screens .images .image2[data-v-0647ad14] {\n  top: 1189px;\n  left: 13%;\n}\n.screens .images .image3[data-v-0647ad14] {\n  top: 1277px;\n  right: 13%;\n}\n.screens .images .image4[data-v-0647ad14] {\n  top: 2120px;\n  left: 13%;\n}\n.screens .images .image5[data-v-0647ad14] {\n  top: 2302px;\n  right: 13%;\n}\n.screens .images .image6[data-v-0647ad14] {\n  top: 3117px;\n  left: 13%;\n}\n.screens .images .image7[data-v-0647ad14] {\n  top: 3444px;\n  right: 13%;\n}\n.screens .images .circle[data-v-0647ad14] {\n  position: absolute;\n  background-color: #eaf0fc;\n  border-radius: 100%;\n  width: 600px;\n  height: 600px;\n  top: 393px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.screens .images .purple[data-v-0647ad14] {\n  background-color: #d4dbf9;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n.screens .images .purple.purple1[data-v-0647ad14] {\n  top: 806px;\n  height: 630px;\n}\n.screens .images .purple.purple2[data-v-0647ad14] {\n  top: 2300px;\n  height: 650px;\n}\n.screens .images .purple.purple3[data-v-0647ad14] {\n  top: 3763px;\n  height: 675px;\n  border-radius: 0px 0px 200px 200px;\n}\n.screens .mobile-images img[data-v-0647ad14] {\n  margin: 0 0 2rem;\n  max-height: 800px;\n}\n.screens.mobile[data-v-0647ad14] {\n  padding: 1.75rem;\n  border-radius: 0;\n  margin-top: 0;\n  height: auto;\n}\n.screens.mobile .swiper-slide[data-v-0647ad14] {\n  display: flex;\n  justify-content: center;\n}\n.screens.mobile .images[data-v-0647ad14] {\n  display: none;\n}\n.screens .swiper-pagination[data-v-0647ad14] {\n  bottom: 0;\n}\n.screens .swiper-button-prev[data-v-0647ad14],\n.screens .swiper-button-next[data-v-0647ad14] {\n  display: none;\n}\n.screens .swiper-button-next[data-v-0647ad14] {\n  right: 0;\n}\n.screens .swiper-button-prev[data-v-0647ad14] {\n  left: 0;\n}\n";
}


// --------------------
// Request: /components/shared/text-with-figure.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /components/text-and-figures/text-and-figures-big.vue ($id_b6d5f97f)
// Dependencies: 
// - /components/shared/numbered-title.vue ($id_6a77dede)
// - /components/shared/image.vue ($id_f391b48d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/shared/text-with-figure.vue?vue&type=style&index=0&scoped=true&lang.less ($id_83e1ad26)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_96cfc85e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/shared/numbered-title.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/shared/image.vue");

const _sfc_main = {
  components: { NumberedTitle: __vite_ssr_import_0__.default, Image: __vite_ssr_import_1__.default },
  props: {
    number: String,
    title: String,
    figure: String,
    color: String,
    class: String,
    titleClass: String,
    figureStyle: String,
    figureSide: "left" | "right",
  },
  methods: {
    getImageUrl() {
      return "/personas/" + this.figure + ".png";
    },
    getClass() {
      return this.class + " " + this.figureSide;
    },
  },
};

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NumberedTitle = __vite_ssr_import_2__.resolveComponent("NumberedTitle")
  const _component_Image = __vite_ssr_import_2__.resolveComponent("Image")

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({
    class: ["wrapper", $options.getClass()]
  }, _attrs))} data-v-dc00f4ac><div class="text" data-v-dc00f4ac>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NumberedTitle, {
    color: $props.color,
    number: $props.number,
    title: $props.title
  }, null, _parent))
  __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div><div class="figure" style="${__vite_ssr_import_3__.ssrRenderStyle($props.figureStyle)}" data-v-dc00f4ac>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: $options.getImageUrl(),
    alt: $props.figure
  }, null, _parent))
  _push(`</div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/shared/text-with-figure.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/shared/text-with-figure.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-dc00f4ac"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/shared/text-with-figure.vue"]]);
}


// --------------------
// Request: /components/shared/text-with-figure.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/shared/text-with-figure.vue ($id_96cfc85e)
// Dependencies: 

// --------------------
const $id_83e1ad26 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".wrapper[data-v-dc00f4ac] {\n  display: flex;\n  flex-direction: column-reverse;\n}\n@media screen and (min-width: 768px) {\n.wrapper[data-v-dc00f4ac] {\n    flex-direction: row;\n}\n.wrapper.left[data-v-dc00f4ac] {\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n}\n}\n.wrapper .figure[data-v-dc00f4ac],\n.wrapper .figure img[data-v-dc00f4ac] {\n  width: 152px;\n  margin-left: -0.5rem;\n}\n@media screen and (min-width: 768px) {\n.wrapper .figure[data-v-dc00f4ac],\n  .wrapper .figure img[data-v-dc00f4ac] {\n    width: 182px;\n    height: 192px;\n    margin-left: 0;\n}\n}\n@media screen and (min-width: 768px) {\n.d-pl-1[data-v-dc00f4ac] {\n    padding-left: 2.5rem;\n}\n}\n";
}


// --------------------
// Request: /components/shenkar/shenkar.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /components/shared/title.vue ($id_bb43ca7c)
// - /components/shared/image.vue ($id_f391b48d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/shenkar/shenkar.vue?vue&type=style&index=0&scoped=true&lang.less ($id_e97f66b7)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_3a62cf4e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/shared/title.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/shared/image.vue");

const _sfc_main = {
  components: { Title: __vite_ssr_import_0__.default, Image: __vite_ssr_import_1__.default },
  methods: {
    pdfwinera() {
      this.openpdf('/pdf/Brand_book_winera.pdf')
    },
    pdfmusic() {
      this.openpdf('/pdf/Music_festival.pdf')
    },
    pdfzap() {
      this.openpdf('/pdf/Zaponki.pdf')
    },
    pdfbabyspa() {
      this.openpdf('/pdf/Baby_spa.pdf')
    },
    pdfsmartkids() {
      this.openpdf('/pdf/smart_kids.pdf')
    },
    openpdf(url) {
      window.open(url, "_blank");
    }
  }
};

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title = __vite_ssr_import_2__.resolveComponent("Title")
  const _component_Image = __vite_ssr_import_2__.resolveComponent("Image")

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "wrapper" }, _attrs))} data-v-73084ac2>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Title, {
    title: "Shenkar Projects",
    color: "dark-accent",
    position: "center"
  }, null, _parent))
  _push(`<div class="images" data-v-73084ac2><div class="business" data-v-73084ac2>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/bussines_card.png",
    alt: "cards"
  }, null, _parent))
  _push(`</div><div class="line winera_cards" data-v-73084ac2>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/envelop_card_purpel.png",
    alt: "envelop"
  }, null, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/Right_bug_purpul.png",
    alt: "bag"
  }, null, _parent))
  _push(`</div><div class="posters" data-v-73084ac2>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/posters_winera.png",
    alt: "poster"
  }, null, _parent))
  _push(`</div><div class="music" data-v-73084ac2><div class="two_cups" data-v-73084ac2>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/2_cups.png",
    alt: "cups"
  }, null, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/music-logo.png",
    alt: "music logo"
  }, null, _parent))
  _push(`</div><div class="line food" data-v-73084ac2>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/Popcorn.png",
    alt: "Popcorn"
  }, null, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/Humburger.png",
    alt: "Humburger"
  }, null, _parent))
  _push(`</div><div class="line double-image" data-v-73084ac2>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/A5-Magazine-MockUp.png",
    alt: "A5-Magazine-MockUp"
  }, null, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/Bug.png",
    alt: "bag"
  }, null, _parent))
  _push(`</div><div class="line" data-v-73084ac2>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/Moovies.png",
    alt: "Moovies"
  }, null, _parent))
  _push(`</div></div><div class="line normal-cursor" data-v-73084ac2>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/la_maline_1.jpg",
    alt: "La Maline"
  }, null, _parent))
  _push(`</div><div class="line normal-cursor" data-v-73084ac2>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/la_maline_2.jpg",
    alt: "La Maline stickers"
  }, null, _parent))
  _push(`</div><div class="line" data-v-73084ac2>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/zap_1.jpg",
    alt: "zap"
  }, null, _parent))
  _push(`</div><div class="line zap double-image" data-v-73084ac2>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/zap_2.jpg",
    alt: "zap"
  }, null, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/zap_3.jpg",
    alt: "zap"
  }, null, _parent))
  _push(`</div><div class="line" data-v-73084ac2>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/baby_spa_1.jpg",
    alt: "baby spa"
  }, null, _parent))
  _push(`</div><div class="line double-image" data-v-73084ac2>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/baby_spa_2.jpg",
    alt: "baby spa"
  }, null, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/smart_kids_1.jpg",
    alt: "smart kids"
  }, null, _parent))
  _push(`</div><div class="line full normal-cursor" data-v-73084ac2>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/shenkar/photoshop.jpg",
    alt: "photoshop"
  }, null, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/shenkar/shenkar.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/shenkar/shenkar.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-73084ac2"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/shenkar/shenkar.vue"]]);
}


// --------------------
// Request: /components/shenkar/shenkar.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/shenkar/shenkar.vue ($id_3a62cf4e)
// Dependencies: 

// --------------------
const $id_e97f66b7 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".wrapper[data-v-73084ac2] {\n  margin: 1rem 0;\n  padding: 0 7vw;\n}\n.wrapper img[data-v-73084ac2] {\n  cursor: pointer;\n}\n@media screen and (min-width: 768px) {\n.wrapper[data-v-73084ac2] {\n    margin: 2rem 0;\n    padding: 0 1rem;\n}\n}\n.wrapper .images[data-v-73084ac2] {\n  margin-top: 1rem;\n}\n@media screen and (min-width: 768px) {\n.wrapper .images[data-v-73084ac2] {\n    margin-top: 2rem;\n}\n}\n.wrapper .business[data-v-73084ac2] {\n  width: 100%;\n  margin-bottom: 1rem;\n}\n@media screen and (min-width: 768px) {\n.wrapper .business[data-v-73084ac2] {\n    margin-bottom: 2rem;\n}\n}\n.wrapper .business img[data-v-73084ac2] {\n  width: 100%;\n}\n.wrapper .line[data-v-73084ac2] {\n  display: flex;\n  margin-bottom: 1rem;\n}\n@media screen and (min-width: 768px) {\n.wrapper .line[data-v-73084ac2] {\n    margin-bottom: 2rem;\n}\n}\n.wrapper .winera_cards[data-v-73084ac2] {\n  margin-bottom: 1rem;\n}\n@media screen and (min-width: 768px) {\n.wrapper .winera_cards[data-v-73084ac2] {\n    margin-bottom: 2rem;\n}\n}\n.wrapper .winera_cards img[data-v-73084ac2]:first-child {\n  width: 50%;\n  flex: 1 1 50%;\n  margin-right: 1rem;\n}\n@media screen and (min-width: 768px) {\n.wrapper .winera_cards img[data-v-73084ac2]:first-child {\n    margin-right: 2rem;\n}\n}\n.wrapper .winera_cards img[data-v-73084ac2]:nth-child(2) {\n  width: 42%;\n  flex: 1 1 42%;\n}\n.wrapper .posters[data-v-73084ac2] {\n  margin-bottom: 1rem;\n}\n@media screen and (min-width: 768px) {\n.wrapper .posters[data-v-73084ac2] {\n    margin-bottom: 2rem;\n}\n}\n.wrapper .music .two_cups[data-v-73084ac2] {\n  position: relative;\n  background-color: #d4dbf9;\n  margin-bottom: 1rem;\n}\n@media screen and (min-width: 768px) {\n.wrapper .music .two_cups[data-v-73084ac2] {\n    margin-bottom: 2rem;\n}\n}\n.wrapper .music .two_cups img[data-v-73084ac2]:nth-child(2) {\n  position: absolute;\n  left: 0.5rem;\n  top: 0.5rem;\n  width: 18%;\n}\n@media screen and (min-width: 768px) {\n.wrapper .music .two_cups img[data-v-73084ac2]:nth-child(2) {\n    top: 1rem;\n    left: 1rem;\n}\n}\n.wrapper .music .food[data-v-73084ac2] {\n  margin-bottom: 1rem;\n}\n@media screen and (min-width: 768px) {\n.wrapper .music .food[data-v-73084ac2] {\n    margin-bottom: 2rem;\n}\n}\n.wrapper .music .food img[data-v-73084ac2]:first-child {\n  width: 37.6%;\n  flex: 1 1 37.6%;\n  margin-right: 1rem;\n  background-color: #d3e1fc;\n}\n@media screen and (min-width: 768px) {\n.wrapper .music .food img[data-v-73084ac2]:first-child {\n    margin-right: 2rem;\n}\n}\n.wrapper .music .food img[data-v-73084ac2]:nth-child(2) {\n  width: 55%;\n  flex: 1 1 55%;\n  background-color: #cee2fd;\n}\n@media screen and (min-width: 768px) {\n.wrapper .wrapper[data-v-73084ac2] {\n    padding: 0 100px;\n}\n.wrapper .wrapper .winera_cards[data-v-73084ac2] {\n    margin-bottom: 2rem;\n}\n.wrapper .wrapper .winera_cards img[data-v-73084ac2]:first-child {\n    width: 55.5%;\n    flex: 1 1 55.5%;\n}\n.wrapper .wrapper .food[data-v-73084ac2] {\n    margin-bottom: 2rem;\n}\n.wrapper .wrapper .food img[data-v-73084ac2]:nth-child(2) {\n    width: 59.18%;\n    flex: 1 1 59.18%;\n}\n}\n.wrapper .double-image img[data-v-73084ac2]:first-child {\n  width: 50%;\n  flex: 1 1 50%;\n  margin-right: 1rem;\n  background-color: #d3e1fc;\n}\n@media screen and (min-width: 768px) {\n.wrapper .double-image img[data-v-73084ac2]:first-child {\n    margin-right: 2rem;\n}\n}\n.wrapper .double-image img[data-v-73084ac2]:nth-child(2) {\n  width: 42.27%;\n  flex: 1 1 42.27%;\n  background-color: #cee2fd;\n}\n.wrapper .full img[data-v-73084ac2] {\n  min-width: 100%;\n}\n.wrapper .normal-cursor img[data-v-73084ac2] {\n  cursor: default;\n}\n";
}


// --------------------
// Request: /components/test-validation/basic-flow.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /components/test-validation/text-validation.vue ($id_c900ee7d)
// Dependencies: 
// - /components/shared/title.vue ($id_bb43ca7c)
// - /components/shared/image.vue ($id_f391b48d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/test-validation/basic-flow.vue?vue&type=style&index=0&scoped=true&lang.less ($id_05194a03)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9fdd3072 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/shared/title.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/shared/image.vue");

const _sfc_main = {
  components: { Title1: __vite_ssr_import_0__.default, Image: __vite_ssr_import_1__.default }
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title1 = __vite_ssr_import_2__.resolveComponent("Title1")
  const _component_Image = __vite_ssr_import_2__.resolveComponent("Image")

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "basic-flow" }, _attrs))} data-v-105eb543>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Title1, {
    title: "Basic user flow",
    color: "dark-accent"
  }, null, _parent))
  _push(`<div class="image" data-v-105eb543>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/Desk_research/Basic_user_flow.png",
    alt: "Basic user flow"
  }, null, _parent))
  _push(`</div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/test-validation/basic-flow.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/test-validation/basic-flow.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-105eb543"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/test-validation/basic-flow.vue"]]);
}


// --------------------
// Request: /components/test-validation/basic-flow.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/test-validation/basic-flow.vue ($id_9fdd3072)
// Dependencies: 

// --------------------
const $id_05194a03 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".basic-flow[data-v-105eb543] {\n  margin-top: 2.688rem;\n}\n.basic-flow .image[data-v-105eb543] {\n  max-width: 100%;\n  margin-top: 2rem;\n}\n";
}


// --------------------
// Request: /components/test-validation/low-fidelity.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /components/test-validation/text-validation.vue ($id_c900ee7d)
// Dependencies: 
// - /components/shared/title.vue ($id_bb43ca7c)
// - /components/shared/image.vue ($id_f391b48d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/test-validation/low-fidelity.vue?vue&type=style&index=0&scoped=true&lang.less ($id_bcf08323)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_41cd7542 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/shared/title.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/shared/image.vue");

const _sfc_main = {
  components: { Title1: __vite_ssr_import_0__.default, Image: __vite_ssr_import_1__.default },
  mounted() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.$refs.images.classList.add("mobile");
      //init some library here
    }
  },
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title1 = __vite_ssr_import_2__.resolveComponent("Title1")
  const _component_Image = __vite_ssr_import_2__.resolveComponent("Image")

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "low-fidelity" }, _attrs))} data-v-2f7a3af5>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Title1, {
    title: "Low fidelity prototype",
    color: "dark-accent"
  }, null, _parent))
  _push(`<div class="images" data-v-2f7a3af5>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/Low_fidelity_mockups/check_out.png",
    alt: "Check out"
  }, null, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/Low_fidelity_mockups/choose_your_favorite.png",
    alt: "Choose your favorites"
  }, null, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/Low_fidelity_mockups/favorite.png",
    alt: "Favorite"
  }, null, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/Low_fidelity_mockups/live_chat.png",
    alt: "Live chat"
  }, null, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/Low_fidelity_mockups/my_cart.png",
    alt: "My cart"
  }, null, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/Low_fidelity_mockups/sign_in-.png",
    alt: "Sign in"
  }, null, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/Low_fidelity_mockups/sign_up.png",
    alt: "Sign up"
  }, null, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Image, {
    src: "/Low_fidelity_mockups/recommended.png",
    alt: "recommended"
  }, null, _parent))
  _push(`</div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/test-validation/low-fidelity.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/test-validation/low-fidelity.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-2f7a3af5"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/test-validation/low-fidelity.vue"]]);
}


// --------------------
// Request: /components/test-validation/low-fidelity.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/test-validation/low-fidelity.vue ($id_41cd7542)
// Dependencies: 

// --------------------
const $id_bcf08323 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".low-fidelity[data-v-2f7a3af5] {\n  margin: 2.688rem 0 0;\n}\n@media screen and (min-width: 768px) {\n.low-fidelity[data-v-2f7a3af5] {\n    margin: 2.688rem 0 20rem;\n}\n}\n.low-fidelity .images[data-v-2f7a3af5] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: 2rem;\n}\n.low-fidelity .images img[data-v-2f7a3af5] {\n  margin-right: 3%;\n  width: 22.7%;\n  margin-bottom: 2rem;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n}\n.low-fidelity .images img[data-v-2f7a3af5]:nth-child(4n) {\n  margin-right: 0;\n}\n";
}


// --------------------
// Request: /components/test-validation/text-validation.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /components/shared/numbered-title.vue ($id_6a77dede)
// - /components/shared/image.vue ($id_f391b48d)
// - /components/test-validation/basic-flow.vue ($id_9fdd3072)
// - /components/test-validation/low-fidelity.vue ($id_41cd7542)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/test-validation/text-validation.vue?vue&type=style&index=0&scoped=true&lang.less ($id_51e17bb8)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_c900ee7d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/shared/numbered-title.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/shared/image.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/test-validation/basic-flow.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/test-validation/low-fidelity.vue");

const _sfc_main = {
  components: { NumberedTitle: __vite_ssr_import_0__.default, Image: __vite_ssr_import_1__.default, BasicFlow: __vite_ssr_import_2__.default, LowFidelity: __vite_ssr_import_3__.default }
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NumberedTitle = __vite_ssr_import_4__.resolveComponent("NumberedTitle")
  const _component_Image = __vite_ssr_import_4__.resolveComponent("Image")
  const _component_BasicFlow = __vite_ssr_import_4__.resolveComponent("BasicFlow")
  const _component_LowFidelity = __vite_ssr_import_4__.resolveComponent("LowFidelity")

  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "test-validation" }, _attrs))} data-v-19990033><div class="part1" data-v-19990033>`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NumberedTitle, {
    number: "09",
    color: "dark-accent",
    title: "Test: validation, usability and feedback"
  }, null, _parent))
  _push(`<div class="info" data-v-19990033><div class="text" data-v-19990033><div class="first" data-v-19990033><div class="title" data-v-19990033><b data-v-19990033>Usability testing with LookBack:</b></div><div class="explanation" data-v-19990033>Lookback is a tool for conducting live remote Moderated and Unmoderated Usability Tests. It has a real-time remote user research feature. You can communicate directly with the users and see what they see while getting they&#39;re reactions as they happen.</div></div><div class="second" data-v-19990033><div class="title" data-v-19990033><b data-v-19990033>Test insights:</b></div><div class="explanation" data-v-19990033> Based on my data from Lookback, I found that 50% from my participants did not know where they need to click. <br data-v-19990033><b data-v-19990033>My hypothesis</b> is that participants thoughts that they need to click on the cards for swipe and because of this they spend a lot of time to try to do this and they do not understand why it is not working. <br data-v-19990033><b data-v-19990033>My solution</b>for this is to make the cards interactive too and to decrease the time on task. </div></div></div><div class="image" data-v-19990033>`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_Image, {
    src: "/Desk_research/lookback.png",
    alt: "lookback"
  }, null, _parent))
  _push(`</div></div></div>`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_BasicFlow, null, null, _parent))
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_LowFidelity, null, null, _parent))
  _push(`</div>`)
}

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/test-validation/text-validation.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/test-validation/text-validation.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-19990033"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/test-validation/text-validation.vue"]]);
}


// --------------------
// Request: /components/test-validation/text-validation.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/test-validation/text-validation.vue ($id_c900ee7d)
// Dependencies: 

// --------------------
const $id_51e17bb8 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".test-validation[data-v-19990033] {\n  background-color: #f4f6ff;\n  padding: 1.75rem;\n  margin-top: 4.188rem;\n}\n@media screen and (min-width: 768px) {\n.test-validation[data-v-19990033] {\n    padding: 3.063rem 6.25rem;\n    border-radius: 150px 150px 0px 0px;\n    margin-top: 0;\n}\n}\n.test-validation .part1 .info[data-v-19990033] {\n  display: flex;\n  flex-direction: column;\n  color: #666666;\n  font-size: 1.25rem;\n  line-height: 1.703rem;\n}\n@media screen and (min-width: 768px) {\n.test-validation .part1 .info[data-v-19990033] {\n    flex-direction: row;\n}\n}\n.test-validation .part1 .info b[data-v-19990033] {\n  font-weight: 600;\n}\n.test-validation .part1 .info .image[data-v-19990033] {\n  margin-top: 1rem;\n}\n@media screen and (min-width: 768px) {\n.test-validation .part1 .info .text[data-v-19990033],\n  .test-validation .part1 .info .image[data-v-19990033] {\n    flex: 0 0 auto;\n    width: 50%;\n}\n.test-validation .part1 .info .image[data-v-19990033] {\n    max-width: 561px;\n    margin: 1rem 0 0 3rem;\n}\n}\n";
}


// --------------------
// Request: /components/text-and-figures/persona.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /components/text-and-figures/text-and-figures-small.vue ($id_7553db27)
// Dependencies: 
// - /components/shared/image.vue ($id_f391b48d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/text-and-figures/persona.vue?vue&type=style&index=0&scoped=true&lang.less ($id_e770a210)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_81dd2542 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/shared/image.vue");

const _sfc_main = {
  props: { title: String, image: String },
  components: { Image: __vite_ssr_import_0__.default }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Image = __vite_ssr_import_1__.resolveComponent("Image")

  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "persona" }, _attrs))
  } data-v-b43e8b5e><div class="title" data-v-b43e8b5e>${
    __vite_ssr_import_2__.ssrInterpolate($props.title)
  }</div><div class="image-and-text" data-v-b43e8b5e><div class="image" data-v-b43e8b5e>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Image, {
    src: $props.image,
    alt: $props.title
  }, null, _parent))
  _push(`</div><div class="text" data-v-b43e8b5e>`)
  __vite_ssr_import_2__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/text-and-figures/persona.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/text-and-figures/persona.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-b43e8b5e"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/text-and-figures/persona.vue"]]);
}


// --------------------
// Request: /components/text-and-figures/persona.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/text-and-figures/persona.vue ($id_81dd2542)
// Dependencies: 

// --------------------
const $id_e770a210 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".persona[data-v-b43e8b5e] {\n  margin-bottom: 2.188rem;\n}\n.persona .title[data-v-b43e8b5e] {\n  color: #666666;\n  font-size: 1.5rem;\n  line-height: 2.043rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n.persona .image-and-text[data-v-b43e8b5e] {\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (min-width: 768px) {\n.persona .image-and-text[data-v-b43e8b5e] {\n    flex-direction: row;\n}\n}\n.persona .image-and-text .image[data-v-b43e8b5e] {\n  margin-right: 1.25rem;\n}\n.persona .image-and-text .image[data-v-b43e8b5e],\n.persona .image-and-text .image img[data-v-b43e8b5e] {\n  width: 121px;\n  height: 116px;\n  min-width: 121px;\n  min-height: 116px;\n}\n.persona .image-and-text .text[data-v-b43e8b5e] {\n  font-size: 1.25rem;\n  line-height: 1.703rem;\n  color: #666666;\n}\n";
}


// --------------------
// Request: /components/text-and-figures/text-and-figures-big.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/shared/text-with-figure.vue ($id_96cfc85e)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/text-and-figures/text-and-figures-big.vue?vue&type=style&index=0&scoped=true&lang.less ($id_23fbd028)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b6d5f97f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/shared/text-with-figure.vue");

const _sfc_main = {
  data: ()=>{
    return {
      hackForRerendering: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.hackForRerendering = "."
    });
  },
  components: { TextWithFigure: __vite_ssr_import_1__.default },
  methods: {
    getFirstFigureStyle() {
      return this.isMobile() ? "margin-top:1.5rem" : "margin-top: 5rem;margin-left: 2rem;";
    },
    getSecondFigureStyle() {
      return this.isMobile() ? "" : "margin-top: 3rem;margin-right: 2rem";
    },
    getThirdFigureStyle() {
      return this.isMobile() ? "" : "margin-top: 3rem;";
    },
    isMobile() {
      return (
        "undefined" !== "undefined" &&
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      );
    },
  },
};

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TextWithFigure = __vite_ssr_import_2__.resolveComponent("TextWithFigure")

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({
    class: "figures-wrapper",
    key: _ctx.hackForRerendering
  }, _attrs))} data-v-6c8a7c57>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_TextWithFigure, {
    class: "mb-1",
    figure: "persona_challenge",
    number: "04",
    title: "Challenges",
    color: "dark-accent",
    figureStyle: $options.getFirstFigureStyle()
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="mx-1 description" data-v-6c8a7c57${
          _scopeId
        }> We want the platform to be easy to use, fast and efficient for the trainees so that they can order during their break and the shake will arrive at the end of the workout. </div><div class="mx-1 description mt-1" data-v-6c8a7c57${
          _scopeId
        }> The goal of all participants training is physical growth. Shake protein is very important for their training. 80% of the participants want to be able to change the base of the shake in the app. Also, they would like to choose a protein shake from the list of recommendation ones. </div>`)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("div", { class: "mx-1 description" }, " We want the platform to be easy to use, fast and efficient for the trainees so that they can order during their break and the shake will arrive at the end of the workout. "),
          __vite_ssr_import_2__.createVNode("div", { class: "mx-1 description mt-1" }, " The goal of all participants training is physical growth. Shake protein is very important for their training. 80% of the participants want to be able to change the base of the shake in the app. Also, they would like to choose a protein shake from the list of recommendation ones. ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_TextWithFigure, {
    figureSide: "left",
    class: "mb-1",
    titleClass: "d-pl-1",
    figure: "persona_hypothesis",
    number: "05",
    title: "Hypothesis generation",
    color: "dark-accent",
    figureStyle: $options.getSecondFigureStyle()
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul class="description" data-v-6c8a7c57${
          _scopeId
        }><li data-v-6c8a7c57${
          _scopeId
        }>Simple and intuative for the users to understand and use.</li><li data-v-6c8a7c57${
          _scopeId
        }> One application which should do multiple tasks and cater all the major needs. </li><li data-v-6c8a7c57${
          _scopeId
        }>the trainee can choose a different shake each day.</li><li data-v-6c8a7c57${
          _scopeId
        }> The trainee doesn’t need to make the shake and he can use it instantly. </li></ul>`)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("ul", { class: "description" }, [
            __vite_ssr_import_2__.createVNode("li", null, "Simple and intuative for the users to understand and use."),
            __vite_ssr_import_2__.createVNode("li", null, " One application which should do multiple tasks and cater all the major needs. "),
            __vite_ssr_import_2__.createVNode("li", null, "the trainee can choose a different shake each day."),
            __vite_ssr_import_2__.createVNode("li", null, " The trainee doesn’t need to make the shake and he can use it instantly. ")
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_TextWithFigure, {
    class: "m-mb-1",
    figure: "persona_research",
    number: "06",
    title: "User research",
    color: "dark-accent",
    figureStyle: $options.getThirdFigureStyle()
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="mx-1 description" data-v-6c8a7c57${_scopeId}> Conducting user research helps in understanding user’s needs, experiences, behaviors and goals. Creating personas helps to step out of ourself. It helps to recognise that different people have different requirements and expectations and also helps to identify for whom we are designing for. </div>`)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("div", { class: "mx-1 description" }, " Conducting user research helps in understanding user’s needs, experiences, behaviors and goals. Creating personas helps to step out of ourself. It helps to recognise that different people have different requirements and expectations and also helps to identify for whom we are designing for. ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/text-and-figures/text-and-figures-big.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/text-and-figures/text-and-figures-big.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-6c8a7c57"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/text-and-figures/text-and-figures-big.vue"]]);
}


// --------------------
// Request: /components/text-and-figures/text-and-figures-big.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/text-and-figures/text-and-figures-big.vue ($id_b6d5f97f)
// Dependencies: 

// --------------------
const $id_23fbd028 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".figures-wrapper[data-v-6c8a7c57] {\n  padding: 1.75rem;\n}\n@media screen and (min-width: 768px) {\n.figures-wrapper[data-v-6c8a7c57] {\n    padding: 1.75rem 6.25rem 0 6.25rem;\n}\n}\n.mx-1[data-v-6c8a7c57] {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n.mx-1[data-v-6c8a7c57] {\n    max-width: 840px;\n}\n}\n.mb-1[data-v-6c8a7c57],\n.m-mb-1[data-v-6c8a7c57] {\n  margin-bottom: 2.938rem;\n}\n@media screen and (min-width: 768px) {\n.m-mb-1[data-v-6c8a7c57] {\n    margin-bottom: 0;\n}\n}\n.mt-1[data-v-6c8a7c57] {\n  margin-top: 1rem;\n}\n.description[data-v-6c8a7c57] {\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.703rem;\n  color: #666666;\n  -webkit-margin-after: 0;\n          margin-block-end: 0;\n}\n@media screen and (min-width: 768px) {\n.description[data-v-6c8a7c57] {\n    -webkit-margin-after: 1em;\n            margin-block-end: 1em;\n}\n}\n";
}


// --------------------
// Request: /components/text-and-figures/text-and-figures-small.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs ($id_ad8a724c)
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/text-and-figures/persona.vue ($id_81dd2542)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/text-and-figures/text-and-figures-small.vue?vue&type=style&index=0&scoped=true&lang.less ($id_357d6a16)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7553db27 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/text-and-figures/persona.vue");


const _sfc_main = {
  components: { Persona: __vite_ssr_import_1__.default },
};

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Persona = __vite_ssr_import_2__.resolveComponent("Persona")

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "figures-small" }, _attrs))} data-v-17a7051e>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Persona, {
    title: "Persona 1",
    image: "/personas/persona_1.png"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<b data-v-17a7051e${_scopeId}>An advanced</b> trainee who is training for years and have multiple issues using shakes (he doesn’t like preparing them and he likes diversity). `)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("b", null, "An advanced"),
          __vite_ssr_import_2__.createTextVNode(" trainee who is training for years and have multiple issues using shakes (he doesn’t like preparing them and he likes diversity). ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Persona, {
    title: "Persona 2",
    image: "/personas/persona_2.png"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<b data-v-17a7051e${_scopeId}>A beginner</b> trainee who likes shakes but he is not sure what is the best protein shake taste for him. He would like to try different flavors and find the best taste. `)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("b", null, "A beginner"),
          __vite_ssr_import_2__.createTextVNode(" trainee who likes shakes but he is not sure what is the best protein shake taste for him. He would like to try different flavors and find the best taste. ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Persona, {
    title: "Persona 3",
    image: "/personas/persona_3.png"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<b data-v-17a7051e${_scopeId}>An advanced</b> trainee who is recently wanted to start protein shakes because he started a new busy job and doesn’t have time for an additional meal during the day. `)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("b", null, "An advanced"),
          __vite_ssr_import_2__.createTextVNode(" trainee who is recently wanted to start protein shakes because he started a new busy job and doesn’t have time for an additional meal during the day. ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/text-and-figures/text-and-figures-small.vue?vue&type=style&index=0&scoped=true&lang.less");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/text-and-figures/text-and-figures-small.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-17a7051e"],['__file',"C:/Users/hay12/Documents/Github/hasida-website/components/text-and-figures/text-and-figures-small.vue"]]);
}


// --------------------
// Request: /components/text-and-figures/text-and-figures-small.vue?vue&type=style&index=0&scoped=true&lang.less
// Parents: 
// - /components/text-and-figures/text-and-figures-small.vue ($id_7553db27)
// Dependencies: 

// --------------------
const $id_357d6a16 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".figures-small[data-v-17a7051e] {\n  padding: 0 1.75rem;\n  max-width: 100%;\n  margin-top: -3rem;\n}\n@media screen and (min-width: 768px) {\n.figures-small[data-v-17a7051e] {\n    padding: 0 6.25rem 0 6.25rem;\n    max-width: 720px;\n    margin-top: 0.5rem;\n}\n}\nb[data-v-17a7051e] {\n  font-weight: 700;\n  color: #9e95bf;\n}\n";
}


// --------------------
// Request: /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/root-component.mjs
// Parents: 
// - C:/Users/hay12/Documents/Github/hasida-website/node_modules/nuxt3/dist/app/entry ($id_c11c0030)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// --------------------
const $id_aacd1a0e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/root-component.mjs ($id_aacd1a0e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f8564e04 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_App = __vite_ssr_import_0__.resolveComponent("App")

  __vite_ssr_import_1__.ssrRenderSuspense(_push, {
    default: () => {
      _push(__vite_ssr_import_1__.ssrRenderComponent(_component_App, null, null, _parent))
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/hay12/Documents/Github/hasida-website/node_modules/nuxt3/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/app-component.mjs
// Parents: 
// - C:/Users/hay12/Documents/Github/hasida-website/node_modules/nuxt3/dist/app/entry ($id_c11c0030)
// Dependencies: 
// - /app.vue ($id_2b46e842)
// --------------------
const $id_3b454716 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /app.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/app-component.mjs ($id_3b454716)
// Dependencies: 
// - /components/resume/resume.vue ($id_eeb28070)
// - /components/hero/hero.vue ($id_2440c08b)
// - /components/desk-research/desk-research.vue ($id_7af1af8e)
// - /components/design-concepts/design-concepts.vue ($id_cfb829f1)
// - /components/screens/screens.vue ($id_639dbbb9)
// - /components/shenkar/shenkar.vue ($id_3a62cf4e)
// - /components/contact/contact.vue ($id_f25bc35f)
// - /components/text-and-figures/text-and-figures-big.vue ($id_b6d5f97f)
// - /components/text-and-figures/text-and-figures-small.vue ($id_7553db27)
// - /components/test-validation/text-validation.vue ($id_c900ee7d)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /app.vue?vue&type=style&index=0&lang.css ($id_7e68c11d)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2b46e842 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/resume/resume.vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/hero/hero.vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/desk-research/desk-research.vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/design-concepts/design-concepts.vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/screens/screens.vue");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/shenkar/shenkar.vue");
const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/contact/contact.vue");


const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/resume/resume.vue");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/components/hero/hero.vue");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/components/text-and-figures/text-and-figures-big.vue");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/components/text-and-figures/text-and-figures-small.vue");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/components/desk-research/desk-research.vue");

const __vite_ssr_import_12__ = await __vite_ssr_import__("/components/design-concepts/design-concepts.vue");

const __vite_ssr_import_13__ = await __vite_ssr_import__("/components/test-validation/text-validation.vue");

const __vite_ssr_import_14__ = await __vite_ssr_import__("/components/screens/screens.vue");

const __vite_ssr_import_15__ = await __vite_ssr_import__("/components/contact/contact.vue");

const __vite_ssr_import_16__ = await __vite_ssr_import__("/components/shenkar/shenkar.vue");


const _sfc_main = {
  mounted() {
    let w = window.screen.width;
    let old = document.querySelector("meta[name='viewport']");
    if (old) {
      old.content =
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";

      if (w >= 768 && w < 1360) {
        old.content =
          "width=1360, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
      }
    }
  },
  components: {
    Resume: __vite_ssr_import_7__.default,
    Hero: __vite_ssr_import_8__.default,
    TextWithFiguresBig: __vite_ssr_import_9__.default,
    TextWithFiguresSmall: __vite_ssr_import_10__.default,
    DeskResearch: __vite_ssr_import_11__.default,
    DesignConcepts: __vite_ssr_import_12__.default,
    TestValidation: __vite_ssr_import_13__.default,
    Screens: __vite_ssr_import_14__.default,
    Contact: __vite_ssr_import_15__.default,
    Shenkar: __vite_ssr_import_16__.default,
  },
};

const __vite_ssr_import_17__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_18__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Resume = __vite_ssr_import_0__.default
  const _component_Hero = __vite_ssr_import_1__.default
  const _component_TextWithFiguresBig = __vite_ssr_import_17__.resolveComponent("TextWithFiguresBig")
  const _component_TextWithFiguresSmall = __vite_ssr_import_17__.resolveComponent("TextWithFiguresSmall")
  const _component_DeskResearch = __vite_ssr_import_2__.default
  const _component_DesignConcepts = __vite_ssr_import_3__.default
  const _component_TestValidation = __vite_ssr_import_17__.resolveComponent("TestValidation")
  const _component_Screens = __vite_ssr_import_4__.default
  const _component_Shenkar = __vite_ssr_import_5__.default
  const _component_Contact = __vite_ssr_import_6__.default

  _push(`<!--[-->`)
  _push(__vite_ssr_import_18__.ssrRenderComponent(_component_Resume, null, null, _parent))
  _push(__vite_ssr_import_18__.ssrRenderComponent(_component_Hero, null, null, _parent))
  _push(__vite_ssr_import_18__.ssrRenderComponent(_component_TextWithFiguresBig, null, null, _parent))
  _push(__vite_ssr_import_18__.ssrRenderComponent(_component_TextWithFiguresSmall, null, null, _parent))
  _push(__vite_ssr_import_18__.ssrRenderComponent(_component_DeskResearch, null, null, _parent))
  _push(__vite_ssr_import_18__.ssrRenderComponent(_component_DesignConcepts, null, null, _parent))
  _push(__vite_ssr_import_18__.ssrRenderComponent(_component_TestValidation, null, null, _parent))
  _push(__vite_ssr_import_18__.ssrRenderComponent(_component_Screens, null, null, _parent))
  _push(__vite_ssr_import_18__.ssrRenderComponent(_component_Shenkar, null, null, _parent))
  _push(__vite_ssr_import_18__.ssrRenderComponent(_component_Contact, null, null, _parent))
  _push(`<!--]-->`)
}

const __vite_ssr_import_19__ = await __vite_ssr_import__("/app.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_20__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_20__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_21__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_21__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/hay12/Documents/Github/hasida-website/app.vue"]]);
}


// --------------------
// Request: /app.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_7e68c11d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n@import url(\"https://fonts.googleapis.com/css?family=Open%20Sans&display=swap\");\n* {\r\n  font-family: \"Open Sans\";\n}\nhtml,\r\nbody {\r\n  padding: 0;\r\n  margin: 0 auto;\r\n  max-width: 100%;\r\n  border: 1px solid #d1c6fe22;\r\n  font-size: 14px;\n}\nbody {\r\n  overflow-x: hidden;\n}\n@media screen and (min-width: 768px) {\nhtml,\r\n  body {\r\n    max-width: 768px;\n}\n}\n@media screen and (min-width: 1280px) {\nhtml,\r\n  body {\r\n    max-width: 1280px;\n}\n}\n@media screen and (min-width: 1360px) {\nhtml,\r\n  body {\r\n    font-size: 16px;\r\n    max-width: 1360px;\n}\n}\nul {\r\n  padding-left: 1.5rem;\n}\r\n";
}


const __modules__ = {
 'C:/Users/hay12/Documents/Github/hasida-website/node_modules/nuxt3/dist/app/entry': $id_c11c0030,
 '/node_modules/vue/dist/vue.cjs.js': $id_60f0615f,
 '/node_modules/nuxt3/dist/app/index.mjs': $id_d8c2af0f,
 '/node_modules/nuxt3/dist/app/nuxt.mjs': $id_bf77ef36,
 '/node_modules/hookable/dist/index.mjs': $id_a2c811c4,
 '/node_modules/nuxt3/dist/app/compat/legacy-app.mjs': $id_75047751,
 '/node_modules/unenv/runtime/mock/proxy.mjs': $id_39e12da7,
 '/node_modules/nuxt3/dist/app/composables/index.mjs': $id_42ae3d5d,
 '/node_modules/nuxt3/dist/app/composables/component.mjs': $id_b47c3881,
 '/node_modules/vue-router/dist/vue-router.cjs.js': $id_f9a4a698,
 '/node_modules/nuxt3/dist/app/composables/asyncData.mjs': $id_a2ef143e,
 '/node_modules/nuxt3/dist/app/composables/hydrate.mjs': $id_43a772c2,
 '/node_modules/nuxt3/dist/app/composables/state.mjs': $id_d232db97,
 '/node_modules/nuxt3/dist/app/composables/fetch.mjs': $id_765a0ed7,
 '/node_modules/murmurhash-es/dist/index.mjs': $id_fbf6dac3,
 '/node_modules/nuxt3/dist/app/composables/cookie.mjs': $id_792d64c4,
 '/node_modules/cookie-es/dist/index.mjs': $id_f4975261,
 '/node_modules/h3/dist/index.mjs': $id_57d7ded6,
 '/node_modules/destr/dist/index.mjs': $id_03d15ecd,
 '/@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/css.mjs': $id_78ceb7bc,
 '/@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/plugins/server.mjs': $id_976c69cc,
 '/node_modules/nuxt3/dist/app/plugins/preload.server.mjs': $id_b9f3c557,
 '/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs': $id_cbe5172d,
 '/node_modules/@vueuse/head/dist/index.mjs': $id_c032264e,
 '/node_modules/nuxt3/dist/meta/runtime/plugin.mjs': $id_9fd5f35e,
 '/node_modules/nuxt3/dist/meta/runtime/components.mjs': $id_94744df3,
 '/node_modules/nuxt3/dist/meta/runtime/composables.mjs': $id_ca9295be,
 '/node_modules/@vue/shared/dist/shared.cjs.js': $id_852b06a2,
 '/@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/meta.config.mjs': $id_d7ea131e,
 '/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs': $id_7b587af2,
 '/node_modules/ohmyfetch/dist/index.mjs': $id_780217c4,
 '/@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/components.mjs': $id_ad8a724c,
 '/components/contact/contact.vue': $id_f25bc35f,
 '/components/shared/title.vue': $id_bb43ca7c,
 '/node_modules/vue/server-renderer/index.js': $id_b215fa1c,
 '/components/shared/title.vue?vue&type=style&index=0&scoped=true&lang.less': $id_ed53b824,
 '/@id/plugin-vue:export-helper': $id_bbb863c1,
 '/components/shared/image.vue': $id_f391b48d,
 '/components/shared/image.vue?vue&type=style&index=0&scoped=true&lang.css': $id_ead8ec92,
 '/components/contact/contact.vue?vue&type=style&index=0&scoped=true&lang.less': $id_e8d9232d,
 '/components/design-concepts/design-concepts.vue': $id_cfb829f1,
 '/components/shared/numbered-title.vue': $id_6a77dede,
 '/components/shared/numbered-title.vue?vue&type=style&index=0&scoped=true&lang.less': $id_2a269152,
 '/components/design-concepts/usability-study.vue': $id_d9faf267,
 '/components/design-concepts/usability-study.vue?vue&type=style&index=0&scoped=true&lang.less': $id_b4fc8103,
 '/components/design-concepts/design-concepts.vue?vue&type=style&index=0&scoped=true&lang.less': $id_74bbbff9,
 '/components/desk-research/desk-research.vue': $id_7af1af8e,
 '/components/desk-research/desk-research.vue?vue&type=style&index=0&scoped=true&lang.less': $id_9d1fbb39,
 '/components/hero/hero.vue': $id_2440c08b,
 '/components/hero/steps.vue': $id_500a5757,
 '/components/hero/steps.vue?vue&type=style&index=0&lang.less': $id_9e544218,
 '/components/hero/phones.vue': $id_77a1c138,
 '/components/hero/phones.vue?vue&type=style&index=0&scoped=true&lang.less': $id_31d46d48,
 '/components/shared/figma-link.vue': $id_b0e3c6da,
 '/components/shared/figma-link.vue?vue&type=style&index=0&scoped=true&lang.less': $id_9071c503,
 '/components/hero/hero.vue?vue&type=style&index=0&scoped=true&lang.less': $id_439029ee,
 '/components/resume/resume-image.vue': $id_70328d53,
 '/components/resume/resume-image.vue?vue&type=style&index=0&scoped=true&lang.less': $id_a0034e96,
 '/components/resume/resume-new.vue': $id_7043d697,
 '/components/resume/resume-new.vue?vue&type=style&index=0&scoped=true&lang.less': $id_c2efa316,
 '/components/resume/resume.vue': $id_eeb28070,
 '/components/resume/resume-info/resume-info.vue': $id_76ed9036,
 '/components/resume/resume-info/resume-info-experience.vue': $id_a033c4d9,
 '/components/resume/resume-info/resume-info-experience.vue?vue&type=style&index=0&scoped=true&lang.less': $id_d6c6226d,
 '/components/resume/resume-info/resume-info-education.vue': $id_dd1f087e,
 '/components/resume/resume-info/resume-info-education.vue?vue&type=style&index=0&scoped=true&lang.less': $id_29020510,
 '/components/resume/resume-info/resume-info.vue?vue&type=style&index=0&scoped=true&lang.less': $id_9d7189a8,
 '/components/resume/resume.vue?vue&type=style&index=0&scoped=true&lang.less': $id_f982d83c,
 '/components/screens/screen-number-title.vue': $id_d54691ab,
 '/components/screens/screen-number-title.vue?vue&type=style&index=0&scoped=true&lang.less': $id_22e0cc44,
 '/components/screens/screens.vue': $id_639dbbb9,
 '/components/screens/screens.vue?vue&type=style&index=0&scoped=true&lang.less': $id_b000e50a,
 '/components/shared/text-with-figure.vue': $id_96cfc85e,
 '/components/shared/text-with-figure.vue?vue&type=style&index=0&scoped=true&lang.less': $id_83e1ad26,
 '/components/shenkar/shenkar.vue': $id_3a62cf4e,
 '/components/shenkar/shenkar.vue?vue&type=style&index=0&scoped=true&lang.less': $id_e97f66b7,
 '/components/test-validation/basic-flow.vue': $id_9fdd3072,
 '/components/test-validation/basic-flow.vue?vue&type=style&index=0&scoped=true&lang.less': $id_05194a03,
 '/components/test-validation/low-fidelity.vue': $id_41cd7542,
 '/components/test-validation/low-fidelity.vue?vue&type=style&index=0&scoped=true&lang.less': $id_bcf08323,
 '/components/test-validation/text-validation.vue': $id_c900ee7d,
 '/components/test-validation/text-validation.vue?vue&type=style&index=0&scoped=true&lang.less': $id_51e17bb8,
 '/components/text-and-figures/persona.vue': $id_81dd2542,
 '/components/text-and-figures/persona.vue?vue&type=style&index=0&scoped=true&lang.less': $id_e770a210,
 '/components/text-and-figures/text-and-figures-big.vue': $id_b6d5f97f,
 '/components/text-and-figures/text-and-figures-big.vue?vue&type=style&index=0&scoped=true&lang.less': $id_23fbd028,
 '/components/text-and-figures/text-and-figures-small.vue': $id_7553db27,
 '/components/text-and-figures/text-and-figures-small.vue?vue&type=style&index=0&scoped=true&lang.less': $id_357d6a16,
 '/@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/root-component.mjs': $id_aacd1a0e,
 '/node_modules/nuxt3/dist/app/components/nuxt-root.vue': $id_f8564e04,
 '/@id/__x00__virtual:C:/Users/hay12/Documents/Github/hasida-website/.nuxt/app-component.mjs': $id_3b454716,
 '/app.vue': $id_2b46e842,
 '/app.vue?vue&type=style&index=0&lang.css': $id_7e68c11d
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  await mod(
    __ssrContext__.global,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__('C:/Users/hay12/Documents/Github/hasida-website/node_modules/nuxt3/dist/app/entry')