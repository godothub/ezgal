using Godot;
using System;
using System.Collections.Generic;

public partial class FlowData : Node
{

	public struct FileData{
		public string file;
		public List<Global.Flow> data;
	}

	public static List<FileData> flowdata = new List<FileData>();

	public struct DicData{
		public string file;
		public string data;
	}
	public static List<DicData> dicdata = new List<DicData>();
}
