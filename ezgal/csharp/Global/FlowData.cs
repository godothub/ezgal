using Godot;
using System;
using System.Collections.Generic;

public partial class FlowData : Node
{
	public const string exitConst = "@[exit]";

	public const string dialogue = "dialogue";
	public const string fullscreen = "fullscreen";
	public const string options = "options";
	public const string option = "option";
	public const string direction = "direction";
	public const bool IsBuild = false;

	public const string jsonString = null;


	public struct FileData{
		public string file;
		public List<Global.Flow> data;
	}

	public static List<FileData> flowdata = new List<FileData>();

	public struct TechData{
		public string file;
		public string data;
	}
	public static List<TechData> Techdata = new List<TechData>();
}
