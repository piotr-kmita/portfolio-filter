[].forEach.call(document.querySelectorAll('.filter'), function (item) {
  item.addEventListener('click', function (e) {
    let value = item.getAttribute('data-filter');

    let itemsShow = document.querySelectorAll(
      '.item[data-filter="' + value + '"]'
    );
    let itemsHide = document.querySelectorAll(
      '.item:not([data-filter="' + value + '"]'
    );
    let itemsShowAll = document.querySelectorAll('.grid div');

    if (value == 'all') {
      itemsHide = [];
      itemsShowAll.forEach((item) => item.classList.add('show'));
    }

    for (let i = 0; i < itemsShow.length; i++) {
      itemsShow[i].classList.remove('hide');
      itemsShow[i].classList.add('show');
    }

    for (let j = 0; j < itemsHide.length; j++) {
      itemsHide[j].classList.add('hide');
      itemsHide[j].classList.remove('show');
    }

    if (e.target.classList.contains('filter')) {
      let filters = document.querySelectorAll('.filter');
      filters.forEach((item) => item.classList.remove('active'));
      e.target.classList.add('active');
    }
  });
});
