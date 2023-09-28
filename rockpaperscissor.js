
        let score = JSON.parse(localStorage.getItem('score'));
        if (score === null) {
            score = {
                wins: 0,
                loses: 0,
                Tie: 0
            };
        }
        document.querySelector('.js-scoreview').innerHTML = `Wins:${score.wins}, Losses:${score.loses}, Tie:${score.Tie}`;

        let computerji = ' ';
        function playgame(playermove) {
            const computerji = pickComputerMove();
            let result = ' ';
            if (playermove === 'Rock') {
                if (computerji === 'Rock') {
                    result = 'Tie';
                }
                else if (computerji === 'Paper') {
                    result = 'You loose';
                }
                else if (computerji === 'Scissor') {
                    result = 'You Win!!';
                }

            }

            else if (playermove === 'Paper') {
                if (computerji === 'Rock') {
                    result = 'You Win!!';
                }
                else if (computerji === 'Paper') {
                    result = 'Tie';
                }
                else if (computerji === 'Scissor') {
                    result = 'You loose';
                }

            }
            else if (playermove === 'Scissor') {
                if (computerji === 'Rock') {
                    result = 'You loose';
                }
                else if (computerji === 'Paper') {
                    result = 'You Win!!';
                }
                else if (computerji === 'Scissor') {
                    result = 'Tie';
                }

            }
            if (result === 'You Win!!') {
                score.wins += 1;
            }
            else if (result === 'You loose') {
                score.loses += 1;
            }
            else if (result === 'Tie') {
                score.Tie += 1;
            }
            localStorage.setItem('score', JSON.stringify(score));

            alert(`You choose ${playermove}. Computer picked ${computerji}. ${result}
Wins:${score.wins}, Losses:${score.loses}, Tie:${score.Tie}`);
            document.querySelector('.js-scoreview').innerHTML = (`Wins:${score.wins}, Losses:${score.loses}, Tie:${score.Tie}`);
            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-moves').innerHTML = `You choose ${playermove}.Computer picked ${computerji}`;
        }


        function pickComputerMove() {

            const randomnum = Math.random();

            if (randomnum >= 0 && randomnum < 1 / 3) {
                computerji = 'Rock';
            }
            else if (randomnum >= 1 / 3 && randomnum < 2 / 3) {
                computerji = 'Paper';

            }
            else if (randomnum >= 2 / 3 && randomnum < 1) {
                computerji = 'Scissor';

            }



            return computerji;
        }

    