# Low Code Development

[Return to Table of Contents](./index.md)

## Support

> Due to the Android program using apk tools for installation, it is generally possible to export an APK version; however, currently, it is not convenient for packaging and distribution.
> Therefore, this description states that current **low-code development** does not support the Android end.

Ezgal supports Windows and Linux environments, while Mac users can manually create development templates by exporting from Godot.

## Development

Low-code development does not require configuration of the Godot or .NET development environment. The principle is to use open APIs to customize basic resources. To develop, you need to download the precompiled initial ezgal directory.

### Download

You can directly obtain the corresponding release [distribution](https://atomgit.com/godothub/ezgal/releases).

### Use

Open interfaces are managed in file folder form, and refer to the low-code development section in the framework structure diagram [to create corresponding folders] for reference. Scripting scripts for performances can be written according to the grammar design [section].

### Low Code Development Editor

Ezgal defines a fixed interpretation language. For the interface of low-code development, they are all managed in text format. Future plans include developing an Ezgal editor to facilitate development settings and other workflows.

### Case Studies

Below are some game development cases based on Ezgal:

- [The Guilty Secret](https://atomgit.com/cryingn/The_Guilty_Secret)

## Distribution

When distributing projects, you should package the initial ezgal program along with related files within the resource directory.