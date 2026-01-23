# Syntax Design

To facilitate scriptwriting and performance design, the grammar design has separated the script and performance to a certain extent. The following provides explanations for the script and performance respectively:

## Script

### Dialogue

Lines can be displayed using `dialogue`:

```
[dialogue]
This is the display method using a dialogue box.
Girl: This is how the girl speaks in a dialogue box.
```

### Fullscreen

It can also be displayed using `fullscreen`:

```
[fullscreen]
Fullscreen supports displaying multiple paragraphs of content,
but does not support character speech.
In fullscreen mode, up to 12 lines can be spoken simultaneously.
[fullscreen]
We can also redefine it to switch the number of lines in advance.
```

### Options

The display method for `options` is the same as that for `dialogue` and `fullscreen`, but it stores the content of the options and allows the player to make a choice:

```
[options]
{script:test3.txt} Jump to Test 3
{jump:loop1} Jump to Loop 1
Continue
[fullscreen]
After selecting fullscreen, you can see this sentence.
```

### Technical Terms

Lines support BBCode syntax, and we can define some technical terms using the following method:

```
[fullscreen]
This is a [url=technical term]technical term[/url].
```

Selecting a technical term will display a dictionary box. We can define a `technical term.txt` file in the dictionary folder to implement the function of setting technical terms.

## Performance

### Jump

When there is a need to trace back to a specific position in the script, a **marked position** for jumping can be set using `@`, as shown below:

```
@loop1
This is an infinite loop.
{jump:loop1}
```

When jumping, it will return to the position of `@loop1`. Apart from setting **marked positions**, all other performance methods are managed using curly braces, as shown below:

```
{bg:cover.png} # Switch to the cover
{girl:normal.png-1200x650-1.1} Girl: Hello everyone # Set the character illustration
{script:test2.txt, jump:loop1} # Jump to the loop1 position in the test2 script
```

### Performance Parameters

The parameters inside the curly braces are defined as follows:

| Parameter   | Description                                                                                 | Example                      |
| ----------- | ------------------------------------------------------------------------------------------- | ---------------------------- |
| bg          | Set the background. The background should be in the `./image/background/` folder.                                     | bg:cover.png                 |
| script      | Jump to the set script position.                                                             | script:test3.txt             |
| jump        | Jump to the set **marked position**.                                                         | jump:loop1                   |
| ef          | Intended to be used for setting special effects, but not yet implemented.                     |                              |
| [default]   | Used to set the character illustration. [default] should have a corresponding name in the `./image/` folder, with the defined name format as `[image name]-[image height]x[image width]-[scale ratio]`. | girl:normal.png-1200x650-1.1 |