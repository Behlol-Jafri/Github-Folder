str = 'hello AIEOU how are you'
str = str.lower()
count = 0
for i in str:
    if i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u':
        count += 1
print(f"The number of vowels in the string is: {count}")