# 低代码开发

[返回目录](./index.md)

## 支持

> 由于android程序使用apk工具安装使用，原则上可以导出apk版本，但目前不便于打包分发。
> 故描述为当前**低代码开发**暂不支持android端。

Ezgal支持windows与linux端，mac端可以自行通过godot导出开发模板。

## 开发

低代码开发无需配置godot与dotnet开发环境，原理是通过程序开放的接口对基础资源进行自定义, 需要下载预编译的初始ezgal创建目录进行开发.

### 下载

你可以直接获取对应系统的[发行版](https://atomgit.com/godothub/ezgal/releases).

### 使用

开放接口以文件夹形式进行管理，可参考[框架结构](/file-structure-description#框架结构/)的**低代码开发**说明创建对应文件夹，剧本演出脚本可参考[语法设计](/syntax-design)进行编写.

### 低代码开发编辑器

ezgal定义了固定的解释语言，针对**低代码开发**的接口均以文本形式进行管理，未来初步规划开发ezgal编辑器便于开发设置等流程.

### 案例

以下是一些基于Ezgal的游戏开发案例：

- [The_Guilty_Secret](https://atomgit.com/cryingn/The_Guilty_Secret)

## 分发

分发项目时应该打包初始ezgal程序与目录下的相关文件夹资源.





