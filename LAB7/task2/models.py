class Vehicle:
    def __init__(self, model, speed, fuel):
        self.model = model
        self.speed = speed
        self.fuel = fuel

    def move(self):
        return f"The {self.model} drives at {self.speed} km/h."

    def __str__(self):
        return f"Vehicle: {self.model} | Fuel: {self.fuel}"


class Hoverboard(Vehicle):
    def __init__(self, model, speed, altitude):
        # super() inherits name, speed, and sets a default fuel type
        super().__init__(model, speed, "Electricity")
        self.altitude = altitude

    def move(self):
        return f"The {self.model} hovers {self.altitude}m above the ground."


class Rocket(Vehicle):
    def __init__(self, model, speed, destination):
        super().__init__(model, speed, "Rocket Fuel")
        self.destination = destination

    def launch(self):
        return f"The {self.model} is launching towards {self.destination}!"