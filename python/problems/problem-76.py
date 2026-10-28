
A = [
    [1, 2, 3],
    [4, 5, 6]
]

B = [
    [7, 8],
    [9, 10],
    [11, 12]
]

rows_A = len(A)
cols_A = len(A[0])

rows_B = len(B)
cols_B = len(B[0])

if cols_A != rows_B:
    print("Matrix multiplication is not possible")

else:
    result = [[0 for j in range(cols_B)] for i in range(rows_A)]

    for i in range(rows_A):
        for j in range(cols_B):
            for k in range(cols_A):
                result[i][j] = result[i][j] + A[i][k] * B[k][j]

    print("Result:")

    for row in result:
        print(row)