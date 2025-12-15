using Godot;
using System;
using System.Collections.Generic;

public partial class Game : Control
{
	// 背景图片
	public static Sprite2D background;
	// 对话框文本
	public static Bottom bottom;
	// 全屏对话文本
	public static Font font;
	// 设置选项节点
	public static Options options;
	// 剧情数据
	public List<Global.Flow> datas;
	// 立绘状态控制字典
	private static Dictionary<string, Sprite2D> DicNode = new Dictionary<string, Sprite2D>();


	public override void _Ready()
	{
		background = GetNode<Sprite2D>("background");
		bottom = GetNode<Bottom>("bottom");
		font = GetNode<Font>("font");
		options = GetNode<Options>("options");
		datas = new List<Global.Flow>();
		datas.AddRange(Global.datas);
		run();
	}

	// 设置背景图片
	public static void _background(Sprite2D background, string name)
	{
		Texture2D image = (Texture2D)ResourceLoader.Load($"res://image/background/{name}");
		background.Texture = image;
		float width = (float)Global.window_width / (float)image.GetWidth();
		float height = (float)Global.window_height / (float)image.GetHeight();
		if (height > width)
		{
			background.Scale = new Vector2(height, height);
		}
		else
		{
			background.Scale = new Vector2(width, width);
		}
	}

	public static void end()
	{
		GD.Print("=====结束=====");
	}

	// 获取字段进行统一管理
	public void run()
	{
		bool is_first = true;
		if (datas.Count <= Global.intptr){
			end();
			return;
		}

		Global.Flow data = datas[Global.intptr];

		// 空数据直接跳过
		while (Object.Equals(data, new Global.Flow()))
		{
			Global.intptr++;
			if  (datas.Count <= Global.intptr){
				end();
				return;
			}
			data = datas[Global.intptr];
		}

		if (data.type == null)
		{
			data.type = Global.typeptr;
            datas[Global.intptr] = data;
			is_first = false;
		}

		// 类型判断与处理
		switch (data.type) {
			case "背景" or "Background":
				// 设置背景图片
				_background(background, data.text);
				Global.intptr++;
				run();
				break;
			case "对话框":
				// 对话框更新状态
				Global.typeptr = "对话框";
				if (is_first)
				{
					font._hide();
					bottom._show();
				}
				bottom.set_text(data.text);
				if (data.name != null)
				{
					bottom.set_name(data.name);
				}
				if (data.anima.type != null)
				{
					create_anima(data.anima);
				}
				Global.intptr++;
				break;
			case "全屏":
				// 全屏更新状态
				Global.typeptr = "全屏";
				if (is_first)
				{
					font._show();
					bottom._hide();
					font.set_text(data.text, false);
				}
				else
				{
					font.set_text(data.text, true);
				}
				if (data.anima.type != null)
				{
					create_anima(data.anima);
				}
				Global.intptr++;
				break;
			case "选项":
				font._hide();
				bottom._hide();
				options.set_options(data.option);
				break;
			case "选择":
				Global.intptr++;
				break;
			default:
				GD.Print("非预期");
				Global.intptr++;
				break;
		}

		// 跳转
		if (data.script != null || data.jump != null)
		{
			new_script(data.script, data.jump, data.type);
		}
	}

	// 跳转到新的脚本
	public void new_script(string file_name, string jump_ptr, string type)
	{
		if (file_name == null)
		{
			file_name = Global.read_file_name;
		}

		GD.Print(file_name);
		datas = datas.GetRange(0, Global.intptr);
		List<Global.Flow> new_datas = Global.run_file(file_name);

		if (jump_ptr == null)
		{
			datas.AddRange(new_datas);
		}
		else
		{
			string data_type = null;
			List<string> type_list = new List<string> { "全屏", "对话框" };
			for (int i = 0; i < new_datas.Count; i++)
			{
				if (type_list.Contains(new_datas[i].type))
				{
					data_type = new_datas[i].type;
					GD.Print($"data_type is {data_type}");
				}
				int new_datas_count = new_datas.Count;
				if (new_datas[i].jptr == jump_ptr)
				{
					new_datas = new_datas.GetRange(i, new_datas_count - i);
					Global.Flow new_data = new_datas[0];
					GD.Print($"data_type is {data_type}");
					new_data.type = data_type;
					new_datas[0] = new_data;
					Global.print(new_datas[0]);
					datas.AddRange(new_datas);
					break;
				}
			}
		}
		if (type == "选择")
		{
			run();
		}
	}

	// 创建立绘节点
	public void create_anima(Global.Anima anima)
	{
		//DicNode.Add("Node1Key", node1);
		Sprite2D node;
		if (DicNode.TryGetValue("Node1Key", out node))
        {
			node.Texture = (Texture2D)ResourceLoader.Load($"res://image/{anima.type}/{anima.name}");
            node.Position = anima.position;
			node.Scale = new Vector2(anima.scale, anima.scale);
        }
        else
        {
			PackedScene scene = (PackedScene)ResourceLoader.Load("res://scene/anima.tscn");
			node = (Sprite2D)scene.Instantiate();
			AddChild(node);
			//node.Texture = (Texture2D)ResourceLoader.Load($"./image/{anima.type}/{anima.name}");
            string imagePath = $"res://image/{anima.type}/{anima.name}";
			Texture2D texture = (Texture2D)ResourceLoader.Load(imagePath);

			if (texture != null)
			{
			    node.Texture = texture;
			}
			else
			{
			    GD.PrintErr($"未找到图片: {imagePath}");
			}
			node.Position = anima.position;
			node.Scale = new Vector2(anima.scale, anima.scale);
			DicNode.Add(anima.type, node);
        }

	}

	// 对话框信号
	public void _on_bottom_start_game()
	{
		run();
	}

	// 全屏信号
	public void _on_font_start_game()
	{
		run();
	}
}
