// let toysRow = document.querySelector('.toys-container'), //контейнер для блоков с игрушками
//     loadingBlock = document.querySelector('.loader');//контейнер для предзагрузчика
// let  productsModal = document.getElementById('productsModal'),//все модальное окно
//     modalBody = productsModal.querySelector('.modal-body'),//основной текст в  модальном окне
//     modalTitle = productsModal.querySelector('.modal-title'),//заголовок модального окна
//     closeBtns = document.querySelectorAll('[data-dismiss="modal"]');//кнопки для закрытия модального окна вверху и внизу
//
// let loadImg = new Image();// для загрузки картинки-прелоадера
// loadImg.src = 'images/loader.webp';

let xhr = new XMLHttpRequest();//для формирования AJAX-запроса
    xhr.open('GET','json.json', true);
    //loadingBlock.append(loadImg);
    xhr.responseType = 'text';
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                XMLHttpRequest.responseType;
                let b = JSON.stringify(xhr.response);
                   //console.log("88888888",b);
                   //console.log("000000000",xhr.response);
            }
        }
    };

    xhr.send(null);
    xhr.onerror = function () {
        alert(`Ошибка соединения`);
}
//
// requestJSON('js/products.json');
//
// function showProducts(productData) {
//     let productsStr = '';
//     for (obj of productData) {
//         let infoDiv = '<div class="info"><div class="rating">';
//
//         for (let i = 0; i < 5; i++) {
//             infoDiv += i < obj.stars ? '<span class="star"></span>' : '<span class="star-outline"></span>';
//         }
//         const isSale = obj.sale_price ? `<span class="sale-price">${obj.sale_price} грн</span>` : '';
//         //console.log(obj.name.length);
//         infoDiv += `</div> <a href="#" data-id="${obj.id}" class="reviews text-right">${obj.reviews} отзыва</a></div>`;
//         productsStr += `<div class="col-lg-3 col-md-6 my-3">
//             <div class="card h-100">
//               <div class="img-holder">
//                   <img class="img-fluid" src="${obj.img}" alt="${obj.name}">
//               </div>
//               <div class="card-body">
//                 ${infoDiv}
//                 <div class="card-title">${obj.name}</div>
//                 <div class="prices my-3"><span class="regular-price${isSale ? ' old-price':''}">${obj.regular_price} грн</span> ${isSale}</div>
//                 <p class="card-text d-none">${obj.descr.replace(/\n/g, '<br>')}</p>
//                 <a href="#productsModal" onclick="openModal(event)" class="btn btn-primary" data-id="${obj.id}">Подробнее</a>
//               </div>
//             </div>
//          </div>`;
//     }
//     toysRow.innerHTML = productsStr;
//     document.querySelectorAll('.reviews').forEach(link => link.addEventListener('click', showReviews));
// }
//
// function openModal(e) {
//     e.preventDefault();
//     let link = e.target;
//     productsModal.style.display = 'block';
//     productsModal.classList.add('show');
//     document.body.classList.add('modal-open');
//     modalBody.innerHTML = link.closest('.card').innerHTML;
//     let imgHolder = modalBody.querySelector('.img-holder')
//     imgHolder.classList.remove('img-holder');
//     imgHolder.classList.add('text-center');
//     modalBody.querySelector('.card-text').classList.remove('d-none');
//     modalBody.querySelector('.btn').remove();
//     modalBody.querySelector('.reviews').remove();
//     modalTitle.innerHTML = "Информация о товаре <strong>"+modalBody.querySelector('.card-title').textContent+"<strong>";
// }
// closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
// document.querySelector('.modal').addEventListener('click', closeModal);
//
// function closeModal(e) {
//     if(e.target!== e.currentTarget) return;
//     productsModal.style.display = 'none';
//     productsModal.classList.remove('show');
//     document.body.classList.remove('modal-open');
// }
//
// function showReviews(evt){
//     evt.preventDefault();
//     requestJSON('js/reviews.json', true, this.dataset.id);
// }
// function showComments(data, id){
//     //console.log(data, id);
//     let commentsStr = '';
//     data.forEach(item => {
//         if(item.product_id!=id) return;
//         let str = item.plus ? '<div class="plus">'+item.plus+'</div>':'';
//         console.log(str);
//         let ratingDiv = '<div class="rating">';
//         for (let i = 0; i < 5; i++) {
//             ratingDiv += i < item.stars ? '<span class="star"></span>' : '<span class="star-outline"></span>';
//         }
//         ratingDiv+='</div>';
//         commentsStr +=`<div class="review">
//         <div class="info">
//             <div class="author">${item.author}</div>
//             ${ratingDiv}
//         </div>
//         <div class="review-text">${item.text.replace(/\n/g, '<br>')}</div>
//         ${item.plus ? '<div class="plus my-2"><strong>Достоинства: </strong> '+item.plus+'</div>':''}
//         ${item.minus ? '<div class="minus my-2"><strong>Недостатки: </strong> '+item.minus+'</div>':''}
//         </div>`;
//     });
//     productsModal.style.display = 'block';
//     productsModal.classList.add('show');
//     document.body.classList.add('modal-open');
//     productsModal.querySelector('.modal-title').textContent = 'Отзывы к товару';
//     modalBody.innerHTML = commentsStr;
// }
