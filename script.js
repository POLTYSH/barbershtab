/* =========================================================
   БАРБЕР ШТАБ
   PREMIUM WEBSITE SCRIPT
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("active");
        menuButton.classList.toggle("active");

    });


    nav.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");
            menuButton.classList.remove("active");

        });

    });

}


/* =========================================================
   HEADER ON SCROLL
   ========================================================= */

const header =
    document.querySelector(".site-header");


function updateHeader() {

    if (!header) return;

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);

updateHeader();


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section, .info-card, .service-item, .master-card, .work-card, .review-card, .contact-grid, .experience-grid, .booking-inner"
    );


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        "revealed"
                    );

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach((element) => {

        element.classList.add(
            "revealed"
        );

    });

}


/* =========================================================
   HERO IMAGE MOVEMENT
   ========================================================= */

const heroImage =
    document.querySelector(".hero-image");


if (
    heroImage &&
    window.matchMedia("(hover: hover)").matches
) {

    heroImage.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroImage.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;

            heroImage.style.transform =
                `translate(${x * 8}px, ${y * 8}px)`;

        }
    );


    heroImage.addEventListener(
        "mouseleave",
        () => {

            heroImage.style.transform = "";

        }
    );

}


/* =========================================================
   MASTER CARD TILT
   ========================================================= */

const masterCards =
    document.querySelectorAll(
        ".master-card"
    );


if (
    masterCards.length &&
    window.matchMedia("(hover: hover)").matches
) {

    masterCards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    (y - centerY) / 45;

                const rotateY =
                    (centerX - x) / 45;

                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });

}


/* =========================================================
   WORK CARD HOVER
   ========================================================= */

const workCards =
    document.querySelectorAll(
        ".work-card"
    );


if (
    workCards.length &&
    window.matchMedia("(hover: hover)").matches
) {

    workCards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left) /
                    rect.width -
                    0.5;

                const y =
                    (event.clientY - rect.top) /
                    rect.height -
                    0.5;

                card.style.setProperty(
                    "--mouse-x",
                    `${x * 100}%`
                );

                card.style.setProperty(
                    "--mouse-y",
                    `${y * 100}%`
                );

            }
        );

    });

}


/* =========================================================
   MAGNETIC BUTTONS
   ========================================================= */

const magneticButtons =
    document.querySelectorAll(
        ".button-primary, .header-button"
    );


if (
    magneticButtons.length &&
    window.matchMedia("(hover: hover)").matches
) {

    magneticButtons.forEach((button) => {

        button.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    button.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;

                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;

                button.style.transform =
                    `translate(${x * 0.08}px, ${y * 0.08}px)`;

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform = "";

            }
        );

    });

}


/* =========================================================
   STATS ANIMATION
   ========================================================= */

const statNumbers =
    document.querySelectorAll(
        ".stat strong"
    );


if (
    statNumbers.length &&
    "IntersectionObserver" in window
) {

    const statsObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    const element =
                        entry.target;

                    const original =
                        element.textContent.trim();

                    const number =
                        parseInt(
                            original.replace(
                                /\D/g,
                                ""
                            ),
                            10
                        );

                    if (!number) {
                        return;
                    }

                    const suffix =
                        original.replace(
                            /[0-9]/g,
                            ""
                        );

                    const duration = 1200;

                    const start =
                        performance.now();


                    function animate(time) {

                        const progress =
                            Math.min(
                                (time - start) /
                                duration,
                                1
                            );

                        const eased =
                            1 -
                            Math.pow(
                                1 - progress,
                                3
                            );

                        const current =
                            Math.floor(
                                number * eased
                            );

                        element.textContent =
                            current + suffix;


                        if (progress < 1) {

                            requestAnimationFrame(
                                animate
                            );

                        }

                    }


                    requestAnimationFrame(
                        animate
                    );

                    observer.unobserve(
                        element
                    );

                });

            },
            {
                threshold: 0.7
            }
        );


    statNumbers.forEach((stat) => {

        statsObserver.observe(stat);

    });

}


