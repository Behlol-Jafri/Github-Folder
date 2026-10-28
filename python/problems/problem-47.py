
n = int(input("Enter the number of terms: "))
x = int(input("Enter the value of x: "))
sum_series = 0
for i in range(1, n + 1):
    sum_series += (x ** i) / i
print("The sum of the series is:", sum_series)