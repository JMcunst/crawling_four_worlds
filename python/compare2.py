from deepdiff import DeepDiff
import json

def compare_json(file1, file2):
    with open(file1, 'r') as f1, open(file2, 'r') as f2:
        data1 = json.load(f1)
        data2 = json.load(f2)

    differences = DeepDiff(data1, data2)
    if differences:
        # 차이점 출력
        print(differences)

        # 차이점을 새로운 JSON 파일로 저장
        with open("diff.json", 'w') as diff_file:
            json.dump(differences, diff_file, indent=4, ensure_ascii=False)

        print("두 파일의 차이를 diff.json 파일로 저장하였습니다.")
    else:
        print("두 파일의 내용이 동일합니다.")

# 비교할 JSON 파일 경로
file1 = 'reversed_output1.json'
file2 = 'reversed_output2.json'

# JSON 파일 비교 및 차이점 저장
compare_json(file1, file2)
