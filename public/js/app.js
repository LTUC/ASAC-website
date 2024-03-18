// const asac_programs = require("./programs.json");
// import asac_programs from "./programs.json";
document.addEventListener("DOMContentLoaded", () => {
    class Header {
        constructor() {
            this.header = document.querySelector("header");
            this.header_is_colored = false;
            this.open_flag = false;
        }
        toggleClass(element, e_class) {
            element.classList.toggle(e_class);
        }
        addClass(element, e_class) {
            element.classList.add(e_class);
        }

        removeClass(element, e_class) {
            element.classList.remove(e_class);
        }


        mainToggle() {
            // toggle the active class in header
            this.toggleClass(this.header, "active");
        }

        mobileScrollEvent(e) {
            // scroll event in mobile view
            if (window.scrollY > 30 && this.header_is_colored == false) {
                this.mainToggle();
                this.header_is_colored = true;
            }
            if (window.scrollY <= 30 && this.header_is_colored == true) {
                this.mainToggle();
                this.header_is_colored = false;
            }
        }

        desktopScrollEvent(e) {
            // scroll event in desktop view
            if (window.scrollY > 30 && this.header_is_colored == false) {
                this.mainToggle();
                this.header_is_colored = true;
            }
            if (window.scrollY <= 30 && this.header_is_colored == true) {
                this.mainToggle();
                this.header_is_colored = false;
            }
        }

        headerMove() {
            // this function for header scrolling either in mobile or desktop view
            // ### mobile view
            if (window.innerWidth <= 1023) {
                window.addEventListener("scroll", (e) => {
                    this.mobileScrollEvent(e);
                });
            } else {
                // ### desktop view
                window.addEventListener("scroll", (e) => {
                    this.desktopScrollEvent(e);
                });
            }
        }

        activateHeader(page_obj) {
            // make the header active and has white background in mobile
            if (page_obj.isTabAndMob()) {
                this.addClass(this.header, "mobile");
            }
            else {
                this.removeClass(this.header, "mobile")
            }
            this.headerMove();
        }
    }

    class Page {
        constructor() {
            this.banner = document.querySelector("#banner");
        }
        isMobile() {
            return window.innerWidth < 768;
        }
        isTabAndMob() {
            return window.innerWidth < 1024;
        }
    }

    class Accordion {
        constructor() {
            this.acc = document.querySelectorAll(".accordion");
        }
        activate_accordion() {
            // to active and open/close the accordion
            for (let i = 0; i < this.acc.length; i++) {
                this.acc[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    let panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            }
        }
    }

    class NewsManager {
        constructor() {
            this.latest_section = document.getElementById("latest-news");
        }

        async getNews(url) {
            const response = await fetch(url, {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            });
            return response.json();
        }

        async getLatestNews() {
            // get news data from json file
            try {
                let data = await fetch("./data/news.json")
                data = await data.json()
                return data.data.slice(0, 3)
            } catch (err) {
                // pass
            }
        }

        createLatestNews(latest_news) {
            // create the news cards

            let inner_latest_section = document.createElement("div");

            for (let i = 0; i < latest_news.length; i++) {
                let news_div = document.createElement("div"); //card
                news_div.classList.add("latest-card");

                let news_div_link = document.createElement("a");
                news_div_link.href = `${latest_news[i].url}`;

                let news_image = document.createElement("img");
                if (latest_news[i].image) {
                    news_image.src = `https://placehold.co/800?text=placeholder`;
                }
                else {
                    news_image.src = `https://placehold.co/800?text=placeholder`;
                }

                news_image.classList.add("latest-card-img");

                let inner_latest_news = document.createElement("div");
                let inner_latest_date = document.createElement("span");
                let inner_latest_title = document.createElement("p");

                inner_latest_date.innerHTML = `<i class="fa-solid fa-calendar-days" style="color: #A3238E; padding-right: 10px;"></i>${latest_news[i].published_at}`;

                inner_latest_title.innerHTML = `${latest_news[i].title}`;

                inner_latest_news.appendChild(inner_latest_date);
                inner_latest_news.appendChild(inner_latest_title);

                news_div_link.appendChild(news_image);
                news_div_link.appendChild(inner_latest_news);

                news_div.appendChild(news_div_link);

                inner_latest_section.appendChild(news_div);
            }
            this.latest_section.appendChild(inner_latest_section);
        }

        async activateNewsSection() {
            // function to control the process between geting news data and create news cards
            let latest_news = await this.getLatestNews();

            this.createLatestNews(latest_news);

        }
    }

    class Slider {
        constructor() {
            this.sliders = document.querySelectorAll(".carosel");
            this.scroll_divs = document.querySelectorAll(".scroll-img");
            this.left_arrows = document.querySelectorAll(".left-arrow");
            this.right_arrows = document.querySelectorAll(".right-arrow");
            this.start_gap = 50;
            this.scroll_side = new Array(this.sliders.length);
            this.programs = document.querySelectorAll(".program-titles button");
            this.cards = document.querySelectorAll(".program-cards .cardset");
            this.left_arrow_program = document.querySelectorAll(".programs-left-arrow");
            this.right_arrow_program = document.querySelectorAll(".programs-right-arrow");
            this.carosel_active = null;
            this.cardset_inner = null;
            this.left_program_button = null;
            this.right_program_button = null;
            this.target = null;
        }
        scrollLeft() {
            // handle the scrolling left event
            for (let i = 0; i < this.left_arrows.length; i++) {
                if (page_obj.isTabAndMob()) {
                    this.left_arrows[i].addEventListener("click", () => {
                        this.sliders[i].scrollLeft -=
                            this.scroll_divs[i].children[0].getBoundingClientRect().width + 32;
                    });
                } else {
                    this.left_arrows[i].addEventListener("click", () => {
                        this.sliders[i].scrollLeft -= 0.75 * window.innerWidth;
                    });
                }
            }
        }

        scrollRight() {
            // handle the scrolling right event

            for (let i = 0; i < this.right_arrows.length; i++) {
                if (page_obj.isTabAndMob()) {
                    this.right_arrows[i].addEventListener("click", () => {
                        this.sliders[i].scrollLeft +=
                            this.scroll_divs[i].children[0].getBoundingClientRect().width + 32;
                    });
                } else {
                    this.right_arrows[i].addEventListener("click", () => {
                        this.sliders[i].scrollLeft += 0.75 * window.innerWidth;
                    });
                }
            }
        }

        scrollMotion() {
            for (let i = 0; i < this.sliders.length; i++) {
                this.sliders[i].addEventListener("scroll", (e) => {
                    if (true) {
                        this.englishSliding(e, i);
                    }
                });
            }
        }

        englishSliding(e, i) {
            // handle the scroll either right/left in english version
            let scroll_width = this.scroll_divs[i].offsetWidth;
            if (e.target.scrollLeft <= this.start_gap && this.scroll_side[i] != "left") {
                this.left_arrows[i].classList.add("hide");
                this.scroll_side[i] = "left";
            } else if (
                e.target.scrollLeft >= this.start_gap &&
                e.target.scrollLeft <= scroll_width - window.innerWidth - this.start_gap &&
                this.scroll_side[i] != "center"
            ) {
                this.left_arrows[i].classList.remove("hide");
                this.right_arrows[i].classList.remove("hide");
                this.scroll_side[i] = "center";
            } else if (
                e.target.scrollLeft >= scroll_width - window.innerWidth - this.start_gap &&
                this.scroll_side[i] != "right"
            ) {
                this.right_arrows[i].classList.add("hide");
                this.scroll_side[i] = "right";
            }
        }

        hideArrow(slider, scroll_i, right, left) {
            //hide the arrows when reaching the most left or the most right when srcoll
            if (slider.classList.contains("left")) {
                left.classList.toggle("hide", true);
            } else if (slider.classList.contains("right")) {
                slider.scrollLeft = true
                    ? scroll_i - 0.5 * window.innerWidth
                    : -scroll_i + 0.5 * window.innerWidth;
                left.classList.toggle("hide", false);
                right.classList.toggle("hide", true);
            } else if (slider.classList.contains("center")) {
                slider.scrollLeft = true
                    ? 0.5 * scroll_i - 0.5 * window.innerWidth
                    : -0.5 * scroll_i + 0.5 * window.innerWidth;
            }
        }

        hideArrowByCaroselType() {
            // hide the arrows depends on carosel type is it left, right or center
            for (let i = 0; i < this.sliders.length; i++) {
                let scroll_width = this.scroll_divs[i].offsetWidth;
                this.hideArrow(this.sliders[i], scroll_width, this.right_arrows[i], this.left_arrows[i]);
            }
        }

    }

    class Programs {
        constructor() {
            this.result = document.getElementById("resultIndicator")
            this.filteredPrograms = []
            this.programsData = []
        }

        async getPrograms() {
            // get news data from json file
            try {
                let data = await fetch("../data/programs.json")
                data = await data.json()
                return data
            } catch (err) {
                // pass
            }
        }

        filterPrograms() {
            this.degree = document.getElementById("degreeFilter").value;
            this.timing = document.getElementById("timingFilter").value;
            this.location = document.getElementById("locationFilter").value;

            this.filteredPrograms = this.programsData.filter(program => {
                const programLocations = program.location.split("/");
                const programTiming = program.timing.split("/");
                return (this.degree === "all" || program.degree === this.degree) &&
                    (this.timing === "all" || programTiming.includes(this.timing)) &&
                    (this.location === "all" || programLocations.includes(this.location));
            });

            this.result.textContent = `${this.filteredPrograms.length} programs found`;
            this.result.classList.add('prog-result')
            this.renderPrograms(this.filteredPrograms);
        }

        renderPrograms(programs) {
            try {

                const cardsContainer = document.getElementById("programCards");
                cardsContainer.innerHTML = "";
                programs.forEach(program => {
                    const cardHtml = `
                        <div class="card col-10 col-md-5 col-lg-5 mb-3">
                            <div class="card-body">
                                <!-- Your card content here -->
                                <img src="${program.icon}" alt='icon' class="prog-icon mb-2"/>
                                
                                <h5 class="card-title mb-4">${program.title}</h5>
                                <h6 class="card-subtitle mb-2"><i class="fa-solid fa-award me-1 gray-color"></i>${program.degree === "Bachelor" ? "Bachelor" : "International Diploma"}</h6>
                                <p class="card-text"><span class="d-block mb-2"><i
                                                class="fa-solid fa-clock gray-color"></i> ${program.timing.charAt(0).toUpperCase() + program.timing.slice(1)}</span><span><i
                                                class="fa-solid fa-location-dot gray-color"></i>
                                                ${program.location.charAt(0).toUpperCase() + program.location.slice(1)}</span></span>
                                </p>
                                <a class="btn btn-primary" href="${program.link}" role="button">Guidance Plan</a>
                            </div>
                        </div>
                    `;
                    cardsContainer.innerHTML += cardHtml;
                });
            } catch (err) {
                //
            }
        }

        triggerchange() {
            try {
                document.getElementById("degreeFilter").addEventListener("change", () => {
                    this.filterPrograms();
                });
                document.getElementById("timingFilter").addEventListener("change", () => {
                    this.filterPrograms();
                });
                document.getElementById("locationFilter").addEventListener("change", () => {
                    this.filterPrograms();
                });

            } catch (err) {
                //
            }
        }

        async activatePrograms() {
            this.triggerchange()
            this.programsData = await this.getPrograms();
            this.renderPrograms(this.programsData);
        }


    }

    // CALLING IS HERE vvvvvvv
    // header
    let header_obj = new Header();
    let page_obj = new Page();
    header_obj.activateHeader(page_obj)
    window.addEventListener("resize",
        () => { header_obj.activateHeader(page_obj) }
    );

    // news and events
    let news_section = new NewsManager();
    if (news_section.latest_section) {
        news_section.activateNewsSection();
    }

    // slider start
    let slider_obj = new Slider()
    slider_obj.scrollLeft();
    slider_obj.scrollRight();
    slider_obj.scrollMotion()
    slider_obj.hideArrowByCaroselType()

    try {
        slider_obj.programs.forEach((program) => {
            program.addEventListener("click", (e) => slider_obj.handelProgramSlider(program));
        });
        slider_obj.handelProgramSlider(slider_obj.programs[0]);
    } catch (error) {
        // pass
    }

    // accordion
    let main_acc = new Accordion();
    if (main_acc.acc) {
        main_acc.activate_accordion();
    }

    // programs
    let programs = new Programs()
    try {
        programs.activatePrograms()
    } catch (err) {
        // pass
    }





    
});
