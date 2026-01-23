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

English|[中文](./README.ZH.md)|[日本語](./README.JP.md)

A Rapid Development Framework for Text Adventure Games Based on Godot.Mono

![](./docs/public/example.png)

## Description

In November 2023, we initially implemented the **godot-ezgal** framework for Godot3 but abandoned further maintenance due to scalability issues. Now, we are rewriting the framework, and here are the features of the new **ezgal** framework:

| Description          | ezgal                                                                                                                                                                                                                                                                                      | Contributor |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| Godot Version        | Godot4 (considering ongoing compatibility)                                                                                                                                                                                                                                                 | cryingn     |
| Development Language | C# (version net8.0 and above)                                                                                                                                                                                                                                                              | cryingn     |
| Development Modes    | 1. **[Deep ntegration](#deep-integration)**: Use the framework for secondary development to achieve more functionalities.<br>2. **[Low-Code Development](#low-code-development)**: No need to configure the environment; download the compiled files and use them as development programs. | cryingn     |
| ezgal Interpreter    | Interpret script files into JSON format and read them segment by segment.                                                                                                                                                                                                                  | cryingn     |
| Script Syntax        | To facilitate the separation of script writing and performance, ezgal supports syntax that highly divides dialogue from script performance.                                                                                                                                                | cryingn     |
| Script Languages     | Chinese/English/Japanese (support customization in `./make/FlowData.cs`)                                                                                                                                                                                                                   | cryingn     |
| Wiki Languages       | Chinese/English/Japanese                                                                                                                                                                                                                                                                   | cryingn     |

## Usage

### Instructions

We have compiled documentation to facilitate understanding of the project and its development. You can find the corresponding instructional documents in the wiki, typically starting from the [Table of Contents](./wiki/en/Contents.md).

### deep-integration

You can directly clone the source code into your project and import the **ezgal** folder into Godot for further development:

```bash
git clone https://atomgit.com/godothub/ezgal.git
cd ezgal/ezgal
```

or

```bash
git clone https://gitee.com/godothub/ezgal.git
cd ezgal/ezgal
```

Before starting to write scripts for the first time, you need to initialize the state and compile the language:

```bash
dotnet run --project make edit en
```

After completing the script writing, if you want to package it into a program, you can directly compile it into the `./ezgal/code/FlowData.cs` folder through the **make** folder. The packaging method is as follows:

```bash
dotnet run --project make build en
```

The Godot-compiled program can run independently of the folder. If you need to restore it to the file editing state, you can use the following command to restore:

```bash
dotnet run --project make edit en
```

### Low-Code-Development

(This will be the mainstream development method for ezgal in the future, allowing development by simply modifying the content of folders outside the program.)

After obtaining the binary files, you can also modify script/illustration/dictionary/music and other resources by directly editing the content of folders outside the program.

### Contributing

Welcome to use the project. You can refer to [Contributing](./wiki/en/Contributing.md) to contribute source code and make ezgal better.

## Acknowledgments

* The ezgal project is based on the [Godot Engine](https://godotengine.org/).
* Thanks to [100font](https://www.100font.com/) for providing font resources.
* The godot-ezgal and ezgal projects were initially supervised by the VYCMa Open Source China Community.
* The ezgal project is currently maintained by the [Godot Hub Community](https://godothub.com/).
* Thanks to all individuals who have contributed and designed.

