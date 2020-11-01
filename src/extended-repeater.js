module.exports = function repeater(str, options) {
    options.repeatTimes = options.repeatTimes || 1;
    options.additionRepeatTimes = options.additionRepeatTimes || 1;
    options.additionSeparator = options.additionSeparator || "|";
    options.separator = options.separator || "+";
    options.addition = options.addition !== undefined ? options.addition : "";
    let suf=[];
    for(let i=0;i<options.additionRepeatTimes;i++) {
        suf.push(options.addition + "");
    }
    let suffics=suf.join(options.additionSeparator);
    let strings=[];
    for(let i=0;i<options.repeatTimes;i++) {
        strings.push(str+suffics);
    }
    return strings.join(options.separator)
};
  