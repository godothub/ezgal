using Godot;
using System;

public partial class Main : Node2D
{
    AudioStreamPlayer sounds;
    public override void _Ready()
    {
        sounds = GetNode<AudioStreamPlayer>("sounds");
    }

    void _on_box_container_mouse_entered()
    {
        sounds.Play();
    }

    void _on_exit_mouse_entered()
    {
        sounds.Play();
    }

    // 开始游戏
    void _on_game_start_pressed()
    {
        Global.intptr = 0;
        GetTree().ChangeSceneToFile("res://scene/game.tscn");
    }

    void _on_exit_pressed()
    {
        GetTree().Quit();
    }
}
