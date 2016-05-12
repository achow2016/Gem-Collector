function move(totalGem, totalBigGem) {
	var Index = chosenCell;
	var direction;
	var sign;
	var I;
	var N;
	var i;
	var n;
	var score = 0;
	var turn;
		if (1 < Index && Index < 5) {
		direction = chosenArrow;
		if (direction == 0) {
			while (turn == 0) {
				sign = 1;
				I = index;
				N = cells[i].getTotalGem();
				n = N;
				i = I;
				cells[i].reset();
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
						if (cells[i + 2 * sign].getTotalGem() != 0) {
							score = score + cells[i + 2 * sign].getTotalGem();
							i = i + 2 * sign;
						} else {
							turn = 1;
						}
					}
					trun = 1;
				} else {
					if ((sign == 1 && i == 11 || i == 5)|| (sign == -1 && i == 1 || i == 7)) {
						turn = 1;
					} else {
						N = cells[i + sign].getTotalGem();
						I = i + sign;
					}
				}
			}
			if (score == 50) {
				//display winning screen
			} else {
				turn == 1;
			}
		}
}