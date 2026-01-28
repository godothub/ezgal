# 工具集

工具集是ezgal开发中可以大幅优化开发流程的辅助工具，参与贡献不一定需要了解工具集的使用方式，但是我们强烈建议在贡献前先尝试了解工具集应该如何使用。

## make构建工具

make使用csharp开发，是ezlang的核心部分，主要有在深度集成功能中将台本转换为csharp代码嵌入，解释台本为json格式，控制ezgal的开发/编辑模式，以下是命令说明：

```bash
命令
    build：将脚本内容构建为指定语言的代码
    edit：将指定语言的代码功能还原为脚本模式
    json：将对应文件翻译为 JSON 格式并打印

支持语言
    zh/CN：中文
    en/EN：英文
    jp/JP：日文

使用示例
dotnet run --project make build en    # 构建英文代码  
dotnet run --project make edit ZH     # 还原中文脚本

用法
dotnet run --project make <COMMAND> [文件路径]

命令：
    json：将对应文件翻译为 JSON 格式并打印

注意事项

本工具链目前处于测试阶段，请参考当前版本的 README 文件获取准确语法。

```

## ci测试

> 为什么采用vlang用于CI测试：vlang体积较小，高效的同时开发难度与python的开发难度相似，编写风格也更加干净，相较于其他语言更适合作为批量测试的脚本语言用于测试。

CI测试使用vlang开发，主要包含测试提交代码是否采用编辑模式，测试ezlang的解释功能是否符合标准，CI测试会在代码提交时在github进行检测，vlang用户也可以在提交代码前使用以下代码自行开展CI测试：

```bash
cd test
v run main.v
```

## md文档翻译

md文档翻译工具采用python开发，为补充参与贡献者不足的情况，当前使用AI参与将中文批量翻译并保存为英/日文档，当前AI渠道主要包含[文心大模型](https://console.bce.baidu.com/qianfan/modelcenter/model/buildIn/detail/am-xpgukxjf6s0r])（收费，远程API）和[Qwen小模型](https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct-GGUF)（免费，本地搭建），参与开发可以自行搭建后将api-key或api-url存储在`./docs/private/`路径下，然后通过以下方式进行翻译：

```bash
# Qwen本地服务模式
python main.py local

# 文心远程服务模式
python main.py api
```

未来将进一步完善文档翻译部分工具集。

## 


