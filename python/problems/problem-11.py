principle = float(input("Enter the principal amount: "))
rate = float(input("Enter the annual interest rate (in %): "))
time = float(input("Enter the time in years: "))

simple_interest = (principle * rate * time) / 100
print("Simple Interest:", simple_interest)