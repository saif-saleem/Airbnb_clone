let sel_hotel = JSON.parse(localStorage.getItem("hotel_selected"));
console.log(sel_hotel.list);

let detail = document.getElementsByClassName("detail")[0]; // Access the first element in the collection
let sel_hotelname = document.createElement('p');
sel_hotelname.innerText = sel_hotel.list.name;
detail.appendChild(sel_hotelname);

let review = document.createElement('div');
review.className="review";
let starspan= document.createElement('span');
starspan.innerHTML=`<img src="./star.svg" alt="">${sel_hotel.list.price.rate} . ${sel_hotel.list.reviewsCount} reivews`;
let badgespan= document.createElement('span');
badgespan.innerHTML=`<img src="./badge.svg" alt="">Superhost . `;
let cityspan= document.createElement('span');
cityspan.innerText=`${sel_hotel.list.city}`;

review.appendChild(starspan);
review.appendChild(badgespan);
review.appendChild(cityspan);
detail.appendChild(review);


let roomimg=document.getElementsByClassName("roomimg")[0];
let room1=document.createElement('div');
room1.className="room1";
room1.innerHTML=`<img src="${sel_hotel.list.images[0]}" alt="" style="    width: 100%;">`;
roomimg.appendChild(room1);

let rooms=document.createElement('div');
rooms.className="rooms";
let rooms2=document.createElement('div');
rooms2.className="rooms2";
rooms2.innerHTML=`<div class="room2"><img src="${sel_hotel.list.images[1]}" alt=""  style="    width: 100%;"></div>
<div class="room3"><img src="${sel_hotel.list.images[2]}" alt=""  style="    width: 100%;"> </div>`;
let rooms3=document.createElement('div');
rooms3.className="rooms3";
rooms3.innerHTML=`<div class="room4"><img src="${sel_hotel.list.images[3]}" alt=""  style="    width: 100%;"></div>
<div class="room5"><img src="${sel_hotel.list.images[4]}" alt=""  style="    width: 100%;"></div>`;
rooms.appendChild(rooms2);
rooms.appendChild(rooms3);

roomimg.appendChild(rooms);



let user=document.getElementsByClassName("user")[0];
user.innerHTML=`<div>
<p>Entire rental unit hosted by Ghazal</p>
<p>Entire rental unit hosted by Ghazal</p>
</div>
<span style="height: 50px;
width: 50px;"><img src="${sel_hotel.list.hostThumbnail}" alt="" style="height: 100%;
width: 100%;
border-radius: 25px;"></span>`;

let theory=document.getElementsByClassName("thoery")[0];
theory.innerHTML=`<p style="margin-top: 30px;">Come and stay in this superb duplex T2, in the heart of the historic center of ${sel_hotel.list.city}.
Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all the charms of the city thanks to its ideal location. Close to many shops, bars and restaurants, you can access the apartment by tram A and C and bus routes 27 and 44.
<br>...</p><br><br>
<p style="margin-bottom: 30px;"><a href="" style="color: black; ">Show more ></a></p>`;

let sleepbed=document.getElementById("sleepbed");
sleepbed.innerHTML=`<img src="${sel_hotel.list.images[2]}" alt="" style="height: 185px;
border-radius: 10px;">`;
let bed =document.getElementById("bed");
bed.innerText=`${sel_hotel.list.beds} bed`;

let price1=document.getElementsByClassName("price1")[0];
price1.innerHTML=`<p style="
font-size: 20px;
font-weight: 500;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
">${sel_hotel.list.price.priceItems[0].title}</p>`;

let pricerate=document.getElementsByClassName("pricerate")[0];
pricerate.innerHTML=`<img src="./star.svg" alt=""> ${sel_hotel.list.price.rate} . ${sel_hotel.list.reviewsCount} reviews`;

let duration1=document.getElementsByClassName("duration1")[0];
duration1.innerHTML=`<p>${hotel_det.checkin}</p>`;
let duration2=document.getElementsByClassName("duration2")[0];
duration2.innerHTML=`<p>${hotel_det.checkout}</p>`;
let durationdown=document.getElementsByClassName("durationdown")[0];
durationdown.innerHTML=`<p>${hotel_det.guest} guests</p>`;

let side11 = document.getElementById("side11");
let checkinDate = new Date(hotel_det.checkin);
let checkoutDate = new Date(hotel_det.checkout);
let dif = checkoutDate.getTime() - checkinDate.getTime();
let days = Math.floor(dif / (1000 * 60 * 60 * 24));
let pricePerNight = parseFloat(sel_hotel.list.price.priceItems[0].title.replace('$', '')); // Remove dollar sign and convert to a number
let amt = pricePerNight * days;
side11.innerHTML =  `<p style="
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
">$${pricePerNight} x ${days} night${days > 1 ? 's' : ''}</p>`;

let side21 = document.getElementById("side21");
side21.innerHTML = `<p style="
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
">$${amt}</p>`;

let taxed=amt+parseFloat(sel_hotel.list.price.priceItems[1].amount);

let tax=document.getElementById("side61");
tax.innerText=`$${parseFloat(sel_hotel.list.price.priceItems[1].amount)}`;


let tot=document.getElementById("tot");
tot.innerHTML=`<p style="
font-size: 16px;
font-weight: 550;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
">${taxed}</p>`;



let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: sel_hotel.list.lat, lng: sel_hotel.list.lng }, // Centered at some default location
        zoom: 8
    });
}

let locatdesc=document.getElementById("locatdesc");
locatdesc.innerText=`${sel_hotel.list.address}`;

let dp=document.getElementsByClassName("dp")[0];
dp.innerHTML=`<img src="${sel_hotel.list.hostThumbnail}"  alt="" style="     border-radius: 10px;   height: 100%;">`;
let dpname=document.getElementsByClassName("dpname")[0];
dpname.innerHTML=`${sel_hotel.list.name}`;





// AIzaSyB0YiTHf5EdxF_PbGP6NTg3d8hRbaQmaWc