# Tool Set

[Return to Table of Contents](./index.md)

The tool set is an auxiliary tool developed by ezgal that significantly optimizes the development process. While it may not be necessary for contributors to understand how to use the tool set, we strongly recommend trying out its usage before contributing.

## Make Build Tool

Make uses C# and is the core part of ezlang. It mainly converts script content into C# code embedded in the depth section, translates scripts into JSON format, controls ezgal's development/editing modes, and provides commands for building, editing, and translating files:

```bash
Commands
    build: Convert script content to specified language code.
    edit: Restore specified language code functionality back to script mode.
    json: Translate corresponding file to JSON format and print it.

Supported languages
    zh-CN: Chinese (Simplified)
    en-US: English
    ja-JP: Japanese

Usage examples
dotnet run --project make build en
dotnet run --project make edit en

Usage
dotnet run --project make <COMMAND> [file path]
```

### Build Mode

In build mode, user-edited scripts will hard-code them into `./ezgal/csharp/Global/FlowData.cs`, making it easier to pack/export files during deep development while optimizing runtime efficiency. For example:

```bash
dotnet run --project make build en
```

### Edit Mode

In edit mode, Ezgal reads the user's edited scripts in English:

```bash
dotnet run --project make edit en
```

## CI Testing

> Why use Vlang for CI testing? Vlang has a smaller size, high performance, similar development difficulty to Python, and cleaner style compared to other languages. It is more suitable as a batch testing script language.

CI testing is implemented using Vlang, which includes tests for whether submitted code uses the edit mode, whether ezlang's interpretation function conforms to standards, and performs these checks when code is committed on GitHub. Users can also conduct their own CI testing using the following code snippet before committing changes:

```bash
cd test
v run main.v
```

## MD Document Translation

MD document translation tool is written in Python and supplements the limitations faced by contributors who lack experience with the tool set. Currently, AI is used to translate and save documents from Chinese to English or Japanese. The primary channels include [Wenxin Large Model](https://console.bce.baidu