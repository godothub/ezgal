using Godot;
using System;

public partial class Main : Node2D
{
	AudioStreamPlayer sounds;
	Sprite2D start_texture;
	public override void _Ready()
	{
		start_texture = GetNode<Sprite2D>("start_texture");
		sounds = GetNode<AudioStreamPlayer>("sounds");

		Tools.set_texture(start_texture, "start_texture");
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

	// 读取字典
	void _on_dictionary_pressed()
	{
		/*
		Global.intptr = 0;
		GetTree().ChangeSceneToFile("res://scene/game.tscn");
		*/
	}

	void _on_exit_pressed()
	{
		GetTree().Quit();
	}
}
