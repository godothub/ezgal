using Godot;
using System;

public partial class Dictionary : Control
{

    public RichTextLabel text;
    public Dictionary self;

	public override void _Ready()
	{
		text = GetNode<RichTextLabel>("text");
		_hide();
	}

	// 隐藏对话框
	public void _hide()
	{
        text.Text = "";
		Hide();
	}

	// 显示对话框
	public void _show()
	{
		Show();
	}

    public void _on_text_meta_clicked(Variant meta)
    {
        Global.load_dictionary(self, meta);
    }

    public void _on_button_pressed()
    {
        _hide();
    }
}
