import requests
import json
from bs4 import BeautifulSoup

url = "https://counterside.com/notice/lists/ct/kr/tbl/notice/cate/update"

# GET 요청을 보내고 응답을 받아옵니다.
response = requests.get(url)

# 응답의 텍스트를 파일로 저장합니다.
with open("output.html", "w", encoding="utf-8") as file:
    file.write(response.text)

print("페이지 크롤링이 완료되었습니다. 결과는 output.html 파일에 저장되었습니다.")

# 저장된 HTML 파일을 읽어와서 파싱합니다.
with open("output.html", "r", encoding="utf-8") as file:
    html = file.read()
    soup = BeautifulSoup(html, "html.parser")

# 클래스 이름이 "subject"인 <a> 태그와 "meta"인 <p> 태그를 찾아서 정보를 추출합니다.
subject_links = soup.find_all("a", class_="subject")
p_links = soup.find_all("p", class_="meta")

# subject_links와 p_links의 길이 중 작은 길이를 기준으로 정보를 저장할 리스트를 생성합니다.
min_length = min(len(subject_links), len(p_links))
data = []

# subject_links와 p_links의 정보를 추출하여 데이터 리스트에 저장합니다.
for i in range(min_length):
    subject_link = subject_links[i]
    p_link = p_links[i]

    subject_href = subject_link.get("href")
    subject_text = subject_link.text.strip()

    p_text = p_link.text.strip()

    # 추출한 정보를 딕셔너리로 저장합니다.
    item = {
        "subject_href": subject_href,
        "subject_innerText": subject_text,
        "p_innerText": p_text
    }

    # 딕셔너리를 데이터 리스트에 추가합니다.
    data.append(item)

# 데이터 리스트를 JSON 파일로 저장합니다.
with open("output.json", "w", encoding="utf-8") as file:
    json.dump(data, file, ensure_ascii=False, indent=4)

print("JSON 파일로 저장되었습니다. 결과는 output.json 파일에 저장되었습니다.")
