//модальное окно
const orderDialog = document.getElementById('order-dialog');

//все кнопки заказа в карточках
const orderButtons = document.querySelectorAll('.product-card__button');

//кнопка закрытия
const closeDialogButton = document.getElementById('close-order-dialog');

// скрытое поле
const selectedProductInput = document.getElementById('selected-product');


orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    
    const productName = button.dataset.product;

    
    selectedProductInput.value = productName;

    
    orderDialog.showModal();
  });
});

// Закрыть
closeDialogButton.addEventListener('click', () => {
  orderDialog.close();
});

// Форма заявки
const orderForm = document.getElementById('order-form');

//успешная отправка
const successMessage = document.getElementById('success-message');

//отправка формы
orderForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formElements = Array.from(orderForm.elements);

  formElements.forEach((element) => {
    if (element.willValidate) {
      element.removeAttribute('aria-invalid');
    }
  });

  if (!orderForm.checkValidity()) {
    formElements.forEach((element) => {
      if (element.willValidate && !element.checkValidity()) {
        element.setAttribute('aria-invalid', 'true');
      }
    });

    //стандартные сообщения браузера
    orderForm.reportValidity();
    return;
  }

  // сообщение об успешной отправке
  successMessage.hidden = false;

  orderForm.reset();

  orderDialog.close();
});


