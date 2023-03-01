function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    console.log(lowerStr.includes('viagra') || lowerStr.includes('xxx'));
}
checkSpam('buy ViAgRA now')