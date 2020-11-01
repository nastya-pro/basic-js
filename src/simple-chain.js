const chainMaker = {
    chain:[],
    getLength() {
        return this.chain.length
    },
    addLink(value) {
        this.chain.push(value);
        return this
    },
    removeLink(position) {
        position--;
        if(position>=0 && position<this.getLength()){
            this.chain=this.chain.filter((el, i)=>i !== position);
            return this
        }else{
            this.chain=[];
            throw Error
        }
    },
    reverseChain() {
        this.chain=this.chain.reverse();
        return this
    },
    finishChain() {
        let result = this.chain.map(el=>`( ${el} )`).join("~~");
        this.chain=[];
        return result
    }
};

module.exports = chainMaker;
