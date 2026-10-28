# months = ("January", "February", "March", "April", "May", "June",)
# print(months[0]) 
# print(months[-1])
# print(len(months))

# numbers = {10, 20, 20, 20, 30, 30, 40, 50}
# print(numbers)

# numbers.add(60)
# print(numbers) 
# numbers.remove(20)
# print(numbers)
# print(numbers)


# students = {
#     "name": "Behlol",
#     "age": 20,
#     "marks": 85,
#     "city": "Peshawar"
# }   

# print("Name: " + students["name"])
# print("Marks: " + str(students["marks"]))
# students["marks"] = 90
# students["grade"] = "A"
# print("students dictionary: " + str(students))

# students = {
#     "name": "Behlol",
#     "marks": 34
# }
# print("Name: " + students["name"])
# if students["marks"] >= 50:
#     print("Pass")
# else:
#     print("Fail")


students = {
    "student1": {
        "name": "Behlol",
        "marks": 34
    },
    "student2": {
        "name": "Ali",
        "marks": 78
    },
    "student3": {
        "name": "Ahmed",
        "marks": 45
    }
}

for student in students:
    print("Name: " + students[student]["name"])
    print("Marks: " + str(students[student]["marks"]))
    if students[student]["marks"] >= 50:
        print("Pass")
    else:
        print("Fail")
    print()