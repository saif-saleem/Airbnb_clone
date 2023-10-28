let hotel_det=JSON.parse(localStorage.getItem("search_details"));
let hotelarray="";

const urln = `https://airbnb13.p.rapidapi.com/search-location?location=${hotel_det.city}&checkin=${hotel_det.checkin}&checkout=${hotel_det.checkout}&adults=${hotel_det.guest}&children=0&infants=0&pets=0&page=1&currency=USD`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3fa888913fmsh35518b0cfe888efp12bddajsnb256112ef398',
		'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
	}
};

async function getData(){
try {
	const response = await fetch(urln, options);
	const result = await response.json();
	console.log(result.results);
	hotelarray=(result.results);
    renderData(result.results);
} catch (error) {
	console.error(error);
}
}


let city = document.getElementById("city");
let duration = document.getElementById("duration");
let guest = document.getElementById("guest");


city.value=hotel_det.city;
duration.value=hotel_det.checkin;
guest.value=hotel_det.guest;

function displayData(ele){
    
    let cd=document.getElementsByClassName("cards")[0];
    let cnt=document.createElement('div');
    cnt.className="cont1";
    let lt=document.createElement('div');
    lt.className="left";
    let rt=document.createElement('div');
    rt.className="right";

    let cdimg=document.createElement('div');
        cdimg.className="card_img";
        cdimg.innerHTML=`<img src=${ele.images[0]} alt="alternative-text" style="    height: 100%;
        width: 100%; border-radius: 20px;">`;
        lt.appendChild(cdimg);
        cnt.appendChild(lt);
        cd.appendChild(cnt);


        let cddet=document.createElement('div');
        cddet.className="card_det";

        let cdhd=document.createElement('p');
        cdhd.className="cardhd";
        cdhd.innerText=`Entire home in ${ele.address}`;

        let hr=document.createElement('div');
        hr.className="chr";

        let htnm=document.createElement('p');
        htnm.classList.add("htnm");
        htnm.addEventListener("click", function() {
            direct_city(this);
          });
        htnm.className="hotelnm";
        htnm.innerText=`${ele.name}`;
        

        let cd1=document.createElement('div');
        cd1.className='cdet1';

        let ht=document.createElement('div');
        ht.className='fav';
        ht.innerHTML=`<img src="ht.svg">`;

        cd1.appendChild(cdhd);
        cd1.appendChild(htnm);
        cddet.appendChild(cd1);
        cddet.appendChild(ht);
        

        rt.appendChild(cddet);
        cnt.appendChild(rt);
        cd.appendChild(cnt);

        rt.appendChild(hr); 


        let cdhr=document.createElement('div');
        cd.appendChild(cdhr);

        

        let ln=document.createElement('div');
        ln.className="line";
        cd.appendChild(ln);

        


        let ftr=document.createElement('feat');
        ftr.className="feat";
        ele.previewAmenities.forEach((k)=>{
            let ft=document.createElement('span');
            ft.className="ftsp";
            ft.innerHTML=`${k}`;
            ftr.appendChild(ft);
        })
        ftr.appendChild(hr);
        rt.appendChild(ftr);
        cnt.appendChild(rt);
        cd.appendChild(cnt);


        let rat=document.createElement('div');
          rat.className="rating";
        let ratdv=document.createElement('div');
        ratdv.className="rate";
        ratdv.innerHTML=`<span class="ratetext">${ele.rating}</span><span><img src="rate.svg"></span><span class="ratetext">(${ele.reviewsCount} reviews)</span>`;
        rat.appendChild(ratdv);


        let pr=document.createElement('div');
        pr.className="price";
        pr.innerHTML=`<span class="dol">$${ele.price.rate}</span><span class="night">/night</span>`;
        rat.appendChild(pr);


        rt.appendChild(rat);
        cnt.appendChild(rt);
        cd.appendChild(cnt);

       

}

function renderData(hotel){
    // let hotels=hotel.filter((h)=>{
    //    return h.name.includes(hotel_det.city);
    // });
        
    hotel.forEach((e) => {
        displayData(e);
      });
}

getData();


function  direct_city(city){
   hotelname=city.innerText;
//    console.log(hotelname.innerText);
   hotelarray.forEach((e) => {
    if(e.name===hotelname)
    console.log(e);
    
    let hotel_selected = {
       list: e
      };
    localStorage.setItem("hotel_selected", JSON.stringify(hotel_selected));
    window.location.href="http://127.0.0.1:5500/index2.html" 
  });
}   