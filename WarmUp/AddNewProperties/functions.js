const discountAmount = (stock, { max, med, min }) => {
    let discount;
    if (stock < 3) {
        discount = max;
    } else if (stock < 7) {
        discount = med;
    } else if (stock < 12) {
        discount = min;
    } else { discount = 0.0; }

    return discount;
}

function updatedSales(pProducts, pDiscount) {
    let updatedSales = pProducts.map(item => {
        const amountOfDiscount = discountAmount(item.stock, pDiscount);
        let { original, stock, discount = amountOfDiscount } = item;
        item['discount'] = discount;
        item['sale'] = original - original * discount;
        item['total'] = item.sale * stock;
        return item;
    });
    return updatedSales;
}

//   EXPECTED OUTPUT (array of objects):
export { updatedSales };
