WEEK 1 CODE CHALLENGE
DATE: 29/09/2024
BY: JOSEPH KEIYURU

DESCRIPTION:
This repository contains three basic javaScript programs:
  1. Student Grade Generator (Toy Problem)
  2. Speed Detector (Toy Problem)
  3. Net Salary Calculator (Toy Problem)

Each of these programs demonstartes how to build interactive programs in JavaScript by collecting user input
and using logic processing to calculate and display results.

Project Setup:
  
  Installation requirements: Git
       
       1. Clone the repository:
           git clone https://github.com/JKeiyuru/week1codeChallenge
       2. Navigate to the project directory:
           cd week1codeChallenge
       3. Run the program:
           Run the JavaScript code from challenge1.js/challenge2.js/challenge3.js file in the browser                  console

1.Student Grade Generator (Toy Problem)
  
  Description: The Grading Program first allows a user to input the number of subjects necessary, then the user
    inputs the student marks (between 0 and 100) for each of the subjects. The program then calculates the correct 
    grade based on the following rules:
       
       I.  A: Marks > 79
       II. B: Marks between 60 and 79
       III. C: Marks between 49 and 59
       IV.  D: Marks between 40 and 49
       V.   E: Marks < 40   
      The program also calculates the average (mean) grade across all the provided subjects.

   Example Use
        The program will prompt you for the number of subjects, then for each subject’s marks. It will  
        output the grade for each subject and the overall mean grade.
    
2. Speed Detector (Toy Problem)

   Description:
        The SpeedCheck Program calculates whether a driver is speeding. It takes the input of the car's             speed and evaluates the following:

            I. If the speed is less than 70, it prints "Ok".
            II. For every 5 km/h above 70, it gives 1 demerit point.
            III. If the driver receives more than 12 demerit points, it prints "License suspended."

    Example Use

          If the speed input is 80 km/h, the program will output: Points: 2
          If the speed is greater than 130 km/h, it will print: License Suspended

4. Net Salary Calculator

   Description

    The Net Salary Calculator takes as input an individual’s basic salary and benefits. It calculates:

          I. Gross Salary: Basic salary + benefits.
          II. NSSF Deductions: 6% of gross salary.
          III. NHIF Deductions: Based on salary slabs provided by the National Hospital Insurance Fund.
          IV. PAYE (Income Tax): Based on progressive tax rates from the Kenya Revenue Authority (KRA).
          V. Insurance Relief: 15% relief on NHIF contributions.
          VI. Net Salary: Gross salary minus NSSF, NHIF, and PAYE deductions

    Example Use

         If the input is:
            Basic Salary: Ksh 50,000
            Benefits: Ksh 10,000
        The output will include:
            Gross Salary: 60,000
            NSSF Deduction: 3600
            NHIF Deduction: 1300
            PAYE : 11313.349999999
            Net Salary: 43786.65

Technologies used: 
      1. Github
      2. JavaScript

Support and Contact Detaiols:
      github.com/JKeiyuru

License
The The content of this site is licensed under the MIT license
Copyright (c) 2024.

         
