# Multiply game

Тестовое задание в HappyNumbers.com 

Написать интерфейс игры которая с помощью инпутов позволяет вводить результат умножения на число N (где N-задается индивидуально), в качестве подсчета подсказки используются схема кубиков.

**Описание интерфейса обязательная часть:**

Пользователь по очереди вводит результат умножения из примеров в инпуты. После ввода правильного значения, значение принимается (становится частью текста), снизу вылетают новые блоки и направляются к схеме за 500ms, появляется новый пример через fadeIn за 500ms. Таким образом пользователь решает все примеры. В случае неправильного значения в инпуте число горит красным 1000ms.

Кнопка активна только если в инпут введено число, у кнопки должны быть прописаны состояния:

- hover - реакция кнопки при наведении мыши цвет #AFEEEE
- right - реакция на правильный ответ, цвет кнопки #228B22
- wrong - реакция на неправильный ответ, цвет кнопки #FA8072
- disabled - кнопка не активна #A9A9A9
