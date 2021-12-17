import { v as vue_cjs_prod, r as require$$0, s as serverRenderer } from './index.mjs';
import 'unenv/runtime/mock/proxy';
import 'stream';

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
function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
function serial(tasks, fn) {
  return tasks.reduce((promise, task) => promise.then(() => fn(task)), Promise.resolve(null));
}
class Hookable {
  constructor() {
    this._hooks = {};
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
  }
  hook(name, fn) {
    if (!name || typeof fn !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let deprecatedHookObj;
    while (this._deprecatedHooks[name]) {
      const deprecatedHook = this._deprecatedHooks[name];
      if (typeof deprecatedHook === "string") {
        deprecatedHookObj = { to: deprecatedHook };
      } else {
        deprecatedHookObj = deprecatedHook;
      }
      name = deprecatedHookObj.to;
    }
    if (deprecatedHookObj) {
      if (!deprecatedHookObj.message) {
        console.warn(`${originalName} hook has been deprecated` + (deprecatedHookObj.to ? `, please use ${deprecatedHookObj.to}` : ""));
      } else {
        console.warn(deprecatedHookObj.message);
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(fn);
    return () => {
      if (fn) {
        this.removeHook(name, fn);
        fn = null;
      }
    };
  }
  hookOnce(name, fn) {
    let _unreg;
    let _fn = (...args) => {
      _unreg();
      _unreg = null;
      _fn = null;
      return fn(...args);
    };
    _unreg = this.hook(name, _fn);
    return _unreg;
  }
  removeHook(name, fn) {
    if (this._hooks[name]) {
      const idx = this._hooks[name].indexOf(fn);
      if (idx !== -1) {
        this._hooks[name].splice(idx, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = deprecated;
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
    return () => {
      removeFns.splice(0, removeFns.length).forEach((unreg) => unreg());
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  callHook(name, ...args) {
    if (!this._hooks[name]) {
      return;
    }
    return serial(this._hooks[name], (fn) => fn(...args));
  }
}
function createHooks() {
  return new Hookable();
}
function createMock(name, overrides = {}) {
  const fn = function() {
  };
  fn.prototype.name = name;
  const props = {};
  return new Proxy(fn, {
    get(_target, prop) {
      if (prop === "caller") {
        return null;
      }
      if (prop === "__createMock__") {
        return createMock;
      }
      if (prop in overrides) {
        return overrides[prop];
      }
      return props[prop] = props[prop] || createMock(`${name}.${prop.toString()}`);
    },
    apply(_target, _this, _args) {
      return createMock(`${name}()`);
    },
    construct(_target, _args, _newT) {
      return createMock(`[${name}]`);
    },
    enumerate(_target) {
      return [];
    }
  });
}
const mockContext = createMock("mock");
function mock(warning) {
  console.warn(warning);
  return mockContext;
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
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: false,
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
        return useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
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
};
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  const nuxtApp = __spreadValues({
    provide: void 0,
    globalName: "nuxt",
    payload: vue_cjs_prod.reactive(__spreadValues({
      data: {},
      state: {},
      _errors: {}
    }, { serverRendered: true })),
    isHydrating: false,
    _asyncDataPromises: {}
  }, options);
  nuxtApp.hooks = createHooks();
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
  {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  {
    nuxtApp.provide("config", options.ssrContext.runtimeConfig.private);
    nuxtApp.payload.config = options.ssrContext.runtimeConfig.public;
  }
  return nuxtApp;
}
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
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  let needsLegacyContext = false;
  const plugins2 = _plugins2.map((plugin) => {
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
    plugins2.unshift(legacyPlugin);
  }
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
let currentNuxtAppInstance;
const setNuxtAppInstance = (nuxt) => {
  currentNuxtAppInstance = nuxt;
};
function callWithNuxt(nuxt, setup) {
  setNuxtAppInstance(nuxt);
  const p = setup();
  {
    setNuxtAppInstance(null);
  }
  return p;
}
function useNuxtApp() {
  const vm = vue_cjs_prod.getCurrentInstance();
  if (!vm) {
    if (!currentNuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return currentNuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var vueRouter_cjs_prod = {};
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var vue = require$$0;
  const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
  const PolySymbol = (name) => hasSymbol ? Symbol(name) : "_vr_" + name;
  const matchedRouteKey = /* @__PURE__ */ PolySymbol("rvlm");
  const viewDepthKey = /* @__PURE__ */ PolySymbol("rvd");
  const routerKey = /* @__PURE__ */ PolySymbol("r");
  const routeLocationKey = /* @__PURE__ */ PolySymbol("rl");
  const routerViewLocationKey = /* @__PURE__ */ PolySymbol("rvl");
  function isESModule(obj) {
    return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === "Module";
  }
  const assign = Object.assign;
  function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
      const value = params[key];
      newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
  }
  const noop = () => {
  };
  const TRAILING_SLASH_RE2 = /\/$/;
  const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE2, "");
  function parseURL2(parseQuery3, location2, currentLocation = "/") {
    let path, query = {}, searchString = "", hash = "";
    const searchPos = location2.indexOf("?");
    const hashPos = location2.indexOf("#", searchPos > -1 ? searchPos : 0);
    if (searchPos > -1) {
      path = location2.slice(0, searchPos);
      searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
      query = parseQuery3(searchString);
    }
    if (hashPos > -1) {
      path = path || location2.slice(0, hashPos);
      hash = location2.slice(hashPos, location2.length);
    }
    path = resolveRelativePath(path != null ? path : location2, currentLocation);
    return {
      fullPath: path + (searchString && "?") + searchString + hash,
      path,
      query,
      hash
    };
  }
  function stringifyURL(stringifyQuery3, location2) {
    const query = location2.query ? stringifyQuery3(location2.query) : "";
    return location2.path + (query && "?") + query + (location2.hash || "");
  }
  function stripBase(pathname, base) {
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
      return pathname;
    return pathname.slice(base.length) || "/";
  }
  function isSameRouteLocation(stringifyQuery3, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery3(a.query) === stringifyQuery3(b.query) && a.hash === b.hash;
  }
  function isSameRouteRecord(a, b) {
    return (a.aliasOf || a) === (b.aliasOf || b);
  }
  function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
      return false;
    for (const key in a) {
      if (!isSameRouteLocationParamsValue(a[key], b[key]))
        return false;
    }
    return true;
  }
  function isSameRouteLocationParamsValue(a, b) {
    return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
  }
  function isEquivalentArray(a, b) {
    return Array.isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
  }
  function resolveRelativePath(to, from) {
    if (to.startsWith("/"))
      return to;
    if (!to)
      return from;
    const fromSegments = from.split("/");
    const toSegments = to.split("/");
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
      segment = toSegments[toPosition];
      if (position === 1 || segment === ".")
        continue;
      if (segment === "..")
        position--;
      else
        break;
    }
    return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
  }
  var NavigationType;
  (function(NavigationType2) {
    NavigationType2["pop"] = "pop";
    NavigationType2["push"] = "push";
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function(NavigationDirection2) {
    NavigationDirection2["back"] = "back";
    NavigationDirection2["forward"] = "forward";
    NavigationDirection2["unknown"] = "";
  })(NavigationDirection || (NavigationDirection = {}));
  const START = "";
  function normalizeBase(base) {
    if (!base) {
      {
        base = "/";
      }
    }
    if (base[0] !== "/" && base[0] !== "#")
      base = "/" + base;
    return removeTrailingSlash(base);
  }
  const BEFORE_HASH_RE = /^[^#]+#/;
  function createHref(base, location2) {
    return base.replace(BEFORE_HASH_RE, "#") + location2;
  }
  const computeScrollPosition = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
  });
  let createBaseLocation = () => location.protocol + "//" + location.host;
  function createCurrentLocation(base, location2) {
    const { pathname, search, hash } = location2;
    const hashPos = base.indexOf("#");
    if (hashPos > -1) {
      let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
      let pathFromHash = hash.slice(slicePos);
      if (pathFromHash[0] !== "/")
        pathFromHash = "/" + pathFromHash;
      return stripBase(pathFromHash, "");
    }
    const path = stripBase(pathname, base);
    return path + search + hash;
  }
  function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    let pauseState = null;
    const popStateHandler = ({ state }) => {
      const to = createCurrentLocation(base, location);
      const from = currentLocation.value;
      const fromState = historyState.value;
      let delta = 0;
      if (state) {
        currentLocation.value = to;
        historyState.value = state;
        if (pauseState && pauseState === from) {
          pauseState = null;
          return;
        }
        delta = fromState ? state.position - fromState.position : 0;
      } else {
        replace(to);
      }
      listeners.forEach((listener) => {
        listener(currentLocation.value, from, {
          delta,
          type: NavigationType.pop,
          direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
        });
      });
    };
    function pauseListeners() {
      pauseState = currentLocation.value;
    }
    function listen(callback) {
      listeners.push(callback);
      const teardown = () => {
        const index = listeners.indexOf(callback);
        if (index > -1)
          listeners.splice(index, 1);
      };
      teardowns.push(teardown);
      return teardown;
    }
    function beforeUnloadListener() {
      const { history: history2 } = window;
      if (!history2.state)
        return;
      history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
    }
    function destroy() {
      for (const teardown of teardowns)
        teardown();
      teardowns = [];
      window.removeEventListener("popstate", popStateHandler);
      window.removeEventListener("beforeunload", beforeUnloadListener);
    }
    window.addEventListener("popstate", popStateHandler);
    window.addEventListener("beforeunload", beforeUnloadListener);
    return {
      pauseListeners,
      listen,
      destroy
    };
  }
  function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
      back,
      current,
      forward,
      replaced,
      position: window.history.length,
      scroll: computeScroll ? computeScrollPosition() : null
    };
  }
  function useHistoryStateNavigation(base) {
    const { history: history2, location: location2 } = window;
    const currentLocation = {
      value: createCurrentLocation(base, location2)
    };
    const historyState = { value: history2.state };
    if (!historyState.value) {
      changeLocation(currentLocation.value, {
        back: null,
        current: currentLocation.value,
        forward: null,
        position: history2.length - 1,
        replaced: true,
        scroll: null
      }, true);
    }
    function changeLocation(to, state, replace2) {
      const hashIndex = base.indexOf("#");
      const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
      try {
        history2[replace2 ? "replaceState" : "pushState"](state, "", url);
        historyState.value = state;
      } catch (err) {
        {
          console.error(err);
        }
        location2[replace2 ? "replace" : "assign"](url);
      }
    }
    function replace(to, data) {
      const state = assign({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position });
      changeLocation(to, state, true);
      currentLocation.value = to;
    }
    function push(to, data) {
      const currentState = assign({}, historyState.value, history2.state, {
        forward: to,
        scroll: computeScrollPosition()
      });
      changeLocation(currentState.current, currentState, true);
      const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
      changeLocation(to, state, false);
      currentLocation.value = to;
    }
    return {
      location: currentLocation,
      state: historyState,
      push,
      replace
    };
  }
  function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
      if (!triggerListeners)
        historyListeners.pauseListeners();
      history.go(delta);
    }
    const routerHistory = assign({
      location: "",
      base,
      go,
      createHref: createHref.bind(null, base)
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => historyNavigation.location.value
    });
    Object.defineProperty(routerHistory, "state", {
      enumerable: true,
      get: () => historyNavigation.state.value
    });
    return routerHistory;
  }
  function createMemoryHistory(base = "") {
    let listeners = [];
    let queue = [START];
    let position = 0;
    base = normalizeBase(base);
    function setLocation(location2) {
      position++;
      if (position === queue.length) {
        queue.push(location2);
      } else {
        queue.splice(position);
        queue.push(location2);
      }
    }
    function triggerListeners(to, from, { direction, delta }) {
      const info = {
        direction,
        delta,
        type: NavigationType.pop
      };
      for (const callback of listeners) {
        callback(to, from, info);
      }
    }
    const routerHistory = {
      location: START,
      state: {},
      base,
      createHref: createHref.bind(null, base),
      replace(to) {
        queue.splice(position--, 1);
        setLocation(to);
      },
      push(to, data) {
        setLocation(to);
      },
      listen(callback) {
        listeners.push(callback);
        return () => {
          const index = listeners.indexOf(callback);
          if (index > -1)
            listeners.splice(index, 1);
        };
      },
      destroy() {
        listeners = [];
        queue = [START];
        position = 0;
      },
      go(delta, shouldTrigger = true) {
        const from = this.location;
        const direction = delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
        position = Math.max(0, Math.min(position + delta, queue.length - 1));
        if (shouldTrigger) {
          triggerListeners(this.location, from, {
            direction,
            delta
          });
        }
      }
    };
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => queue[position]
    });
    return routerHistory;
  }
  function createWebHashHistory(base) {
    base = location.host ? base || location.pathname + location.search : "";
    if (!base.includes("#"))
      base += "#";
    return createWebHistory(base);
  }
  function isRouteLocation(route) {
    return typeof route === "string" || route && typeof route === "object";
  }
  function isRouteName(name) {
    return typeof name === "string" || typeof name === "symbol";
  }
  const START_LOCATION_NORMALIZED = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  const NavigationFailureSymbol = /* @__PURE__ */ PolySymbol("nf");
  exports.NavigationFailureType = void 0;
  (function(NavigationFailureType) {
    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
  })(exports.NavigationFailureType || (exports.NavigationFailureType = {}));
  const ErrorTypeMessages = {
    [1]({ location: location2, currentLocation }) {
      return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
    },
    [2]({ from, to }) {
      return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [4]({ from, to }) {
      return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [8]({ from, to }) {
      return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [16]({ from, to }) {
      return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    }
  };
  function createRouterError(type, params) {
    {
      return assign(new Error(ErrorTypeMessages[type](params)), {
        type,
        [NavigationFailureSymbol]: true
      }, params);
    }
  }
  function isNavigationFailure(error, type) {
    return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
  }
  const propertiesToLog = ["params", "query", "hash"];
  function stringifyRoute(to) {
    if (typeof to === "string")
      return to;
    if ("path" in to)
      return to.path;
    const location2 = {};
    for (const key of propertiesToLog) {
      if (key in to)
        location2[key] = to[key];
    }
    return JSON.stringify(location2, null, 2);
  }
  const BASE_PARAM_PATTERN = "[^/]+?";
  const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
  function tokensToParser(segments, extraOptions) {
    const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    const score = [];
    let pattern = options.start ? "^" : "";
    const keys = [];
    for (const segment of segments) {
      const segmentScores = segment.length ? [] : [90];
      if (options.strict && !segment.length)
        pattern += "/";
      for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        const token = segment[tokenIndex];
        let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
        if (token.type === 0) {
          if (!tokenIndex)
            pattern += "/";
          pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
          subSegmentScore += 40;
        } else if (token.type === 1) {
          const { value, repeatable, optional, regexp } = token;
          keys.push({
            name: value,
            repeatable,
            optional
          });
          const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
          if (re2 !== BASE_PARAM_PATTERN) {
            subSegmentScore += 10;
            try {
              new RegExp(`(${re2})`);
            } catch (err) {
              throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
            }
          }
          let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
          if (!tokenIndex)
            subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
          if (optional)
            subPattern += "?";
          pattern += subPattern;
          subSegmentScore += 20;
          if (optional)
            subSegmentScore += -8;
          if (repeatable)
            subSegmentScore += -20;
          if (re2 === ".*")
            subSegmentScore += -50;
        }
        segmentScores.push(subSegmentScore);
      }
      score.push(segmentScores);
    }
    if (options.strict && options.end) {
      const i = score.length - 1;
      score[i][score[i].length - 1] += 0.7000000000000001;
    }
    if (!options.strict)
      pattern += "/?";
    if (options.end)
      pattern += "$";
    else if (options.strict)
      pattern += "(?:/|$)";
    const re = new RegExp(pattern, options.sensitive ? "" : "i");
    function parse(path) {
      const match = path.match(re);
      const params = {};
      if (!match)
        return null;
      for (let i = 1; i < match.length; i++) {
        const value = match[i] || "";
        const key = keys[i - 1];
        params[key.name] = value && key.repeatable ? value.split("/") : value;
      }
      return params;
    }
    function stringify(params) {
      let path = "";
      let avoidDuplicatedSlash = false;
      for (const segment of segments) {
        if (!avoidDuplicatedSlash || !path.endsWith("/"))
          path += "/";
        avoidDuplicatedSlash = false;
        for (const token of segment) {
          if (token.type === 0) {
            path += token.value;
          } else if (token.type === 1) {
            const { value, repeatable, optional } = token;
            const param = value in params ? params[value] : "";
            if (Array.isArray(param) && !repeatable)
              throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
            const text = Array.isArray(param) ? param.join("/") : param;
            if (!text) {
              if (optional) {
                if (segment.length < 2) {
                  if (path.endsWith("/"))
                    path = path.slice(0, -1);
                  else
                    avoidDuplicatedSlash = true;
                }
              } else
                throw new Error(`Missing required param "${value}"`);
            }
            path += text;
          }
        }
      }
      return path;
    }
    return {
      re,
      score,
      keys,
      parse,
      stringify
    };
  }
  function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
      const diff = b[i] - a[i];
      if (diff)
        return diff;
      i++;
    }
    if (a.length < b.length) {
      return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
    } else if (a.length > b.length) {
      return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
    }
    return 0;
  }
  function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
      const comp = compareScoreArray(aScore[i], bScore[i]);
      if (comp)
        return comp;
      i++;
    }
    return bScore.length - aScore.length;
  }
  const ROOT_TOKEN = {
    type: 0,
    value: ""
  };
  const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
  function tokenizePath(path) {
    if (!path)
      return [[]];
    if (path === "/")
      return [[ROOT_TOKEN]];
    if (!path.startsWith("/")) {
      throw new Error(`Invalid path "${path}"`);
    }
    function crash(message) {
      throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0;
    let previousState = state;
    const tokens = [];
    let segment;
    function finalizeSegment() {
      if (segment)
        tokens.push(segment);
      segment = [];
    }
    let i = 0;
    let char;
    let buffer = "";
    let customRe = "";
    function consumeBuffer() {
      if (!buffer)
        return;
      if (state === 0) {
        segment.push({
          type: 0,
          value: buffer
        });
      } else if (state === 1 || state === 2 || state === 3) {
        if (segment.length > 1 && (char === "*" || char === "+"))
          crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
        segment.push({
          type: 1,
          value: buffer,
          regexp: customRe,
          repeatable: char === "*" || char === "+",
          optional: char === "*" || char === "?"
        });
      } else {
        crash("Invalid state to consume buffer");
      }
      buffer = "";
    }
    function addCharToBuffer() {
      buffer += char;
    }
    while (i < path.length) {
      char = path[i++];
      if (char === "\\" && state !== 2) {
        previousState = state;
        state = 4;
        continue;
      }
      switch (state) {
        case 0:
          if (char === "/") {
            if (buffer) {
              consumeBuffer();
            }
            finalizeSegment();
          } else if (char === ":") {
            consumeBuffer();
            state = 1;
          } else {
            addCharToBuffer();
          }
          break;
        case 4:
          addCharToBuffer();
          state = previousState;
          break;
        case 1:
          if (char === "(") {
            state = 2;
          } else if (VALID_PARAM_RE.test(char)) {
            addCharToBuffer();
          } else {
            consumeBuffer();
            state = 0;
            if (char !== "*" && char !== "?" && char !== "+")
              i--;
          }
          break;
        case 2:
          if (char === ")") {
            if (customRe[customRe.length - 1] == "\\")
              customRe = customRe.slice(0, -1) + char;
            else
              state = 3;
          } else {
            customRe += char;
          }
          break;
        case 3:
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
          customRe = "";
          break;
        default:
          crash("Unknown state");
          break;
      }
    }
    if (state === 2)
      crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    return tokens;
  }
  function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    const matcher = assign(parser, {
      record,
      parent,
      children: [],
      alias: []
    });
    if (parent) {
      if (!matcher.record.aliasOf === !parent.record.aliasOf)
        parent.children.push(matcher);
    }
    return matcher;
  }
  function createRouterMatcher(routes, globalOptions) {
    const matchers = [];
    const matcherMap = new Map();
    globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
      return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
      const isRootAdd = !originalRecord;
      const mainNormalizedRecord = normalizeRouteRecord(record);
      mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
      const options = mergeOptions(globalOptions, record);
      const normalizedRecords = [
        mainNormalizedRecord
      ];
      if ("alias" in record) {
        const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
        for (const alias of aliases) {
          normalizedRecords.push(assign({}, mainNormalizedRecord, {
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          }));
        }
      }
      let matcher;
      let originalMatcher;
      for (const normalizedRecord of normalizedRecords) {
        const { path } = normalizedRecord;
        if (parent && path[0] !== "/") {
          const parentPath = parent.record.path;
          const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
          normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
        }
        matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
        if (originalRecord) {
          originalRecord.alias.push(matcher);
        } else {
          originalMatcher = originalMatcher || matcher;
          if (originalMatcher !== matcher)
            originalMatcher.alias.push(matcher);
          if (isRootAdd && record.name && !isAliasRecord(matcher))
            removeRoute(record.name);
        }
        if ("children" in mainNormalizedRecord) {
          const children = mainNormalizedRecord.children;
          for (let i = 0; i < children.length; i++) {
            addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
          }
        }
        originalRecord = originalRecord || matcher;
        insertMatcher(matcher);
      }
      return originalMatcher ? () => {
        removeRoute(originalMatcher);
      } : noop;
    }
    function removeRoute(matcherRef) {
      if (isRouteName(matcherRef)) {
        const matcher = matcherMap.get(matcherRef);
        if (matcher) {
          matcherMap.delete(matcherRef);
          matchers.splice(matchers.indexOf(matcher), 1);
          matcher.children.forEach(removeRoute);
          matcher.alias.forEach(removeRoute);
        }
      } else {
        const index = matchers.indexOf(matcherRef);
        if (index > -1) {
          matchers.splice(index, 1);
          if (matcherRef.record.name)
            matcherMap.delete(matcherRef.record.name);
          matcherRef.children.forEach(removeRoute);
          matcherRef.alias.forEach(removeRoute);
        }
      }
    }
    function getRoutes() {
      return matchers;
    }
    function insertMatcher(matcher) {
      let i = 0;
      while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0)
        i++;
      matchers.splice(i, 0, matcher);
      if (matcher.record.name && !isAliasRecord(matcher))
        matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location2, currentLocation) {
      let matcher;
      let params = {};
      let path;
      let name;
      if ("name" in location2 && location2.name) {
        matcher = matcherMap.get(location2.name);
        if (!matcher)
          throw createRouterError(1, {
            location: location2
          });
        name = matcher.record.name;
        params = assign(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).map((k) => k.name)), location2.params);
        path = matcher.stringify(params);
      } else if ("path" in location2) {
        path = location2.path;
        matcher = matchers.find((m) => m.re.test(path));
        if (matcher) {
          params = matcher.parse(path);
          name = matcher.record.name;
        }
      } else {
        matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
        if (!matcher)
          throw createRouterError(1, {
            location: location2,
            currentLocation
          });
        name = matcher.record.name;
        params = assign({}, currentLocation.params, location2.params);
        path = matcher.stringify(params);
      }
      const matched = [];
      let parentMatcher = matcher;
      while (parentMatcher) {
        matched.unshift(parentMatcher.record);
        parentMatcher = parentMatcher.parent;
      }
      return {
        name,
        path,
        params,
        matched,
        meta: mergeMetaFields(matched)
      };
    }
    routes.forEach((route) => addRoute(route));
    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
  }
  function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys) {
      if (key in params)
        newParams[key] = params[key];
    }
    return newParams;
  }
  function normalizeRouteRecord(record) {
    return {
      path: record.path,
      redirect: record.redirect,
      name: record.name,
      meta: record.meta || {},
      aliasOf: void 0,
      beforeEnter: record.beforeEnter,
      props: normalizeRecordProps(record),
      children: record.children || [],
      instances: {},
      leaveGuards: new Set(),
      updateGuards: new Set(),
      enterCallbacks: {},
      components: "components" in record ? record.components || {} : { default: record.component }
    };
  }
  function normalizeRecordProps(record) {
    const propsObject = {};
    const props = record.props || false;
    if ("component" in record) {
      propsObject.default = props;
    } else {
      for (const name in record.components)
        propsObject[name] = typeof props === "boolean" ? props : props[name];
    }
    return propsObject;
  }
  function isAliasRecord(record) {
    while (record) {
      if (record.record.aliasOf)
        return true;
      record = record.parent;
    }
    return false;
  }
  function mergeMetaFields(matched) {
    return matched.reduce((meta, record) => assign(meta, record.meta), {});
  }
  function mergeOptions(defaults, partialOptions) {
    const options = {};
    for (const key in defaults) {
      options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
    }
    return options;
  }
  const HASH_RE2 = /#/g;
  const AMPERSAND_RE2 = /&/g;
  const SLASH_RE = /\//g;
  const EQUAL_RE2 = /=/g;
  const IM_RE = /\?/g;
  const PLUS_RE2 = /\+/g;
  const ENC_BRACKET_OPEN_RE2 = /%5B/g;
  const ENC_BRACKET_CLOSE_RE2 = /%5D/g;
  const ENC_CARET_RE2 = /%5E/g;
  const ENC_BACKTICK_RE2 = /%60/g;
  const ENC_CURLY_OPEN_RE2 = /%7B/g;
  const ENC_PIPE_RE2 = /%7C/g;
  const ENC_CURLY_CLOSE_RE2 = /%7D/g;
  const ENC_SPACE_RE2 = /%20/g;
  function commonEncode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE2, "|").replace(ENC_BRACKET_OPEN_RE2, "[").replace(ENC_BRACKET_CLOSE_RE2, "]");
  }
  function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE2, "{").replace(ENC_CURLY_CLOSE_RE2, "}").replace(ENC_CARET_RE2, "^");
  }
  function encodeQueryValue2(text) {
    return commonEncode(text).replace(PLUS_RE2, "%2B").replace(ENC_SPACE_RE2, "+").replace(HASH_RE2, "%23").replace(AMPERSAND_RE2, "%26").replace(ENC_BACKTICK_RE2, "`").replace(ENC_CURLY_OPEN_RE2, "{").replace(ENC_CURLY_CLOSE_RE2, "}").replace(ENC_CARET_RE2, "^");
  }
  function encodeQueryKey2(text) {
    return encodeQueryValue2(text).replace(EQUAL_RE2, "%3D");
  }
  function encodePath(text) {
    return commonEncode(text).replace(HASH_RE2, "%23").replace(IM_RE, "%3F");
  }
  function encodeParam(text) {
    return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
  }
  function decode2(text) {
    try {
      return decodeURIComponent("" + text);
    } catch (err) {
    }
    return "" + text;
  }
  function parseQuery2(search) {
    const query = {};
    if (search === "" || search === "?")
      return query;
    const hasLeadingIM = search[0] === "?";
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
    for (let i = 0; i < searchParams.length; ++i) {
      const searchParam = searchParams[i].replace(PLUS_RE2, " ");
      const eqPos = searchParam.indexOf("=");
      const key = decode2(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
      const value = eqPos < 0 ? null : decode2(searchParam.slice(eqPos + 1));
      if (key in query) {
        let currentValue = query[key];
        if (!Array.isArray(currentValue)) {
          currentValue = query[key] = [currentValue];
        }
        currentValue.push(value);
      } else {
        query[key] = value;
      }
    }
    return query;
  }
  function stringifyQuery2(query) {
    let search = "";
    for (let key in query) {
      const value = query[key];
      key = encodeQueryKey2(key);
      if (value == null) {
        if (value !== void 0) {
          search += (search.length ? "&" : "") + key;
        }
        continue;
      }
      const values = Array.isArray(value) ? value.map((v) => v && encodeQueryValue2(v)) : [value && encodeQueryValue2(value)];
      values.forEach((value2) => {
        if (value2 !== void 0) {
          search += (search.length ? "&" : "") + key;
          if (value2 != null)
            search += "=" + value2;
        }
      });
    }
    return search;
  }
  function normalizeQuery(query) {
    const normalizedQuery = {};
    for (const key in query) {
      const value = query[key];
      if (value !== void 0) {
        normalizedQuery[key] = Array.isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
      }
    }
    return normalizedQuery;
  }
  function useCallbacks() {
    let handlers = [];
    function add(handler) {
      handlers.push(handler);
      return () => {
        const i = handlers.indexOf(handler);
        if (i > -1)
          handlers.splice(i, 1);
      };
    }
    function reset() {
      handlers = [];
    }
    return {
      add,
      list: () => handlers,
      reset
    };
  }
  function registerGuard(record, name, guard) {
    const removeFromList = () => {
      record[name].delete(guard);
    };
    vue.onUnmounted(removeFromList);
    vue.onDeactivated(removeFromList);
    vue.onActivated(() => {
      record[name].add(guard);
    });
    record[name].add(guard);
  }
  function onBeforeRouteLeave(leaveGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "leaveGuards", leaveGuard);
  }
  function onBeforeRouteUpdate(updateGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "updateGuards", updateGuard);
  }
  function guardToPromiseFn(guard, to, from, record, name) {
    const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return () => new Promise((resolve, reject) => {
      const next = (valid) => {
        if (valid === false)
          reject(createRouterError(4, {
            from,
            to
          }));
        else if (valid instanceof Error) {
          reject(valid);
        } else if (isRouteLocation(valid)) {
          reject(createRouterError(2, {
            from: to,
            to: valid
          }));
        } else {
          if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function")
            enterCallbackArray.push(valid);
          resolve();
        }
      };
      const guardReturn = guard.call(record && record.instances[name], to, from, next);
      let guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3)
        guardCall = guardCall.then(next);
      guardCall.catch((err) => reject(err));
    });
  }
  function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
      for (const name in record.components) {
        let rawComponent = record.components[name];
        if (guardType !== "beforeRouteEnter" && !record.instances[name])
          continue;
        if (isRouteComponent(rawComponent)) {
          const options = rawComponent.__vccOpts || rawComponent;
          const guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
        } else {
          let componentPromise = rawComponent();
          guards.push(() => componentPromise.then((resolved) => {
            if (!resolved)
              return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
            const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
            record.components[name] = resolvedComponent;
            const options = resolvedComponent.__vccOpts || resolvedComponent;
            const guard = options[guardType];
            return guard && guardToPromiseFn(guard, to, from, record, name)();
          }));
        }
      }
    }
    return guards;
  }
  function isRouteComponent(component) {
    return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
  }
  function useLink(props) {
    const router = vue.inject(routerKey);
    const currentRoute = vue.inject(routeLocationKey);
    const route = vue.computed(() => router.resolve(vue.unref(props.to)));
    const activeRecordIndex = vue.computed(() => {
      const { matched } = route.value;
      const { length } = matched;
      const routeMatched = matched[length - 1];
      const currentMatched = currentRoute.matched;
      if (!routeMatched || !currentMatched.length)
        return -1;
      const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
      if (index > -1)
        return index;
      const parentRecordPath = getOriginalPath(matched[length - 2]);
      return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
    });
    const isActive = vue.computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
    const isExactActive = vue.computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
      if (guardEvent(e)) {
        return router[vue.unref(props.replace) ? "replace" : "push"](vue.unref(props.to)).catch(noop);
      }
      return Promise.resolve();
    }
    return {
      route,
      href: vue.computed(() => route.value.href),
      isActive,
      isExactActive,
      navigate
    };
  }
  const RouterLinkImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterLink",
    props: {
      to: {
        type: [String, Object],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink,
    setup(props, { slots }) {
      const link = vue.reactive(useLink(props));
      const { options } = vue.inject(routerKey);
      const elClass = vue.computed(() => ({
        [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
        [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
      }));
      return () => {
        const children = slots.default && slots.default(link);
        return props.custom ? children : vue.h("a", {
          "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
          href: link.href,
          onClick: link.navigate,
          class: elClass.value
        }, children);
      };
    }
  });
  const RouterLink = RouterLinkImpl;
  function guardEvent(e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
      return;
    if (e.defaultPrevented)
      return;
    if (e.button !== void 0 && e.button !== 0)
      return;
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const target = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(target))
        return;
    }
    if (e.preventDefault)
      e.preventDefault();
    return true;
  }
  function includesParams(outer, inner) {
    for (const key in inner) {
      const innerValue = inner[key];
      const outerValue = outer[key];
      if (typeof innerValue === "string") {
        if (innerValue !== outerValue)
          return false;
      } else {
        if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
          return false;
      }
    }
    return true;
  }
  function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
  }
  const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
  const RouterViewImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    setup(props, { attrs, slots }) {
      const injectedRoute = vue.inject(routerViewLocationKey);
      const routeToDisplay = vue.computed(() => props.route || injectedRoute.value);
      const depth = vue.inject(viewDepthKey, 0);
      const matchedRouteRef = vue.computed(() => routeToDisplay.value.matched[depth]);
      vue.provide(viewDepthKey, depth + 1);
      vue.provide(matchedRouteKey, matchedRouteRef);
      vue.provide(routerViewLocationKey, routeToDisplay);
      const viewRef = vue.ref();
      vue.watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
        if (to) {
          to.instances[name] = instance;
          if (from && from !== to && instance && instance === oldInstance) {
            if (!to.leaveGuards.size) {
              to.leaveGuards = from.leaveGuards;
            }
            if (!to.updateGuards.size) {
              to.updateGuards = from.updateGuards;
            }
          }
        }
        if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
          (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
        }
      }, { flush: "post" });
      return () => {
        const route = routeToDisplay.value;
        const matchedRoute = matchedRouteRef.value;
        const ViewComponent = matchedRoute && matchedRoute.components[props.name];
        const currentName = props.name;
        if (!ViewComponent) {
          return normalizeSlot(slots.default, { Component: ViewComponent, route });
        }
        const routePropsOption = matchedRoute.props[props.name];
        const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
        const onVnodeUnmounted = (vnode) => {
          if (vnode.component.isUnmounted) {
            matchedRoute.instances[currentName] = null;
          }
        };
        const component = vue.h(ViewComponent, assign({}, routeProps, attrs, {
          onVnodeUnmounted,
          ref: viewRef
        }));
        return normalizeSlot(slots.default, { Component: component, route }) || component;
      };
    }
  });
  function normalizeSlot(slot, data) {
    if (!slot)
      return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
  }
  const RouterView = RouterViewImpl;
  function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery2;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery2;
    const routerHistory = options.history;
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = vue.shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = applyToParams.bind(null, decode2);
    function addRoute(parentOrRoute, route) {
      let parent;
      let record;
      if (isRouteName(parentOrRoute)) {
        parent = matcher.getRecordMatcher(parentOrRoute);
        record = route;
      } else {
        record = parentOrRoute;
      }
      return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
      const recordMatcher = matcher.getRecordMatcher(name);
      if (recordMatcher) {
        matcher.removeRoute(recordMatcher);
      }
    }
    function getRoutes() {
      return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
    }
    function hasRoute(name) {
      return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
      currentLocation = assign({}, currentLocation || currentRoute.value);
      if (typeof rawLocation === "string") {
        const locationNormalized = parseURL2(parseQuery$1, rawLocation, currentLocation.path);
        const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
        const href2 = routerHistory.createHref(locationNormalized.fullPath);
        return assign(locationNormalized, matchedRoute2, {
          params: decodeParams(matchedRoute2.params),
          hash: decode2(locationNormalized.hash),
          redirectedFrom: void 0,
          href: href2
        });
      }
      let matcherLocation;
      if ("path" in rawLocation) {
        matcherLocation = assign({}, rawLocation, {
          path: parseURL2(parseQuery$1, rawLocation.path, currentLocation.path).path
        });
      } else {
        const targetParams = assign({}, rawLocation.params);
        for (const key in targetParams) {
          if (targetParams[key] == null) {
            delete targetParams[key];
          }
        }
        matcherLocation = assign({}, rawLocation, {
          params: encodeParams(rawLocation.params)
        });
        currentLocation.params = encodeParams(currentLocation.params);
      }
      const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
      const hash = rawLocation.hash || "";
      matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
      const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
        hash: encodeHash(hash),
        path: matchedRoute.path
      }));
      const href = routerHistory.createHref(fullPath);
      return assign({
        fullPath,
        hash,
        query: stringifyQuery$1 === stringifyQuery2 ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      }, matchedRoute, {
        redirectedFrom: void 0,
        href
      });
    }
    function locationAsObject(to) {
      return typeof to === "string" ? parseURL2(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
    }
    function checkCanceledNavigation(to, from) {
      if (pendingLocation !== to) {
        return createRouterError(8, {
          from,
          to
        });
      }
    }
    function push(to) {
      return pushWithRedirect(to);
    }
    function replace(to) {
      return push(assign(locationAsObject(to), { replace: true }));
    }
    function handleRedirectRecord(to) {
      const lastMatched = to.matched[to.matched.length - 1];
      if (lastMatched && lastMatched.redirect) {
        const { redirect } = lastMatched;
        let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
        if (typeof newTargetLocation === "string") {
          newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
          newTargetLocation.params = {};
        }
        return assign({
          query: to.query,
          hash: to.hash,
          params: to.params
        }, newTargetLocation);
      }
    }
    function pushWithRedirect(to, redirectedFrom) {
      const targetLocation = pendingLocation = resolve(to);
      const from = currentRoute.value;
      const data = to.state;
      const force = to.force;
      const replace2 = to.replace === true;
      const shouldRedirect = handleRedirectRecord(targetLocation);
      if (shouldRedirect)
        return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
          state: data,
          force,
          replace: replace2
        }), redirectedFrom || targetLocation);
      const toLocation = targetLocation;
      toLocation.redirectedFrom = redirectedFrom;
      let failure;
      if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
        failure = createRouterError(16, { to: toLocation, from });
        handleScroll();
      }
      return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? error : triggerError(error, toLocation, from)).then((failure2) => {
        if (failure2) {
          if (isNavigationFailure(failure2, 2)) {
            return pushWithRedirect(assign(locationAsObject(failure2.to), {
              state: data,
              force,
              replace: replace2
            }), redirectedFrom || toLocation);
          }
        } else {
          failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
        }
        triggerAfterEach(toLocation, from, failure2);
        return failure2;
      });
    }
    function checkCanceledNavigationAndReject(to, from) {
      const error = checkCanceledNavigation(to, from);
      return error ? Promise.reject(error) : Promise.resolve();
    }
    function navigate(to, from) {
      let guards;
      const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
      guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
      for (const record of leavingRecords) {
        record.leaveGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards).then(() => {
        guards = [];
        for (const guard of beforeGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
        for (const record of updatingRecords) {
          record.updateGuards.forEach((guard) => {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const record of to.matched) {
          if (record.beforeEnter && !from.matched.includes(record)) {
            if (Array.isArray(record.beforeEnter)) {
              for (const beforeEnter of record.beforeEnter)
                guards.push(guardToPromiseFn(beforeEnter, to, from));
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        to.matched.forEach((record) => record.enterCallbacks = {});
        guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const guard of beforeResolveGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
    }
    function triggerAfterEach(to, from, failure) {
      for (const guard of afterGuards.list())
        guard(to, from, failure);
    }
    function finalizeNavigation(toLocation, from, isPush, replace2, data) {
      const error = checkCanceledNavigation(toLocation, from);
      if (error)
        return error;
      const isFirstNavigation = from === START_LOCATION_NORMALIZED;
      const state = {};
      if (isPush) {
        if (replace2 || isFirstNavigation)
          routerHistory.replace(toLocation.fullPath, assign({
            scroll: isFirstNavigation && state && state.scroll
          }, data));
        else
          routerHistory.push(toLocation.fullPath, data);
      }
      currentRoute.value = toLocation;
      handleScroll();
      markAsReady();
    }
    let removeHistoryListener;
    function setupListeners() {
      removeHistoryListener = routerHistory.listen((to, _from, info) => {
        const toLocation = resolve(to);
        const shouldRedirect = handleRedirectRecord(toLocation);
        if (shouldRedirect) {
          pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop);
          return;
        }
        pendingLocation = toLocation;
        const from = currentRoute.value;
        navigate(toLocation, from).catch((error) => {
          if (isNavigationFailure(error, 4 | 8)) {
            return error;
          }
          if (isNavigationFailure(error, 2)) {
            pushWithRedirect(error.to, toLocation).then((failure) => {
              if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
                routerHistory.go(-1, false);
              }
            }).catch(noop);
            return Promise.reject();
          }
          if (info.delta)
            routerHistory.go(-info.delta, false);
          return triggerError(error, toLocation, from);
        }).then((failure) => {
          failure = failure || finalizeNavigation(toLocation, from, false);
          if (failure) {
            if (info.delta) {
              routerHistory.go(-info.delta, false);
            } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
              routerHistory.go(-1, false);
            }
          }
          triggerAfterEach(toLocation, from, failure);
        }).catch(noop);
      });
    }
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    function triggerError(error, to, from) {
      markAsReady(error);
      const list = errorHandlers.list();
      if (list.length) {
        list.forEach((handler) => handler(error, to, from));
      } else {
        console.error(error);
      }
      return Promise.reject(error);
    }
    function isReady() {
      if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
        return Promise.resolve();
      return new Promise((resolve2, reject) => {
        readyHandlers.add([resolve2, reject]);
      });
    }
    function markAsReady(err) {
      if (ready)
        return;
      ready = true;
      setupListeners();
      readyHandlers.list().forEach(([resolve2, reject]) => err ? reject(err) : resolve2());
      readyHandlers.reset();
    }
    function handleScroll(to, from, isPush, isFirstNavigation) {
      return Promise.resolve();
    }
    const go = (delta) => routerHistory.go(delta);
    const installedApps = new Set();
    const router = {
      currentRoute,
      addRoute,
      removeRoute,
      hasRoute,
      getRoutes,
      resolve,
      options,
      push,
      replace,
      go,
      back: () => go(-1),
      forward: () => go(1),
      beforeEach: beforeGuards.add,
      beforeResolve: beforeResolveGuards.add,
      afterEach: afterGuards.add,
      onError: errorHandlers.add,
      isReady,
      install(app) {
        const router2 = this;
        app.component("RouterLink", RouterLink);
        app.component("RouterView", RouterView);
        app.config.globalProperties.$router = router2;
        Object.defineProperty(app.config.globalProperties, "$route", {
          enumerable: true,
          get: () => vue.unref(currentRoute)
        });
        const reactiveRoute = {};
        for (const key in START_LOCATION_NORMALIZED) {
          reactiveRoute[key] = vue.computed(() => currentRoute.value[key]);
        }
        app.provide(routerKey, router2);
        app.provide(routeLocationKey, vue.reactive(reactiveRoute));
        app.provide(routerViewLocationKey, currentRoute);
        const unmountApp = app.unmount;
        installedApps.add(app);
        app.unmount = function() {
          installedApps.delete(app);
          if (installedApps.size < 1) {
            pendingLocation = START_LOCATION_NORMALIZED;
            removeHistoryListener && removeHistoryListener();
            currentRoute.value = START_LOCATION_NORMALIZED;
            ready = false;
          }
          unmountApp();
        };
      }
    };
    return router;
  }
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
  }
  function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i = 0; i < len; i++) {
      const recordFrom = from.matched[i];
      if (recordFrom) {
        if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
          updatingRecords.push(recordFrom);
        else
          leavingRecords.push(recordFrom);
      }
      const recordTo = to.matched[i];
      if (recordTo) {
        if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
          enteringRecords.push(recordTo);
        }
      }
    }
    return [leavingRecords, updatingRecords, enteringRecords];
  }
  function useRouter() {
    return vue.inject(routerKey);
  }
  function useRoute() {
    return vue.inject(routeLocationKey);
  }
  exports.RouterLink = RouterLink;
  exports.RouterView = RouterView;
  exports.START_LOCATION = START_LOCATION_NORMALIZED;
  exports.createMemoryHistory = createMemoryHistory;
  exports.createRouter = createRouter;
  exports.createRouterMatcher = createRouterMatcher;
  exports.createWebHashHistory = createWebHashHistory;
  exports.createWebHistory = createWebHistory;
  exports.isNavigationFailure = isNavigationFailure;
  exports.matchedRouteKey = matchedRouteKey;
  exports.onBeforeRouteLeave = onBeforeRouteLeave;
  exports.onBeforeRouteUpdate = onBeforeRouteUpdate;
  exports.parseQuery = parseQuery2;
  exports.routeLocationKey = routeLocationKey;
  exports.routerKey = routerKey;
  exports.routerViewLocationKey = routerViewLocationKey;
  exports.stringifyQuery = stringifyQuery2;
  exports.useLink = useLink;
  exports.useRoute = useRoute;
  exports.useRouter = useRouter;
  exports.viewDepthKey = viewDepthKey;
})(vueRouter_cjs_prod);
const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^["{[]|^-?[0-9][0-9.]{0,14}$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor") {
    return;
  }
  return value;
}
function destr(val) {
  if (typeof val !== "string") {
    return val;
  }
  const _lval = val.toLowerCase();
  if (_lval === "true") {
    return true;
  }
  if (_lval === "false") {
    return false;
  }
  if (_lval === "null") {
    return null;
  }
  if (_lval === "nan") {
    return NaN;
  }
  if (_lval === "infinity") {
    return Infinity;
  }
  if (_lval === "undefined") {
    return void 0;
  }
  if (!JsonSigRx.test(val)) {
    return val;
  }
  try {
    if (suspectProtoRx.test(val) || suspectConstructorRx.test(val)) {
      return JSON.parse(val, jsonParseTransform);
    }
    return JSON.parse(val);
  } catch (_e) {
    return val;
  }
}
const preload = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var createElement = (tag, attrs, document2) => {
  const el = document2.createElement(tag);
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
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.getAttribute(n) : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
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
      tags.push({ tag: key, props: __spreadValues2({ key: "default" }, obj[key]) });
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
var updateElements = (document2 = window.document, type, tags) => {
  var _a;
  const head = document2.head;
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
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document2));
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
    updateDOM(document2 = window.document) {
      let title2;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title2 = tag.props.children;
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
      if (title2 !== void 0) {
        document2.title = title2;
      }
      setAttrs(document2.documentElement, htmlAttrs);
      setAttrs(document2.body, bodyAttrs);
      for (const name of Object.keys(actualTags)) {
        updateElements(document2, name, actualTags[name]);
      }
    }
  };
  return head;
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
      return stringifyAttrs(__spreadProps2(__spreadValues2({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps2(__spreadValues2({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
const vueuseHead_9e2135c2 = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp._useMeta = (meta) => {
    const headObj = vue_cjs_prod.ref(meta);
    head.addHeadObjs(headObj);
    {
      return;
    }
  };
  {
    nuxtApp.ssrContext.renderMeta = () => renderHeadToString(head);
  }
});
var shared_cjs_prod = {};
Object.defineProperty(shared_cjs_prod, "__esModule", { value: true });
function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `HYDRATE_EVENTS`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `HOISTED`,
  [-2]: `BAIL`
};
const slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};
const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
const isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line = j + 1;
        res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
        if (j === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }
  return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
const isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  let ret = "";
  if (!styles || isString(styles)) {
    return ret;
  }
  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
    if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html = "";
  let escaped;
  let index;
  let lastIndex = 0;
  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index) {
      html += str.slice(lastIndex, index);
    }
    lastIndex = index + 1;
    html += escaped;
  }
  return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length)
    return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b)
    return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject(a);
  bValidType = isObject(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const toDisplayString = (val) => {
  return val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => val instanceof Date;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const cacheStringFunction = (fn) => {
  const cache = Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
};
shared_cjs_prod.EMPTY_ARR = EMPTY_ARR;
shared_cjs_prod.EMPTY_OBJ = EMPTY_OBJ;
shared_cjs_prod.NO = NO;
shared_cjs_prod.NOOP = NOOP;
shared_cjs_prod.PatchFlagNames = PatchFlagNames;
shared_cjs_prod.camelize = camelize;
shared_cjs_prod.capitalize = capitalize;
shared_cjs_prod.def = def;
shared_cjs_prod.escapeHtml = escapeHtml;
shared_cjs_prod.escapeHtmlComment = escapeHtmlComment;
shared_cjs_prod.extend = extend;
shared_cjs_prod.generateCodeFrame = generateCodeFrame;
shared_cjs_prod.getGlobalThis = getGlobalThis;
shared_cjs_prod.hasChanged = hasChanged;
shared_cjs_prod.hasOwn = hasOwn;
shared_cjs_prod.hyphenate = hyphenate;
shared_cjs_prod.includeBooleanAttr = includeBooleanAttr;
shared_cjs_prod.invokeArrayFns = invokeArrayFns;
shared_cjs_prod.isArray = isArray;
shared_cjs_prod.isBooleanAttr = isBooleanAttr;
shared_cjs_prod.isDate = isDate;
var isFunction_1 = shared_cjs_prod.isFunction = isFunction;
shared_cjs_prod.isGloballyWhitelisted = isGloballyWhitelisted;
shared_cjs_prod.isHTMLTag = isHTMLTag;
shared_cjs_prod.isIntegerKey = isIntegerKey;
shared_cjs_prod.isKnownHtmlAttr = isKnownHtmlAttr;
shared_cjs_prod.isKnownSvgAttr = isKnownSvgAttr;
shared_cjs_prod.isMap = isMap;
shared_cjs_prod.isModelListener = isModelListener;
shared_cjs_prod.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
shared_cjs_prod.isObject = isObject;
shared_cjs_prod.isOn = isOn;
shared_cjs_prod.isPlainObject = isPlainObject;
shared_cjs_prod.isPromise = isPromise;
shared_cjs_prod.isReservedProp = isReservedProp;
shared_cjs_prod.isSSRSafeAttrName = isSSRSafeAttrName;
shared_cjs_prod.isSVGTag = isSVGTag;
shared_cjs_prod.isSet = isSet;
shared_cjs_prod.isSpecialBooleanAttr = isSpecialBooleanAttr;
shared_cjs_prod.isString = isString;
shared_cjs_prod.isSymbol = isSymbol;
shared_cjs_prod.isVoidTag = isVoidTag;
shared_cjs_prod.looseEqual = looseEqual;
shared_cjs_prod.looseIndexOf = looseIndexOf;
shared_cjs_prod.makeMap = makeMap;
shared_cjs_prod.normalizeClass = normalizeClass;
shared_cjs_prod.normalizeProps = normalizeProps;
shared_cjs_prod.normalizeStyle = normalizeStyle;
shared_cjs_prod.objectToString = objectToString;
shared_cjs_prod.parseStringStyle = parseStringStyle;
shared_cjs_prod.propsToAttrMap = propsToAttrMap;
shared_cjs_prod.remove = remove;
shared_cjs_prod.slotFlagsText = slotFlagsText;
shared_cjs_prod.stringifyStyle = stringifyStyle;
shared_cjs_prod.toDisplayString = toDisplayString;
shared_cjs_prod.toHandlerKey = toHandlerKey;
shared_cjs_prod.toNumber = toNumber;
shared_cjs_prod.toRawType = toRawType;
shared_cjs_prod.toTypeString = toTypeString;
function useMeta(meta) {
  const resolvedMeta = isFunction_1(meta) ? vue_cjs_prod.computed(meta) : meta;
  useNuxtApp()._useMeta(resolvedMeta);
}
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useMeta(() => metaFactory(__spreadValues(__spreadValues({}, removeUndefinedProps(props)), ctx.attrs), ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
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
const Script = vue_cjs_prod.defineComponent({
  name: "Script",
  props: __spreadProps(__spreadValues({}, globalProps), {
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
  }),
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
const Link = vue_cjs_prod.defineComponent({
  name: "Link",
  props: __spreadProps(__spreadValues({}, globalProps), {
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
  }),
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Base = vue_cjs_prod.defineComponent({
  name: "Base",
  props: __spreadProps(__spreadValues({}, globalProps), {
    href: String,
    target: String
  }),
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = vue_cjs_prod.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b;
    const title2 = ((_b = (_a = slots.default()) == null ? void 0 : _a[0]) == null ? void 0 : _b.children) || null;
    return {
      title: title2
    };
  })
});
const Meta = vue_cjs_prod.defineComponent({
  name: "Meta",
  props: __spreadProps(__spreadValues({}, globalProps), {
    charset: String,
    content: String,
    httpEquiv: String,
    key: String,
    name: String
  }),
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
const Style = vue_cjs_prod.defineComponent({
  name: "Style",
  props: __spreadProps(__spreadValues({}, globalProps), {
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  }),
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = __spreadValues({}, props);
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = vue_cjs_prod.defineComponent({
  name: "Head",
  setup: (_props, ctx) => ctx.slots.default
});
const Html = vue_cjs_prod.defineComponent({
  name: "Html",
  props: __spreadProps(__spreadValues({}, globalProps), {
    manifest: String,
    version: String,
    xmlns: String
  }),
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = vue_cjs_prod.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const Components = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  Script,
  Link,
  Base,
  Title,
  Meta,
  Style,
  Head,
  Html,
  Body
});
const metaConfig = { "globalMeta": { "meta": [{ "charset": "utf-8" }, { "name": "viewport", "content": "width=device-width, initial-scale=1" }], "link": [], "style": [], "script": [] }, "mixinKey": "created" };
const plugin_050d89da = defineNuxtPlugin((nuxtApp) => {
  useMeta(metaConfig.globalMeta);
  nuxtApp.vueApp.mixin({
    [metaConfig.mixinKey]() {
      var _a;
      const instance = vue_cjs_prod.getCurrentInstance();
      const options = (instance == null ? void 0 : instance.type) || ((_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.$options);
      if (!options || !("head" in options)) {
        return;
      }
      useMeta(options.head);
    }
  });
  for (const name in Components) {
    nuxtApp.vueApp.component(name, Components[name]);
  }
});
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function parseQuery(paramsStr = "") {
  const obj = {};
  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }
  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decode(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
function encodeQueryItem(key, val) {
  if (!val) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(val)) {
    return val.map((_val) => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).map((k) => encodeQueryItem(k, query[k])).join("&");
}
function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return /^\w+:\/\/.+/.test(inputStr) || acceptProtocolRelative && /^\/\/[^/]+/.test(inputStr);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}
function withBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = __spreadValues(__spreadValues({}, parseQuery(parsed.search)), query);
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const i of input.filter(isNonEmptyURL)) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
  }
  return url;
}
function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [protocol = "", auth, hostAndPath] = (input.match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
  if (!parsed.protocol) {
    return fullpath;
  }
  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}
class FetchError extends Error {
  constructor() {
    super(...arguments);
    this.name = "FetchError";
  }
}
function createFetchError(request, error, response) {
  let message = "";
  if (request && response) {
    message = `${response.status} ${response.statusText} (${request.toString()})`;
  }
  if (error) {
    message = `${error.message} (${message})`;
  }
  const fetchError = new FetchError(message);
  Object.defineProperty(fetchError, "request", { get() {
    return request;
  } });
  Object.defineProperty(fetchError, "response", { get() {
    return response;
  } });
  Object.defineProperty(fetchError, "data", { get() {
    return response && response.data;
  } });
  return fetchError;
}
const payloadMethods = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(val) {
  if (val === void 0) {
    return false;
  }
  const t = typeof val;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(val)) {
    return true;
  }
  return val.constructor && val.constructor.name === "Object" || typeof val.toJSON === "function";
}
function setHeader(options, _key, value) {
  const key = _key.toLowerCase();
  options.headers = options.headers || {};
  if ("set" in options.headers) {
    options.headers.set(key, value);
  } else if (Array.isArray(options.headers)) {
    const existingHeader = options.headers.find(([header]) => header.toLowerCase() === key);
    if (existingHeader) {
      existingHeader[1] = value;
    } else {
      options.headers.push([key, value]);
    }
  } else {
    const existingHeader = Object.keys(options.headers).find((header) => header.toLowerCase() === key);
    options.headers[existingHeader || key] = value;
  }
}
function createFetch({ fetch: fetch2 }) {
  function onError(request, opts, error, response) {
    if (opts.retry !== false) {
      const retries = typeof opts.retry === "number" ? opts.retry : isPayloadMethod(opts.method) ? 0 : 1;
      if (retries > 0) {
        return $fetchRaw(request, __spreadProps(__spreadValues({}, opts), {
          retry: retries - 1
        }));
      }
    }
    const err = createFetchError(request, error, response);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(err, $fetchRaw);
    }
    throw err;
  }
  const $fetchRaw = async function $fetchRaw2(request, opts = {}) {
    if (typeof request === "string") {
      if (opts.baseURL) {
        request = withBase(request, opts.baseURL);
      }
      if (opts.params) {
        request = withQuery(request, opts.params);
      }
      if (opts.body && isPayloadMethod(opts.method)) {
        if (isJSONSerializable(opts.body)) {
          opts.body = JSON.stringify(opts.body);
          setHeader(opts, "content-type", "application/json");
          setHeader(opts, "accept", "application/json");
        }
      }
    }
    const response = await fetch2(request, opts).catch((error) => onError(request, opts, error, void 0));
    const text = await response.text();
    const parseFn = opts.parseResponse || destr;
    response.data = parseFn(text);
    return response.ok ? response : onError(request, opts, void 0, response);
  };
  const $fetch2 = function $fetch22(request, opts) {
    return $fetchRaw(request, opts).then((r) => r.data);
  };
  $fetch2.raw = $fetchRaw;
  return $fetch2;
}
const getGlobal = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};
const fetch = getGlobal().fetch || (() => {
  return Promise.reject(new Error("[ohmyfetch] globalThis.fetch is not supported!"));
});
const $fetch = createFetch({ fetch });
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch;
}
const nitroClient_6ce12e0b = () => {
};
const components = {
  "Contact": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return contact;
  }).then((c) => c.default || c)),
  "DesignConcepts": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return designConcepts;
  }).then((c) => c.default || c)),
  "DesignConceptsUsabilityStudy": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return usabilityStudy;
  }).then((c) => c.default || c)),
  "DeskResearch": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return deskResearch;
  }).then((c) => c.default || c)),
  "Hero": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return hero;
  }).then((c) => c.default || c)),
  "HeroPhones": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return phones;
  }).then((c) => c.default || c)),
  "HeroSteps": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return steps;
  }).then((c) => c.default || c)),
  "ResumeImage": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return resumeImage;
  }).then((c) => c.default || c)),
  "Resume": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return resume;
  }).then((c) => c.default || c)),
  "ScreensScreenNumberTitle": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return screenNumberTitle;
  }).then((c) => c.default || c)),
  "Screens": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return screens;
  }).then((c) => c.default || c)),
  "SharedImage": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return image;
  }).then((c) => c.default || c)),
  "SharedNumberedTitle": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return numberedTitle;
  }).then((c) => c.default || c)),
  "SharedTextWithFigure": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return textWithFigure;
  }).then((c) => c.default || c)),
  "SharedTitle": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return title;
  }).then((c) => c.default || c)),
  "TestValidationBasicFlow": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return basicFlow;
  }).then((c) => c.default || c)),
  "TestValidationLowFidelity": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return lowFidelity;
  }).then((c) => c.default || c)),
  "TestValidationTextValidation": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return textValidation;
  }).then((c) => c.default || c)),
  "TextAndFiguresPersona": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return persona;
  }).then((c) => c.default || c)),
  "TextAndFiguresBig": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return textAndFiguresBig;
  }).then((c) => c.default || c)),
  "TextAndFiguresSmall": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return textAndFiguresSmall;
  }).then((c) => c.default || c)),
  "ResumeInfoEducation": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return resumeInfoEducation;
  }).then((c) => c.default || c)),
  "ResumeInfoExperience": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return resumeInfoExperience;
  }).then((c) => c.default || c)),
  "ResumeInfo": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return resumeInfo;
  }).then((c) => c.default || c))
};
function components_515c5644(nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
}
const _plugins = [
  preload,
  vueuseHead_9e2135c2,
  plugin_050d89da,
  nitroClient_6ce12e0b,
  components_515c5644
];
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$p = {};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs) {
  const _component_App = vue_cjs_prod.resolveComponent("App");
  serverRenderer.exports.ssrRenderSuspense(_push, {
    default: () => {
      _push(serverRenderer.exports.ssrRenderComponent(_component_App, null, null, _parent));
    },
    _: 1
  });
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/app/components/nuxt-root.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const RootComponent = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$p]]);
const _sfc_main$o = {
  props: { src: String, alt: String, class: String },
  data() {
    return {
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {
    getImageSrc() {
      return (screen.width < 768 ? "/images/mobile" : "/images") + this.src;
    }
  }
};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($data.isMounted) {
    _push(`<img${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
      alt: $props.alt,
      src: $options.getImageSrc()
    }, _attrs))} data-v-32134ec6>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/shared/image.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const Image = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$o], ["__scopeId", "data-v-32134ec6"]]);
const image = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Image
});
const _sfc_main$n = {
  components: { Image }
};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Image = vue_cjs_prod.resolveComponent("Image");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "hero" }, _attrs))} data-v-57144f1f><div class="uxui" data-v-57144f1f> UX <span data-v-57144f1f>UI</span></div><div class="info" data-v-57144f1f><div class="image" data-v-57144f1f>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/shared/me.png",
    alt: "Me"
  }, null, _parent));
  _push(`<div class="circle" data-v-57144f1f></div></div><div class="titles" data-v-57144f1f><div class="portfolio" data-v-57144f1f>PORTFOLIO</div><div class="name" data-v-57144f1f>Hasida Zohar</div><div class="title" data-v-57144f1f>User Experience Designer</div></div></div></div>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/resume/resume-image.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$n], ["__scopeId", "data-v-57144f1f"]]);
const resumeImage = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __nuxt_component_0$1
});
const _sfc_main$m = {
  name: "Title",
  props: {
    title: String,
    "color": "white" | "accent" | "dark-accent"
  }
};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h3${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: $props.color }, _attrs))} data-v-7c3aa70d>${serverRenderer.exports.ssrInterpolate($props.title)}</h3>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/shared/title.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const Title1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$m], ["__scopeId", "data-v-7c3aa70d"]]);
const title = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Title1
});
const _sfc_main$l = {
  components: { Title: Title1 }
};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title = vue_cjs_prod.resolveComponent("Title");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "experience" }, _attrs))} data-v-30ba5c85>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Title, {
    color: "accent",
    title: "Experience"
  }, null, _parent));
  _push(`<div class="udacity" data-v-30ba5c85><b data-v-30ba5c85> Udacity online program- UX bootcamp 2021 <br data-v-30ba5c85>Final project: Mr Pro Shake </b><br data-v-30ba5c85><span data-v-30ba5c85>I designed a Protein Shake Application where trainees can assemble or choose a Protein Shake online and have it delivered right to their gym at the end of their workout.</span><br data-v-30ba5c85><b data-v-30ba5c85>During this project i used:</b><ul data-v-30ba5c85><li data-v-30ba5c85>Figma for prototyping.</li><li data-v-30ba5c85>Zeplin for assets exporting.</li><li data-v-30ba5c85>Miro+Google docs for data research.</li><li data-v-30ba5c85>Lookback for user interaction testing.</li></ul></div><div data-v-30ba5c85><b data-v-30ba5c85> Shenkar college of engeniring 2019-2021 <br data-v-30ba5c85>Final project: A Boutique Winery </b><br data-v-30ba5c85><span data-v-30ba5c85>A complete brand for a company, including a logo, brand book, posters, buisness card, layouts and packaging, and a fresh Wine bottle design.</span></div><div data-v-30ba5c85><b data-v-30ba5c85>Music Film Festival:</b><br data-v-30ba5c85><span data-v-30ba5c85>Include a logo, poster, layouts, packaging and a festival book.</span></div></div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/resume/resume-info/resume-info-experience.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const ResumeInfoExperience1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$l], ["__scopeId", "data-v-30ba5c85"]]);
const resumeInfoExperience = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": ResumeInfoExperience1
});
const _sfc_main$k = {
  components: { Title1 }
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title1 = vue_cjs_prod.resolveComponent("Title1");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "education" }, _attrs))} data-v-5ab90a5f>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Title1, {
    color: "accent",
    title: "Education"
  }, null, _parent));
  _push(`<b data-v-5ab90a5f>UX Nanodegree 2021</b><br data-v-5ab90a5f><b data-v-5ab90a5f>Udacity</b> online programs- bootcamp. <br data-v-5ab90a5f><b data-v-5ab90a5f>Graphic Designer 2019-2021</b><br data-v-5ab90a5f><b data-v-5ab90a5f>Shenkar</b> College of Engineering and Design, Tel Aviv. <br data-v-5ab90a5f><b data-v-5ab90a5f>Economics and management 2011-2014</b> Ashkelon Academic College. `);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Title1, {
    color: "accent",
    title: "Languages"
  }, null, _parent));
  _push(`Hebrew, English and Russian. `);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Title1, {
    color: "accent",
    title: "Contact"
  }, null, _parent));
  _push(`<a href="tel: 052-7475755" data-v-5ab90a5f>052-7475755</a><br data-v-5ab90a5f><a href="mailto: hasida.zohar@gmail.com" data-v-5ab90a5f>hasida.zohar@gmail.com</a><br data-v-5ab90a5f><a href="https://www.linkedin.com/in/hasida.zohar" data-v-5ab90a5f>www.linkedin.com/in/hasida.zohar</a></div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/resume/resume-info/resume-info-education.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const ResumeInfoEducation1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$k], ["__scopeId", "data-v-5ab90a5f"]]);
