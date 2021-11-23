let apprenant = [];
let new_apprenant = [];
let id = 0;
var compt = 0;


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fullname").innerHTML = "";
  let names = document.getElementById("ListNames");
  names.innerHTML = "";
  document.getElementById("add").addEventListener("click", function (e) {
    e.preventDefault();

    let fullname = document.getElementById("fullname").value;
      let subject = document.getElementById("subject").value;
      
      //
    apprenant.push({
      id: id,
      name: fullname,
      subject: subject,
    });
    id++;
    console.log(apprenant);

    names.innerHTML += fullname + ",";
    console.log(names);
    fullname = "";
    // document.getElementById("fullname").innerHTML += "<div class=' bg-gray-100 p-4 w-72 space-x-4 rounded-lg'>"+apprenant.name+"</div><div class='bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer'><span>Delete</span></div>'";
  });

  document.getElementById("picker").addEventListener("click", function (e) {
    e.preventDefault();
    let tirage = Math.floor(Math.random(apprenant.id) * apprenant.length);
    let i = apprenant.length;
    let n = 0;

    const headerNames = document.getElementById("headerNames");
    const dates = [];
      let day = new Date(document.getElementById("datepicker").value);
    //   document.getElementById("datepicker").min= new Date().getUTCDay;

    // skip the date sunday and saturday
    let getdate = new Date(
      day.setDate(day.getDate() + compt)
      ).toLocaleDateString();
      if (day.getDay() == 5) {
      compt += 2;
    } else if (day.getDay() == 0) {
      compt++;
    }
  
// check if array is empty
    if (apprenant.length === 0) {
      alert("Random the name is complete!");
    }
    // dates+=date.getDate();
    // console.log(date.getDate());

    //     intervalHandle = setInterval(function () {
    // if (i>=0) {
    //     console.log(headerNames.textContent = apprenant[n++ % i].name);

    //   i--;
    // } else {
    //    headerNames.textContent = apprenant[tirage].name;
    //         }

    //     }, 300);
    //     setTimeout(function () {
    //         clearInterval(intervalHandle);
    //     }, 5000);
    headerNames.textContent = apprenant[tirage].name;

    new_apprenant.push({
      id: apprenant[tirage].id,
      name: apprenant[tirage].name,
      subject: apprenant[tirage].subject,
      date: getdate,
    });

    apprenant.splice(tirage, 1);
    console.log(compt);

    console.log(new_apprenant);
    console.log(apprenant);

    //Increment Date
          compt++;
// Add list Student in  tabel
      let table = document.getElementById("ListName");
      let tr = document.createElement("tr");
      
      for (let i = 0; i < new_apprenant.length; i++){
          let td = document.createElement("td");
          let span = document.createElement("span");
          td.setAttribute("class", "px-16 py-2 flex flex-row items-center");
          span.setAttribute("class", "text-center ml-2 font-semibold fullname");
          span.context = new_apprenant[i].name;
          td.appendChild(span);
          tr.appendChild(td);
          

      }
      table.appendChild(tr);

  });
});
