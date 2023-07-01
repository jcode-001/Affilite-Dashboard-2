const dashLink = document.querySelector(".dash-link");
const marketLink = document.querySelector(".market-link");
const vendorLink = document.querySelector(".vendor-link");
const productLink = document.querySelector(".product-link");
const dashboard = document.querySelector(".dashboard");
const market = document.querySelector(".market");
const vendor = document.querySelector(".vendor");
const product = document.querySelector(".product");

function showMarket(){
    market.classList.add("active");
    dashboard.classList.remove("active");
    dashboard.classList.add("varnish")
    vendor.classList.remove("active");
    product.classList.remove("active");
    marketLink.classList.add("current");
    dashLink.classList.remove("current");
    vendorLink.classList.remove("current");
    productLink.classList.remove("current");
}
function showDashboard(){
    dashboard.classList.add("active");
    market.classList.remove("active");
    vendor.classList.remove("active");
    product.classList.remove("active");
    dashLink.classList.add("current");
    marketLink.classList.remove("current");
    vendorLink.classList.remove("current");
    productLink.classList.remove("current");
}
function showVendor(){
    vendor.classList.add("active");
    dashboard.classList.remove("active");
    dashboard.classList.add("varnish")
    market.classList.remove("active");
    product.classList.remove("active");
    vendorLink.classList.add("current");
    dashLink.classList.remove("current");
    marketLink.classList.remove("current");
    productLink.classList.remove("current");
}
function showProduct(){
    product.classList.add("active");
    dashboard.classList.remove("active");
    dashboard.classList.add("varnish")
    vendor.classList.remove("active");
    market.classList.remove("active");
    productLink.classList.add("current");
    dashLink.classList.remove("current");
    vendorLink.classList.remove("current");
    marketLink.classList.remove("current");
}

marketLink.addEventListener("click", showMarket);
dashLink.addEventListener("click", showDashboard);
vendorLink.addEventListener("click", showVendor);
productLink.addEventListener("click", showProduct);

