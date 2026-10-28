 

P = float(input("Enter the principal amount: "))
r = float(input("Enter the rate of interest: "))
t = float(input("Enter the time in years: "))
A = P * (1 + r / 100) ** t
CI = A - P
print("The compound interest is:", CI)