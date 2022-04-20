# import importlib
#
#
# folder = 'data_types'
# theme = 'data_types'
# card = '2'
# test_number = '1'
# test_file = importlib.import_module(f"joo_tips_app.practical_tests.python.{folder}.{theme}_{card}_{test_number}")
#
# print('=======================\n')
# print(test_file.question)
# print(test_file.var_u_screen)
# print(test_file.var_r)
# print(test_file.var_w)
import datetime

a = ['146.120.175.253', 'Radcha', 'Ukraine', '253.175.120.146.in-addr.arpa',
     datetime.datetime(2022, 4, 20, 14, 20, 10, 274353), 'Python', 'EN',
     datetime.datetime(2022, 4, 20, 14, 20, 15, 587229), 'zero', '2,5', '5',
     datetime.datetime(2022, 4, 20, 14, 20, 18, 221798),
     datetime.datetime(2022, 4, 20, 14, 20, 27, 84393), 1, 1,
     datetime.datetime(2022, 4, 20, 14, 20, 41, 55610), 0, 0, 1, 1, 0, 1,
     datetime.datetime(2022, 4, 20, 14, 21, 14, 594677)]
print(sum(a[13:15]) + sum(a[16:22]))

b = [1, 1, 1, 1, 1, 1, 1, 1]
print(b[2:])
