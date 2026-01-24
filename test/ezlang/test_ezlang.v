module ezlang

import tools
import os

pub fn test_ezlang() {
	files := tools.walk_files(ezlang_test_path)
	for file in files {
		//result := os.execute("dotnet run --project ../make --no-build json ${file}")
		result := os.execute("dotnet run --project ../make json ${file}")
		load_data := result.output.trim_space()
		read_data := tools.read_file(file).split("@[exit]")[1].trim_space()
		if load_data != read_data {
			mut flag := '[ezlang] Error: Test file: ${file} exhibits unexpected behavior.\n'
			flag += 'You can run: dotnet run --project make json ./test${file[1..]}\n'
			flag += 'If \033[33mrefactoring\033[0m or \033[33minitialization\033[0m, you can run:\n'
			flag += 'echo -e "$(sed "/@\\[exit\\]/q" ./test${file[1..]})\\n$(dotnet run --project make json ./test${file[1..]})" > ./test${file[1..]}'

			panic(flag)
		}
	}
}