const resumeInfoEducation = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": ResumeInfoEducation1
});
const _sfc_main$j = {
  components: { Title: Title1, ResumeInfoExperience1, ResumeInfoEducation1 }
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ResumeInfoExperience1 = vue_cjs_prod.resolveComponent("ResumeInfoExperience1");
  const _component_ResumeInfoEducation1 = vue_cjs_prod.resolveComponent("ResumeInfoEducation1");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "wrapper" }, _attrs))} data-v-f881e6d8>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_ResumeInfoExperience1, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_ResumeInfoEducation1, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/resume/resume-info/resume-info.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j], ["__scopeId", "data-v-f881e6d8"]]);
const resumeInfo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __nuxt_component_1$1
});
const _sfc_main$i = {
  components: { ResumeImage: __nuxt_component_0$1, ResumeInfo: __nuxt_component_1$1 }
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ResumeImage = __nuxt_component_0$1;
  const _component_ResumeInfo = __nuxt_component_1$1;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "resume" }, _attrs))} data-v-38801359>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_ResumeImage, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_ResumeInfo, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/resume/resume.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i], ["__scopeId", "data-v-38801359"]]);
const resume = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __nuxt_component_0
});
const _sfc_main$h = {
  props: {
    number: String,
    title: String,
    color: "white" | "accent" | "dark-accent"
  },
  components: { Title1 }
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title1 = vue_cjs_prod.resolveComponent("Title1");
  _push(`<!--[--><div class="${serverRenderer.exports.ssrRenderClass([$props.color, "number"])}" data-v-3401cce6>${serverRenderer.exports.ssrInterpolate($props.number)}</div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Title1, {
    color: $props.color,
    title: $props.title
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/shared/numbered-title.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const NumberedTitle = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h], ["__scopeId", "data-v-3401cce6"]]);
const numberedTitle = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": NumberedTitle
});
const _sfc_main$g = {
  components: { Title1, NumberedTitle }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NumberedTitle = vue_cjs_prod.resolveComponent("NumberedTitle");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "steps" }, _attrs))}><div class="step-1"><div class="step-number">01</div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NumberedTitle, {
    number: "01",
    title: "About project",
    color: "white"
  }, null, _parent));
  _push(`<div class="explanation">Today, trainees purchase a package (2-3 months) of protein in one flavor that they must use for a long time and they also need to prepare it at home (there is no option to prepare it before). We solve this problem by an app where you can order a protein shake up to the training place with a wide range of flavors so that the trainee can choose a different smoothie each day and thus vary the flavors.</div></div><div class="step-2"><div class="step-number">02</div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NumberedTitle, {
    number: "02",
    title: "What i have done",
    color: "white"
  }, null, _parent));
  _push(`<div class="explanation"><ul><li>Researched on designing for age 20+</li><li>Conducted user research</li><li>Generated user personas</li><li>Created wireframes</li><li>Made prototypes</li><li>Made testes in Lookback</li></ul></div></div><div class="step-3"><div class="step-number">03</div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NumberedTitle, {
    number: "03",
    title: "Method of approach",
    color: "white"
  }, null, _parent));
  _push(`<div class="explanation"><div class="column"><div><b>Inspiration</b></div><div>User research Interview &amp; questionare Hypothesis generation Secondary research Analogous Inspiration</div></div><div class="column"><div><b>Ideation</b></div><div>Braindumping Creating insights How Might We Top 5 considartions Creating guidlines Rapid prototyping</div></div><div class="column"><div><b>Implementation</b></div><div>Information architecture High fidelity prototype</div></div></div></div></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/hero/steps.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const Steps = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g]]);
