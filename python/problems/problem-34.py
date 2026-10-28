n = 2
count = 25

while True:
    for i in range(2, n):
        if (n % i) == 0:
            break
    else:
        count -= 1
        print(n)
        if count == 0:
            break
    n += 1