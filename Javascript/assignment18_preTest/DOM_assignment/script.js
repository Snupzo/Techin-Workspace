document.addEventListener("change", (e)=>{
    let tipsValue = document.getElementById("tipsSlider").value
    document.getElementById("tipsPercent").innerText = tipsValue
    let bill = document.getElementById("bill").value
    bill = +bill;
    bill = bill.toFixed(2)
    let tips = bill * ((tipsValue / 100));
    tips = tips.toFixed(2)
    let total = (+tips + +bill).toFixed(2)
    document.getElementById("tipsOutput").innerText = tips
    document.getElementById("totalAmount").innerText = total
})