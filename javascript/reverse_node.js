const fs = require('fs');

// JSON 파일 경로
const file_path = 'output2.json';

// JSON 파일 읽기
const json_data = fs.readFileSync(file_path, 'utf-8');

// JSON 파싱
const data = JSON.parse(json_data);

// 배열의 순서 뒤집기
const reversed_data = data.reverse();

// 뒤집힌 배열을 JSON으로 변환
const reversed_json = JSON.stringify(reversed_data, null, 4);

// 뒤집힌 JSON을 파일로 저장
const reversed_file_path = 'reversed_output2.json';
fs.writeFileSync(reversed_file_path, reversed_json, 'utf-8');

console.log('뒤집힌 JSON을 파일로 저장하였습니다.');
console.log('파일 경로:', reversed_file_path);
