Name - Tyler Nguyen
Date - 1/19/2024
Lab Name - Rock Paper Scissor Lizard Spock
Description - 
This game is Rock Paper Scissor Lizard Spock
The Rules are: 
1. ROCK beats Scissor & Lizard
2. SCISSOR beats Paper & Lizard
3. PAPER beats Rock & Spock
4. SPOCK beats Rock & Scissor
5. LIZARD beats Spock & Paper

There will be 3 different gamemodes:
1. Sudden Death (1 Turn)
2. Best of 5 (First to 3)
3. Best of 7 (First to 5)

There is 2 different game types:
1. 1v1 (Player with a Friend)
2. 1vCPU (Player with a bot)

For the CPU calls I used an API:
1. url (https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption)

At the end, user will be prompted with scores and who won.

Peer Reviewer - Kyle Yok Eyh Ma
Peer Review - 
- Menu button could use a hover effect to let the user know that the button is clickable. 
- Vs CPU: 
    -Dont know what choice the CPU chose. 
    -Between rounds its hard to know what to click and when. 
    -Choice does not reset between rounds. If I choose 'rock' and spam click 'Catch' the game ends.

-Play with friend:
    - Game can be played if Player 2 press catch without choosing an input. 
    - Catch can be pressed by player 1 without choosing a option first. The HTML element tells me its a tie but should say that no choice has been picked.

- Best out of 7 should be First to 4 Points. 
- Could add steps on how to play in Rules, escpecially for Playing against CPU since its a little less intuitive.  