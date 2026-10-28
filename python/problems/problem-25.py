n1 = int(input("Enter a first number: "))
n2 = int(input("Enter a second number: "))

multiplication = 0 

for i in range(1, n2 + 1):
    multiplication = multiplication + n1    

print(f"The multiplication of {n1} and {n2} is {multiplication}")