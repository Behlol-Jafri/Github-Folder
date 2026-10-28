
dict1 = {'a': 1, 'b': 2, 'c': 3}
max_key = max(dict1, key=dict1.get)
min_key = min(dict1, key=dict1.get)
dict1[max_key], dict1[min_key] = dict1[min_key], dict1[max_key]
print(dict1)
