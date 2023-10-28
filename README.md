# before-landing

## 开始

- `yarn dev` 打开devserver
- `yarn build` 构建生产版本

## TODOS

- 检查一下资源的加载顺序
- 加载完所有资源再允许进入？


## 加载策略

- 通过url进入的第一个页面，在完全加载后才显示（加载中用loadingscene覆盖）
- 在所有页面，均预加载所有资源（service worker？）
- FIXME 目前，进入文章时需要加载building的所有资源。理想的情况是，只加载当前窗户的资源。