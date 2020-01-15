const fs = require('fs')
const keyutil = require('js-crypto-key-utils')

async function main () {
    const input = fs.readFileSync(0, 'utf-8')
    const jwk = JSON.parse(input)
    const key = new keyutil.Key('jwk', jwk)
    const pem = await key.export('pem')
    console.log(pem)
}

main()