using System;
using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;

public class Make
{
	public static void Main(string[] args)
	{
		if (args.Length < 1)
		{
			Write.Help();
			return;
		}
		switch (args[0]) {
			case "build":
				try
				{
					string result = FlowData.set_language(args[1]);
					if (result.StartsWith("Error"))
					{
						Console.WriteLine(result);
						return;
					}
					Write.BuildFile();
					Console.WriteLine(result);
				}
				catch (Exception ex)
				{
					Console.WriteLine($"[False] BuildFile() error: {ex.Message}");
				}
				break;
			case "edit":
				try
				{
					string result = FlowData.set_language(args[1]);
					if (result.StartsWith("Error"))
					{
						Console.WriteLine(result);
						return;
					}
					Write.EditFile();
					Console.WriteLine(result);
				}
				catch (Exception ex)
				{
					Console.WriteLine($"[False] EditFile() error: {ex.Message}");
				}
				break;
			case "json":
				string language = Path.GetFileNameWithoutExtension(args[1]).Split('_')[0];
				try
				{
					string result = FlowData.set_language(language);
					if (result.StartsWith("Error"))
					{
						Console.WriteLine(result);
						return;
					}
					var options = new JsonSerializerOptions
					{
						WriteIndented = true,
						Encoder = System.Text.Encodings.Web.JavaScriptEncoder.UnsafeRelaxedJsonEscaping,
						DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
					};
					string flag = JsonSerializer.Serialize(Ezlang.ReadFile(args[1]), options);
					Console.WriteLine(flag);
				}
				catch (Exception ex)
				{
					Console.WriteLine($"[False] Serialize() error: {ex.Message}");
				}
				break;
		}
	}
}
