function ArrayAnalysis(arr) {
  return {
    average: arr.reduce((c, n) => c + n) / arr.length,
    min: arr.sort((a, b) => a - b)[0],
    max: arr.sort((a, b) => b - a)[0],
    length: arr.length,
  };
}

export default ArrayAnalysis;
