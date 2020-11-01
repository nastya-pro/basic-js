class VigenereCipheringMachine {
    constructor(bool) {
        this.bool = bool === undefined ? true : bool;
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw Error
        }

        let keys = key.toUpperCase().split("");
        keys = keys.map(char => char.charCodeAt(0) - 65);

        const regex = /[A-Z]/;
        let result=[];
        let j = 0;
        for(let i=0;i<message.length;i++){
            if(regex.test(message[i].toUpperCase())) {
                result.push(VigenereCipheringMachine.encryptLetter(message[i], j, keys));
                j++
            } else {
                result.push(message[i])
            }
        }
        if(!this.bool) {
            result = result.reverse()
        }
        return result.join("")
    }

    static encryptLetter(letter, index, keys) {
        let code = letter.toUpperCase().charCodeAt(0) - 65;
        let encryptedCode = (code + keys[index % keys.length]) % 26;
        return String.fromCharCode(encryptedCode + 65)
    }

    decrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw Error
        }

        let keys = key.toUpperCase().split("");
        keys = keys.map(char => char.charCodeAt(0) - 65);

        const regex = /[A-Z]/;
        let result=[];
        let j = 0;
        for(let i=0;i<message.length;i++){
            if(regex.test(message[i].toUpperCase())) {
                result.push(VigenereCipheringMachine.decryptLetter(message[i], j, keys));
                j++
            } else {
                result.push(message[i])
            }
        }
        if(!this.bool) {
            result = result.reverse()
        }
        return result.join("")
    }

    static decryptLetter(letter, index, keys) {
        let code = letter.toUpperCase().charCodeAt(0) - 65;
        let encryptedCode = (code - keys[index % keys.length] + 26) % 26;
        return String.fromCharCode(encryptedCode + 65)
    }
}

module.exports = VigenereCipheringMachine;
