loadParams(26);

async function loadParams(id) {
    let response = await fetch(`json.json`, {
        method: 'GET',
    });

    if (response.ok) {
        let result = await response.json();

        console.log("result", result);

        for (let item of result) {
            if (item.IBLOCK_CODE === 'params_select') {

                let res = `<div class="dop-items flex flex-col p-7 md:p-0 w-full">` +
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

                let res = `<div class="relative my-10">     
            <input type="range" value="5" min="3" max="8" step="1" id="r1" class="absolute" oninput="fun1()"    onchange="showValue(value,1,false)">
            <div id="test" class="absolute">
            <div class="flex justify-end value_obj w-full relative"></div>             
            </div>           
        </div>        
        <div class="flex justify-between py-5">
            <div>
                <span class="py-2">от 3м</span>
            </div>
            <div>
                <span class="py-2">до 8м</span>
            </div>
        </div>`;
                document.getElementsByClassName('load')[0].insertAdjacentHTML('beforeend', res);
            }

        }
    }

    getClassBtn();
}