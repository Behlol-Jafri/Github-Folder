
l1 = [1, 2, 3, 4, 5]
l2 = [4, 5, 6, 7, 8]

l1 = set(l1)
l2 = set(l2)

union = l1.union(l2)
intersection = l1.intersection(l2)

print("Union:", union)
print("Intersection:", intersection)