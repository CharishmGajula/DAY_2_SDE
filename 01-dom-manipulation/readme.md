# DAY-2 
# ASSIGNMENT-1
## INITIAL WEBSITE WITH HTML CSS
<img width="958" alt="image" src="https://github.com/user-attachments/assets/e293d949-97b7-446d-af65-dacf3a248ee6" />

## [EASY-1]
[QUESTION]
Select the <h1 id="main-heading"> and change its textContent to "My Awesome Shop".
[CODE]
<pre>
  document.getElementById("main-heading").textContent="My Awesome Shop"
</pre>
[OUTPUT]


## [EASY-2]
[QUESTION]
Select the <p class="tagline"> and change its innerHTML to "Find the <strong>best</strong> products here!".
[CODE]
<pre>
  document.getElementsByClassName("tagline")[0].innerHTML="Find the <strong>best</strong> products here!"
</pre>
[OUTPUT]


## [EASY-3]
[QUESTION]
Select the <footer>'s <p> and change its text to include your name and the current year.
[CODE]
<pre>
document.querySelector("footer p").textContent = "&copy; 2025 Charishma Gajula!";
</pre>
[OUTPUT]

## MEDIUM
[QUESTION]
1. Select the `<main id="app-container">`.
2. Create a new `<h2>` element. Set its `textContent` to "About Us".
3. Create a new `<p>` element. Set its `textContent` to "We are a small team passionate about quality products."
4. Append both the new `<h2>` and `<p>` to the `<main>` container.
[CODE]
<pre>
const main=document.getElementById("app-container");
const newh2=document.createElement("h2");
newh2.textContent="About Us";
main.append(newh2);

const main1=document.getElementById("app-container");
const newp=document.createElement("h2");
newp.textContent="We are a small team passionate about quality products.";
main1.append(newp);
</pre>
[OUTPUT]


## HARD

[QUESTION]
1. Create a `div` element with a class of `contact-info`.
2. Inside this `div`, create two `<p>` elements:
    - The first with the text "Email: [contact@awesomeshop.com](mailto:contact@awesomeshop.com)".
    - The second with the text "Phone: 123-456-7890".
3. Select the `<footer>` element and use `insertBefore()` to place your new `contact-info` div *before* the footer.

[CODE]
<pre>
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
</pre>
[OUTPUT]





