from models import Hoverboard, Rocket

def main():
    # Creating a list of different objects
    garage = [
        Hoverboard("Fly-Board Pro", 50, 2),
        Rocket("Starship-X", 28000, "Mars")
    ]

    print("Test")
    for unit in garage:
        print(unit)
        print(unit.move())

        if isinstance(unit, Rocket):
            print(unit.launch())
        print("-" * 20)


if __name__ == "__main__":
    main()