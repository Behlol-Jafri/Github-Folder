num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))

if num1 > num2:
    smaller = num2
else:
    smaller = num1

for i in range(smaller ,0,-1):
    if (num1 % i == 0) and (num2 % i == 0):
        print("The HCF of", num1, "and", num2, "is", i)
        break