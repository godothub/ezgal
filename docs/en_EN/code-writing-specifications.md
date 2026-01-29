# Code Style Guidelines

[Return to Table of Contents](./index.md)

## Godot

### Scene

Define the **showing scene** and **function scene** concepts.  
#### Scene Baseline Rules

* Scenes should be stored in the `./scene` folder under the root node name.
* The naming convention for scenes should follow camel case.
* The root node of the scene should match its name.

#### Showing Scene

**Showing scene** refers to scenes that can be directly navigated to, such as `main.tscn`, `game.tscn`, or `end.tscn`. The basic rules for showing scenes are as follows:

* Only the root node manages basic control operations.

#### Function Scene

**Function scene** refers to scenes where certain functions are implemented by adding them. For example, `bottom.tscn` or `font.tscn`. The basic rules for function scenes are as follows:

* One function scene implements one business operation.
* A function scene should not directly inherit from the themes within the `./theme` directory; instead, it should inherit from the corresponding showing scene.

### Node

#### Node Baseline Rules

* Nodes should use camel case for their names.

## C#

C# files should be stored in the `./ezgal/csharp` folder.

### C# Baseline Rules

* File names should correspond to the inherited nodes using camel case.
* Variable naming conventions are as follows:

| Name | Description |
|------|-------------|
| Public variables (global) | Use uppercase camel case (`CamelCase`). |
| Private variables (global) | Use underscore followed by lowercase camel case (`_camelCase`). |
| Internal variables (functions) | Use lowercase camel case (`camelCase`). |
| When accessing a variable, ensure that the variable name matches the name of the node being accessed. |
| If the variable corresponds to a single node, add `_node` at the end. |
| If the variable corresponds to a scene, add `_scene` at the end. |
| If the variable corresponds to a path, add `_path` at the end. |

* Functions should use camel case.
* Complex functions should be succinctly described using `<summary> </summary>` tags, with English-Chinese-Japanese order recommended for language.

### Global Files

The current C# global file includes `FlowData.cs`, `Global.cs`, and `Tools.cs`.

##### FlowData

`FlowData.cs` is a core definition file for deep