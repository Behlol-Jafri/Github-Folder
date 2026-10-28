while True:
    print("------MENU------")
    print("1. CM to Feet")
    print("2. KM to Miles")
    print("3. USD to INR")
    print("4. Exit")

    choice = int(input("Enter your choice:"))
    if choice == 1:
        while True:
            print("---CM to Feet---")
            print("0. Back to main menu")
            cm = int(input("Enter the value in CM:"))
            if cm == 0:
                break
            feet = cm / 30
            print(f"{cm} cm is equal to {feet} Feet.")
    elif choice == 2:
        while True:
            print("---KM to Miles---")
            print("0. Back to main menu")
            km = int(input("Enter the value in KM:"))
            if km == 0:
                break
            miles = km / 1.609
            print(f"{km} km is equal to {miles} Miles.")
    elif choice == 3:
        while True:
            print("---USD to INR---")
            print("0. Back to main menu")
            usd = int(input("Enter the value in USD:"))
            if usd == 0:
                break
            inr = usd * 75
            print(f"{usd} USD is equal to {inr} INR.")
    elif choice == 4:
        break
    else:
        print("Invalid choice. Please try again.")