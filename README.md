# before-landing

## 开始

- `yarn dev` 打开devserver
- `yarn build` 构建生产版本

## 加载策略

- 通过url进入的第一个场景，在完全加载后才显示（加载中用loadingscene覆盖）
- 加载完当前场景后，预加载所有资源（注意，public中只包括必要的资源）

## PWA

- vue-cli 的 devserver 会自动返回一个空的 service-worker
- vue-cli 的 pwa 插件在开发环境不工作
- HACK 解决办法：将 service-worker.js 改名 sw.js，在生产环境运行 devserver
  - `cross-env NODE_ENV=production yarn dev`
- FIXME 为了支持显示加载进度，暂时把serviceworker关了，用fetch来预加载。理想的做法是写一个workbox plugin，在加载进度更新时释放事件

## 素材与压缩

1. 源素材不放在代码库中
2. 拷贝一份源素材到 repo的 assets 目录
3. 用 image resizer 调整素材大小。无用素材删除
4. 根据素材格式，用 batch script + ffmpeg 压缩