const steps = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Steps
});
const _sfc_main$f = {
  components: { Image }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Image = vue_cjs_prod.resolveComponent("Image");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "wrapper" }, _attrs))} data-v-1cc628e8><div class="background" data-v-1cc628e8></div><div class="phone phone1" data-v-1cc628e8>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Color_mockups/orange_reco.png",
    alt: "Recommended shake",
    class: "img"
  }, null, _parent));
  _push(`</div><div class="phone phone2" data-v-1cc628e8>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Color_mockups/choose_your_favorite.png",
    alt: "Favorites",
    class: "img"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/hero/phones.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Phones = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f], ["__scopeId", "data-v-1cc628e8"]]);
const phones = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Phones
});
const _sfc_main$e = {
  components: { Steps, Phones }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Steps = vue_cjs_prod.resolveComponent("Steps");
  const _component_Phones = vue_cjs_prod.resolveComponent("Phones");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "wrapper" }, _attrs))} data-v-293ebb7c><div class="hero" data-v-293ebb7c><div class="title" data-v-293ebb7c>Mr. Pro Shake</div><div class="sub-title" data-v-293ebb7c> The new way to order protein shakes, <br data-v-293ebb7c><b data-v-293ebb7c>discover</b> a new taste every day. </div></div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Steps, null, null, _parent));
  _push(`<div class="phones-wrapper" data-v-293ebb7c>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Phones, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/hero/hero.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e], ["__scopeId", "data-v-293ebb7c"]]);
