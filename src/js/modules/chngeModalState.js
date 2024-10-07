import checkNumInputs from './checkNumInputs';

const chngeModalState = (state) => {
   const windowForm = document.querySelectorAll('.balcon_icons_img'),
      windowWidth = document.querySelectorAll('#width'),
      windowHeight = document.querySelectorAll('#height'),
      windowType = document.querySelectorAll('#view_type'),
      windowProfile = document.querySelectorAll('.checkbox');

   checkNumInputs('#width');
   checkNumInputs('#height');

   function bindActionToElems(event, elem, prop) {
      elem.forEach((item, i) => {
         item.addEventListener(event, () => {
            switch (item.nodeName) {
               case 'SPAN':
                  if (!event) {
                     console.log('fuck');
                  } else {
                     state[prop] = i;
                  }
                  break;
               case 'INPUT':
                  if (item.getAttribute('type') === 'checkbox') {
                     i === 0
                        ? (state[prop] = 'Холодное')
                        : (state[prop] = 'Теплое');
                     elem.forEach((box, j) => {
                        box.checked = false;
                        if (i === j) {
                           box.checked = true;
                        }
                     });
                  } else {
                     state[prop] = item.value;
                  }
                  break;
               case 'SELECT':
                  state[prop] = item.value;
                  break;
            }

            console.log(state);
         });
      });
   }

   bindActionToElems('click', windowForm, 'form');
   bindActionToElems('input', windowHeight, 'height');
   bindActionToElems('input', windowWidth, 'width');
   bindActionToElems('change', windowType, 'type');
   bindActionToElems('change', windowProfile, 'profile');
};

export default chngeModalState;

//

// const chngeModalState = (state) => {
//    const windowForm = document.querySelectorAll('.balcon_icons_img'),
//       windowWidth = document.querySelector('#width'),
//       windowHeight = document.querySelector('#height'),
//       calcButton = document.querySelector('.popup_calc_button');

//    // Валідація ширини, висоти та вибору типу вікна
//    const validateInputs = () => {
//       const isWidthFilled = windowWidth.value.trim() !== '';
//       const isHeightFilled = windowHeight.value.trim() !== '';
//       const isWindowTypeSelected = [...windowForm].some((item) =>
//          item.classList.contains('active')
//       ); // Перевірка вибору типу вікна
//       return isWidthFilled && isHeightFilled && isWindowTypeSelected;
//    };

//    // Функція для оновлення стану кнопки
//    const updateCalcButtonState = () => {
//       const isValid = validateInputs();
//       calcButton.disabled = !isValid;
//       calcButton.classList.toggle('disabled', !isValid);
//    };

//    // Відстежуємо зміни у полях "Ширина" та "Висота" для активації кнопки
//    windowWidth.addEventListener('input', updateCalcButtonState);
//    windowHeight.addEventListener('input', updateCalcButtonState);

//    // Відстежуємо вибір типу вікна
//    windowForm.forEach((item, i) => {
//       item.addEventListener('click', () => {
//          windowForm.forEach((span) => span.classList.remove('active')); // Знімаємо активність з усіх
//          item.classList.add('active'); // Додаємо активність до вибраного
//          state.form = i; // Зберігаємо вибір в стані
//          updateCalcButtonState(); // Оновлюємо стан кнопки
//       });
//    });

//    // Ініціалізація стану кнопки при завантаженні
//    updateCalcButtonState();

//    // Інші функції прив’язки дій до елементів форми
//    function bindActionToElems(event, elem, prop) {
//       elem.forEach((item, i) => {
//          item.addEventListener(event, () => {
//             switch (item.nodeName) {
//                case 'SPAN':
//                   state[prop] = i;
//                   break;
//                case 'INPUT':
//                   if (item.getAttribute('type') === 'checkbox') {
//                      i === 0
//                         ? (state[prop] = 'Холодное')
//                         : (state[prop] = 'Теплое');
//                   } else {
//                      state[prop] = item.value;
//                   }
//                   break;
//                case 'SELECT':
//                   state[prop] = item.value;
//                   break;
//             }

//             console.log(state);
//          });
//       });
//    }

//    bindActionToElems('click', windowForm, 'form');
//    bindActionToElems('input', [windowHeight], 'height');
//    bindActionToElems('input', [windowWidth], 'width');
// };

// export default chngeModalState;
