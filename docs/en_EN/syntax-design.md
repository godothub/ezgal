# Grammar Design

[Return to Table of Contents](./index.md)

To make it easier for playwrighting and performance design, grammar design has separated the script from performances. Below is an explanation for both scripts and performances:

## Script

### Dialogue Box

The dialogue can be displayed using `Dialogue Box`:

```
[Dialogue]
This is how dialogue is displayed using a dialogue box.
Miss: This is Miss's speaking style when in a dialogue box.
```

### Full Screen

Also, you can use `Fullscreen` to display:

```
[Fullscreen]
Supports displaying multiple pieces of content but does not support by roles speaking. It supports saying up to 12 lines at once while in full screen mode.
[Fullscreen]
We can also redefine this so that we can switch between line numbers earlier on.
```

### Options

Options are displayed in the same way as dialogue boxes and full screens, however, they will store the contents of options and allow players to choose them:

```
[Options]
{script: test3.txt} Jump to Test3
{jump: loop1}
Continue
[Fullscreen]
After selecting fullscreen, you can see this text.
```

### Professional Terms

Script support BBCode syntax, and we can define some professional terms using the following method:

```
[Fullscreen]
This is a [link=https://www.example.com/professional-term]professional term[/link].
```

Selecting a professional term will open a dictionary frame where you can define the professional term in the `professional_terms.txt` file under the `dictionary` folder, allowing us to set professional terms.

## Performance

### Goto Mark Position

When there is a need to backtrack to a specific scene in the script due to a required transition, you can set the **mark position** using the `@` symbol. For example:

```
@loop1
Here is a dead loop
{jump: loop1}
```

When jumping back, it returns to the position marked with `@loop1`. Apart from setting mark positions, all other performance methods are managed using braces. For example:

```
{background: cover.png} # Switches background
{girl: normal.png - 1200x650 - 1.1} Girl: Hello everyone # Sets portrait
{script: test2.txt, jump: loop1} # Jumps to the loop1 location in the test2 script
```

### Independent Performance

Generally, performances rely on the text