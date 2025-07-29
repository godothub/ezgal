using Godot;
using System;

public partial class Start : Control
{
    Tween tween;
    Node2D control;

	// 点击任意键开始游戏.
	public override void _Input(InputEvent @event)
    {
        if (@event is InputEventKey keyEvent)
        {
            if (keyEvent.Pressed)
            {
                input_key();
            }
        }
        else if (@event is InputEventMouseButton mouseButtonEvent)
        {
            if (mouseButtonEvent.Pressed)
            {
                input_key();
            }
        }
    }

	// 开始游戏的动画.
    void input_key()
    {
        //Hide();
        control = GetNode<Node2D>("../control");
        tween = GetTree().CreateTween();
        tween.TweenProperty(control, "position", new Vector2(0, 0), 0.6f);
        ProcessMode = Node.ProcessModeEnum.Disabled;
    }
}
