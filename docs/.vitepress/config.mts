import { defineConfig } from 'vitepress'

export default defineConfig({

  lastUpdated: true,

  title: "EZGAL",
  base: "/oss/ezgal/",
  description: "A framework based on godot mono designed to facilitate galgame development.",
  head: [
    [
      'link',
      { rel: 'icon', href: 'https://godothub.com/oss/ezgal/icon.png' }
    ]
  ],
  themeConfig: {
    outline: [2, 3],
    logo: '/icon.png',
    search: {
      provider: 'local'
    },
    socialLinks: [
      {
        icon: 'github', link: 'https://github.com/godothub/ezgal'
      },
      {
        icon: {
          svg: '<svg t="1752549772860" class="icon" viewBox="0 0 1056 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2154" width="200" height="200"><path d="M479.663158 988.429474c-90.004211-10.24-187.553684-48.505263-247.376842-96.471579-33.953684-26.947368-90.004211-88.387368-111.023158-120.724211-64.134737-99.166316-90.004211-222.046316-70.602105-333.608421 18.863158-107.250526 63.056842-191.326316 141.20421-267.856842 135.814737-133.12 353.010526-175.157895 527.090526-101.861053 57.128421 24.252632 112.101053 58.206316 134.736843 82.997895 44.193684 49.044211 28.025263 128.808421-31.258948 158.450526-25.330526 12.395789-72.218947 12.934737-90.543158 1.077895s-35.031579-44.193684-39.343158-77.069473c-2.155789-15.629474-4.850526-28.564211-5.389473-28.564211-1.077895 0-14.551579 7.545263-29.642106 16.168421-49.583158 29.103158-64.134737 33.414737-140.126315 38.265263-39.882105 2.155789-84.075789 5.928421-97.549474 8.084211-24.791579 3.233684-54.972632-1.077895-102.938947-16.168421l-25.330527-8.084211 1.077895 52.277895c0.538947 50.661053 0 53.355789-21.557895 98.088421-28.025263 58.206316-38.265263 93.237895-42.576842 144.976842-10.24 124.496842 57.667368 217.195789 186.47579 253.844211 83.536842 23.713684 221.507368 18.863158 296.421052-10.778948 71.68-28.564211 134.736842-94.854737 134.736842-142.282105 0-19.402105-24.791579-44.193684-51.738947-50.661053-11.317895-3.233684-54.433684-7.006316-95.393684-8.623158-86.770526-3.772632-147.132632-11.856842-163.84-22.635789s-25.330526-40.96-17.785263-63.59579c7.545263-23.713684 19.402105-33.953684 54.433684-46.888421 23.713684-9.162105 40.96-10.778947 109.945263-10.778947 146.593684 0 215.578947 18.324211 269.473684 72.218947 61.978947 62.517895 68.446316 157.372632 16.168421 241.448421-77.069474 123.418947-168.151579 194.021053-291.570526 225.818948-41.498947 11.317895-151.444211 18.324211-196.176842 12.934737z" fill="#D62240" p-id="2155"></path></svg>'
        }, link: 'https://gitcode.com/godothub/ezgal'
      },
      {
        icon: {
          svg: '<svg t="1752550100623" class="icon" viewBox="0 0 1110 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17972" width="200" height="200"><path d="M572.377762 54.631569l409.570556 368.207469v580.792847H109.025692v-580.792847z" fill="#E8E8E8" p-id="17973"></path><path d="M567.586102 0L338.616951 191.063276V69.296232H165.889254v265.93474L0 490.012503l112.967296 121.776541 449.63719-400.756562 435.917561 390.983286 112.017512-112.003265z" fill="#EB7A7A" p-id="17974"></path><path d="M41.847478 942.556032h1004.828612v81.439219H41.847478z" fill="#D9D9D9" p-id="17975"></path><path d="M576.936724 395.584989h-3.936854s-354.616061 3.765893 0 508.371826h3.936854c354.625559-504.605932 0-508.371826 0-508.371826z m-3.457213 182.391749c-33.028735 0-59.803142-26.774408-59.803142-59.803143s26.774408-59.803142 59.803142-59.803142c33.023986 0 59.798394 26.774408 59.798394 59.803142-0.004749 33.028735-26.774408 59.803142-59.798394 59.803143z" fill="#00CCC6" p-id="17976"></path></svg>'
        },
        link: 'https://godothub.com',
        ariaLabel: 'Godot Hub'
      }
    ]
  },

  locales: {

    root: {
      label: '简体中文',
      lang: 'zh-CN',
      description: 'EZGAL: 基于Godot Mono的GalGame框架',
      themeConfig: {
        lastUpdatedText: '最后更新于',
        editLink: {
          pattern: 'https://atomgit.com/godothub/ezgal/edit/master/docs/:path',
          text: '在线编辑此页'
        },
        outlineTitle: '本页目录',
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel: '深色模式',
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        },
        nav: [
          {
            text: '主页', link: '/'
          },
          {
            text: 'Godot Hub', link: 'https://godothub.com'
          }
        ],
        sidebar: [
          { text: '定义', link: '/definition' },
          { text: '低代码开发说明', link: '/low-code-development-instructions' },
          { text: '文件结构说明', link: '/file-structure-description' },
          { text: '语法设计', link: '/syntax-design' },
          { text: '代码编写规范', link: '/code-writing-specifications' },
          { text: '解释原理说明', link: '/explanation-principle-description' },
          // { text: 'Interpreter Description', link: '/interpreter-description' },
          { text: '参与贡献', link: '/contributing' }
        ]
      }
    },

    en: {
      label: 'English',
      lang: 'en',
      description: 'A framework based on godot mono designed to facilitate galgame development.',
      themeConfig: {
        lastUpdatedText: 'Last updated on',
        editLink: {
          pattern: 'https://atomgit.com/godothub/ezgal/edit/master/docs/:path',
          text: 'Edit this page online'
        },
        nav: [
          {
            text: 'Home', link: '/'
          },
          {
            text: 'Godot Hub', link: 'https://godothub.com'
          }
        ],
        sidebar: [
          { text: 'Definition', link: '/definition' },
          { text: 'Low-Code Development Instructions', link: '/en/low-code-development-instructions' },
          { text: 'File Structure Description', link: '/en/file-structure-description' },
          { text: 'Syntax Design', link: '/en/syntax-design' },
          { text: 'Code Writing Specifications', link: '/en/code-writing-specifications' },
          { text: 'Explanation Principle Description', link: '/en/explanation-principle-description' },
          // { text: 'Interpreter Description', link: '/en/interpreter-description' },
          { text: 'Contributing', link: '/en/contributing' }
        ]
      }
    }
  }
})
