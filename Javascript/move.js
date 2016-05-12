function move() {
	Index = chosenCell;
	if (1 < index && index < 5) {
		direction = chosenArrow;
		if (direction == 0) {
			sign = 1;
			I = index;
			N = cells[i].getTotalGem();
			n = N;
			i = I;
			while (n != 0) {
				if ((i == 11 && sign == 1) || i == 0 && sign == (-1)) {
					i = (-6) * sign + 6;
				}
				cells[i + sign].addUp();
				n--;
				i = i + sign;
			}
		}
		

		if (cells[i + sign].getTotalGem() == 0) {
			while (cells[i + sign].getTotalGem() == 0) {
				if (cells[i + 2 * sign].getTotalGem() == 0) {
					scroe = cells[i + 2 * sign].getTotalGem() == 0;
					i = i + 2 * sign;
				}
			}
			trun = 1;
		} else {
			if (checkingBossRoom()) {
				turn = 1;
			} else {
				keepSpreading();
			}
		}

	}
}