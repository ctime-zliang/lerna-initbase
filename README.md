# lerna-initbase

使用 monorepo 形式来组织项目开发和构建发布

> 基于 Windows 平台的构建、开发和测试，因此可能在别的平台上还存在一些问题
>
> Windows: 推荐 Windows 10 及以上版本
>
> **该项目为笔者学习参考使用**



#### fetch

```
git clone https://github.com/ctime-zliang/lerna-initbase
```



#### usage

```
// 具体以 package.json 中定义的命令为准

// 全部安装 lerna
npm install lerna -g

// 初始化 lerna
// 首次 clone 项目后安装依赖时直接执行此命令即可, 请不要执行 npm install
npm run lerna:boot-hoist
```

