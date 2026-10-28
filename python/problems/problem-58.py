
l = [1,2,3,4,5,3,5,4,4,2,3,2]
new_list = []
for i in l:
    if i not in new_list:
        new_list.append(i)
print(new_list)