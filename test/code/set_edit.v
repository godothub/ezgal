module code

import tools

fn set_edit() {
	fd_path := get_code_file('FlowData.cs') or { '' }
	data := tools.read_file(fd_path)
	script_bool := data.contains('List<FileData> flowdata = new List<FileData>();')
	dic_bool := data.contains('List<TechData> Techdata = new List<TechData>();')
	json_bool := data.contains('public const string jsonString = null;')
	if script_bool && dic_bool && json_bool {
		return
	}
	panic('[csharp] FlowData.cs: not set edit.\nYou can run: dotnet run --project make edit zh')
}





