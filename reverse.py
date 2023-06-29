import json

# JSON 파일 경로
file_path = 'output2.json'

# JSON 파일 열기
with open(file_path, 'r') as file:
    json_data = file.read()

# JSON 파싱
data = json.loads(json_data)

# 배열의 순서 뒤집기
reversed_data = list(reversed(data))

# 뒤집힌 배열을 JSON으로 변환
reversed_json = json.dumps(reversed_data, indent=4, ensure_ascii=False)

# 뒤집힌 JSON을 파일로 저장
reversed_file_path = 'reversed_output2.json'
with open(reversed_file_path, 'w', encoding='utf-8') as file:
    file.write(reversed_json)

print("뒤집힌 JSON을 파일로 저장하였습니다.")
print("파일 경로:", reversed_file_path)
