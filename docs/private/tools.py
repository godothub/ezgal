import requests
import json
import comparison_table

Error = "Error"

def get_headers():

    with open("./apikey", "r") as f:
        api_key = f.read().strip()

    return {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {api_key}"
            }


def talk(headers, question):

    url = "https://qianfan.baidubce.com/v2/chat/completions"

    data = {
            "model": "ernie-4.5-turbo-32k",
            "messages": [{"role": "user", "content": question}],
            "temperature": 0.8,
            "top_p": 0.8,
            "penalty_score": 1,
            "stop": [],
            "web_search": {"enable": False, "enable_trace": False}
            }

    try:
        response = requests.post(url, headers=headers, data=json.dumps(data))
        print(response)
        return response.json()["choices"][0]["message"]["content"]
    except Exception as ex:
        print(ex)
        return Error

def talk_local(question):

    with open("./apiurl", "r") as f:
        api_url = f.read().strip()

    try:
        response = requests.post(
                api_url,
                json={"question": question},
                )
        return response.json()["response"]
    except Exception as ex:
        print(ex)
        return Error


def Build_en_EN(headers, file_name, AI_type):
    with open(f"../zh_CN/{file_name}", "r") as f:
        data = f.read().strip()

    question = "请将以下markdown文件翻译为英文，"
    question += "注意格式一致，文件路径不做改动，"
    question += "翻译文件以外不要进行任何说明，"
    question += "其中代码关键词对照关系为"
    question += f"{comparison_table.zh_to_en},"
    question += "文件如下:\n" + data

    answer = ""
    if AI_type == "local":
        answer = talk_local(question)
    else:
        answer = talk(headers, question)

    with open(f"../en_EN/{file_name}", "w") as f:
        if answer != "" and answer != Error:
            f.write(answer)







