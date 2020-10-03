exports.min = array => (array || []).reduce((acc, current) => current < acc ? current : acc, 0);

exports.max = array => (array || []).reduce((acc, current) => current > acc ? current : acc, 0);

exports.avg = array => (array || []).reduce((acc, current) => acc + current, 0) / ((array || []).length || 1);
