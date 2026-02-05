import{_ as s,c as n,o as e,ag as p}from"./chunks/framework.B3RpK1bM.js";const u=JSON.parse('{"title":"文件结构说明","description":"","frontmatter":{},"headers":[],"relativePath":"zh_CN/file-structure-description.md","filePath":"zh_CN/file-structure-description.md","lastUpdated":1770012448000}'),t={name:"zh_CN/file-structure-description.md"};function i(o,a,l,c,r,d){return e(),n("div",null,[...a[0]||(a[0]=[p(`<h1 id="文件结构说明" tabindex="-1">文件结构说明 <a class="header-anchor" href="#文件结构说明" aria-label="Permalink to &quot;文件结构说明&quot;">​</a></h1><p><a href="./">返回目录</a></p><h2 id="主结构" tabindex="-1">主结构 <a class="header-anchor" href="#主结构" aria-label="Permalink to &quot;主结构&quot;">​</a></h2><p>文件结构是项目最核心的概念，快速了解项目的文件构成有利于判断应该如何处理自己的需求，以下是主结构说明：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.  </span></span>
<span class="line"><span>├── ezgal</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>├── LICENSE</span></span>
<span class="line"><span>├── make</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>├── test</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>└── docs</span></span>
<span class="line"><span>	└── ...</span></span></code></pre></div><h3 id="ezgal项目" tabindex="-1">ezgal项目 <a class="header-anchor" href="#ezgal项目" aria-label="Permalink to &quot;ezgal项目&quot;">​</a></h3><p><code>ezgal</code>文件夹存放godot的项目文件，我们可以将文件夹内容直接导入godot中作为新项目进行开发，我们将在<a href="#框架结构">框架结构</a>中详细介绍内部结构</p><h3 id="license" tabindex="-1">LICENSE <a class="header-anchor" href="#license" aria-label="Permalink to &quot;LICENSE&quot;">​</a></h3><p><code>LICENSE</code>为开源协议说明，项目遵循MIT开源协议，支持商业使用、修改、分发、使用</p><h3 id="make构建工具" tabindex="-1">make构建工具 <a class="header-anchor" href="#make构建工具" aria-label="Permalink to &quot;make构建工具&quot;">​</a></h3><p><code>make</code>文件夹存放基于csharp的make构建工具，是ezlang的主要构成部分，用于控制ezgal项目构建、编辑模式，可以在<a href="./tools.html#make构建工具">工具集</a>进一步了解使用方式.</p><h3 id="docs目录" tabindex="-1">docs目录 <a class="header-anchor" href="#docs目录" aria-label="Permalink to &quot;docs目录&quot;">​</a></h3><p><code>docs</code>文件夹用于存放各语言的项目说明目录.</p><h2 id="框架结构" tabindex="-1">框架结构 <a class="header-anchor" href="#框架结构" aria-label="Permalink to &quot;框架结构&quot;">​</a></h2><p>框架结构指<code>ezgal</code>文件夹中用于导入引擎的文件结构, 文件结构如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── script</span></span>
<span class="line"><span>│   ├── .init.json</span></span>
<span class="line"><span>│   ├── start.txt</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>├── dictionary</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>├── image</span></span>
<span class="line"><span>│   └── background</span></span>
<span class="line"><span>│   │   └── ...</span></span>
<span class="line"><span>│   ├── start_texture.png/start_texture.jpg</span></span>
<span class="line"><span>│   ├── end_texture.png/end_texture.jpg</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>├── sounds</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>├── csharp</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>├── gdscript</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>├── font</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>├── scene</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>├── shader</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>├── theme</span></span>
<span class="line"><span>│   ├── game.tres</span></span>
<span class="line"><span>│   ├── theme.tres</span></span>
<span class="line"><span>│   └── UI.tres</span></span>
<span class="line"><span>├── project.godot  </span></span>
<span class="line"><span>└── ...</span></span></code></pre></div><p>如果选择<strong>低代码开发</strong>，我们无需下载源码，只需要将下载程序位置作为基础目录，根据开发需求在相应位置再新建目录，文件结构将更简单：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── script</span></span>
<span class="line"><span>│   ├── .init.json</span></span>
<span class="line"><span>│   ├── start.txt</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>├── dictionary</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>├── image</span></span>
<span class="line"><span>│   └── background</span></span>
<span class="line"><span>│   │   └── ...</span></span>
<span class="line"><span>│   ├── start_texture.png/start_texture.jpg</span></span>
<span class="line"><span>│   ├── end_texture.png/end_texture.jpg</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>├── sounds</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>└── ezgal.exe</span></span></code></pre></div><h3 id="script" tabindex="-1">script <a class="header-anchor" href="#script" aria-label="Permalink to &quot;script&quot;">​</a></h3><p><code>script</code>文件夹存储系统配置脚本与剧本演出脚本</p><h4 id="init-todo-未完全实现" tabindex="-1">init(todo: 未完全实现) <a class="header-anchor" href="#init-todo-未完全实现" aria-label="Permalink to &quot;init(todo: 未完全实现)&quot;">​</a></h4><p><code>.init.json</code>文件用于定义系统配置脚本，包含<code>start</code>用于设置开始场景（即<code>scene/main.tscn</code>），<code>end</code>用于设置结束场景（即<code>scene/end.tscn</code>）, 详细定义规则可参考<a href="../ezgal/script/.init.json">.init.json</a>文件</p><h4 id="start" tabindex="-1">start <a class="header-anchor" href="#start" aria-label="Permalink to &quot;start&quot;">​</a></h4><p><code>start.txt</code>文件为默认定义的剧本入口位置，进入游戏后(即进入<code>./scene/game.tscn</code>场景)默认先加载<code>start.txt</code>剧本演出脚本，具体编写语法可参考<a href="/oss/ezgal/zh_CN/syntax-design.html">语法设计</a>，通过设置系统配置脚本可以修改入口剧本名称.</p><h4 id="更多剧本" tabindex="-1">更多剧本 <a class="header-anchor" href="#更多剧本" aria-label="Permalink to &quot;更多剧本&quot;">​</a></h4><p>我们可以在<code>script</code>文件夹中添加更多剧本，在剧情演绎过程中可以通过<a href="/oss/ezgal/zh_CN/syntax-design.html#演出/">演出</a>跳转到不同的剧本.</p><h3 id="dictionary" tabindex="-1">dictionary <a class="header-anchor" href="#dictionary" aria-label="Permalink to &quot;dictionary&quot;">​</a></h3><p><code>dictionary</code>文件夹用于存放专业名词，玩家在剧本进行到对应的<a href="/oss/ezgal/zh_CN/syntax-design.html#专业名词/">专业名词</a>时或在界面、设置中可以导入<code>./scene/dictionary.tscn</code>场景查询专业名词的说明，<code>dictionary</code>文件夹中一个文件对应一个专业名词, 以<strong>文字信息</strong>为例： 文件命名规则为<code>文字信息.txt</code>，文件支持bbcode格式，可以在<code>dictionary.tscn</code>场景中继续跳转：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[i]文字信息[/i]</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>文字信息统一采用富文本进行编辑, 支持[color=blue][url=bbcode编码]bbcode编码[/url][/color], 可以通过设置url指向dictionary文件(指向链接不需要包含.txt的后缀)达成查询字典信息.</span></span></code></pre></div><h4 id="开始-结束背景" tabindex="-1">开始&amp;结束背景 <a class="header-anchor" href="#开始-结束背景" aria-label="Permalink to &quot;开始&amp;结束背景&quot;">​</a></h4><p>我们默认定义<code>start_texture.png/start_texture.jpg</code>为开始界面的图片，<code>end_texture.png/end_texture.jpg</code>为结束界面的图片，如果找不到图片将显示清屏颜色.</p><h4 id="游戏背景" tabindex="-1">游戏背景 <a class="header-anchor" href="#游戏背景" aria-label="Permalink to &quot;游戏背景&quot;">​</a></h4><p>为避免干扰，我们限制游戏中调用的背景只允许从<code>image/background</code>文件夹中进行调用，且在演出中需要明确图片的后缀名（比如png、jpg格式）.</p><h4 id="立绘" tabindex="-1">立绘 <a class="header-anchor" href="#立绘" aria-label="Permalink to &quot;立绘&quot;">​</a></h4><p>我们默认不同角色存在多个角色立绘，每个角色应该在<code>image</code>文件夹内定义新的文件夹，存储对应的立绘，调用方式参考<a href="/oss/ezgal/zh_CN/syntax-design.html#演出参数/">演出参数</a></p><h3 id="sounds" tabindex="-1">sounds <a class="header-anchor" href="#sounds" aria-label="Permalink to &quot;sounds&quot;">​</a></h3><p>用于存放音乐文件.</p><h3 id="csharp" tabindex="-1">csharp <a class="header-anchor" href="#csharp" aria-label="Permalink to &quot;csharp&quot;">​</a></h3><p>用于存放C#代码.</p><h3 id="gdscript" tabindex="-1">gdscript <a class="header-anchor" href="#gdscript" aria-label="Permalink to &quot;gdscript&quot;">​</a></h3><p>用于存放gdscript代码.</p><h3 id="font" tabindex="-1">font <a class="header-anchor" href="#font" aria-label="Permalink to &quot;font&quot;">​</a></h3><p>用于存放字体，ezgal默认采用昭源环方（Chiron GoRound TC）字体. 字体以<a href="https://openfontlicense.org" target="_blank" rel="noreferrer">SIL Open Font License 1.1</a>（SIL 开源字型授权版本1.1，简称SIL OFL 或OFL）授权协议发布：</p><p>✔ 这款字体无论是个人还是企业都可以自由免费商用，无需知会或者标明原作者。</p><p>✔ 这款字体可以自由传播、分享，或者将字体安装于系统、软件或APP中也是允许的，可以与任何软件捆绑再分发以及／或一并销售。</p><p>✔ 这款字体可以自由修改、改造，但修改或改造后的字体也必须同样以SIL Open Font License 1.1授权公开。</p><p>✘ 这款字体禁止用于违法行为，如因使用这款字体产生纠纷或法律诉讼，作者不承担任何责任。</p><p>✘ 根据SIL Open Font License 1.1的规定，禁止单独出售字体文件(OTF/TTF文件)的行为。</p><p>关于授权协议的内容、免责事项等具体细节，请查看详细的License授权文件的内容。</p><h3 id="scene" tabindex="-1">scene <a class="header-anchor" href="#scene" aria-label="Permalink to &quot;scene&quot;">​</a></h3><p>用于存储godot场景.</p><h3 id="shader" tabindex="-1">shader <a class="header-anchor" href="#shader" aria-label="Permalink to &quot;shader&quot;">​</a></h3><p>用于存储godot的着色器资源.</p><h3 id="theme" tabindex="-1">theme <a class="header-anchor" href="#theme" aria-label="Permalink to &quot;theme&quot;">​</a></h3><p>系统默认存储game.tres、UI.tres主题.</p><h4 id="game" tabindex="-1">game <a class="header-anchor" href="#game" aria-label="Permalink to &quot;game&quot;">​</a></h4><p>game.tres主题仅用于控制<code>./scene/game.tscn</code>场景中的游戏UI信息</p><h4 id="ui" tabindex="-1">UI <a class="header-anchor" href="#ui" aria-label="Permalink to &quot;UI&quot;">​</a></h4><p>UI.tres主题用于控制游戏外(如选项、设置等)的基础信息.</p><h3 id="project-godot" tabindex="-1">project.godot <a class="header-anchor" href="#project-godot" aria-label="Permalink to &quot;project.godot&quot;">​</a></h3><p><code>project.godot</code>文件存储用于导入时识别godot项目的基础信息.</p>`,61)])])}const g=s(t,[["render",i]]);export{u as __pageData,g as default};
