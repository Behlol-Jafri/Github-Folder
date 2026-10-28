sum = 0
count = 0
while True:
    n = int(input("Enter a number: "))
    if n == 0:
        break
    sum += n
    count += 1

avg = sum/count
print("The sum of the numbers is:", sum)
print("The count of the numbers is:", count)
print("The average of the numbers is:", avg)
