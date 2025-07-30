using Godot;
using System;

public partial class Option : Button
{
    Game game;
    Options options;
    public string set_option;

    public override void _Ready()
	{
        options = GetNode<Options>("../../options");
        game = GetNode<Game>("../../../game");
	}

    void _on_pressed()
    {
        game.datas[Global.intptr + 1] = Global.set_braces_func2(set_option);
        Global.intptr++;
        options._hide();
        game.run();
    }
}
