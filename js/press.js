window.addEventListener('DOMContentLoaded', function () {
    const blackBox_left_btn = document.getElementById('blackBox-left-btn')
    const blackBox_right_btn = document.getElementById('blackBox-right-btn')

    let arr = [{ title: `Discovery’s newest property in Kaua’i North Shore Preserve`, desc: `Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings.` },
    { title: `James Island Discovery's Newest Property`, desc: `Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company’s most exclusive community to date and Discovery’s first project in Canada.` },
    { title: `CostaTerra Discovery's 23rd property`, desc: `Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe.` },
    { title: `Troubadour To Open Golf Course Fall 2019`, desc: `Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall.` }];

    let title = document.getElementById('carousel-title')
    let desc = document.getElementById('carousel-description')
    title.innerHTML = arr[0].title
    desc.innerHTML = arr[0].desc

    let count = 0

    const counterBtn = document.getElementById('counter')
    counterBtn.innerHTML = `${count + 1} - 4`

    blackBox_left_btn.addEventListener('click', function () {
        console.log("i click left btn")
        if (count > 0) {
            count--
            desc.innerHTML = arr[count].desc
            title.innerHTML = arr[count].title
        } else {
            count = arr.length - 1
            desc.innerHTML = arr[count].desc
            title.innerHTML = arr[count].title
        }
        counterBtn.innerHTML = `${count + 1} - 4`
    })

    blackBox_right_btn.addEventListener('click', function () {
        console.log("i click right btn")
        if (count < arr.length - 1) {
            count++
            desc.innerHTML = arr[count].desc
            title.innerHTML = arr[count].title
        } else {
            count = 0
            desc.innerHTML = arr[count].desc
            title.innerHTML = arr[count].title
        }
        counterBtn.innerHTML = `${count + 1} - 4`
    })


    // js for section2-container
    const section_left_btn = document.getElementById('section-left-btn')
    const section_right_btn = document.getElementById('section-right-btn')

    const div1_text = document.getElementById('div1-context')
    const div1_author = document.getElementById('div1-author')

    const div2_text = document.getElementById('div2-context')
    const div2_author = document.getElementById('div2-author')

    const div3_text = document.getElementById('div3-context')
    const div3_author = document.getElementById('div3-author')

    const div4_text = document.getElementById('div4-context')
    const div4_author = document.getElementById('div4-author')

    const section_counter_btn = document.getElementById('section-counter-btn')

    let contextArray = [
            [   { text1: ` This Property Company Ups the Ante with  Luxury and Sustainability `, author1: ` Sunset Magazine | August 13, 2021 ` },
                { text2: ` Where Sun, Sand and Splendor Are Still to Be Discovered`, author2: ` New York Times | June 9, 2021 ` },
                { text3: ` Mike Meldman is one of the most influential real-estate moguls in the country thanks to his luxurious live-in resorts, which became irresistible to the rich and famous during the pandemic `, author3: ` Business Insider |  June 4, 2021 ` },
                { text4: ` There's a real buy-in for resort communities offering amusement and amenities `, author4: ` Luxury Magazine | Spring/Summer 2021 ` }
            ],
            [   { text1: ` This Blue Chip Caribbean Island Hopes to Dethrone St. Barts `, author1: ` New York Post | April 5, 2021 ` },
                { text2: ` No Longer Waiting for Retirement `, author2: ` New York Times International Homes | March 27-28, 2021 ` },
                { text3: ` Golf and Pickleball are Having a Love Affair `, author3: ` New York Times | March 22, 2021 ` },
                { text4: ` For Many, the Pandemic Has Led to the 'Discovery' of Golf `, author4: ` New York Times | March 22, 2021 ` }
            ],
            [   { text1: ` Celebrities Keep Flocking to Discovery Resorts During the Pandemic. Here's Why `, author1: ` Elle Decor | September 2020 ` },
                { text2: ` Green Golf Homes in Five Destinations `, author2: ` New York Times | September 11, 2020 ` },
                { text3: ` Bring Your Clubs. And the Kids. `, author3: ` New York Times | September 11, 2020 ` },
                { text4: ` Billionare Barn Debuts at Quant 850-acre Silo Ridge Field Club `, author4: ` Forbes | August 2020 ` }
            ]
        ]

    let arr_count = 0

    div1_text.innerHTML = contextArray[0][0].text1
    div1_author.innerHTML = contextArray[0][0].author1
    div2_text.innerHTML = contextArray[0][1].text2
    div2_author.innerHTML = contextArray[0][1].author2
    div3_text.innerHTML = contextArray[0][2].text3
    div3_author.innerHTML = contextArray[0][2].author3
    div4_text.innerHTML = contextArray[0][3].text4
    div4_author.innerHTML = contextArray[0][3].author4

    section_counter_btn.innerHTML = `${arr_count + 1} - ${contextArray.length}`

    section_left_btn.addEventListener('click', function () {
        if (arr_count > 0) {
            arr_count--;
        }
        else {
            arr_count = contextArray.length - 1
        }
        div1_text.innerHTML = contextArray[arr_count][0].text1
        div1_author.innerHTML = contextArray[arr_count][0].author1
        div2_text.innerHTML = contextArray[arr_count][1].text2
        div2_author.innerHTML = contextArray[arr_count][1].author2
        div3_text.innerHTML = contextArray[arr_count][2].text3
        div3_author.innerHTML = contextArray[arr_count][2].author3
        div4_text.innerHTML = contextArray[arr_count][3].text4
        div4_author.innerHTML = contextArray[arr_count][3].author4

        section_counter_btn.innerHTML = `${arr_count + 1} - ${contextArray.length}`
    })

    section_right_btn.addEventListener('click', function () {
        if (arr_count < contextArray.length - 1) {
            arr_count++
        }
        else {
            arr_count = 0
        }
        div1_text.innerHTML = contextArray[arr_count][0].text1
        div1_author.innerHTML = contextArray[arr_count][0].author1
        div2_text.innerHTML = contextArray[arr_count][1].text2
        div2_author.innerHTML = contextArray[arr_count][1].author2
        div3_text.innerHTML = contextArray[arr_count][2].text3
        div3_author.innerHTML = contextArray[arr_count][2].author3
        div4_text.innerHTML = contextArray[arr_count][3].text4
        div4_author.innerHTML = contextArray[arr_count][3].author4

        section_counter_btn.innerHTML = `${arr_count + 1} - ${contextArray.length}`
    })

})

