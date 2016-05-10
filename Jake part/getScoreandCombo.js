while (N == 0) {
    if (cell[i + sign].getTotalGem == 0) {
        if (cel[i + ((sign) * 2)].getTotalGem() == 0) {
            turn = 1;
        } else {
            totalScore = cell[i + ((sign) * 2)].getTotalGem();
            i = i + ((sign) * 2);
        }
    }
}