import{_ as a,c as i,o as e,ag as n}from"./chunks/framework.B3RpK1bM.js";const d=JSON.parse('{"title":"File Structure Overview","description":"","frontmatter":{},"headers":[],"relativePath":"en_EN/file-structure-description.md","filePath":"en_EN/file-structure-description.md","lastUpdated":1769658044000}'),t={name:"en_EN/file-structure-description.md"};function l(r,s,p,h,o,c){return e(),i("div",null,[...s[0]||(s[0]=[n(`<h1 id="file-structure-overview" tabindex="-1">File Structure Overview <a class="header-anchor" href="#file-structure-overview" aria-label="Permalink to &quot;File Structure Overview&quot;">​</a></h1><p><a href="./">Return to Table of Contents</a></p><h2 id="main-structure" tabindex="-1">Main Structure <a class="header-anchor" href="#main-structure" aria-label="Permalink to &quot;Main Structure&quot;">​</a></h2><p>The file structure is the core concept of the project, quickly understanding the composition of files in the project helps in determining how one should handle their needs. Below is an overview of the main structure:</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── ezgal</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── LICENSE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── make</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── test</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└── docs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    └── ...</span></span></code></pre></div><h3 id="ezgal-project" tabindex="-1">ezgal Project <a class="header-anchor" href="#ezgal-project" aria-label="Permalink to &quot;ezgal Project&quot;">​</a></h3><p>The <code>ezgal</code> folder stores Godot project files and we can directly import these contents into Godot as a new project for development. We will provide more details about the internal structure in the <a href="#framework-structure">Framework Structure</a>.</p><h3 id="license" tabindex="-1">LICENSE <a class="header-anchor" href="#license" aria-label="Permalink to &quot;LICENSE&quot;">​</a></h3><p>The <code>LICENSE</code> file serves as a protocol description for open-source licenses, indicating that the project follows MIT open-source license rules. It supports commercial use, modifications, distribution, and usage.</p><h3 id="make-build-tool" tabindex="-1">Make Build Tool <a class="header-anchor" href="#make-build-tool" aria-label="Permalink to &quot;Make Build Tool&quot;">​</a></h3><p>The <code>make</code> folder contains a build tool based on C#, which is the primary component of ezlang. This tool controls the building, editing mode, and other aspects of the ezgal project. More information on using this tool can be found in the <a href="./tools.html#make-build-tool">Toolset</a>.</p><h3 id="docs-directory" tabindex="-1">Docs Directory <a class="header-anchor" href="#docs-directory" aria-label="Permalink to &quot;Docs Directory&quot;">​</a></h3><p>The <code>docs</code> directory is used to store project documentation in multiple languages.</p><h2 id="framework-structure" tabindex="-1">Framework Structure <a class="header-anchor" href="#framework-structure" aria-label="Permalink to &quot;Framework Structure&quot;">​</a></h2><p>The framework structure refers to the file structure within the <code>ezgal</code> folder that is used to import the engine&#39;s configuration. The following is an example of its structure:</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── script</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── .init.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── start.txt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── dictionary</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── image</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── background</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   └── ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── start_texture.png/start_texture.jpg</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── end_texture.png/end_texture.jpg</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── sounds</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── csharp</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── gdscript</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── font</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── scene</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── shader</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── theme</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── game.tres</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── theme.tres</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── UI.tres</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── project.godot</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└── ...</span></span></code></pre></div><p>If</p>`,17)])])}const k=a(t,[["render",l]]);export{d as __pageData,k as default};
