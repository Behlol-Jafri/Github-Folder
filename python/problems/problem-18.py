n1 = int(input("Enter the number:"))
list = list(map(int, str(n1)))
sum = 0
for item in list:
    cube_of_item = item ** 3
    sum = sum + cube_of_item

if sum == n1:
    print(f"{sum} is an Armstrong number.")
else:
    print(f"{sum} is not an Armstrong number.")


