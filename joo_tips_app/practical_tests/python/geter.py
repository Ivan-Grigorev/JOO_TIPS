import importlib


folder = 'data_types'
theme = 'data_types'
card = '2'
test_number = '1'
test_file = importlib.import_module(f"joo_tips_app.practical_tests.python.{folder}.{theme}_{card}_{test_number}")

print('=======================\n')
print(test_file.question)
print(test_file.var_u_screen)
print(test_file.var_r)
print(test_file.var_w)
