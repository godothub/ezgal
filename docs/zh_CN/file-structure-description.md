# 文件结构说明

[返回目录](./index.md)

## 主结构

文件结构是项目最核心的概念，快速了解项目的文件构成有利于判断应该如何处理自己的需求，以下是主结构说明：

```
.  
├── ezgal
│   └── ...
├── LICENSE
├── make
│   └── ...
├── test
│   └── ...
└── docs
	└── ...
```

### ezgal项目

`ezgal`文件夹存放godot的项目文件，我们可以将文件夹内容直接导入godot中作为新项目进行开发，我们将在[框架结构](#框架结构)中详细介绍内部结构

### LICENSE

`LICENSE`为开源协议说明，项目遵循MIT开源协议，支持商业使用、修改、分发、使用

### make构建工具

`make`文件夹存放基于csharp的make构建工具，是ezlang的主要构成部分，用于控制ezgal项目构建、编辑模式，可以在[工具集](./tools.md#make构建工具)进一步了解使用方式.

### docs目录

`docs`文件夹用于存放各语言的项目说明目录.


## 框架结构

框架结构指`ezgal`文件夹中用于导入引擎的文件结构, 文件结构如下：

```
.
├── script
│   ├── .init.json
│   ├── start.txt
│   └── ...
├── dictionary
│   └── ...
├── image
│   └── background
│   │   └── ...
│   ├── start_texture.png/start_texture.jpg
│   ├── end_texture.png/end_texture.jpg
│   └── ...
├── sounds
│   └── ...
├── csharp
│   └── ...
├── gdscript
│   └── ...
├── font
│   └── ...
├── scene
│   └── ...
├── shader
│   └── ...
├── theme
│   ├── game.tres
│   ├── theme.tres
│   └── UI.tres
├── project.godot  
└── ...
```

如果选择**低代码开发**，我们无需下载源码，只需要将下载程序位置作为基础目录，根据开发需求在相应位置再新建目录，文件结构将更简单：


```
.
├── script
│   ├── .init.json
│   ├── start.txt
│   └── ...
├── dictionary
│   └── ...
├── image
│   └── background
│   │   └── ...
│   ├── start_texture.png/start_texture.jpg
│   ├── end_texture.png/end_texture.jpg
│   └── ...
├── sounds
│   └── ...
└── ezgal.exe
```

### script

`script`文件夹存储系统配置脚本与剧本演出脚本
#### init(todo: 未完全实现)

`.init.json`文件用于定义系统配置脚本，包含`start`用于设置开始场景（即`scene/main.tscn`），`end`用于设置结束场景（即`scene/end.tscn`）, 详细定义规则可参考[.init.json](../ezgal/script/.init.json)文件
#### start

`start.txt`文件为默认定义的剧本入口位置，进入游戏后(即进入`./scene/game.tscn`场景)默认先加载`start.txt`剧本演出脚本，具体编写语法可参考[语法设计](/syntax-design)，通过设置系统配置脚本可以修改入口剧本名称. 

#### 更多剧本

我们可以在`script`文件夹中添加更多剧本，在剧情演绎过程中可以通过[演出](/syntax-design.md#演出/)跳转到不同的剧本.
### dictionary

`dictionary`文件夹用于存放专业名词，玩家在剧本进行到对应的[专业名词](/syntax-design.md#专业名词/)时或在界面、设置中可以导入`./scene/dictionary.tscn`场景查询专业名词的说明，`dictionary`文件夹中一个文件对应一个专业名词, 以**文字信息**为例：
文件命名规则为`文字信息.txt`，文件支持bbcode格式，可以在`dictionary.tscn`场景中继续跳转：
```
[i]文字信息[/i]
  
文字信息统一采用富文本进行编辑, 支持[color=blue][url=bbcode编码]bbcode编码[/url][/color], 可以通过设置url指向dictionary文件(指向链接不需要包含.txt的后缀)达成查询字典信息.
```

#### 开始&结束背景
我们默认定义`start_texture.png/start_texture.jpg`为开始界面的图片，`end_texture.png/end_texture.jpg`为结束界面的图片，如果找不到图片将显示清屏颜色.

#### 游戏背景

为避免干扰，我们限制游戏中调用的背景只允许从`image/background`文件夹中进行调用，且在演出中需要明确图片的后缀名（比如png、jpg格式）.

#### 立绘

我们默认不同角色存在多个角色立绘，每个角色应该在`image`文件夹内定义新的文件夹，存储对应的立绘，调用方式参考[演出参数](/syntax-design#演出参数/)

### sounds

用于存放音乐文件.

### csharp

用于存放C#代码.

### gdscript

用于存放gdscript代码.

### font

用于存放字体，ezgal默认采用昭源环方（Chiron GoRound TC）字体. 字体以[SIL Open Font License 1.1](https://openfontlicense.org)（SIL 开源字型授权版本1.1，简称SIL OFL 或OFL）授权协议发布：

✔ 这款字体无论是个人还是企业都可以自由免费商用，无需知会或者标明原作者。

✔ 这款字体可以自由传播、分享，或者将字体安装于系统、软件或APP中也是允许的，可以与任何软件捆绑再分发以及／或一并销售。

✔ 这款字体可以自由修改、改造，但修改或改造后的字体也必须同样以SIL Open Font License 1.1授权公开。

✘ 这款字体禁止用于违法行为，如因使用这款字体产生纠纷或法律诉讼，作者不承担任何责任。

✘ 根据SIL Open Font License 1.1的规定，禁止单独出售字体文件(OTF/TTF文件)的行为。
  
关于授权协议的内容、免责事项等具体细节，请查看详细的License授权文件的内容。

### scene

用于存储godot场景.

### shader

用于存储godot的着色器资源.

### theme

系统默认存储game.tres、UI.tres主题.

#### game

game.tres主题仅用于控制`./scene/game.tscn`场景中的游戏UI信息

#### UI

UI.tres主题用于控制游戏外(如选项、设置等)的基础信息.

### project.godot

`project.godot`文件存储用于导入时识别godot项目的基础信息.