const hero = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __nuxt_component_1
});
const _sfc_main$d = {
  components: { NumberedTitle, Image, Title1 }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NumberedTitle = vue_cjs_prod.resolveComponent("NumberedTitle");
  const _component_Image = vue_cjs_prod.resolveComponent("Image");
  const _component_Title1 = vue_cjs_prod.resolveComponent("Title1");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "desk-research" }, _attrs))} data-v-388cddc7>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NumberedTitle, {
    number: "07",
    title: "Desk research",
    color: "dark-accent"
  }, null, _parent));
  _push(`<div class="graphs" data-v-388cddc7><div class="graph1" data-v-388cddc7><div class="italic" data-v-388cddc7>For each of the following features, rate the option that is relevant to you:</div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Desk_research/Graph_1.png",
    alt: "Features rating"
  }, null, _parent));
  _push(`<div class="results" data-v-388cddc7>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Title1, {
    title: "Key findings",
    color: "dark-accent"
  }, null, _parent));
  _push(`<ul data-v-388cddc7><li data-v-388cddc7>All participants drink a protein shake because it helps them supplement the amount of protein they need.</li><li data-v-388cddc7>They are interested in a platform through which they can order a protein shake, each time in a different flavor.</li><li data-v-388cddc7>The goal of all participants training is physical growth.</li></ul></div></div><div class="graph2" data-v-388cddc7><div class="italic" data-v-388cddc7>How many times did you drink a protein shake last week?</div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Desk_research/Graph_2.png",
    alt: "Features rating"
  }, null, _parent));
  _push(`<div class="results" data-v-388cddc7>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Title1, {
    title: "Pain points",
    color: "dark-accent"
  }, null, _parent));
  _push(`<ul data-v-388cddc7><li data-v-388cddc7>Once a trainee bought a shake, he is forced to use the same flavor for a long time.</li><li data-v-388cddc7>Trainees doesn\u2019t like the process of making the shakes (and cleaning afterwards).</li><li data-v-388cddc7>Trainees will now be able to use the shake instantly after the workout (instead of use it only after they get home &amp; make it).</li></ul></div></div></div></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/desk-research/desk-research.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d], ["__scopeId", "data-v-388cddc7"]]);
const deskResearch = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __nuxt_component_2
});
const _sfc_main$c = {
  components: { Image }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Image = vue_cjs_prod.resolveComponent("Image");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "usability-study" }, _attrs))} data-v-dbe38db0><div class="title" data-v-dbe38db0>Usability study:</div><div class="images" data-v-dbe38db0><div class="line1" data-v-dbe38db0>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Usability_study/Usability_study_favorite.png",
    alt: "Favorite page study"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Usability_study/Usability_study_reco.png",
    alt: "Recommended page study"
  }, null, _parent));
  _push(`</div><div class="line2" data-v-dbe38db0>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Usability_study/Usability_study_live_chat.png",
    alt: "Live chat page study"
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/design-concepts/usability-study.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const UsabilityStudy = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c], ["__scopeId", "data-v-dbe38db0"]]);
const usabilityStudy = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": UsabilityStudy
});
const _sfc_main$b = {
  components: { NumberedTitle, Image, UsabilityStudy }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NumberedTitle = vue_cjs_prod.resolveComponent("NumberedTitle");
  const _component_Image = vue_cjs_prod.resolveComponent("Image");
  const _component_UsabilityStudy = vue_cjs_prod.resolveComponent("UsabilityStudy");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "design-concepts" }, _attrs))} data-v-6b217592>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NumberedTitle, {
    number: "08",
    title: "Design: concept and sketching",
    color: "dark-accent"
  }, null, _parent));
  _push(`<div class="info" data-v-6b217592><div class="info1" data-v-6b217592><div class="title" data-v-6b217592>Research synthesis:</div><div class="content" data-v-6b217592> The integration of existing knowledge and research findings pertinent to an issue. The aim of synthesis is to increase the generality and applicability of those findings and to develop new knowledge through the process of integration. </div><div class="images" data-v-6b217592><div class="image1" data-v-6b217592><div class="italic" data-v-6b217592>themes and opportunities</div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Desk_research/themes_and_opportunities.png",
    alt: "themes and opportunities"
  }, null, _parent));
  _push(`</div><div class="image2" data-v-6b217592><div class="italic" data-v-6b217592>feature prioritization</div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Desk_research/feature_prioritization.png",
    alt: "feature prioritization"
  }, null, _parent));
  _push(`</div><div class="arrows" data-v-6b217592>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/shared/arrow.png",
    alt: "arrow"
  }, null, _parent));
  _push(`</div></div></div><div class="info2" data-v-6b217592><div class="title" data-v-6b217592>Crazy 8:</div><div class="content" data-v-6b217592> The integration of existing knowledge and research findings pertinent to an issue. The aim of synthesis is to increase the generality and applicability of those findings and to develop new knowledge through the process of integration. </div><div class="images" data-v-6b217592><div class="line1" data-v-6b217592>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Crazy_8/Crazy8_live_chat.png",
    alt: "themes and opportunities"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Crazy_8/Crazy8_favorite_shake.png",
    alt: "themes and opportunities"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Crazy_8/Crazy8_reco.png",
    alt: "themes and opportunities"
  }, null, _parent));
  _push(`</div><div class="line2" data-v-6b217592>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Crazy_8/1.png",
    alt: "themes and opportunities"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Crazy_8/2.png",
    alt: "themes and opportunities"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Crazy_8/3.png",
    alt: "themes and opportunities"
  }, null, _parent));
  _push(`</div><div class="arrows" data-v-6b217592>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/shared/arrow.png",
    alt: "arrow"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/shared/arrow.png",
    alt: "arrow"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/shared/arrow.png",
    alt: "arrow"
  }, null, _parent));
  _push(`</div></div></div></div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_UsabilityStudy, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/design-concepts/design-concepts.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-6b217592"]]);
const designConcepts = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __nuxt_component_3
});
const _sfc_main$a = {
  props: { number: String, title: String, textAlign: "left" | "center" | "right" }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: ["screen-number-title", $props.textAlign]
  }, _attrs))} data-v-5f6c53e6><div class="number" data-v-5f6c53e6>${serverRenderer.exports.ssrInterpolate($props.number)}</div><div class="title" data-v-5f6c53e6>${serverRenderer.exports.ssrInterpolate($props.title)}</div></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/screens/screen-number-title.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const ScreenNumberTitle = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-5f6c53e6"]]);
const screenNumberTitle = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": ScreenNumberTitle
});
const _sfc_main$9 = {
  mounted() {
    if (this.isMobile()) {
      this.$refs.screens.classList.add("mobile");
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://unpkg.com/swiper/swiper-bundle.min.js";
      script.onload = () => {
        new Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
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
      return false;
    }
  },
  components: { NumberedTitle, Image, ScreenNumberTitle }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NumberedTitle = vue_cjs_prod.resolveComponent("NumberedTitle");
  const _component_ScreenNumberTitle = vue_cjs_prod.resolveComponent("ScreenNumberTitle");
  const _component_Image = vue_cjs_prod.resolveComponent("Image");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: "screens",
    ref: "screens"
  }, _attrs))} data-v-49415f07>`);
  if ($options.isMobile()) {
    _push(serverRenderer.exports.ssrRenderComponent(_component_NumberedTitle, {
      title: "Screens",
      color: "white",
      number: "10"
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (!$options.isMobile()) {
    _push(`<div class="images screen-images" data-v-49415f07><div class="purple purple1" data-v-49415f07></div><div class="purple purple2" data-v-49415f07></div><div class="purple purple3" data-v-49415f07></div><div class="circle" data-v-49415f07></div><div class="image image1" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_ScreenNumberTitle, {
      number: "01",
      title: "Sign in",
      textAlign: "center"
    }, null, _parent));
    _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/sign_in.png",
      alt: "Sign in"
    }, null, _parent));
    _push(`</div><div class="title title2" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_ScreenNumberTitle, {
      number: "02",
      title: "Sign up",
      textAlign: "left"
    }, null, _parent));
    _push(`</div><div class="image image2" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/sign_up.png",
      alt: "Sign up"
    }, null, _parent));
    _push(`</div><div class="title title3" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_ScreenNumberTitle, {
      number: "03",
      title: "Favorite",
      textAlign: "right"
    }, null, _parent));
    _push(`</div><div class="image image3" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/choose_your_favorite.png",
      alt: "Favorite"
    }, null, _parent));
    _push(`</div><div class="title title4" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_ScreenNumberTitle, {
      number: "04",
      title: "Shake",
      textAlign: "left"
    }, null, _parent));
    _push(`</div><div class="image image4" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/orange.png",
      alt: "Orange shake"
    }, null, _parent));
    _push(`</div><div class="title title5" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_ScreenNumberTitle, {
      number: "05",
      title: "Recommended",
      textAlign: "right"
    }, null, _parent));
    _push(`</div><div class="image image5" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/green_reco.png",
      alt: "Recommended shakes"
    }, null, _parent));
    _push(`</div><div class="title title6" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_ScreenNumberTitle, {
      number: "06",
      title: "My cart",
      textAlign: "left"
    }, null, _parent));
    _push(`</div><div class="image image6" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/my_cart.png",
      alt: "My cart"
    }, null, _parent));
    _push(`</div><div class="title title7" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_ScreenNumberTitle, {
      number: "07",
      title: "Checkout",
      textAlign: "right"
    }, null, _parent));
    _push(`</div><div class="image image7" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/check_out.png",
      alt: "Checkout"
    }, null, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.isMobile()) {
    _push(`<div class="mobile-images" data-v-49415f07><div class="carousel gallery" data-v-49415f07><div class="swiper mySwiper" data-v-49415f07><div class="swiper-wrapper" data-v-49415f07><div class="swiper-slide" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/sign_in.png",
      alt: "Sign in"
    }, null, _parent));
    _push(`</div><div class="swiper-slide" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/sign_up.png",
      alt: "Sign up"
    }, null, _parent));
    _push(`</div><div class="swiper-slide" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/choose_your_favorite.png",
      alt: "Favorite"
    }, null, _parent));
    _push(`</div><div class="swiper-slide" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/orange.png",
      alt: "Orange shake"
    }, null, _parent));
    _push(`</div><div class="swiper-slide" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/green_reco.png",
      alt: "Recommended shakes"
    }, null, _parent));
    _push(`</div><div class="swiper-slide" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/my_cart.png",
      alt: "My cart"
    }, null, _parent));
    _push(`</div><div class="swiper-slide" data-v-49415f07>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
      src: "/Color_mockups/check_out.png",
      alt: "Checkout"
    }, null, _parent));
    _push(`</div></div><div class="swiper-button-next" data-v-49415f07></div><div class="swiper-button-prev" data-v-49415f07></div><div class="swiper-pagination" data-v-49415f07></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/screens/screens.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-49415f07"]]);
const screens = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __nuxt_component_4
});
const _sfc_main$8 = {
  components: { NumberedTitle, Image },
  props: {
    number: String,
    title: String,
    figure: String,
    color: String,
    class: String,
    titleClass: String,
    figureSide: "left" | "right"
  },
  methods: {
    getImageUrl() {
      return "/personas/" + this.figure + ".png";
    },
    getClass() {
      return this.class + " " + this.figureSide;
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NumberedTitle = vue_cjs_prod.resolveComponent("NumberedTitle");
  const _component_Image = vue_cjs_prod.resolveComponent("Image");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: ["wrapper", $options.getClass()]
  }, _attrs))} data-v-3d68aa74><div class="${serverRenderer.exports.ssrRenderClass([$props.titleClass, "text"])}" data-v-3d68aa74>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NumberedTitle, {
    color: $props.color,
    number: $props.number,
    title: $props.title
  }, null, _parent));
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="figure" data-v-3d68aa74>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: $options.getImageUrl(),
    alt: $props.figure
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/shared/text-with-figure.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const TextWithFigure = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-3d68aa74"]]);
const textWithFigure = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": TextWithFigure
});
const _sfc_main$7 = {
  components: { TextWithFigure }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TextWithFigure = vue_cjs_prod.resolveComponent("TextWithFigure");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "figures-wrapper" }, _attrs))} data-v-311b98cf>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_TextWithFigure, {
    class: "mb-1",
    figure: "persona_challenge",
    number: "04",
    title: "Challenges",
    color: "dark-accent"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mx-1 description" data-v-311b98cf${_scopeId}>We want the platform to be easy to use, fast and efficient for the trainees so that they can order during their break and the shake will arrive at the end of the workout.</div><div class="mx-1 description mt-1" data-v-311b98cf${_scopeId}>The goal of all participants training is physical growth. Shake protein is very important for their training. 80% of the participants want to be able to change the base of the shake in the app. Also, they would like to choose a protein shake from the list of recommendation ones.</div>`);
      } else {
        return [
          vue_cjs_prod.createVNode("div", { class: "mx-1 description" }, "We want the platform to be easy to use, fast and efficient for the trainees so that they can order during their break and the shake will arrive at the end of the workout."),
          vue_cjs_prod.createVNode("div", { class: "mx-1 description mt-1" }, "The goal of all participants training is physical growth. Shake protein is very important for their training. 80% of the participants want to be able to change the base of the shake in the app. Also, they would like to choose a protein shake from the list of recommendation ones.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_TextWithFigure, {
    figureSide: "left",
    class: "mb-1",
    titleClass: "d-pl-1",
    figure: "persona_hypothesis",
    number: "05",
    title: "Hypothesis generation",
    color: "dark-accent"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul class="description" data-v-311b98cf${_scopeId}><li data-v-311b98cf${_scopeId}>Simple and intuative for the users to understand and use.</li><li data-v-311b98cf${_scopeId}>One application which should do multiple tasks and cater all the major needs.</li><li data-v-311b98cf${_scopeId}>the trainee can choose a different shake each day.</li><li data-v-311b98cf${_scopeId}>The trainee doesn\u2019t need to make the shake and he can use it instantly.</li></ul>`);
      } else {
        return [
          vue_cjs_prod.createVNode("ul", { class: "description" }, [
            vue_cjs_prod.createVNode("li", null, "Simple and intuative for the users to understand and use."),
            vue_cjs_prod.createVNode("li", null, "One application which should do multiple tasks and cater all the major needs."),
            vue_cjs_prod.createVNode("li", null, "the trainee can choose a different shake each day."),
            vue_cjs_prod.createVNode("li", null, "The trainee doesn\u2019t need to make the shake and he can use it instantly.")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_TextWithFigure, {
    class: "mb-1",
    figure: "persona_research",
    number: "06",
    title: "User research",
    color: "dark-accent"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mx-1 description" data-v-311b98cf${_scopeId}>Conducting user research helps in understanding user\u2019s needs, experiences, behaviors and goals. Creating personas helps to step out of ourself. It helps to recognise that different people have different requirements and expectations and also helps to identify for whom we are designing for.</div>`);
      } else {
        return [
          vue_cjs_prod.createVNode("div", { class: "mx-1 description" }, "Conducting user research helps in understanding user\u2019s needs, experiences, behaviors and goals. Creating personas helps to step out of ourself. It helps to recognise that different people have different requirements and expectations and also helps to identify for whom we are designing for.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/text-and-figures/text-and-figures-big.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const TextWithFiguresBig = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-311b98cf"]]);
const textAndFiguresBig = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": TextWithFiguresBig
});
const _sfc_main$6 = {
  props: { title: String, image: String },
  components: { Image }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Image = vue_cjs_prod.resolveComponent("Image");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "persona" }, _attrs))} data-v-21c27eac><div class="title" data-v-21c27eac>${serverRenderer.exports.ssrInterpolate($props.title)}</div><div class="image-and-text" data-v-21c27eac><div class="image" data-v-21c27eac>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: $props.image,
    alt: $props.title
  }, null, _parent));
  _push(`</div><div class="text" data-v-21c27eac>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/text-and-figures/persona.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Persona = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-21c27eac"]]);
const persona = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Persona
});
const _sfc_main$5 = {
  components: { Persona }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Persona = vue_cjs_prod.resolveComponent("Persona");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "figures-small" }, _attrs))} data-v-50a66058>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Persona, {
    title: "Persona 1",
    image: "/personas/persona_1.png"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<b data-v-50a66058${_scopeId}>An advanced</b> trainee who is training for years and have multiple issues using shakes (he doesn\u2019t like preparing them and he likes diversity). `);
      } else {
        return [
          vue_cjs_prod.createVNode("b", null, "An advanced"),
          vue_cjs_prod.createTextVNode(" trainee who is training for years and have multiple issues using shakes (he doesn\u2019t like preparing them and he likes diversity). ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Persona, {
    title: "Persona 2",
    image: "/personas/persona_2.png"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<b data-v-50a66058${_scopeId}>A beginner</b> trainee who likes shakes but he is not sure what is the best protein shake taste for him. He would like to try different flavors and find the best taste. `);
      } else {
        return [
          vue_cjs_prod.createVNode("b", null, "A beginner"),
          vue_cjs_prod.createTextVNode(" trainee who likes shakes but he is not sure what is the best protein shake taste for him. He would like to try different flavors and find the best taste. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Persona, {
    title: "Persona 3",
    image: "/personas/persona_3.png"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<b data-v-50a66058${_scopeId}>An advanced</b> trainee who is recently wanted to start protein shakes because he started a new busy job and doesn\u2019t have time for an additional meal during the day. `);
      } else {
        return [
          vue_cjs_prod.createVNode("b", null, "An advanced"),
          vue_cjs_prod.createTextVNode(" trainee who is recently wanted to start protein shakes because he started a new busy job and doesn\u2019t have time for an additional meal during the day. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/text-and-figures/text-and-figures-small.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TextWithFiguresSmall = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-50a66058"]]);
const textAndFiguresSmall = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": TextWithFiguresSmall
});
const _sfc_main$4 = {
  components: { Title1, Image }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title1 = vue_cjs_prod.resolveComponent("Title1");
  const _component_Image = vue_cjs_prod.resolveComponent("Image");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "basic-flow" }, _attrs))} data-v-48b351e6>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Title1, {
    title: "Basic user flow",
    color: "dark-accent"
  }, null, _parent));
  _push(`<div class="image" data-v-48b351e6>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Desk_research/Basic_user_flow.png",
    alt: "Basic user flow"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/test-validation/basic-flow.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const BasicFlow = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-48b351e6"]]);
const basicFlow = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": BasicFlow
});
const _sfc_main$3 = {
  components: { Title1, Image },
  mounted() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.$refs.images.classList.add("mobile");
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title1 = vue_cjs_prod.resolveComponent("Title1");
  const _component_Image = vue_cjs_prod.resolveComponent("Image");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "low-fidelity" }, _attrs))} data-v-26c6b4bb>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Title1, {
    title: "Low fidelity prototype",
    color: "dark-accent"
  }, null, _parent));
  _push(`<div class="images" data-v-26c6b4bb>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Low_fidelity_mockups/check_out.png",
    alt: "Check out"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Low_fidelity_mockups/choose_your_favorite.png",
    alt: "Choose your favorites"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Low_fidelity_mockups/favorite.png",
    alt: "Favorite"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Low_fidelity_mockups/live_chat.png",
    alt: "Live chat"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Low_fidelity_mockups/my_cart.png",
    alt: "My cart"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Low_fidelity_mockups/sign_in-.png",
    alt: "Sign in"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Low_fidelity_mockups/sign_up.png",
    alt: "Sign up"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Low_fidelity_mockups/recommended.png",
    alt: "recommended"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/test-validation/low-fidelity.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const LowFidelity = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-26c6b4bb"]]);
const lowFidelity = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": LowFidelity
});
const _sfc_main$2 = {
  components: { NumberedTitle, Image, BasicFlow, LowFidelity }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NumberedTitle = vue_cjs_prod.resolveComponent("NumberedTitle");
  const _component_Image = vue_cjs_prod.resolveComponent("Image");
  const _component_BasicFlow = vue_cjs_prod.resolveComponent("BasicFlow");
  const _component_LowFidelity = vue_cjs_prod.resolveComponent("LowFidelity");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "test-validation" }, _attrs))} data-v-1182fc09><div class="part1" data-v-1182fc09>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NumberedTitle, {
    number: "09",
    color: "dark-accent",
    title: "Test: validation, usability and feedback"
  }, null, _parent));
  _push(`<div class="info" data-v-1182fc09><div class="text" data-v-1182fc09><div class="first" data-v-1182fc09><div class="title" data-v-1182fc09><b data-v-1182fc09>Usability testing with LookBack:</b></div><div class="explanation" data-v-1182fc09>Lookback is a tool for conducting live remote Moderated and Unmoderated Usability Tests. It has a real-time remote user research feature. You can communicate directly with the users and see what they see while getting they&#39;re reactions as they happen.</div></div><div class="second" data-v-1182fc09><div class="title" data-v-1182fc09><b data-v-1182fc09>Test insights:</b></div><div class="explanation" data-v-1182fc09> Based on my data from Lookback, I found that 50% from my participants did not know where they need to click. <br data-v-1182fc09><b data-v-1182fc09>My hypothesis</b> is that participants thoughts that they need to click on the cards for swipe and because of this they spend a lot of time to try to do this and they do not understand why it is not working. <br data-v-1182fc09><b data-v-1182fc09>My solution</b>for this is to make the cards interactive too and to decrease the time on task. </div></div></div><div class="image" data-v-1182fc09>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Image, {
    src: "/Desk_research/lookback.png",
    alt: "lookback"
  }, null, _parent));
  _push(`</div></div></div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_BasicFlow, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_LowFidelity, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/test-validation/text-validation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TestValidation = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-1182fc09"]]);
const textValidation = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": TestValidation
});
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "contact" }, _attrs))} data-v-34fef678><div class="title" data-v-34fef678>Contact Me:</div><div class="image" data-v-34fef678></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/contact/contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-34fef678"]]);
const contact = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Contact
});
const _sfc_main = {
  mounted() {
    let w = window.screen.width;
    if (w >= 768 && w < 1360) {
      let old = document.querySelector("meta[name='viewport']");
      if (old) {
        old.content = "width=1360,  user-scalable=no";
      }
    }
  },
  components: {
    Resume: __nuxt_component_0,
    Hero: __nuxt_component_1,
    TextWithFiguresBig,
    TextWithFiguresSmall,
    DeskResearch: __nuxt_component_2,
    DesignConcepts: __nuxt_component_3,
    TestValidation,
    Screens: __nuxt_component_4,
    Contact
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Resume = __nuxt_component_0;
  const _component_Hero = __nuxt_component_1;
  const _component_TextWithFiguresBig = vue_cjs_prod.resolveComponent("TextWithFiguresBig");
  const _component_TextWithFiguresSmall = vue_cjs_prod.resolveComponent("TextWithFiguresSmall");
  const _component_DeskResearch = __nuxt_component_2;
  const _component_DesignConcepts = __nuxt_component_3;
  const _component_TestValidation = vue_cjs_prod.resolveComponent("TestValidation");
  const _component_Screens = __nuxt_component_4;
  _push(`<!--[-->`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Resume, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_TextWithFiguresBig, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_TextWithFiguresSmall, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_DeskResearch, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_DesignConcepts, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_TestValidation, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Screens, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = vue_cjs_prod.createApp(RootComponent);
    vueApp.component("App", AppComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    await applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { entry$1 as default };
