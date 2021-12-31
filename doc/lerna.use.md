# lerna 使用

#### 基础配置

- 全局安装 lerna

  ```
  npm install --global lerna
  ```
  
- 在 package.json 中执行如下修改:

  ```
  // 在 scripts 中增加:
  "lerna:boot-hoist": "lerna bootstrap --hoist"
  
  // 在根层级中增加:
  "workspaces": {
  	"packages": [
  		"packages/*"
  	]
  }
  ```

- 在项目根目录中增加文件: lerna.json

  ```
  // 示例配置
  {
  	"packages": ["packages/*"],
  	"version": "0.0.0",
  	// 不需要提升到全局 node_modules 的依赖项
  	"nohoist": ["vue", "vue-loader", "vue-template-compiler", "@vue/compiler-sfc", "**/vue", "**/vue-loader/**"]
  }
  ```

  

#### 首次安装初始依赖

- 首次安装初始依赖即执行如下命令

  ```
  npm run lerna:boot-hoist
  ```

  

#### 使用 lerna 管理依赖

- 安装依赖

  ```
  // 以开发包依赖模式将 chalk 安装到名称为 <@packagename> 的子项目的 node_modules 中
  lerna add chalk --scope=@packagename --dev
  
  // 在所有子项目中安装 axios
  lerna add axios
  ```

- 删除依赖

  ```
  // 删除所有依赖
  lerna clean
  ```

  
