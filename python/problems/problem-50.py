
num = int(input("Enter the numerator: "))
den = int(input("Enter the denominator: "))

gcd = 1
for i in range(1, min(num, den) + 1):
    if num % i == 0 and den % i == 0:
        gcd = i

num_simplified = num // gcd
den_simplified = den // gcd

print(f"The simplified fraction is: {num_simplified}/{den_simplified}")