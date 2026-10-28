# number = int(input("Enter a number: "))
# for i in range(1, number + 1):
#     print(i)

# number = int(input("Enter a number: "))
# for i in range(1, number + 1):
#     if i % 2 == 0:
#         print(str(i) + " is even.")
#     # else:
#     #     print(str(i) + " is odd.")


# number = int(input("Enter a number: "))
# for i in range(1, 11):
#     print(str(number) + " x " + str(i) + " = " + str(number * i))


# sum = 0
# for i in range(1, 101):
#     sum = sum + i
# print("Sum of numbers from 1 to 100: " + str(sum))


# password = "behlol123"
# userInput = input("Enter the password: ")

# while userInput != password:
#     print("Incorrect password. Please try again.")
#     userInput = input("Enter the password: ")

# print("Access granted. Welcome!")

# for i in range(1, 6):
#     for j in range(1, 6):
#         print("*", end=" ")
#     print()

# for i in range(1, 6):
#     for j in range(1, i + 1):
#         print("*", end=" ")
#     print()


# table = int(input("Enter a number for table: "))
# for i in range(1, 11):
#     print(str(table) + " x " + str(i) + " = " + str(table * i))

# n = 3
# for i in range(1, n + 1):
#     print(" " * (n-i), end="")
#     print("*" * (2*i-1), end="")
#     print("")

# n = 3
# for i in range(1, n + 1):
#     print(" " * (i-1), end="")
#     print("*" * (2*(n-i)+1), end="")
#     print("")  


# n = 3
# for i in range(1, n + 1):
#     print("*" * n , end="")
#     print("")


# n = 5
# for i in range(1, n + 1):
#     print("*" * i , end="")
#     print("")

# n = 5
# for i in range(1, n + 1):
#     print("*" * ((n+1)-i) , end="")
#     print("")



# n = 5
# for i in range(1, n + 1):
#     print(" " * (n-i), end="")
#     print("*" * i , end="")
#     print("")

# n = 5
# for i in range(1, n + 1):
#     print(" " * (i-1), end="")
#     print("*" * ((n+1)-i) , end="")
#     print("")

n = 5 
for i in range(10, 0, -1):
    print(f"{n} x {i} = {n * i}")
