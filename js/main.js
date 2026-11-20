/*
  ============================================================
  NestFindr - main.js
  Two small behaviours (kept minimal on purpose):
    1. Mobile hamburger menu open/close
    2. Contact form display-only confirmation message
       (the assessment brief requires the form to be shown,
        not to submit data anywhere)
  ============================================================
*/

"use strict";

/* ---------- 1. Mobile navigation toggle ---------- */
const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");

navToggle.addEventListener("click", function () {
  const isOpen = mobileMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

/* Close the mobile menu after choosing a section (smooth anchor jump) */
mobileMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    mobileMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ---------- 2. Contact form: display-only confirmation ---------- */
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", function (event) {
  // The brief says the form is display-only: never send data anywhere.
  event.preventDefault();

  const name = document.getElementById("cfName").value.trim();
  const email = document.getElementById("cfEmail").value.trim();
  const message = document.getElementById("cfMsg").value.trim();

  // Very light validation - just enough for the demo.
  if (name === "" || email === "" || message === "") {
    formNote.style.color = "#C0392B";
    formNote.textContent = "Please fill in your name, email and message.";
    return;
  }

  formNote.style.color = "#0F766E";
  formNote.textContent =
    "Thank you, " + name + "! Your message has been received. We will reply within one working day. (Demo form - no data is submitted.)";

  contactForm.reset();
});
