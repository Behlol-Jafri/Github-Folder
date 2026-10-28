song = input("Enter song lyrics: ")

words = song.lower().split()

word_count = {}

for word in words:
    if word in word_count:
        word_count[word] = word_count[word] + 1
    else:
        word_count[word] = 1

most_used_word = max(word_count, key=word_count.get)

print("Most used word =", most_used_word)
print("Used", word_count[most_used_word], "times")