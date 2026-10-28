# def greet(name):
#     print("Hello, " + name + "!")
#     print("Welcome to the program.")
# greet("Behlol")

# def add(a, b):
#     return a + b

# def subtract(a, b):
#     return a - b

# def multiply(a, b):
#     return a * b    

# def divide(a, b):
#     if b != 0:
#         return a / b
#     else:
#         return "Error: Division by zero is not allowed."

# print("Addition: " + str(add(10, 5)))
# print("Subtraction: " + str(subtract(10, 5)))
# print("Multiplication: " + str(multiply(10, 5)))
# print("Division: " + str(divide(10, 5)))
# print("Division by zero: " + str(divide(10, 0)))

# def check_even_odd(number):
#     if number % 2 == 0:
#         return "This number is even, " + str(number) + "."
#     else:
#         return "This number is odd, " + str(number) + "."

# print(check_even_odd(10))
# print(check_even_odd(7))


# def calculate_average(numbers):
#     if len(numbers) == 0:
#         return 0
#     return sum(numbers) / len(numbers)

# print(calculate_average([1, 2, 3, 4, 5]))

# def student_results(name, marks):
#     if marks >= 90:
#         print(name + ": A+")
#     elif marks >= 80:
#         print(name + ": A")
#     elif marks >= 70:
#         print(name + ": B")
#     elif marks >= 60:
#         print(name + ": C")
#     elif marks >= 50:
#         print(name + ": D")
#     else:
#         print(name + ": F")

# student_results("Behlol", 85)
# student_results("Alice", 95)
# student_results("Bob", 75)
# student_results("Charlie", 45)
# student_results("David", 60)


def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))