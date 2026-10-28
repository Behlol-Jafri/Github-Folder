n = int(input("Enter a number: "))
if n == 1:
    print(f"The {n} is not the prime number.")
elif n > 1:
    for i in range(2, n):
        if (n % i) == 0:
            print(f"The {n} is not the prime number.")
            break
    else:
        print(f"The {n} is the prime number.")
else:
    print(f"The {n} is not the prime number.")
