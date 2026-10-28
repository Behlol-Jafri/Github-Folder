
x = float(input("Enter the value of x: "))
sum_series = 0
for i in range(1, 8):
    sum_series += ((-1) ** (i + 1)) * (x ** i) / i
print("The sum of the series is:", sum_series)