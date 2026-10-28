

n = int(input("Enter the number of terms: "))
sum_series = 0
for i in range(1, n + 1):
    factorial = 1
    for j in range(1, i + 1):
        factorial *= j
    sum_series += i / factorial
print("The sum of the series is:", sum_series)