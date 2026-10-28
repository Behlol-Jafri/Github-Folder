# import math
# number = int(input("Enter a number: "))
# print(math.sqrt(number))  

# import random
# randomNumber = random.randint(1, 100)
# print(randomNumber)

# import random
# randomNumber = random.randint(1,6)
# print(randomNumber)

import random
randomNumber = random.randint(1, 100)
userGuess = int(input("Guess a number between 1 and 100: "))
while userGuess != randomNumber:
    if userGuess < randomNumber:
        print("Guess :" + str(userGuess))
        print("random :" + str(randomNumber))
        print("Too low! Try again.")
    else:
        print("Guess :" + str(userGuess))
        print("random :" + str(randomNumber))
        print("Too high! Try again.")
    randomNumber = random.randint(1, 100)
    userGuess = int(input("Guess a number between 1 and 100: "))
print("Guess :" + str(userGuess))
print("random :" + str(randomNumber))
print("Congratulations! You guessed the number correctly.")
