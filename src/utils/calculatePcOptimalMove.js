export const calculatePcOptimalMove = (pcMatchesCount, totalMatches, maxAllowedToTake) => {
    if (totalMatches === 1) return 1;

    const targetCountToTake = totalMatches % (maxAllowedToTake + 1);

    if (totalMatches > maxAllowedToTake) {
        return targetCountToTake > 0 
                ? targetCountToTake 
                : Math.floor(Math.random() * maxAllowedToTake) + 1;
    }

    if (pcMatchesCount % 2 === 0) {
        return totalMatches % 2 === 0 ? totalMatches : totalMatches - 1;
    }
    if (pcMatchesCount % 2 === 1) {
        return totalMatches % 2 === 0 ? totalMatches - 1 : totalMatches;
    }
}
