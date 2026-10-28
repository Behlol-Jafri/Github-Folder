
l = [1, 2, 3, 4, 5 ,1]
is_ascending = True
for i in range(len(l) - 1):
    if l[i] > l[i + 1]:
        is_ascending = False
        break
print(is_ascending)
