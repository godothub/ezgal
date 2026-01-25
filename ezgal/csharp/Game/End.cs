using Godot;
using System;

public partial class End : Control
{
	[Export]
	private AudioStreamPlayer _musicNode;
	[Export]
	private Sprite2D _endTextureNode;

	public override void _Ready()
	{
		Tools.SetTexture(_endTextureNode, "end_texture");
          	SetJson();
	}

	private void SetJson()
	{
		string musicPath = ToolsInit.FindInitString("end", "music", "stream");
		float musicVolumeDb = ToolsInit.FindInitFloat("end", "music", "volume_db");
		_musicNode.Stream = Tools.LoadAudio($"./sounds/{musicPath}");
		_musicNode.VolumeDb = musicVolumeDb;
		_musicNode.Play();
	}

	public override void _Process(double delta)
	{
	}
}
