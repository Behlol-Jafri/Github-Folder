str = 'hello how are you'
str_list = list(str)
count = 0
for i in str_list:
    if i == 'h':
        print(i)
        count += 1

print("The number of occurrences of 'h' in the string is:", count)