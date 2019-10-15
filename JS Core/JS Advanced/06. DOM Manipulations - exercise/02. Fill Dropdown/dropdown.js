function addItem() {
    let itemTextElement = $('#newItemText');
    let itemValueElement = $('#newItemValue');

    let optionElement = document.createElement('option');
    optionElement.textContent = itemTextElement.val();
    optionElement.value = itemValueElement.val();

    let menu = $('#menu');
    menu.append(optionElement);

    itemTextElement.val('');
    itemValueElement.val('');
}