/* =========================================================
   REVIEW STAR SELECTOR
   ========================================================= */

const ratingSelector =
    document.getElementById(
        "ratingSelector"
    );

const ratingInput =
    document.getElementById(
        "reviewRating"
    );


if (
    ratingSelector &&
    ratingInput
) {

    const stars =
        ratingSelector.querySelectorAll(
            ".rating-star"
        );


    function updateStars(value) {

        stars.forEach((star) => {

            const rating =
                Number(
                    star.dataset.rating
                );

            star.classList.toggle(
                "selected",
                rating <= value
            );

        });

    }


    stars.forEach((star) => {


        star.addEventListener(
            "mouseenter",
            () => {

                const value =
                    Number(
                        star.dataset.rating
                    );

                stars.forEach((item) => {

                    const rating =
                        Number(
                            item.dataset.rating
                        );

                    item.classList.toggle(
                        "preview",
                        rating <= value
                    );

                });

            }
        );


        star.addEventListener(
            "mouseleave",
            () => {

                stars.forEach((item) => {

                    item.classList.remove(
                        "preview"
                    );

                });

            }
        );


        star.addEventListener(
            "click",
            () => {

                const value =
                    Number(
                        star.dataset.rating
                    );

                ratingInput.value =
                    value;

                updateStars(value);

                ratingSelector.classList.add(
                    "rating-selected"
                );


                star.classList.remove(
                    "ignite"
                );

                void star.offsetWidth;

                star.classList.add(
                    "ignite"
                );

            }
        );

    });

}


/* =========================================================
   SAVED REVIEWS
   ========================================================= */

const reviewsList =
    document.getElementById(
        "reviewsList"
    );


function escapeHTML(value) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent =
        value;

    return div.innerHTML;

}


function addReviewToPage(review) {

    if (!reviewsList) {
        return;
    }


    const article =
        document.createElement(
            "article"
        );


    article.className =
        "review-card";


    article.dataset.rating =
        review.rating;


    const rating =
        Number(
            review.rating
        );


    const stars =
        "★".repeat(rating) +
        "☆".repeat(5 - rating);


    article.innerHTML = `

        <div class="review-top">

            <div>

                <h3>
                    ${escapeHTML(review.name)}
                </h3>

                <div class="review-stars">
                    ${stars}
                </div>

            </div>

            <span class="review-date">
                ${escapeHTML(review.date)}
            </span>

        </div>

        <p>
            ${escapeHTML(review.text)}
        </p>

    `;


    reviewsList.prepend(
        article
    );

}


/* =========================================================
   LOAD REVIEWS FROM LOCAL STORAGE
   ========================================================= */

function loadSavedReviews() {

    if (!reviewsList) {
        return;
    }


    const savedReviews =
        JSON.parse(
            localStorage.getItem(
                "barberShtabReviews"
            ) || "[]"
        );


    savedReviews.forEach((review) => {

        addReviewToPage(
            review
        );

    });

}


loadSavedReviews();


/* =========================================================
   REVIEW FORM
   ========================================================= */

const reviewForm =
    document.getElementById(
        "reviewForm"
    );


