using Godot;
using System;

public partial class MainControl : CanvasLayer
{
	Tween tween;
	[Export]
	private Button _gameStartNode;
	[Export]
	private Button _technicalNode;
	[Export]
	private Button _exitNode;
	[Export(PropertyHint.FilePath)]
	public string GameScenePath { get; set; }


	[Export]
	public ColorRect Menu { get; set; }
	[Export]
	private Label _start;

	public override void _Ready()
	{
		_gameStartNode.Pressed += OnGameStartPressed;
		_technicalNode.Pressed += OnTechnicalPressed;
		_exitNode.Pressed += OnExitPressed;
	}

	private void SetJson()
	{
		Color themeColor = ToolsInit.FindInitColor("main", "theme", "color");
		Menu.Color = themeColor;
		_start.AddThemeColorOverride("font_color", themeColor);
	}

	// 点击任意键开始游戏.
	public override void _Input(InputEvent @event)
	{
		if (@event is InputEventKey keyEvent)
		{
			if (keyEvent.Pressed)
			{
				InputKey();
			}
		}
		else if (@event is InputEventMouseButton mouseButtonEvent)
		{
			if (mouseButtonEvent.Pressed)
			{
				InputKey();
			}
		}
	}

	// 开始游戏的动画.
	private void InputKey()
	{
		tween = GetTree().CreateTween();
		ShaderMaterial shaderMaterial = (ShaderMaterial)_start.Material;
		shaderMaterial.SetShaderParameter("min_alpha", 0.0f);
		shaderMaterial.SetShaderParameter("max_alpha", 0.0f);
		tween.TweenProperty(Menu, "position", new Vector2(0, 0), 0.6f);
		ProcessMode = Node.ProcessModeEnum.Disabled;
		//_start.Hide();
	}

	// 开始游戏
	void OnGameStartPressed()
	{
		Global.intptr = 0;
		GetTree().ChangeSceneToFile(GameScenePath);
	}

	// 读取字典
	void OnTechnicalPressed()
	{
		/*
		Global.intptr = 0;
		GetTree().ChangeSceneToFile("res://scene/game.tscn");
		*/
	}

	// 退出游戏
	void OnExitPressed()
	{
		GetTree().Quit();
	}


}
