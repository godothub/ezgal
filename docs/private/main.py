import os
import sys
import tools

def build(AI_type):
    files = os.listdir("../zh_CN")
    headers = tools.get_headers()
    for file_name in files:
        if file_name[-3:] == ".md":
            if AI_type == "local":
                tools.Build_en_EN(headers, file_name, AI_type)
            else:
                tools.Build_en_EN(headers, file_name, "api")
            print(f"{file_name}: 已翻译")


def main():
    argv = sys.argv
    try:
        AI_type = argv[1]
        build(AI_type)
    except Exception as ex:
        print(ex)

    


main()

