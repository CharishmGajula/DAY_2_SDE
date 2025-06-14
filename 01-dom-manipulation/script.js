//EASY1
document.getElementById("main-heading").textContent="My Awesome Shop"


//EASY2
document.getElementsByClassName("tagline")[0].innerHTML="Find the <strong>best</strong> products here!"

//EASY3
document.querySelector("footer p").textContent = "&copy; 2025 Charishma Gajula!";


//MEDIUM1
const main=document.getElementById("app-container");
const newh2=document.createElement("h2");
newh2.textContent="About Us";
main.append(newh2);

const main1=document.getElementById("app-container");
const newp=document.createElement("h2");
newp.textContent="We are a small team passionate about quality products.";
main1.append(newp);



//MEDIUM2
const newdev=document.createElement("div");
newdev.className="contact-info";

const newp1=document.createElement("p");
newp1.innerHTML = 'Email: <a href="mailto:contact@awesomeshop.com">contact@awesomeshop.com</a>';

const newp2=document.createElement("p");
newp2.textContent="Phone: 123-456-7890"


newdev.appendChild(newp1);
newdev.appendChild(newp2);

const footer = document.querySelector("footer");
footer.parentNode.insertBefore(newdev, footer);





