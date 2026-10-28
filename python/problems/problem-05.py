num = int(input("Enter the number:"))
num_list = list(str(num))
num_reverse_list = num_list[::-1]
num_reverse = int(''.join(num_reverse_list))
print(f"The reverse of {num} number is: {num_reverse}")
