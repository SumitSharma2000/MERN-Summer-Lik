const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form[0].value;
  const email = form[1].value;
  const password = form[2].value;
  const phoneNumber = form[3].value;
  const profileImage = form[4].files[0];

  console.log(name, email, password, phoneNumber);

  const dataElement = document.getElementById('data');
  dataElement.textContent = `Welcome, ${name}! Your account details are as follows.`;

  datatext = dataElement.textContent;


  const reader = new FileReader();
  reader.onload = function (event) {
    const imageSrc = event.target.result;
    form.style.display = "none";
    renderCard(name, email, password, phoneNumber, imageSrc);
  };

  if (profileImage) {
    reader.readAsDataURL(profileImage);
  }
};

const renderCard = (name, email, password, phoneNumber, imageSrc) => {
  const root = document.getElementById("root");
  const dataElement = document.getElementById('data');
  dataElement.textContent = `Welcome, ${name}! Your account details are as follows.`;



  root.setAttribute("class", "card");

  root.innerHTML = `
     <img src="${imageSrc}" alt="Profile Image" class="profile-image">
     <div class="card-details">
      <h3 class='name'>Name: ${name}</h3>
      <h4 class='email'>Email: ${email}</h4>
      <h4 class='password'>Password: ${password}</h4>
      <h4 class='phone-number'>Phone Number: ${phoneNumber}</h4>
    </div>`;
};
