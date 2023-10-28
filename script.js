// Storing the search_details object as a JSON string in localStorage
function storevalues() {
    let city = document.getElementById("city").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let guest = document.getElementById("guest").value;
  
    if (!city || !checkin || !checkout || !guest) {
      return;
    }
  
    let search_details = {
      city: city,
      checkin: checkin,
      checkout: checkout,
      guest: guest,
    };
  
    localStorage.setItem("search_details", JSON.stringify(search_details));
window.location.href="http://127.0.0.1:5500/index3.html" 
}
  
  