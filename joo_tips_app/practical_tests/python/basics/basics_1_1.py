# _______________________________________________________________
# TODO When filling out the database, take the unique identifiers from the database and enter the following:
#  UUID of the module in the database is identical to the file name of the module on the server:
#  UUID topics:
#  UUID cards:
# ___________________________________________________________________
# Generative sets and their random variables
# Set var1 - "Variable name", var1 > f1
# Set var2 - "Variable name", var2 > f2
# Set var3 - "Mathematical operators", var3 > f3
# Set var4 - "Variable value", var4 > f4
# Set var5 - "Variable value", var5 > f5
# Set var6 - "Slot numbers", var6 > f6_1, f6_2
# Set var7 - "Data types", var7 > f7
# Set var8 - "Paws or voids", var8 > f8
# Set var9 - "Paws or voids", var9 > f9

# Variables that will pass values to the dynamic table
# var_q = variable that stores the text of the question
# var_u = variable that stores the condition (code)
# var_r = variable that keeps the correct answer
# var_w = variable that stores incorrect response
# f6_1 = correct answer slot number
# f6_2 = incorrect answer slot number

import random


var1 = ["a", "b", "c"]
var2 = ["d", "e", "f"]
var3 = ["+", "-"]
var4 = [7, 8, 9, 10, 11, 12, "aaaa", "bbbb", "cccc", "dddd"]
var5 = [1, 2, 3, 4, 5, 6, "eeee", "ffff", "gggg"]
var6 = [1, 2]
var7 = ["str", "int"]
var8 = ['"', ""]
var9 = ['"', ""]


f1 = random.choice(var1)
f2 = random.choice(var2)
f3 = random.choice(var3)
f4 = random.choice(var4)
f5 = random.choice(var5)
f6 = random.choice(var6)
f6_1 = random.choice(var6)
f6_2 = var6[1] if f6_1 == var6[0] else var6[0]
f7 = random.choice(var7)
f8 = var8[0] if type(f4) == str else var8[1]
f9 = var9[0] if type(f5) == str else var9[1]

question = "What is the result of the code in the example?"
question_ua = "Який результат коду в прикладі?"

var_u_screen = f"{f1} = {f8}{f4}{f8}\n" \
               f"{f2} = {f9}{f5}{f9}\n" \
               f"print({f7}({f1}) {f3} {f7}({f2}))"

var_u = f"{f1} = {f8}{f4}{f8}\n" \
        f"{f2} = {f9}{f5}{f9}\nvar_r = {f7}({f1}) {f3} {f7}({f2})\n" \
        f"print(var_r)"

print(question)
print(var_u_screen)
try:
    exec(var_u)
except:
    print("Unworkable code.")
    var_r = "Error"
    var_w = str(f4) + str(f5)
else:
    print("Workable code. Result:", var_r)
    var_w = str(f4) + str(f5)
finally:
    print("Slot for right answer:", f6_1)
    print("Right answer:", var_r)
    print("Slot for wrong answer:", f6_2)
    print("Wrong answer:", var_w)


# Methodology:
# 1. Write out how the code should look in the browser.
# 2. The same code in a separate variable is supplemented by a variable (in this case var_r), which contains the correct answer.
# 3. Through exec () and the try ... except (1) structure, we reassign a variable that contains the correct answer.
# 4. In the same place we assign erroneous value to a variable which contains the wrong decision (in this case var_w).
# 5. Comment all print () so that nothing is displayed in the console.
# _______________________________________________________________
# TODO: Pass variable values to PostgreSQL database via psycopg3 module (>>> import psycopg3)
# Technical documentation for the psycopg2 module - https://www.psycopg.org/psycopg3/docs/
# 1. VARIABLE THAT TRANSMITS THE QUESTION OF THE TEST - question
# 2. THE VARIABLE THAT TRANSMITS THE TEST CONDITION IT`S CODE - var_u_screen
# 3. VARIABLE TRANSMITS THE RIGHT DECISION - var_error
# 4. THE VARIABLE TRANSMITS THE SLOT OF THE RIGHT DECISION - f6_1
# 5. VARIABLE TRANSMITS THE WRONG DECISION - var_w
# 6. VARIABLE TRANSMITS THE SLOT OF THE WRONG DECISION - f6_2
# _______________________________________________________________
