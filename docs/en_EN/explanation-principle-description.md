# Explanation of Principles

[Return to Table of Contents](./index.md)

**Deep Development** uses the make toolchain to convert script files into `./ezgal/csharp/FlowData.cs`, while **Low Code Development** relies on `./ezgal/csharp/Global.cs` to read script files within `./ezgal/script` at runtime. Script scenes in these files are then called uniformly from `./ezgal/scene/game.tscn`.

## Parsing to JSON

The parsing process in `./ezgal/csharp/Global.cs` is consistent with the implementation of the make toolchain, and its core parsing tools are the `read_file()` function. The core implementation functions include:

### Line-by-Line Processing

Reads through the file, processing each line sequentially until it reaches the end of the current line (`string line`). Only lines that are not null after trimming their head and tail whitespace characters are considered valid.

### Handling Brackets

When encountering an opening bracket `{` (left brace), the current line continues adding information until it encounters a closing bracket `}` (right brace). Information within curly braces is handled by the `set_braces_func1()` function.

### Option Handling

When reading `[options]`, the type is set as `"options"`. Subsequent lines are stored as options using the `set_option` function before continuing.

## Logical Processing for JSON Format

### Text Processing

Text processing requires setting either `type="dialogue"` or `type="full screen"`. Based on this type, text will be displayed in the corresponding window. When `type` becomes empty, it automatically resumes the last stored `type` value.
- Image Function Set: You can add image functionality during text processing, which updates in the current row.
- Sound Function Set: Similarly, you can add sound functionality during text processing, which also updates in the current row.
- Navigation Function Set: You can add navigation functionality during text processing, which jumps to the next scene after completing the text processing.

### Independent Scene Execution

If independent execution is required, a separate setting should be made for `type="scene"`. At this point, the text processing flow does not occur.

### Blank Segment Handling

This is currently an imperfect solution; Ezlang needs to address this issue in the future.

Inconsistent code writing styles may lead to blank segments, which are skipped over directly when handling them.