if (reviewForm) {

    reviewForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const nameInput =
                document.getElementById(
                    "reviewName"
                );

            const textInput =
                document.getElementById(
                    "reviewText"
                );

            const ratingInput =
                document.getElementById(
                    "reviewRating"
                );


            const name =
                nameInput
                    ? nameInput.value.trim()
                    : "";

            const text =
                textInput
                    ? textInput.value.trim()
                    : "";

            const rating =
                ratingInput
                    ? Number(
                        ratingInput.value
                    )
                    : 0;


            if (
                !name ||
                !text ||
                !rating
            ) {

                showNotification(
                    "Будь ласка, заповни всі поля та обери оцінку."
                );

                return;

            }


            const button =
                reviewForm.querySelector(
                    "button[type='submit']"
                );


            if (!button) {
                return;
            }


            const originalText =
                button.textContent;


            const review = {

                name: name,

                text: text,

                rating: rating,

                date:
                    new Date()
                        .toLocaleDateString(
                            "uk-UA"
                        )

            };


            /* SAVE */

            const savedReviews =
                JSON.parse(
                    localStorage.getItem(
                        "barberShtabReviews"
                    ) || "[]"
                );


            savedReviews.push(
                review
            );


            localStorage.setItem(
                "barberShtabReviews",
                JSON.stringify(
                    savedReviews
                )
            );


            /* SHOW REVIEW */

            addReviewToPage(
                review
            );


            /* BUTTON */

            button.disabled =
                true;

            button.textContent =
                "Відгук додано ✓";

            button.classList.add(
                "success"
            );


            /* RESET */

            reviewForm.reset();


            if (ratingInput) {

                ratingInput.value =
                    "";

            }


            if (ratingSelector) {

                ratingSelector
                    .querySelectorAll(
                        ".rating-star"
                    )
                    .forEach((star) => {

                        star.classList.remove(
                            "selected",
                            "preview",
                            "ignite"
                        );

                    });

                ratingSelector.classList.remove(
                    "rating-selected"
                );

            }


            showNotification(
                "Відгук додано! Дякуємо за твою оцінку ❤️"
            );


            /* GOOGLE MAPS */

            setTimeout(() => {

                window.open(
                    "https://www.google.com/maps/search/?api=1&query=Барбер+Штаб+Луцьк",
                    "_blank"
                );

            }, 900);


            /* RESET BUTTON */

            setTimeout(() => {

                button.disabled =
                    false;

                button.textContent =
                    originalText;

                button.classList.remove(
                    "success"
                );

            }, 3000);

        }
    );

}


/* =========================================================
   CONTACT FORM
   ========================================================= */

const contactForm =
    document.querySelector(
        ".contact-form"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const button =
                contactForm.querySelector(
                    "button[type='submit']"
                );


            if (!button) {
                return;
            }


            const originalText =
                button.textContent;


            button.disabled =
                true;

            button.textContent =
                "Повідомлення надіслано ✓";


            button.classList.add(
                "success"
            );


            contactForm.reset();


            setTimeout(() => {

                button.disabled =
                    false;

                button.textContent =
                    originalText;

                button.classList.remove(
                    "success"
                );

            }, 3000);

        }
    );

}


/* =========================================================
   NOTIFICATION
   ========================================================= */

function showNotification(message) {

    const existing =
        document.querySelector(
            ".site-notification"
        );


    if (existing) {
        existing.remove();
    }


    const notification =
        document.createElement(
            "div"
        );


    notification.className =
        "site-notification";


    notification.innerHTML = `

        <span class="notification-icon">
            ✓
        </span>

        <span>
            ${message}
        </span>

    `;


    document.body.appendChild(
        notification
    );


    requestAnimationFrame(() => {

        notification.classList.add(
            "show"
        );

    });


    setTimeout(() => {

        notification.classList.remove(
            "show"
        );


        setTimeout(() => {

            notification.remove();

        }, 400);

    }, 3500);

}


/* =========================================================
   IMAGE FALLBACK
   ========================================================= */

document
    .querySelectorAll("img")
    .forEach((image) => {

        image.addEventListener(
            "error",
            () => {

                image.classList.add(
                    "image-error"
                );

            }
        );

    });


/* =========================================================
   PAGE LOADED
   ========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);


/* =========================================================
   TOUCH DEVICE
   ========================================================= */

if (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0
) {

    document.body.classList.add(
        "touch-device"
    );

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

document
    .querySelectorAll(
        ".footer-bottom span:first-child"
    )
    .forEach((element) => {

        element.textContent =
            `© ${new Date().getFullYear()} Барбер Штаб`;

    });