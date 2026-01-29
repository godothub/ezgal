# File Structure Overview

[Return to Table of Contents](./index.md)

## Main Structure

The file structure is the core concept of the project, quickly understanding the composition of files in the project helps in determining how one should handle their needs. Below is an overview of the main structure:

```markdown
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

### ezgal Project

The `ezgal` folder stores Godot project files and we can directly import these contents into Godot as a new project for development. We will provide more details about the internal structure in the [Framework Structure](#framework-structure).

### LICENSE

The `LICENSE` file serves as a protocol description for open-source licenses, indicating that the project follows MIT open-source license rules. It supports commercial use, modifications, distribution, and usage.

### Make Build Tool

The `make` folder contains a build tool based on C#, which is the primary component of ezlang. This tool controls the building, editing mode, and other aspects of the ezgal project. More information on using this tool can be found in the [Toolset](./tools.md#make-build-tool).

### Docs Directory

The `docs` directory is used to store project documentation in multiple languages.

## Framework Structure

The framework structure refers to the file structure within the `ezgal` folder that is used to import the engine's configuration. The following is an example of its structure:

```markdown
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

If