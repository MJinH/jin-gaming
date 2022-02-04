const Mouse = require('../models/Mouse')
const axios = require('axios')
const cheerio = require('cheerio')
const AllProducts = require('../models/AllProducts')


const getHTML = async(page) => {
    try{
        return await axios.get(`https://www.bestbuy.com/site/searchpage.jsp?cp=${page}&id=pcat17071&st=gaming+mouse`)
    } catch(err) {
        console.log(err)
    }
}



const parsing = async (page) => {
    const html = await getHTML(page)
    const $ = cheerio.load(html.data)
    const $productList = $('.list-item.lv')
    $productList.each(async (idx,node) => {
            const name =  $(node).find('.sku-title > .sku-header').text()
            const img = $(node).find('.product-image').attr('src')
            const price = $(node).find('.priceView-hero-price > span:eq(0)').text()
            const find = await Mouse.findOne({name:name})
            if(name && img && price && !find) {
                const allProduct = new AllProducts({
                    name:name,
                    price:price,
                    img:img
                })
                const mouse = new Mouse({
                    name:name,
                    price:price,
                    img:img
                })
                try{
                    await allProduct.save()
                    await mouse.save()
                } catch(err) {
                    console.log(err)
                }
            }
    })
}


module.exports = parsing