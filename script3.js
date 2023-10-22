const url = 'https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2024-09-16&checkout=2024-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c512195f5amsh9a60bac6de39000p12fee2jsn5a6ae20c69bb',
		'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
	}
};

async function getData(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.results);
    renderData(result.results);
} catch (error) {
	console.error(error);
}
}

function renderData(hotel){
    hotel.forEach((e) => {
        let cd=document.getElementsByClassName("cards")[0];
    //    cd.innerHTML=`<div class="card_img">img.src</div>`
    // console.log(e);hostThumbnail
    // console.log(e);hostThumbnail
    // console.log(e);hostThumbnail
    // console.log(e);hostThumbnail
    let cnt=document.createElement('div');
    cnt.className="cont1";
    let lt=document.createElement('div');
    lt.className="left";
    let rt=document.createElement('div');
    rt.className="right";

    let cdimg=document.createElement('div');
        cdimg.className="card_img";
        cdimg.innerHTML=`<img src=${e.images[0]} alt="alternative-text" style="    height: 100%;
        width: 100%; border-radius: 20px;">`;
        lt.appendChild(cdimg);
        cnt.appendChild(lt);
        cd.appendChild(cnt);


        let cddet=document.createElement('div');
        cddet.className="card_det";

        let cdhd=document.createElement('p');
        cdhd.className="cardhd";
        cdhd.innerText=`Entire home in Bordeaux`;

        let hr=document.createElement('div');
        hr.className="chr";

        let htnm=document.createElement('p');
        htnm.className="hotelnm";
        htnm.innerText=`${e.name}`;
        

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
        e.previewAmenities.forEach((k)=>{
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
        ratdv.innerHTML=`<span class="ratetext">${e.rating}</span><span><img src="rate.svg"></span><span class="ratetext">(${e.reviewsCount} reviews)</span>`;
        rat.appendChild(ratdv);


        let pr=document.createElement('div');
        pr.className="price";
        pr.innerHTML=`<span class="dol">$${e.price.rate}</span><span class="night">/night</span>`;
        rat.appendChild(pr);


        rt.appendChild(rat);
        cnt.appendChild(rt);
        cd.appendChild(cnt);


    });
}

getData();