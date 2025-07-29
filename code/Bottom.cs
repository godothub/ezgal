using Godot;
using System;

public partial class Bottom : Control
{
	Tween tween;
	ColorRect dialog;
	RichTextLabel text;
	Label name;
	Dictionary dic_node;

	[Signal]
	public delegate void StartGameEventHandler();

	public override void _Ready()
	{
		dic_node = GetNode<Dictionary>("dictionary");
		dialog = GetNode<ColorRect>("dialog");
		text = GetNode<RichTextLabel>("text");
		name = GetNode<Label>("name");
		_hide();
	}

	// 重写隐藏函数
	public void _hide()
	{
		dialog.Size = new Vector2(Global.window_width, 0);
		Hide();
	}

	// 重写显示函数
	public void _show()
	{
		if (dialog.Size == new Vector2(Global.window_width, 0))
		{
			tween = GetTree().CreateTween();
			tween.TweenProperty(dialog, "size", new Vector2(Global.window_width, 292), 0.3f);
		}
		Show();
	}

	// 添加语言文本
	public void set_text(string text_data)
	{ 
		text.Text = $"{text_data} »";
		if (text_data.Contains("[url="))
		{
			text.VisibleRatio = 1.0f;
		}
		else
		{
			text.VisibleRatio = 0.0f;
			tween = GetTree().CreateTween();
			tween.TweenProperty(text, "visible_ratio", 1.0f, text_data.Length * Global.text_speed);
		}
	}

	// 添加角色名
	public void set_name(string name_data)
	{
		name.Text = name_data;
	}

	// 鼠标点击事件(左键)
	public void _on_dialog_gui_input(InputEvent @event)
	{
		if (@event is InputEventMouseButton mouseEvent && mouseEvent.Pressed && mouseEvent.ButtonIndex == MouseButton.Left && !Global.is_query)
		{
			if (!Global.is_query)
			{
				EmitSignal(nameof(StartGame));
			}
		}
	}

	// 鼠标点击事件
	public void _on_text_gui_input(InputEvent @event)
	{
		if (@event is InputEventMouseButton mouseEvent && mouseEvent.Pressed && mouseEvent.ButtonIndex == MouseButton.Left)
		{
			if (Global.is_query)
			{
				GD.Print("neko");
			}
			else
			{
				EmitSignal(nameof(StartGame));
			}
		}
	}

	// 专业词汇文本事件
	public void _on_text_meta_hover_ended(Variant meta)
	{
		Global.is_query = false;
	}

	public void _on_text_meta_hover_started(Variant meta)
	{
		Global.is_query = true;
	}

	// 跳转到专业词汇文本事件
	public void _on_text_meta_clicked(Variant meta)
	{
		Global.load_dictionary(dic_node, meta);
	}
}
