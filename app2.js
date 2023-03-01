const loadAllPerson=()=>{
    const url="https://forbes400.onrender.com/api/forbes400?limit=20";
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayAllPerson(data))
}
const displayAllPerson = data => {
    data=data.slice(0,10);
    display(data);
  }

  function display(data){
    const allPersonContainer = document.getElementById('all-person-container');
    allPersonContainer.innerText='';
    data.forEach(newData => {
    //   console.log(newData);
      const div = document.createElement('div');
      div.classList.add('card', 'mb-3');
      div.innerHTML = `
        <div class="row g-0">
          <h3>Name: ${newData.uri}</h3>
          <div class="col-md-4">
            <img src="${newData.squareImage}" class="img-fluid rounded-start" alt="...">
            <p class="card-text"><span class="fw-bold fs-6">source: </span>${newData.source}</p>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text"><span class="fw-bold fs-6">Citizenship: </span>${newData.countryOfCitizenship}</p>
              <p class="card-text"><span class="fw-bold fs-6">State: ${newData.state}</span></p>
              <p class="card-text"><span class="fw-bold fs-6">City: </span>${newData.city}</p>
              <p class="card-text"><span class="fw-bold fs-6">Total Shares :</span>${newData.financialAssets?.[0]?.numberOfShares ?? newData.financialAssets?.[1]?.numberOfShares ?? newData.financialAssets?.[2]?.numberOfShares ?? "not found"}</p>
              <p class="card-text"><span class="fw-bold fs-6">Share Price: $</span>${newData.financialAssets?.[0]?.sharePrice ?? newData.financialAssets?.[1]?.sharePrice ?? newData.financialAssets?.[2]?.sharePrice ?? "not found"}</p>
            </div>
          </div>
        </div>
      `
      allPersonContainer.appendChild(div);
    })
  }

    document.getElementById('show-More').addEventListener('click',function(){
    // display();
    const btn=document.getElementById('show-More');
    const url="https://forbes400.onrender.com/api/forbes400?limit=50";
    fetch(url)
    .then(res=>res.json())
    .then(data=>display(data))
    btn.classList.add('d-none');
  })


  const filterByState=()=>{
    const inputState=document.getElementById('input-state').value;
    const url=`https://forbes400.onrender.com/api/forbes400/states/${inputState}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>display(data))
  }
  const filterByGender=()=>{
    const inputGender=document.getElementById('input-gender').value;
    const url=`https://forbes400.onrender.com/api/forbes400/${inputGender}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>display(data))
  }

  loadAllPerson();
  