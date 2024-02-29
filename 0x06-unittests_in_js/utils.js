const Utils = {
    calculateNumber(type, a, b) {
        const arg1 = Math.round(a);
        const arg2 = Math.round(b);
    
        if (type === 'SUM') {
          return arg1 + arg2;
        }
        if (type === 'SUBTRACT') {
          return arg1 - arg2;
        }
        if (type === 'DIVIDE') {
          if (arg2 === 0) {
            return 'ERROR';
          } else {
            return arg1 / arg2;
          }
        }
    }
}
module.exports = Utils;
