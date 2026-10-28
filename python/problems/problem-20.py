salary = float(input("Enter your salary: "))
hra = salary * 10 / 100
da = salary * 5 / 100
pf = salary * 3 / 100

if salary <= 100000:
    print('k')
    tax = 0
elif salary <= 500000:
    tax = 0
elif salary <= 1000000:
    tax = salary * 10 / 100
elif salary <= 2000000:
    tax = salary * 20 / 100
else:
    tax = salary * 30 / 100

total_deduction = hra + da + pf + tax
net_salary = salary - total_deduction

print(f"HRA: {hra}")
print(f"DA: {da}")
print(f"PF: {pf}")
print(f"Tax: {tax}")
print(f"Total deduction: {total_deduction}")
print(f"Net salary: {net_salary}")
