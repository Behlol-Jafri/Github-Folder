# count = 0
# for a in range(1, 5):
#     for b in range(1, 5):
#         for c in range(1, 5):
#             for d in range(1, 5):
#                 if a != b and a != c and a != d and b != c and b != d and c != d:
#                     count += 1
#                     print(a, b, c, d)


# print("Total combinations:", count)



from itertools import permutations

n = [1, 2, 3, 4]
count = 0
for p in permutations(n):
    count += 1
    print(p)
print("Total permutations:", count)