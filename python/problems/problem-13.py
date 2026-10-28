n = int(input("Enter a number:"))
if n % 3 == 0 and n % 6 == 0:
    print("The number is divisible by both 3 and 6.")
elif n % 3 == 0:
    print("The number is divisible by 3 but not by 6.")
else:
    print("The number is not divisible by both 3 and 6.")
