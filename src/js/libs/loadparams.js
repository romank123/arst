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

                let res = `<div class="max-dep flex flex-col px-7 md:p-0 w-full">
                        <span class="font-MontserratMedium text-base my-5 md:mt-10 mt-5">${item.PROPERTIES.title.VALUE}</span>


                        <div class="flex justify-center items-center my-5">
                            <!--suppress HtmlUnknownAttribute -->
                            <div x-data="range()" x-init="mintrigger(); maxtrigger()" class="relative w-full">
                                <div>
                                    <!--suppress HtmlUnknownAttribute, HtmlUnknownAttribute, HtmlUnknownAttribute, XmlUnboundNsPrefix -->
                                    <input type="range"
                                           step="${item.PROPERTIES.min.VALUE}"
                                           x-bind:min="min" x-bind:max="max"
                                           x-on:input="mintrigger"
                                           x-model="minprice"
                                           class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer">

                                    <!--suppress HtmlUnknownAttribute, HtmlUnknownAttribute, HtmlUnknownAttribute, XmlUnboundNsPrefix -->
                                    <input type="range"
                                           step="${item.PROPERTIES.max.VALUE}"
                                           x-bind:min="min" x-bind:max="max"
                                           x-on:input="maxtrigger"
                                           x-model="maxprice"
                                           class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer">

                                    <div class="relative z-10 h-2">

                                        <div class="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-grey"></div>

                                        <!--suppress HtmlUnknownAttribute, XmlUnboundNsPrefix -->
                                        <div class="absolute z-20 top-0 bottom-0 rounded-md bg-light-gray-line"
                                             x-bind:style="'right:'+maxthumb+'%; left:'+minthumb+'%'"></div>

                                        <!--suppress HtmlUnknownAttribute, XmlUnboundNsPrefix -->
                                        <div class="absolute z-30 top-0 left-0 bg-light-gray -mt-2 -ml-1"
                                             x-bind:style="'left: '+minthumb+'%'"></div>

                                        <!--suppress XmlUnboundNsPrefix -->
                                        <div class="absolute z-30 w-6 h-6 top-0 right-0 bg-light-gray rounded-full -mt-2 -mr-3"
                                             x-bind:style="'right: '+maxthumb+'%'">
                                            <div class="relative">
                                                <div class="marker">
                                                    <!--suppress HtmlUnknownAttribute, XmlUnboundNsPrefix -->
                                                    <input type="text" maxlength="${item.PROPERTIES.min.VALUE}" x-on:input="maxtrigger"
                                                           x-model="maxprice"
                                                           class="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex justify-between py-5">
                                    <div>
                                        <span class="py-2">от ${item.PROPERTIES.min.VALUE}м</span>
                                    </div>
                                    <div>
                                        <span class="py-2">до ${item.PROPERTIES.max.VALUE}м</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;

                document.getElementsByClassName('load')[0].insertAdjacentHTML('beforeend', res);
            }
            //getLoad();
        }
    }
    getLoad();
}