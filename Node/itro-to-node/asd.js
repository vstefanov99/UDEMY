function chess(h,w) {
    let currentLine = ''
    for (let i = 0;i < h;i++) {
        for (let j = 0;j < w;j++) {
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    currentLine += ' '
                } else {
                    currentLine += 'X'
                }
            } else {
                if (j % 2 === 0) {
                    currentLine += 'X'
                } else {
                    currentLine += ' '
                }
            }
            
        }
        console.log(currentLine)
        currentLine = ''
    }
} 
chess(130,130)