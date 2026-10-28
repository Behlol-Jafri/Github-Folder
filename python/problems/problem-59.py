
str = input("Enter a string: ")
words = str.split()
for i in range(len(words)):
    words[i] = words[i][0].upper() + words[i][1:].lower()
title_case_str = ' '.join(words)
print(title_case_str)