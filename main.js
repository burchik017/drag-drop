let doc = document;

const dragAndFrop = () => {
    const dropItem = doc.querySelector('.item.drop');
    const cells = doc.querySelectorAll('.main .items_block'); 

    const dragStart = function () {
        setTimeout(() => {
            this.classList.add('hide');
        }, 260);
    };

    const dragEnd = function () {
        this.classList.remove('hide');
    };

    const dragOver = function (evt) {
        evt.preventDefault();
    };

    const dragEnter = function (evt) {
        evt.preventDefault();
        this.classList.add('hovered');
    };

    const dragLeave = function () {
        this.classList.remove('hovered');
    };

    const dragDrop = function () {
        this.append(dropItem);
        this.classList.remove('hovered');
    };

    cells.forEach((cell) => {
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', dragDrop);
    });
    
    dropItem.addEventListener('dragstart', dragStart);
    dropItem.addEventListener('dragend', dragEnd);
};

dragAndFrop();