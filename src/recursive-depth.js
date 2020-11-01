module.exports = class DepthCalculator {
    calculateDepth(arr, depth) {
        depth = depth || 1;
        let filter = arr.filter(el => typeof el === typeof []);
        let depths = filter.map(el => this.calculateDepth(el, depth + 1));
        return depths.length === 0 ? depth : Math.max.apply(null, depths);
    }
};