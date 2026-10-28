temperature = int(input("Enter temperature in Celsius:"))
humidity = int(input("Enter humidity percentage:"))
if temperature >= 30 and humidity >= 90:
    print("It's hot and humid.")
elif temperature >= 30 and humidity < 90:
    print("It's hot.")
elif temperature < 30 and humidity >= 90:
    print("It's cool and humid.")
elif temperature < 30 and humidity < 90:
    print("It's cool.")
else:
    print("The weather is pleasant.")