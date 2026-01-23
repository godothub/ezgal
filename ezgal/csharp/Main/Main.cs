using Godot;
using System;

public partial class Main : Node2D
{
	[Export]
	private Sprite2D _startTextureNode;
	[Export]
	private CpuParticles2D _cpuParticles2DNode;
	[Export]
	private AudioStreamPlayer _musicNode;
	[Export]
	private AudioStreamPlayer _soundsNode;
	[Export]
	private BoxContainer _boxContainer;

	[Export]
	private Label _titleNode;
	[Export]
	private Label _subTitleNode;

	public override void _Ready()
	{
		SetJson();
		Tools.SetTexture(_startTextureNode,"start_texture");
		_cpuParticles2DNode.Texture = Tools.LoadImage("./image/particle.png");
		_boxContainer.MouseExited += OnBoxContainerMouseExited;
	}

	private void SetJson()
	{
		string titleText = ToolsInit.FindInitString("start", "title", "text");
		Color titleColor = ToolsInit.FindInitColor("start", "title", "font_color");
		Color titleOutlineColor = ToolsInit.FindInitColor("start", "title", "font_outline_color");
		int titleSize = ToolsInit.FindInitInt("start", "title", "font_size");
		_titleNode.Text = titleText;
		_titleNode.AddThemeColorOverride("font_color", titleColor);
		_titleNode.AddThemeColorOverride("font_outline_color", titleOutlineColor);
		_titleNode.AddThemeFontSizeOverride("font_size", titleSize);
		string subTitleText = ToolsInit.FindInitString("start", "subtitle", "text");
		Color subTitleColor = ToolsInit.FindInitColor("start", "subtitle", "font_color");
		Color subTitleOutlineColor = ToolsInit.FindInitColor("start", "subtitle", "font_outline_color");
		int subTitleSize = ToolsInit.FindInitInt("start", "subtitle", "font_size");
		_subTitleNode.Text = subTitleText;
		_subTitleNode.AddThemeColorOverride("font_color", subTitleColor);
		_subTitleNode.AddThemeColorOverride("font_outline_color", subTitleOutlineColor);
		_subTitleNode.AddThemeFontSizeOverride("font_size", subTitleSize);
		string musicPath = ToolsInit.FindInitString("start", "music", "stream");
		float musicVolumeDb = ToolsInit.FindInitFloat("start", "music", "volume_db");
		_musicNode.Stream = Tools.LoadAudio($"./sounds/{musicPath}");
		_musicNode.VolumeDb = musicVolumeDb;
		_musicNode.Play();
	}
	
	void OnBoxContainerMouseExited()
	{
		_soundsNode.Play();
	}
}
