using Godot;
using System;

public partial class End : Control
{
	AudioStreamPlayer music;
	Sprite2D end_texture;
	public override void _Ready()
	{
		end_texture = GetNode<Sprite2D>("end_texture");
		music = GetNode<AudioStreamPlayer>("music");
		
		Tools.set_texture(end_texture, "end_texture");
	}

	public override void _Process(double delta)
	{
	}
}
