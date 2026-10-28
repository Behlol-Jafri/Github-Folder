n1 = int(input("Enter the number:"))
list = list(map(int, str(n1)))
sum = 0
for item in list:
    power_of_4_of_item = item ** 4
    sum = sum + power_of_4_of_item

if sum == n1:
    print(f"{sum} is an narcissistic number.")
else:
    print(f"{sum} is not an narcissistic number.")


