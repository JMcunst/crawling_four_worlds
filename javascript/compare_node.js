const fs = require('fs');

function compareJson(file1, file2) {
    const data1 = JSON.parse(fs.readFileSync(file1, 'utf-8'));
    const data2 = JSON.parse(fs.readFileSync(file2, 'utf-8'));

    if (JSON.stringify(data1) === JSON.stringify(data2)) {
        console.log('두 파일의 내용이 동일합니다.');
        return;
    }

    const diff = [];
    for (let i = 0; i < data1.length; i++) {
        if (JSON.stringify(data1[i]) !== JSON.stringify(data2[i])) {
            diff.push({
                file1: data1[i],
                file2: data2[i]
            });
        }
    }

    if (diff.length === 0) {
        console.log('두 파일은 같은 구조를 가지지만 값이 다릅니다.');
        return;
    }

    fs.writeFileSync('diff.json', JSON.stringify(diff, null, 4));

    console.log('두 파일의 차이를 diff.json 파일로 저장하였습니다.');
}

// 비교할 JSON 파일 경로
const file1 = 'reversed_output1.json';
const file2 = 'reversed_output2.json';

// JSON 파일 비교 및 차이점 저장
compareJson(file1, file2);
