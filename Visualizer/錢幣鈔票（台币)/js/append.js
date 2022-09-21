var thd_number
var fiftyhrd_number
var hrd_number
var fifty_number
var ten_number
var five_number
var one_number

var thdcount = -1
var fiftyhuncount = -1
var huncount = -1
var fiftycount = -1
var tencount = -1
var fivecount = -1
var onecount = -1



var thdlittlemove = 0
var fiftyhunlittlemove = 0
var hunlittlemove = 0
var fiftylittlemove = 0
var tenlittlemove = 0
var fivelittlemove = 0
var onelittlemove = 0

var numnum = 0
var numnum1 = 0
var numnum2 = 0
var numnum3 = 0
var numnum4 = 0
var numnum5 = 0
var numnum6 = 0

var keydownblur = 0


$('body').keydown(function (event) {
    if (event.which == 13 && $('.count').is(":focus")) {
        canvas.clear();
        keydownblur = 1

        idontknowwhatiwrite()
        $('.enter_thd').val('')
        $('.enter_hrd').val('')
        $('.enter_ten').val('')
        $('.enter_one').val('')
        $('.count').blur()



    }
    if (event.which == 13 && !$('.count').is(":focus")) {

        appendmoney()

    }



})





function appendmoney() {
    thd_number = $('.enter_thd').val().replace(/[^0-9]/ig, "");
    fiftyhrd_number = $('.enter_fivehrd').val().replace(/[^0-9]/ig, "");
    hrd_number = $('.enter_hrd').val().replace(/[^0-9]/ig, "");
    fifty_number = $('.enter_fifty').val().replace(/[^0-9]/ig, "");
    ten_number = $('.enter_ten').val().replace(/[^0-9]/ig, "");
    five_number = $('.enter_five').val().replace(/[^0-9]/ig, "");
    one_number = $('.enter_one').val().replace(/[^0-9]/ig, "");
    console.log(thd_number, fiftyhrd_number, hrd_number, fifty_number, ten_number, five_number, one_number)
    $('.enter_thd').val('')
    $('.enter_hrd').val('')
    $('.enter_ten').val('')
    $('.enter_one').val('')
    $('.enter_fivehrd').val('')
    $('.enter_fifty').val("")
    $('.enter_five').val('')


    numnum = -1
    if (thd_number != "") {
        thdcount += 1
    }
    if (thdcount > 4.2) {
        thdcount = 0
        thdlittlemove += 50
    }
    if (thdlittlemove > 150) {
        thdlittlemove = 0
    }

    var arr_one = new Array()
    for (i = 0; i < thd_number; i++) {
        var s_1 = 0
        var s_1_1 = 0
        // var w = 0 
        const imgEl_1 = document.createElement('img')
        imgEl_1.src = src_thd
        imgEl_1.alt = '1000'

        imgEl_1.onload = (e) => {


            const image = new fabric.Image(imgEl_1, {
                width: e.target.naturalWidth,
                height: e.target.naturalHeight,
                scaleX: parseInt($('.img_thd').width()) / e.target.naturalWidth,
                scaleY: parseInt($('.img_thd').height()) / e.target.naturalHeight,

                top: 650 * sRSS,
                left: 0 * sRSS
            })
            canvas.add(image)

            image.alt = 1
            image.set({
                borderColor: '#01B0F1'
            })



            canvas.renderAll();


            image._element.alt = '1000'
            arr_one.push(image)

            var maxWidthRed = 20 * sRSS
            var maxTOP = 20 * sRSS
            numnum++
            // for (i = 0; i < arr_one.length; i++) {
            if (arr_one.length <= 5) {
                s_1 += 10


                image.animate('top', 30 * sRSS + (maxTOP * thdcount) + 110 * sRSS * numnum, {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (10 * sRSS) + (maxWidthRed * thdcount) + (thdlittlemove * sRSS), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
            } else if (arr_one.length > 5 && arr_one.length <= 10) {
                s_1_1 += 10


                image.animate('top', 30 * sRSS + (maxTOP * thdcount) + 110 * sRSS * (numnum - 5), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (50 * sRSS) + (maxWidthRed * thdcount) + (thdlittlemove * sRSS), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })

            }
            // }



        }
    }


    // 2```````````````````````````````````````````````````````````````````````````````````
    if (fiftyhrd_number != "") {
        fiftyhuncount += 1
    }
    if (fiftyhuncount > 4.3) {
        fiftyhuncount = 0
        fiftyhunlittlemove += 50
    }
    if (fiftyhunlittlemove > 150) {
        fiftyhunlittlemove = 0
    }
    numnum1 = -1
    var arr_two = new Array()
    for (i = 0; i < fiftyhrd_number; i++) {
        var s_1 = 0
        var s_1_1 = 0
        // var w = 0 
        const imgEl_1 = document.createElement('img')
        imgEl_1.src = src_fiftyhun
        imgEl_1.alt = '400'

        imgEl_1.onload = (e) => {


            const image = new fabric.Image(imgEl_1, {
                width: e.target.naturalWidth,
                height: e.target.naturalHeight,
                scaleX: $('.img_fivehun').width() / e.target.naturalWidth,
                scaleY: $('.img_fivehun').height() / e.target.naturalHeight,

                top: Math.round(650 * sRSS),
                left: Math.round(150 * sRSS)
            })
            canvas.add(image)

            image.alt = 500
            image.set({
                borderColor: '#01B0F1'
            })



            canvas.renderAll();


            image._element.alt = '500'
            arr_two.push(image)
            numnum1++
            var maxWidthblue = Math.round(20 * sRSS)

            var maxTOP = 20 * sRSS
            // for (i = 0; i < arr_two.length; i++) {
            if (arr_two.length <= 5) {
                s_1 += 10


                image.animate('top', Math.round(30 * sRSS) + (maxTOP * (fiftyhuncount)) + Math.round(110 * sRSS) * numnum1, {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (Math.round(172 * sRSS)) + (Math.round(10 * sRSS)) + (maxWidthblue * fiftyhuncount) + (Math.round(fiftyhunlittlemove * sRSS)), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
            } else if (arr_two.length > 5 && arr_two.length <= 10) {
                s_1_1 += 10


                image.animate('top', Math.round(30 * sRSS) + (maxTOP * (fiftyhuncount)) + Math.round(110 * sRSS) * (numnum1 - 5), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (Math.round(218 * sRSS)) + (Math.round(10 * sRSS)) + (maxWidthblue * fiftyhuncount) + (Math.round(fiftyhunlittlemove * sRSS)), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })

            }
            // }



        }
    }


    // 3```````````````````````````````````````````````````````````````````````````````````




    if (hrd_number != "") {
        huncount += 1
    }
    if (huncount > 4.8) {
        huncount = 0
        hunlittlemove += 50
    }
    if (hunlittlemove > 150) {
        hunlittlemove = 0
    }
    numnum2 = -1
    var arr_three = new Array()
    for (i = 0; i < hrd_number; i++) {
        var s_1 = 0
        var s_1_1 = 0
        // var w = 0 
        const imgEl_1 = document.createElement('img')
        imgEl_1.src = src_hun
        imgEl_1.alt = '100'

        imgEl_1.onload = (e) => {


            const image = new fabric.Image(imgEl_1, {
                width: e.target.naturalWidth,
                height: e.target.naturalHeight,
                scaleX: parseInt($('.img_hun').width()) / e.target.naturalWidth,
                scaleY: parseInt($('.img_hun').height()) / e.target.naturalHeight,

                top: Math.round(650 * sRSS),
                left: Math.round(320 * sRSS)
            })
            canvas.add(image)

            image.alt = 1
            image.set({
                borderColor: '#01B0F1'
            })



            canvas.renderAll();


            image._element.alt = '100'
            arr_three.push(image)
            numnum2++
            var maxWidthyellow = Math.round(20 * sRSS)

            var maxTOP = 20 * sRSS
            // for (i = 0; i < arr_two.length; i++) {
            if (arr_three.length <= 5) {
                s_1 += 10


                image.animate('top', Math.round(30 * sRSS) + (maxTOP * (huncount)) + Math.round(110 * sRSS) * numnum2, {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (Math.round(335 * sRSS)) + (Math.round(20 * sRSS)) + (maxWidthyellow * huncount) + (Math.round(hunlittlemove * sRSS)), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
            } else if (arr_three.length > 5 && arr_three.length <= 10) {
                s_1_1 += 10


                image.animate('top', Math.round(30 * sRSS) + (maxTOP * (huncount)) + Math.round(110 * sRSS) * (numnum2 - 5), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (Math.round(375 * sRSS)) + (Math.round(20 * sRSS)) + (maxWidthyellow * huncount) + (Math.round(hunlittlemove * sRSS)), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })

            }
            // }



        }
    }

    //4.................................................................................



    if (fifty_number != "") {
        fiftycount += 1
    }
    if (fiftycount > 4.8) {
        fiftycount = 0
        fiftylittlemove += 50
    }
    if (fiftylittlemove > 150) {
        fiftylittlemove = 0
    }
    numnum3 = -1
    var arr_four = new Array()
    for (i = 0; i < fifty_number; i++) {
        var s_1 = 0
        var s_1_1 = 0
        // var w = 0 
        const imgEl_1 = document.createElement('img')
        imgEl_1.src = src_fifty
        imgEl_1.alt = '50'

        imgEl_1.onload = (e) => {


            const image = new fabric.Image(imgEl_1, {
                width: e.target.naturalWidth,
                height: e.target.naturalHeight,
                scaleX: parseInt($('.img_fifty').width()) / e.target.naturalWidth,
                scaleY: parseInt($('.img_fifty').height()) / e.target.naturalHeight,

                top: Math.round(650 * sRSS),
                left: Math.round(530 * sRSS)
            })
            canvas.add(image)

            image.alt = 1
            image.set({
                borderColor: '#01B0F1'
            })



            canvas.renderAll();


            image._element.alt = '50'
            arr_four.push(image)
            numnum3++
            var maxWidthgreen = Math.round(20 * sRSS)
            var maxTOP = 20 * sRSS

            // for (i = 0; i < arr_two.length; i++) {
            if (arr_four.length <= 5) {
                s_1 += 10


                image.animate('top', Math.round(30 * sRSS) + (maxTOP * fiftycount) + Math.round(110 * sRSS) * numnum3, {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (Math.round(495 * sRSS)) + (Math.round(30 * sRSS)) + (maxWidthgreen * fiftycount) + (Math.round(fiftylittlemove * sRSS)), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
            } else if (arr_four.length > 5 && arr_four.length <= 10) {
                s_1_1 += 10


                image.animate('top', Math.round(30 * sRSS) + (maxTOP * fiftycount) + Math.round(110 * sRSS) * (numnum3 - 5), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (Math.round(585 * sRSS)) + (Math.round(30 * sRSS)) + (maxWidthgreen * fiftycount) + (Math.round(fiftylittlemove * sRSS)), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })

            }
            // }



        }
    }


    // 5...................................................................................................

    if (ten_number != "") {
        tencount += 1
    }
    if (tencount > 4.8) {
        tencount = 0
        tenlittlemove += 50
    }
    if (tenlittlemove > 150) {
        tenlittlemove = 0
    }
    numnum4 = -1
    var arr_five = new Array()
    for (i = 0; i < ten_number; i++) {
        var s_1 = 0
        var s_1_1 = 0
        // var w = 0 
        const imgEl_1 = document.createElement('img')
        imgEl_1.src = src_ten
        imgEl_1.alt = '10'

        imgEl_1.onload = (e) => {


            const image = new fabric.Image(imgEl_1, {
                width: e.target.naturalWidth,
                height: e.target.naturalHeight,
                scaleX: parseInt($('.img_ten').width()) / e.target.naturalWidth,
                scaleY: parseInt($('.img_ten').height()) / e.target.naturalHeight,

                top: Math.round(650 * sRSS),
                left: Math.round(700 * sRSS)
            })
            canvas.add(image)

            image.alt = 10
            image.set({
                borderColor: '#01B0F1'
            })



            canvas.renderAll();


            image._element.alt = '10'
            arr_five.push(image)
            numnum4++
            var maxWidthgreen = Math.round(20 * sRSS)
            var maxTOP = 20 * sRSS

            // for (i = 0; i < arr_two.length; i++) {
            if (arr_five.length <= 5) {
                s_1 += 10


                image.animate('top', Math.round(35 * sRSS) + (maxTOP * tencount) + Math.round(110 * sRSS) * numnum4, {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (Math.round(665 * sRSS)) + (Math.round(30 * sRSS)) + (maxWidthgreen * tencount) + (Math.round(tenlittlemove * sRSS)), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
            } else if (arr_five.length > 5 && arr_five.length <= 10) {
                s_1_1 += 10


                image.animate('top', Math.round(35 * sRSS) + (maxTOP * tencount) + Math.round(110 * sRSS) * (numnum4 - 5), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (Math.round(755 * sRSS)) + (Math.round(30 * sRSS)) + (maxWidthgreen * tencount) + (Math.round(tenlittlemove * sRSS)), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })

            }
            // }



        }
    }








    // 6....................................................................................................................


    if (five_number != "") {
        fivecount += 1
    }
    if (fivecount > 4.8) {
        fivecount = 0
        fivelittlemove += 50
    }
    if (fivelittlemove > 150) {
        fivelittlemove = 0
    }
    numnum5 = -1
    var arr_six = new Array()
    for (i = 0; i < five_number; i++) {
        var s_1 = 0
        var s_1_1 = 0
        // var w = 0 
        const imgEl_1 = document.createElement('img')
        imgEl_1.src = src_five
        imgEl_1.alt = '5'

        imgEl_1.onload = (e) => {


            const image = new fabric.Image(imgEl_1, {
                width: e.target.naturalWidth,
                height: e.target.naturalHeight,
                scaleX: parseInt($('.img_five').width()) / e.target.naturalWidth,
                scaleY: parseInt($('.img_five').height()) / e.target.naturalHeight,

                top: Math.round(650 * sRSS),
                left: Math.round(870 * sRSS)
            })
            canvas.add(image)

            image.alt = 5
            image.set({
                borderColor: '#01B0F1'
            })



            canvas.renderAll();


            image._element.alt = '5'
            arr_six.push(image)
            numnum5++
            var maxWidthgreen = Math.round(20 * sRSS)
            var maxTOP = 20 * sRSS

            // for (i = 0; i < arr_two.length; i++) {
            if (arr_six.length <= 5) {
                s_1 += 10


                image.animate('top', Math.round(40 * sRSS) + (maxTOP * fivecount) + Math.round(110 * sRSS) * numnum5, {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (Math.round(835 * sRSS)) + (Math.round(30 * sRSS)) + (maxWidthgreen * fivecount) + (Math.round(fivelittlemove * sRSS)), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
            } else if (arr_six.length > 5 && arr_six.length <= 10) {
                s_1_1 += 10


                image.animate('top', Math.round(40 * sRSS) + (maxTOP * fivecount) + Math.round(110 * sRSS) * (numnum5 - 5), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (Math.round(925 * sRSS)) + (Math.round(30 * sRSS)) + (maxWidthgreen * fivecount) + (Math.round(fivelittlemove * sRSS)), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })

            }
            // }



        }
    }










    //7........................................................................................................................


    if (one_number != "") {
        onecount += 1
    }
    if (onecount > 4.8) {
        onecount = 0
        onelittlemove += 50
    }
    if (onelittlemove > 150) {
        onelittlemove = 0
    }
    numnum6 = -1
    var arr_seven = new Array()
    for (i = 0; i < one_number; i++) {
        var s_1 = 0
        var s_1_1 = 0
        // var w = 0 
        const imgEl_1 = document.createElement('img')
        imgEl_1.src = src_one
        imgEl_1.alt = '1'

        imgEl_1.onload = (e) => {


            const image = new fabric.Image(imgEl_1, {
                width: e.target.naturalWidth,
                height: e.target.naturalHeight,
                scaleX: parseInt($('.img_one').width()) / e.target.naturalWidth,
                scaleY: parseInt($('.img_one').height()) / e.target.naturalHeight,

                top: Math.round(650 * sRSS),
                left: Math.round(1035 * sRSS)
            })
            canvas.add(image)

            image.alt = 1
            image.set({
                borderColor: '#01B0F1'
            })



            canvas.renderAll();


            image._element.alt = '1'
            arr_seven.push(image)
            numnum6++
            var maxWidthgreen = Math.round(20 * sRSS)
            var maxTOP = 20 * sRSS

            // for (i = 0; i < arr_two.length; i++) {
            if (arr_seven.length <= 5) {
                s_1 += 10


                image.animate('top', Math.round(45 * sRSS) + (maxTOP * onecount) + Math.round(110 * sRSS) * numnum6, {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (Math.round(1005 * sRSS)) + (Math.round(30 * sRSS)) + (maxWidthgreen * onecount) + (Math.round(onelittlemove * sRSS)), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
            } else if (arr_seven.length > 5 && arr_seven.length <= 10) {
                s_1_1 += 10


                image.animate('top', Math.round(45 * sRSS) + (maxTOP * onecount) + Math.round(110 * sRSS) * (numnum6 - 5), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (Math.round(1075 * sRSS)) + (Math.round(30 * sRSS)) + (maxWidthgreen * onecount) + (Math.round(onelittlemove * sRSS)), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })

            }
            // }



        }
    }







































    setTimeout(function ww() {
        var items = canvas.getObjects()
        var Array_sum
        var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

        for (i = 0; i < items.length; i++) {
            ArrTest[i] = parseInt(items[i]._element.alt)

        }
        Array_sum = SumData(ArrTest)
        $(".count").val(Array_sum+ change_Array_sum)
    }, 500)


}