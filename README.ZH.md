<div align="center" style="display:grid;place-items:center;">
        <p>
            <a href="https://gitee.com/cryingn/ezgal" target="_blank"><img width="180" src="./ezgal/image/icon.png" alt="ezgal logo"></a>
	        <h1>ezgal</h1>
        </p>
    <div style="display: flex; gap: 10px;">
		<img src="https://gitcode.com/godothub/ezgal/star/badge.svg?style=flat-square">
		<img src="https://img.shields.io/github/stars/Godothub/ezgal.svg">
	</div>
</div>

[English](./README.md)|中文|[日本語](./README.JP.md)

这是基于godot.mono用于文字冒险类游戏的快速开发框架.

![](./docs/public/example.png)

## 描述

我们在2023年11月初步实现了godot3的**godot-ezgal**框架, 但是因为扩展性问题放弃继续维护, 现在对框架进行重写, 以下是当前新**ezgal**框架的特性:

| 描述       | ezgal                                                                              | 说明人     |
| -------- | ---------------------------------------------------------------------------------- | ------- |
| godot版本  | Godot4(考虑持续兼容)                                                                     | cryingn |
| 开发语言     | C#(net8.0以上版本)                                                                     | cryingn |
| 开发模式     | 1. [深度嵌入](#深度嵌入)：使用框架进行二次开发, 可实现更多功能<br>2. [低代码开发](#低代码开发)：无需配置环境，下载编译文件作为开发程序进行开发 | cryingn |
| ezgal解释器 | 将剧本文件解释为json格式并逐段读取                                                                | cryingn |
| 剧本语法     | 为便于剧本写作与演出分离, ezgal支持的语法高度划分了台词与剧本演出                                               | cryingn |
| 剧本语言     | 中/英/日三语（支持在`./make/FlowData.cs`定制语言）                                               | cryingn |
| wiki语言   | 中/英/日三语                                                                            | cryingn |

## 使用

### 使用说明

我们整理了便于了解项目与使用开发的文档，您可以在wiki中找到相应的说明文档，我们一般从[目录](./wiki/cn/目录.md)开始.

### 深度嵌入

您可以直接将源码克隆到项目中, 并将**ezgal**文件夹导入到godot中接着开发:

```bash
git clone https://atomgit.com/godothub/ezgal.git
cd ezgal/ezgal
```

或

```bash
git clone https://gitee.com/godothub/ezgal.git
cd ezgal/ezgal
```

首次开始编写脚本前需要将状态与编译语言进行初始化:
```bash
dotnet run --project make edit zh
```

在编写完成后想要打包为一个程序可以直接通过**make**文件夹打包进`./ezgal/code/FlowData.cs`文件夹进行编译, 打包方式如下：

```bash
dotnet run --project make build zh
```

godot编译的程序可以不依赖文件夹运行, 如果需要恢复到文件的编辑状态, 可以使用以下指令进行恢复:

```bash
dotnet run --project make edit zh
```

### 低代码开发

(这是未来ezgal的主流开发方式, 只需要在程序外修改文件夹的内容就可以实现开发)

在获取二进制文件后也可以通过直接编辑文件外的文件夹内容实现脚本/立绘/字典/音乐等资源的修改.

### 参与贡献

欢迎使用项目，你可以参考[参与贡献](./wiki/cn/参与贡献.md)贡献源码，让ezgal变得更好。

## 致谢

* ezgal项目基于[Godot Engine](https://godotengine.org/)引擎.
* 感谢[100font](https://www.100font.com/)提供字体资源.
* godot-ezgal、ezgal项目最初由VYCMa开源中国社区监督.
* ezgal项目当前由[Godot Hub社区](https://godothub.com/)维护.
* 致谢参与贡献与设计的所有个人
