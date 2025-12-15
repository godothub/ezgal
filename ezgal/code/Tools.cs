using Godot;
using System;

public partial class Tools : Node
{
	// path = "background/start_texture", sprite = start_texture
	public static void set_texture(Sprite2D sprite, string path)
	{
		var texture = ResourceLoader.Load($"./image/{path}.png") as Texture2D
			?? ResourceLoader.Load($"./image/{path}.jpg") as Texture2D;
		if (texture == null)
		{
			GD.PrintErr($"`./image/` Failed to load `{path}.png` or `{path}.jpg`.");
		}
		else
		{
			sprite.Texture = texture;
			float width = (float)Global.window_width / (float)texture.GetWidth();
			float height = (float)Global.window_height / (float)texture.GetHeight();
			if (height > width)
			{
					sprite.Scale = new Vector2(height, height);
			}
			else
			{
					sprite.Scale = new Vector2(width, width);
			}
		}
	}
}
