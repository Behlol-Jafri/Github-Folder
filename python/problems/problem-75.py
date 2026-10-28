
rows_a = int(input("Enter the number of rows in the first matrix: "))
cols_a = int(input("Enter the number of columns in the first matrix: "))

rows_b = int(input("Enter the number of rows in the second matrix: "))
cols_b = int(input("Enter the number of columns in the second matrix: "))

if cols_a == rows_b:
    print("Matrix multiplication is possible.")
else:
    print("Matrix multiplication is not possible.")
