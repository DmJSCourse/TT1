const chooseDistance = (t, k, ls) => {
    if (k > ls.length || Math.min(...ls) > t) {
      return null;
    }

    let uniqueRoutes = ls.reduce((last, current) => 
      last.concat(last.map((k) => k.concat(current))), [[]]);

    let validRoutes = uniqueRoutes.filter(combination => 
      combination.length === k
    );

    if (validRoutes.length === 0) {
      return null;
    }

    let distances = validRoutes.map(entry => 
      entry.reduce((acc, curr) => acc + curr)
    );

    return Math.max(...distances.filter(distance => distance < t))
};
