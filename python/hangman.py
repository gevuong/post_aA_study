import random

# make a list of words
words = [
    'battery',
    'hungry',
    'broadway',
    'kumquat',
    'lemon',
    'melon',
    'computer',
    'vitamin',
    'pharmacy'
]

while True:
    start = input("Press enter/return to start, or enter q to quit ")
    if start.lower() == 'q':
        break

# pick a random word
    secret_word = random.choice(words) # .choice chooses a random word from an iterable (ie. list or string)
    bad_guesses = []
    good_guesses = []
    total_guesses = 6
    while len(bad_guesses) < total_guesses and len(good_guesses) != len(list(secret_word)):

    # draw spaces
        for letter in secret_word:
            if letter in good_guesses:
                print(letter, end="")
            else:
                print("_", end="")

        print(" ") # line break
        print("{}/{} strikes".format(len(bad_guesses), total_guesses))
        print(" ")

    # take guess
        guess = input("guess a letter: ").lower()
        if len(guess) != 1:
            print("You can only guess a single letter!")
            continue
        elif guess in bad_guesses or guess in good_guesses:
            print("You already guessed that letter!")
            continue
        elif not guess.isalpha(): # returns whether all char in string are alphabetical
            print("You can only guess letters!")
        elif guess in secret_word:
            good_guesses.append(guess)
            if len(good_guesses) == len(secret_word):
                print("You win! The word is {}".format(secret_word))
                break
        else:
            bad_guesses.append(guess)
    else:
        print("You didn't guess the word!. The word is {}".format(secret_word))
