*Превью :*

![previewImg1](https://github.com/KrepostnoyPunk/calculus/blob/main/previewImages/darkTheme.png?raw=true)

![previewImg2](https://github.com/KrepostnoyPunk/calculus/blob/main/previewImages/lightTheme.png?raw=true)

*Интро :*
- Данный проект представляет собой калькулятор поддерживающий основные математические операции с возможностью переключения между светлой и темной темой, последняя выбранная из которых сохраняется в localStorage.

*Технологии* :
- HTML
- SCSS
- JS

*Функционал :*
- операции сложения, вычитания, деления, умножения, деления по остатку, изменение знака числа как для целых чисел, так и для чисел с точкой
- функция полной очистки поля ввода
- функция посимвольного удаления введенных значений
- переключение темы с сохранением последней выбранной в localStorage
- поддержка клавиш `Enter`, `Delete` у функций вычисления и очистки
- выведение сообщения об ошибке при попытке вычислить выражение использующее недопустимые значения

*На будущее :*
- более сложные математические операции(?)
- история вычислений(?)

*Проблемы с которыми столкнулся :*
- не сразу вспомнил что помимо применения темы надо её еще и сохранить самостоятельно, и удивлялся почему она не сохраняется. Решилось использованием `setItem`.
- привязывал сохранение темы не к тому условию и в результате она не сохранялась потому что условия еще не существовало при загрузке страницы.
- сначала писал все стили в JS, но потом все же понял что через CSS классы будет аккуратнее и понятнее, не то чтобы проблема, скорее тугодумство в моменте.

*Улучшил :*
- понимание логики работы и использования localStorage
- понимание логики составления и использования функций
- понимание методов работы со строками и массивами
- понимание обработки ошибок
- понимание логики манипулирования элементами с помощью CSS классов через DOM
- понимание возможностей JS в области манипулирования содержимым элементов и страницы в целом
- понимание важности и необходимости рефакторинга
- понимание логики совместного использования HTML, SCSS, JS
- понимание обработки событий
- понимание применения условий
- понимание верстки и позиционирования элементов
- понимание удобства применения функций как способа логично и аккуратно распределить код

Проект завершен.
