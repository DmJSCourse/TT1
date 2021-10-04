const chooseDistance = (t, k, ls) => {
    if (k > ls.length || Math.min(...ls) > t) {
      return null;
    }

    let bestDistance = 0;
    let changedList = [...ls];

    for (let iteration = 0; iteration < k; iteration++){
      let maximumAvailable = Math.max(
          ...changedList.filter(entry => entry + bestDistance <= t)
        );
      
      if (maximumAvailable >= 0) {
        changedList.splice(changedList.indexOf(maximumAvailable), 1);
        bestDistance += maximumAvailable;
      } else {
        return null;
      }
    }

    return bestDistance;
};