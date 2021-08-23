async function loadparams(id) {
    let response = await fetch(`/catalog/detail/get.php?ID=${id}`, {
        method: 'GET',
    });

    if (response.ok) {
        let result = await response.json();

        console.log("result", result);

        document.getElementsByClassName('load')[0].innerHTML = '';

        for (let item of result) {
            if (item.IBLOCK_CODE === 'params_select') {


                if (item.PROPERTIES.mass.VALUE_XML_ID == 'no'){

                    console.log("contain no");
                    console.log(item.PROPERTIES.mass);


                } else {
                    console.log(item.PROPERTIES.mass);
                    console.log("contain yes value");

                }


                let res = `<div class="dop-items ${(item.PROPERTIES.mass.VALUE_XML_ID == 'no')?'selected-2':''} flex flex-col p-7 md:p-0 w-full">` +
                    `<span class="font-MontserratMedium text-base my-5 md:mt-10 mt-5">${item.PROPERTIES.title.VALUE}</span>` +
                    `<div class="grid grid-cols-1 md:grid-cols-2 gap-5">`;
                for (let i = 0; i < item.PROPERTIES.params.VALUE.length; i++) {
                    res += `<button class="font-MontserratRegular text-brownish-grey push-button" data-value="${item.PROPERTIES.price.VALUE[i]}">${item.PROPERTIES.params.VALUE[i]}</button>`;
                }

                res += `</div></div>`;

                document.getElementsByClassName('load')[0].insertAdjacentHTML('beforeend', res);

            } else if (item.IBLOCK_CODE === 'params_input') {
                let res = `<div class="value flex flex-col p-7 md:p-0 w-full">` +
                    `<span class="font-MontserratMedium text-base my-5 md:mt-10 mt-5">${item.PROPERTIES.title.VALUE}</span>` +
                    `<div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">` +
                    `<input type="text"
                                   class="col-span-2 rounded-xl px-4 py-3 focus:outline-none bg-grey w-full"
                                   placeholder="Введите параметр"/>
                            <div class="flex lg:flex-col flex-wrap  lg:justify-center items-center w-full font-MontserratRegular text-sm text-brownish-grey">
                                ${item.PREVIEW_TEXT}
                            </div>
                        </div>
                    </div>`;

                document.getElementsByClassName('load')[0].insertAdjacentHTML('beforeend', res);

            } else if (item.IBLOCK_CODE === 'params_range') {

                let res = `
<div class="flex flex-col px-7 md:px-0 lg:px-0">



                        <span class="font-MontserratMedium text-base my-5 mt-10">${item.PROPERTIES.title.VALUE}</span>
                        
                        <div class="wrapper__range my-5">
                        <input
                          id="myinput"
                          class="myinput"
                          type="range"
                          step="${item.PROPERTIES.step.VALUE}"
                          min="${item.PROPERTIES.min.VALUE}"
                          value="${parseInt(item.PROPERTIES.min.VALUE) + parseInt(item.PROPERTIES.step.VALUE)}"
                          max="${item.PROPERTIES.max.VALUE}"
                        />
                        <output class="bubble"></output>
                        <div class="range__value">
                          <span id="valueMin">от ${item.PROPERTIES.min.VALUE}м</span>
                          <span id="valueMax">до ${item.PROPERTIES.max.VALUE}м</span>
                        </div>
                      </div>     
                        
                    </div>
`;
                document.getElementsByClassName('load')[0].insertAdjacentHTML('beforeend', res);
            }

        }
    }

    getClassBtn(true);
    setTimeout(fun1(),200)
}

