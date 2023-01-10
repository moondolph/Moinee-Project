
    const fs = require('fs');
    const path = require('path');
    const FILE_NAME = "CommentCopy.csv"

    const csvPath = path.join(__dirname, FILE_NAME);
    console.log(csvPath);
    //const { default: markdown } = await import(`src/Data/${csvPath}`); // 이걸로 대체
    const csv = fs.readFileSync(csvPath, "utf-8");
    console.log(JSON.parse(csv));

export const comments = JSON.parse(csv);