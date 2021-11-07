
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


let sectionCenter = document.querySelector(".section-center") // menu bilglerinin gelecegi kısım
let btnContainer = document.querySelector(".btn-container") //butonların gelecegi kısım


// butonları olusturan bir fonksiyon eklemek gerekiyor.
const createButton = (btnName)=>{
    let btn =`<button type="button" id="${btnName}" class="btn  btn-outline-dark btn-item">${ btnName}</button>`
    return btn;
}

// butonContainer yapısının içerisine butonları ekledik.
const addButtonToContainer = ()=>{
    btnContainer.innerHTML = createButton("All")+
   " " + createButton("Korea") +
   " " + createButton("Japan")+
   " " + createButton("China");
};
addButtonToContainer(); 

// Butonları oluşturduktan sonra onları query selector ile yakalamalıyız.

btnAll = document.querySelector("#All").addEventListener('click',getAllMenu);
btnKorea = document.querySelector("#Korea").addEventListener('click',getKoreaMenu);
btnJapan = document.querySelector("#Japan").addEventListener('click',getJapanMenu);
btnChina = document.querySelector("#China").addEventListener('click',getChinaMenu);


// her kategorye ait menu elemanını göstermek için bu fonksiyonu olusturduk
const createMenu = (menu)=>{
    let item = `<div class="menu-items col-lg-6 col-sm-12">
    <img src="${menu.img}" alt="${menu.title}" class="photo">
    <div class="menu-info">
      <div class="menu-title">
        <h4>${menu.title}</h4>
        <h4 class="price">${menu.price}</h4>
      </div>
      <div class="menu-text">
        ${menu.desc}
      </div>
    </div>
  </div>`
  return item;
}
getAllMenu();// sayfa acıldıgında bütün menuyü getirmesini isteriz.
function getAllMenu(){
    let getAllList = "";
    menu.map((item)=>{
        getAllList += createMenu(item);
    });
    sectionCenter.innerHTML= getAllList
}

function getKoreaMenu(){ 
     let getKoreaMenuList = "";
     menu.map((item)=>{
         if(item.category == "Korea"){
            getKoreaMenuList += createMenu(item)
         }
     });
     sectionCenter.innerHTML = getKoreaMenuList
}

function getJapanMenu(){
    let getJapanMenuList = "";
    menu.map((item)=>{
        if(item.category == "Japan"){
            getJapanMenuList += createMenu(item)
        }
    });
    sectionCenter.innerHTML = getJapanMenuList
}

function getChinaMenu(){
    let getChinaMenuList = "";
    menu.map((item)=>{
        if(item.category =="China"){
            getChinaMenuList += createMenu(item)
        }
    });
    sectionCenter.innerHTML =getChinaMenuList
}