document.getElementById('calculate').addEventListener('click', function() {
    let width = parseInt(document.getElementById('width').value);
    let height = parseInt(document.getElementById('height').value);

    let gcdValue = gcd(width, height);
    
    let simplifiedWidth = width / gcdValue;
    let simplifiedHeight = height / gcdValue;

    document.getElementById('result').textContent = `${simplifiedWidth}:${simplifiedHeight}`;
});

function gcd(a, b) {
    while(b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

