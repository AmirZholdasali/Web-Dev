if __name__ == '__main__':
    students = []
    
    n = int(input())
    for _ in range(n):
        name = input()
        grade = float(input())
        students.append([name, grade])
    
    all_grades = []
    for student in students:
        all_grades.append(student[1])
    
    unique_grades = sorted(set(all_grades))
    
    second_grade = unique_grades[1]
    
    result_names = []
    for student in students:
        if student[1] == second_grade:
            result_names.append(student[0])
    
    result_names.sort()
    
    for name in result_names:
        print(name)