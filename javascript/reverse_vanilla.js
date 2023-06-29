// JSON 데이터
const jsonData = '[{"subject_href":"...", "subject_innerText":"...", "p_innerText":"..."}, {...}, ...]';

// JSON 파싱
const data = JSON.parse(jsonData);

// 배열의 순서 뒤집기
const reversedData = data.reverse();

// 뒤집힌 배열을 JSON 문자열로 변환
const reversedJson = JSON.stringify(reversedData, null, 4);

console.log('뒤집힌 JSON:', reversedJson);
