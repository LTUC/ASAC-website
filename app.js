document.addEventListener("DOMContentLoaded", () => {
    let slug = window.location;
    class Header {
        constructor() {
            this.header = document.querySelector("header");
            this.drop_down_language_a = document.querySelector(
                ".drop-down-language a"
            );
            this.burger_menu_icon = document.querySelector(".burger-menu-icon");
            this.dropdown = document.querySelectorAll(".dropdown");
            this.nav_close_btn = document.querySelector(".nav-close-btn");
            this.navbar = document.querySelector("#navbar");
            this.drop_down_lang = document.querySelector(".drop-down-language");
            this.drop_down_lang_inside = document.querySelector(
                ".drop-down-lang-inside"
            );
            this.language_code = document.querySelector(".language-code");
            this.language_code_inside = document.querySelector(
                ".language-code-inside"
            );
            this.home_icon = document.querySelector(".home-icon");
            this.header_icon_svg = null;
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

        checkIcon(icon, header_is_colored) {
            if (icon) {
                let icon_paths = icon.querySelectorAll("path");
                for (let i = 0; i < icon_paths.length; i++) {
                    if (header_is_colored == false) {
                        this.addClass(icon_paths[i], "black-color");
                        this.removeClass(icon_paths[i], "white-color");
                    } else {
                        this.addClass(icon_paths[i], "white-color");
                        this.removeClass(icon_paths[i], "black-color");
                    }
                }
            }
        }

        mainToggle() {
            let page = new Page();
            if (page.banner) {
                this.toggleClass(this.header, "active");
            }
        }

        mobileScrollEvent(e) {
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
            if (window.scrollY > 30 && this.header_is_colored == false) {
                this.mainToggle();
                this.checkIcon(this.home_icon, this.header_is_colored);
                this.header_is_colored = true;
            }
            if (window.scrollY <= 30 && this.header_is_colored == true) {
                this.mainToggle();
                this.checkIcon(this.home_icon, this.header_is_colored);
                this.header_is_colored = false;
            }
        }

        navToggle(e) {
            if (!this.open_flag) {
                window.removeEventListener("scroll", (e) => { this.mobileScrollEvent(e) });
                this.open_flag = true;

                if (this.home_icon) {
                    let icon_paths = this.home_icon.querySelectorAll("path");
                    for (let i = 0; i < icon_paths.length; i++) {
                        this.addClass(icon_paths[i], "black-color");
                        this.removeClass(icon_paths[i], "white-color");
                    }
                }
            } else {
                window.addEventListener("scroll", (e) => { this.mobileScrollEvent(e) });
                window.addEventListener("scroll", (e) => { this.desktopScrollEvent(e) });
                this.open_flag = false;
            }
            this.navbar.classList.toggle("hide-mobile-nav");
        }

        openDropDownOnMobile() {
            if (window.innerWidth <= 1023) {
                let drop_down_menu = document.querySelectorAll(".drop-down-menu");
                for (let i = 0; i < this.dropdown.length; i++) {
                    this.dropdown[i].addEventListener("click", () => {
                        drop_down_menu[i].classList.toggle("show-flex");
                        this.dropdown[i].classList.toggle("nav-active-color");
                    });
                }
            }
        }

        showLanguageBox() {
            this.language_code.addEventListener("click", () => {
                this.toggleClass(this.drop_down_lang, "appear");
            });

            this.language_code_inside.addEventListener("click", () => {
                this.toggleClass(this.drop_down_lang_inside, "hide");
                this.toggleClass(this.drop_down_lang_inside, "show-flex");
            });
        }

        headerMove() {
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
            if (page_obj.isTabAndMob()) {
                this.toggleClass(this.header, "mobile");
            }
            if (this.language_code) {
                this.showLanguageBox();
            }
            this.headerMove();
            this.openDropDownOnMobile();

            if (!page_obj.banner) {
                this.addClass(this.header, "active");
            }
            window.addEventListener("resize", this.headerMove);
            this.nav_close_btn.addEventListener("click", (e) => { this.navToggle(e) });
            this.burger_menu_icon.addEventListener("click", (e) => { this.navToggle(e) });
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
            return window.innerWidth < 1023;
        }
        isEnglish() {
            return "/" + slug.pathname.split("/")[1] + "/" == "/en/";
        }
        isArabic() {
            return "/" + slug.pathname.split("/")[1] + "/" == "/ar/";
        }
    }

    class Accordion {
        constructor() {
            this.acc = document.querySelectorAll(".accordion");
        }
        activate_accordion() {
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

    class CareerManager {
        constructor() {
            this.career_detail_page = document.querySelector(".career");
            this.global_location_career = "";
            this.url = null;
            this.career_list_body = document.querySelector(".career-list-body");
            this.career_see_more = document.querySelector("#career-see-more");
            this.location_button = document.querySelector(".location-button");
            this.location_form = document.querySelector(".location-form");

            this.location_checkboxes = null;
            this.career_cards = null;
            this.num_rows = 6;
            this.counter = null;
            this.start_counter = 6;
            this.filter_icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M11.0003 20C10.7169 20 10.4793 19.904 10.2873 19.712C10.0953 19.52 9.99959 19.2827 10.0003 19V13L4.20025 5.6C3.95025 5.26667 3.91259 4.91667 4.08725 4.55C4.26192 4.18333 4.56625 4 5.00025 4H19.0003C19.4336 4 19.7379 4.18333 19.9133 4.55C20.0886 4.91667 20.0509 5.26667 19.8003 5.6L14.0003 13V19C14.0003 19.2833 13.9043 19.521 13.7123 19.713C13.5203 19.905 13.2829 20.0007 13.0003 20H11.0003Z" />
             </svg>
           `;
            this.filter_result = document.querySelector(".result");
            this.search_form = document.querySelector(".search-form");
            this.career_search = ''

        }
        setLocationCheckboxes() {
            this.location_checkboxes = this.location_form.querySelectorAll(
                'input[type="checkbox"]'
            );
        }
        uncheckAllTheCheckBoxes() {

            for (let i = 0; i < this.location_checkboxes.length; i++) {
                this.location_checkboxes[i].checked = false;
            }
        }
        setSearchInput() {
            this.search_input = this.search_form.querySelector("input");
        }
        searchEvent(e) {
            e.preventDefault();
            this.uncheckAllTheCheckBoxes();
            let search = e.target.search.value;
            this.career_search = search;
            this.renderCareerLocation(true);
        }
        updateResult(num, is_search) {
            let filterd = false;
            if (this.global_location_career != "") {
                filterd = true;
            }

            if (filterd || is_search) {
                if (page_obj.isArabic()) {
                    this.filter_result.innerHTML = `${num} نتيجة`;
                } else {
                    this.filter_result.innerHTML = `${num} result found`;
                }
            } else {
                this.filter_result.innerHTML = "";
            }
        }
        async getMethod(url) {
            const response = await fetch(url, {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            });
            return response.json();
        }
        async getListCareer() {
            let url;
            if (page_obj.isArabic()) {
                url = `/careers/ar?location=${this.global_location_career}&search=${this.career_search}`;
            } else {
                url = `/careers/en?location=${this.global_location_career}&search=${this.career_search}`;
            }
            let data = await this.getMethod(url);
            return data;
        }

        seeMoreEventHandler() {
            if (this.career_see_more.getAttribute("see-more") === "true") {
                for (let i = this.start_counter; i < this.counter; i++) {
                    if (this.career_cards[i]) {
                        this.career_cards[i].classList.remove("hidden-tr");
                        this.career_cards[i].classList.add("displayed-career-card");
                    }
                }
                // Update the counters
                this.start_counter += 6;
                this.counter += 6;

                if (this.start_counter >= this.career_cards.length) {
                    this.career_see_more.textContent = "See Less";
                    this.career_see_more.setAttribute("see-more", "false");
                }
            } else {
                // Hide the extra rows
                this.start_counter = 6;
                this.counter = this.career_cards.length;
                for (let i = this.start_counter; i <= this.counter; i++) {
                    if (this.career_cards[i]) {
                        this.career_cards[i].classList.add("hidden-tr");
                        this.career_cards[i].classList.remove("displayed-career-card");
                    }
                }
                this.counter = this.start_counter + 6;

                // // Update the counters
                // news_start_counter -= 5;
                // news_counter -= 5;

                if (this.start_counter <= this.num_rows) {
                    this.career_see_more.textContent = "See More ...";
                    this.career_see_more.setAttribute("see-more", "true");
                }
            }
        }

        async renderCareerLocationWithoutUpdate() {
            const data = await this.getListCareer();
            this.updateCareerList(data);
            this.ActivateLocationButton();
        }
        async renderCareerLocation(is_search = false) {

            const data = await this.getListCareer();
            this.updateCareerList(data);
            this.updateResult(data.length, is_search);
            this.ActivateLocationButton();

        }
        careerSeeMore() {
            this.counter = this.num_rows + 5;

            this.career_cards = this.career_list_body.querySelectorAll(".career-card");
            for (let i = 0; i < this.num_rows; i++) {
                this.career_cards[i].classList.add("displayed-career-card");
                this.career_cards[i].classList.remove("hidden-tr");
            }
            for (let i = this.num_rows; i < this.career_cards.length; i++) {
                this.career_cards[i].classList.add("hidden-tr");
                this.career_cards[i].classList.remove("displayed-career-card");
            }
        }

        seeMoreActivation() {
            if (this.career_see_more) {
                this.career_see_more.addEventListener("click", (e) => {
                    this.seeMoreEventHandler();
                });
            }
        }
        updateCareerList(data) {
            this.career_list_body.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
                let career_list_card = document.createElement("div");
                career_list_card.classList.add("career-card");
                let career_card_title = document.createElement("h2");
                let career_card_info = document.createElement("div");
                let career_location = document.createElement("span");
                let career_type = document.createElement("span");
                let career_p = document.createElement("p");
                let career_button_a = document.createElement("a");
                let career_button = document.createElement("button");
                let career_button_text = document.createElement("span");
                let career_button_icon = document.createElement("span");

                career_card_title.innerHTML = `${data[i].title}`;
                career_location.innerHTML = `${data[i].job_location}`;
                career_type.innerHTML = `${data[i].job_type}`;
                career_p.innerHTML = `${data[i].job_introduction}`;
                career_button_a.href = `${data[i].url}`;
                career_button_text.innerHTML = "Read More";
                career_button_icon.innerHTML = ">";

                career_button.appendChild(career_button_text);
                career_button.appendChild(career_button_icon);
                career_button_a.appendChild(career_button);

                career_card_info.appendChild(career_location);
                career_card_info.appendChild(career_type);

                career_list_card.appendChild(career_card_title);
                career_list_card.appendChild(career_card_info);
                career_list_card.appendChild(career_p);
                career_list_card.appendChild(career_button_a);

                this.career_list_body.appendChild(career_list_card);
            }
            if (data.length > 6) {
                this.career_see_more.style.display = 'flex'

                this.careerSeeMore();
            }
            else {

                this.career_see_more.style.display = 'none'
            }
        }


        updateCareerResult(num, is_search = false) {
            let filterd = false;
            if (this.global_location_career != "") {
                filterd = true;
            }

            if (filterd || is_search) {
                if (page_obj.isArabic()) {
                    this.filter_result.innerHTML = `${num} نتيجة`;
                } else {
                    this.filter_result.innerHTML = `${num} result found`;
                }
            } else {
                this.filter_result.innerHTML = "";
            }
        }

        toggleFilterBoxAppearance(clickedIndex) {
            this.location_button.addEventListener('click', (e) => {
                if (page_obj.isMobile()) {
                    this.location_form.classList.toggle("box-appear-flex");
                }
                else {
                    this.location_form.classList.toggle("box-appear");

                }

            })
        }
        ActivateLocationButton() {
            if (this.global_location_career == "") {
                this.location_button.innerHTML = `Location ${this.filter_icon}`;
                this.location_button.classList.remove("active");
            } else {
                this.location_button.classList.add("active");
                this.location_button.innerHTML = `${this.global_location_career.charAt(0).toUpperCase() + this.global_location_career.slice(1)
                    } ${this.filter_icon}`;
            }
        }
        updateGlobalLocationAndRender() {

            for (let i = 0; i < this.location_checkboxes.length; i++) {
                this.location_checkboxes[i].addEventListener("click", (e) => {
                    if (this.location_checkboxes[i].checked) {
                        this.global_location_career = e.target.value;
                        if (this.location_checkboxes[i].value == "all") {
                            this.global_location_career = "";
                        }
                    } else {
                        this.global_location_career = "";
                    }
                    for (let j = 0; j < this.location_checkboxes.length; j++) {
                        if (this.location_checkboxes[j] != this.location_checkboxes[i]) {
                            this.location_checkboxes[j].checked = false;
                        }
                    }
                    this.renderCareerLocation();
                });
            }
        }

        hiring_message() {
            if (this.career_list_body || this.career_detail_page) {
                this.create_hiring_message();
            }
        }
        create_hiring_message() {
            let body = document.querySelector("body");
            let hiring_message = document.createElement("span");
            hiring_message.classList.add("hiring-message");
            hiring_message.innerHTML = "We are hiring";
            body.prepend(hiring_message);

            // Set a timeout to fade out and remove the message after a certain time (e.g., 3000 milliseconds = 3 seconds)
            setTimeout(function () {
                hiring_message.classList.add("hide");
                setTimeout(function () {
                    hiring_message.remove();
                }, 500); // Time for fade-out animation (half of the transition duration)
            }, 3000); // Adjust the time as needed
        }
        async activatecareersSection() {
            this.setLocationCheckboxes();
            this.updateGlobalLocationAndRender()

            this.seeMoreActivation();
            this.toggleFilterBoxAppearance()

            this.renderCareerLocationWithoutUpdate();
            this.hiring_message()
            this.search_form.addEventListener("submit", (e) => {
                this.searchEvent(e);
            });
        }



    }

    class NewsManager {
        constructor() {
            this.category_button = document.querySelector(".category-button");
            this.category_form = document.querySelector(".category-form");
            this.category_checkboxes = null;
            this.trendy_section = document.getElementById("trendy-news");
            this.latest_section = document.getElementById("latest-news");
            this.global_category = "";
            this.news_list_body = document.querySelector(".news-list-body");
            this.category_see_more = document.querySelector("#category-see-more");
            this.news_num_rows = 3;
            this.news_counter = null;
            this.news_start_counter = 3;
            this.news_body = null;
            this.news_rows = null;
            this.filter_result = document.querySelector(".result");
            this.filter_icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M11.0003 20C10.7169 20 10.4793 19.904 10.2873 19.712C10.0953 19.52 9.99959 19.2827 10.0003 19V13L4.20025 5.6C3.95025 5.26667 3.91259 4.91667 4.08725 4.55C4.26192 4.18333 4.56625 4 5.00025 4H19.0003C19.4336 4 19.7379 4.18333 19.9133 4.55C20.0886 4.91667 20.0509 5.26667 19.8003 5.6L14.0003 13V19C14.0003 19.2833 13.9043 19.521 13.7123 19.713C13.5203 19.905 13.2829 20.0007 13.0003 20H11.0003Z" />
             </svg>
           `;
            this.search_input = null;
            this.news_search = ''
            this.search_form = document.querySelector(".search-form");



        }
        setSearchInput() {
            this.search_input = this.search_form.querySelector("input");
        }
        setCategoryCheckboxes() {
            this.category_checkboxes = this.category_form.querySelectorAll(
                'input[type="checkbox"]'
            );
        }
        async getNews(url) {
            const response = await fetch(url, {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            });
            return response.json();
        }
        async getTrendyNews() {
            let url;
            if (page_obj.isArabic()) {
                url = "/news/ar/trendy";
            } else {
                url = "/news/en/trendy";
            }
            let trendy_news = await this.getNews(url);
            return trendy_news;
        }

        createTrendyNews(trendy_news) {
            for (let i = 0; i < trendy_news.length; i++) {
                let news_div = document.createElement("div");
                let inner_news_div = document.createElement("div");
                let news_div_link = document.createElement("a");

                news_div_link.href = `${trendy_news[i].url}`;

                news_div.style.background = `linear-gradient(134deg, #000 0%, rgba(0, 0, 0, 0.00) 100%), url(${trendy_news[i].news_banner_img.url}), lightgray 50% / cover no-repeat`;
                news_div.style.backgroundRepeat = "no-repeat";
                news_div.style.backgroundSize = "cover";

                let news_category = document.createElement("span");
                let news_title = document.createElement("h1");

                news_category.innerHTML = `${trendy_news[i].category}`;
                news_title.innerHTML = `${trendy_news[i].title}`;

                inner_news_div.appendChild(news_category);
                inner_news_div.appendChild(news_title);

                news_div.appendChild(inner_news_div);
                news_div_link.appendChild(news_div);
                this.trendy_section.appendChild(news_div_link);
            }
        }
        toggleFilterBoxAppearance(clickedIndex) {
            this.category_button.addEventListener('click', (e) => {
                if (page_obj.isMobile()) {
                    this.category_form.classList.toggle("box-appear-flex");
                }
                this.category_form.classList.toggle("box-appear");

            })
        }
        async getLatestNews() {
            let url;
            if (page_obj.isArabic()) {
                url = "/news/ar/latest-news";
            } else {
                url = "/news/en/latest-news";
            }
            let latest_news = await this.getNews(url);
            return latest_news;
        }

        createLatestNews(latest_news) {
            this.latest_section.classList.add("s-cards");

            let inner_latest_section = document.createElement("div");
            for (let i = 0; i < latest_news.length; i++) {
                let news_div = document.createElement("div"); //card
                news_div.classList.add("latest-card");

                let news_div_link = document.createElement("a");
                news_div_link.href = `${latest_news[i].url}`;

                let news_image = document.createElement("img");
                news_image.src = `${latest_news[i].news_banner_img.url}`;
                news_image.classList.add("latest-card-img");

                let inner_latest_news = document.createElement("div");
                let inner_latest_date = document.createElement("span");
                let inner_latest_title = document.createElement("p");

                inner_latest_date.innerHTML = `${latest_news[i].publish_date}`;

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

        async getListNews() {
            let url;
            if (page_obj.isArabic()) {
                url = `/news/ar?category=${this.global_category}&search=${this.news_search}`;
            } else {
                url = `/news/en?category=${this.global_category}&search=${this.news_search}`;
            }
            let latest_news = await this.getNews(url);
            return latest_news;
        }

        seeMoreEventHandler() {
            if (this.category_see_more.getAttribute("see-more") === "true") {
                // Show the next 5 rows
                for (let i = this.news_start_counter; i < this.news_counter; i++) {
                    if (this.news_rows[i]) {
                        this.news_rows[i].classList.remove("hidden-tr");
                        this.news_rows[i].classList.add("displayed-news-a");
                    }
                }
                // Update the counters
                this.news_start_counter += 5;
                this.news_counter += 5;

                if (this.news_start_counter >= this.news_rows.length) {
                    this.category_see_more.textContent = "See Less";
                    this.category_see_more.setAttribute("see-more", "false");
                }
            } else {
                // Hide the extra rows
                this.news_start_counter = 3;
                this.news_counter = this.news_rows.length;
                for (let i = this.news_start_counter; i <= this.news_counter; i++) {
                    if (this.news_rows[i]) {
                        this.news_rows[i].classList.add("hidden-tr");
                        this.news_rows[i].classList.remove("displayed-news-a");
                    }
                }
                this.news_counter = this.news_start_counter + 5;

                // // Update the counters
                // news_start_counter -= 5;
                // news_counter -= 5;

                if (this.news_start_counter <= this.news_num_rows) {
                    this.category_see_more.textContent = "See More ...";
                    this.category_see_more.setAttribute("see-more", "true");
                }
            }
        }

        uncheckAllTheCheckBoxes() {

            let checkboxs = this.category_form.querySelectorAll(
                'input[type="checkbox"]'
            );
            for (let i = 0; i < checkboxs.length; i++) {
                checkboxs[i].checked = false;
            }
        }
        searchEvent(e) {
            e.preventDefault();
            this.uncheckAllTheCheckBoxes();
            let search = e.target.search.value;
            this.news_search = search;
            this.renderNewsCategory(true);
        }


        async renderNewsCategoryWithoutUpdate() {
            const data = await this.getListNews();
            this.updateNewsList(data);
            this.ActivateCategoryButton();
        }
        async renderNewsCategory(is_searsh = false) {

            const data = await this.getListNews();
            this.updateNewsList(data);
            this.updateCategoryResult(data.length, is_searsh);
            this.ActivateCategoryButton();

        }
        news_see_more() {
            this.news_counter = this.news_num_rows + 5;

            this.news_rows = this.news_list_body.querySelectorAll("a");
            for (let i = 0; i < this.news_num_rows; i++) {
                this.news_rows[i].classList.add("displayed-news-a");
                this.news_rows[i].classList.remove("hidden-tr");
            }
            for (let i = this.news_num_rows; i < this.news_rows.length; i++) {
                this.news_rows[i].classList.add("hidden-tr");
                this.news_rows[i].classList.remove("displayed-news-a");
            }
        }

        seeMoreActivation() {
            if (this.category_see_more) {
                this.category_see_more.addEventListener("click", (e) => {
                    this.seeMoreEventHandler();
                });
            }
        }
        updateNewsList(data) {
            this.news_list_body.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
                let news_list_card = document.createElement("a");
                news_list_card.classList.add("displayed-news-a");
                let news_list_card_inner = document.createElement("div");
                let news_list_card_inner_inner = document.createElement("div");
                let news_list_span = document.createElement("span");
                let news_list_title = document.createElement("h2");
                news_list_span.innerHTML = `${data[i].publish_date}`;
                news_list_title.innerHTML = `${data[i].title}`;

                let news_list_image = document.createElement("img");
                news_list_image.src = `${data[i].news_banner_img.url}`;

                news_list_card.href = `${data[i].url}`;

                news_list_card_inner_inner.appendChild(news_list_span);
                news_list_card_inner_inner.appendChild(news_list_title);
                news_list_card_inner.appendChild(news_list_card_inner_inner);
                news_list_card_inner.appendChild(news_list_image);
                news_list_card.appendChild(news_list_card_inner);
                this.news_list_body.appendChild(news_list_card);
            }
            if (data.length > 5) {
                this.category_see_more.style.display = 'flex'

                this.news_see_more();
            }
            else {

                this.category_see_more.style.display = 'none'
            }
        }

        updateCategoryResult(num, is_search = false) {
            let filterd = false;
            if (this.global_category != "") {
                filterd = true;
            }

            if (filterd || is_search) {
                if (page_obj.isArabic()) {
                    this.filter_result.innerHTML = `${num} نتيجة`;
                } else {
                    this.filter_result.innerHTML = `${num} result found`;
                }
            } else {
                this.filter_result.innerHTML = "";
            }
        }

        ActivateCategoryButton() {
            if (this.global_category == "") {
                this.category_button.innerHTML = `Category ${this.filter_icon}`;
                this.category_button.classList.remove("active");
            } else {
                this.category_button.classList.add("active");
                this.category_button.innerHTML = `${this.global_category.charAt(0).toUpperCase() + this.global_category.slice(1)
                    } ${this.filter_icon}`;
            }
        }
        updateGlobalCategoryAndRender() {

            for (let i = 0; i < this.category_checkboxes.length; i++) {
                this.category_checkboxes[i].addEventListener("click", (e) => {
                    if (this.category_checkboxes[i].checked) {
                        this.global_category = e.target.value;
                        if (this.category_checkboxes[i].value == "all") {
                            this.global_category = "";
                        }
                    } else {
                        this.global_category = "";
                    }
                    for (let j = 0; j < this.category_checkboxes.length; j++) {
                        if (this.category_checkboxes[j] != this.category_checkboxes[i]) {
                            this.category_checkboxes[j].checked = false;
                        }
                    }
                    this.renderNewsCategory();
                });
            }
        }
        async activateNewsSection() {
            this.setCategoryCheckboxes();
            this.updateGlobalCategoryAndRender()
            this.seeMoreActivation();
            this.setSearchInput()
            this.toggleFilterBoxAppearance()

            let trendy_news = await this.getTrendyNews();
            this.createTrendyNews(trendy_news);

            let latest_news = await this.getLatestNews();
            this.createLatestNews(latest_news);

            this.renderNewsCategoryWithoutUpdate();
            this.search_form.addEventListener("submit", (e) => {
                this.searchEvent(e);
            });
        }
    }

    class ProgramManager {
        constructor() {
            this.filter_form = document.querySelectorAll(".filter-form");
            this.filter_buttons = document.querySelectorAll(".filter-button");
            this.data = null;
            this.keys = null;
            this.detailed_program_section =
                document.querySelector("#detailed-programs");
            this.programs_table = document.querySelector(".program-table");
            this.table_body = document.querySelector(".program-table tbody");
            this.table_head_tds = document.querySelectorAll(
                ".program-table thead th"
            );
            this.filter_icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M11.0003 20C10.7169 20 10.4793 19.904 10.2873 19.712C10.0953 19.52 9.99959 19.2827 10.0003 19V13L4.20025 5.6C3.95025 5.26667 3.91259 4.91667 4.08725 4.55C4.26192 4.18333 4.56625 4 5.00025 4H19.0003C19.4336 4 19.7379 4.18333 19.9133 4.55C20.0886 4.91667 20.0509 5.26667 19.8003 5.6L14.0003 13V19C14.0003 19.2833 13.9043 19.521 13.7123 19.713C13.5203 19.905 13.2829 20.0007 13.0003 20H11.0003Z" />
             </svg>
           `;

            this.filter_result = document.querySelector(".result");
            this.search_form = document.querySelector(".search-form");
            this.search_input = null;
            this.guidance_plan_text = null;
            this.apply_now_text = null;
            this.global_filter = null;
            this.global_keys = null;
            this.global_arabic_filter = null;
            this.table_for = null;
            this.m_div = null;
            this.filteration_section = document.querySelector(
                ".filteration-section"
            );
            this.num_rows = 5;
            this.start_counter = this.num_rows;
            this.counter = null;
            this.rows = null;
            this.body = null;
        }
        setTableFor() {
            this.table_for = document
                .querySelector("table")
                .getAttribute("tablefor")
                .split(" ");
        }
        setGlobalFilter() {
            this.global_filter = {
                school: this.table_for[0] == "All_Schools" ? "" : this.table_for[0],
                degree: this.table_for[1] == "All_Degrees" ? "" : this.table_for[1],
                location:
                    this.table_for[2] == "All_Campuses" ? "" : this.table_for[2],
                timing: "",
                search: "",
            };
        }
        setGlobalArabicFilter() {
            this.global_arabic_filter = {
                school: this.table_for[0] == "All_Schools" ? "" : this.table_for[0],
                degree: this.table_for[1] == "All_Degrees" ? "" : this.table_for[1],
                location:
                    this.table_for[2] == "All_Campuses" ? "" : this.table_for[2],
                timing: "",
                search: "",
            };
        }
        setGlobalKeys() {
            this.global_keys = Object.keys(this.global_filter);
        }
        setGuidancePlanText() {
            if (page_obj.isArabic()) {
                this.guidance_plan_text = "الخطة الإسترشادية";
            } else {
                this.guidance_plan_text = "Guidance Plan";
            }
        }
        setApplyNowText() {
            if (page_obj.isArabic()) {
                this.apply_now_text = "قدم الآن";
            } else {
                this.apply_now_text = "Apply Now";
            }
        }
        setSearchInput() {
            this.search_input = this.search_form.querySelector("input");
        }
        isTable() {
            return Boolean(this.table_body);
        }

        updateResult(num, is_search = false) {
            let filterd = false;
            let key;
            for (let fi = 0; fi < this.filter_form.length; fi++) {
                key = this.filter_form[fi].classList[1].split("-")[0];
                if (this.global_filter[key] != "") {
                    filterd = true;
                }
            }
            if (filterd || is_search) {
                if ("/" + slug.pathname.split("/")[1] + "/" == "/ar/") {
                    this.filter_result.innerHTML = `${num} نتيجة`;
                } else {
                    this.filter_result.innerHTML = `${num} result found`;
                }
            } else {
                this.filter_result.innerHTML = "";
            }
        }

        mobileInterface() {
            this.programs_table.remove();
            this.m_div = document.createElement("div");
            this.m_div.classList.add("mobile-programs");
            this.detailed_program_section.appendChild(this.m_div);
            this.detailed_program_section.insertBefore(
                this.filteration_section,
                this.m_div
            );
        }
        seeMore() {
            this.counter = this.num_rows + 5;
            if (page_obj.isMobile()) {
                this.body = this.m_div;
                this.rows = this.m_div.querySelectorAll(".accordion-div");
            } else {
                this.body = this.table_body;
                this.rows = this.table_body.querySelectorAll("tr");
            }
            for (let i = 0; i < this.num_rows; i++) {
                this.rows[i].classList.add("displayed-tr");
            }
            for (let i = this.num_rows; i < this.rows.length; i++) {
                this.rows[i].classList.add("hidden-tr");
            }
            let button = document.createElement("button");
            button.textContent = "View More...";
            button.setAttribute("id", "see-more-button");
            this.body.appendChild(button);
            button.addEventListener("click", (e) => {
                this.seeMoreHandler(e, this.rows);
            });
        }

        seeMoreHandler(e, rows) {
            if (e.target.textContent === "View More...") {
                // Show the next 5 rows

                for (let i = this.start_counter; i < this.counter; i++) {
                    if (rows[i]) {
                        rows[i].classList.remove("hidden-tr");
                        rows[i].classList.add("displayed-tr");
                    }
                }
                // Update the counters
                this.start_counter += 5;
                this.counter += 5;

                if (this.start_counter >= this.rows.length) {
                    e.target.textContent = "See Less";
                }
            } else {
                //         // Hide the extra rows
                for (let i = this.counter - 5; i >= this.start_counter - 5; i--) {
                    if (this.rows[i]) {
                        this.rows[i].classList.add("hidden-tr");
                        this.rows[i].classList.remove("displayed-tr");
                    }
                }

                //         // Update the counters
                this.start_counter -= 5;
                this.counter -= 5;

                if (this.start_counter <= this.num_rows) {
                    e.target.textContent = "View More...";
                }
            }
        }
        mobileLeftRightDetection(clickedIndex) {
            if (this.filter_buttons[clickedIndex].getBoundingClientRect().x < window.innerWidth * 0.5) {
                this.filter_form[clickedIndex].style.left = 0
            }
            else {
                this.filter_form[clickedIndex].style.right = 0
            }
        }
        toggleFilterBoxAppearance(clickedIndex) {
            for (let i = 0; i < this.filter_form.length; i++) {
                if (i === clickedIndex) {
                    if (page_obj.isMobile()) {
                        this.mobileLeftRightDetection(clickedIndex)
                        this.filter_form[i].classList.toggle("box-appear-flex");
                    }
                    else {
                        this.filter_form[i].classList.toggle("box-appear");
                    }
                } else {
                    if (page_obj.isMobile()) {
                        this.filter_form[i].classList.remove("box-appear-flex");
                    }
                    else {
                        this.filter_form[i].classList.remove("box-appear");
                    }
                }
            }
        }
        attachFilterButtonListeners() {
            for (let i = 0; i < this.filter_form.length; i++) {
                this.filter_buttons[i].addEventListener("click", () => {
                    this.toggleFilterBoxAppearance(i);

                });
            }
        }
        async getPrograms(url) {
            const response = await fetch(url, {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            });
            return response.json();
        }
        async getProgramData() {
            let temp_query = [];
            for (let i = 0; i < this.global_keys.length; i++) {
                temp_query.push(
                    `${this.global_keys[i]}=${this.global_filter[this.global_keys[i]]}`
                );
            }
            temp_query = temp_query.join("&");

            let result = await this.getPrograms(
                `/api/filtered-programs?${temp_query}`
            );

            return result;
        }

        async renderProgramsWithoutUpdateResult() {
            const data = await this.getProgramData();
            if (page_obj.isMobile()) {
                this.UpdteMobileContent(data);
            } else this.UpdateTable(data);
            this.ActivateFilterButtons();
            this.updateResult(data.length);
        }
        UpdateTable(data) {
            this.table_body.innerHTML = "";
            // loop over the data resulted from an api
            let tr, td1, td, td5;

            for (let x = 0; x < data.length; x++) {
                tr = document.createElement("tr");
                // tr.setAttribute("id", `${data[x].hash_id}`);
                tr.classList.add("displayed-tr");
                // add program nam
                td1 = document.createElement("td");
                td1.classList.add(`col-${this.table_head_tds.length}`);
                if (page_obj.isArabic()) {
                    td1.innerHTML = `${data[x].program_name_arabic}`;
                } else {
                    td1.innerHTML = `${data[x].program_name}`;
                }
                tr.appendChild(td1);

                // add selected displayed columns data
                for (let y = 1; y < this.table_head_tds.length - 1; y++) {
                    this.unique_key = this.table_head_tds[y]
                        .getAttribute("value")
                        .toLowerCase();
                    td = document.createElement("td");
                    td.classList.add(`col-${this.table_head_tds.length}`);
                    if (this.unique_key == "degree" || this.unique_key == "school") {
                        if ("/" + slug.pathname.split("/")[1] + "/" == "/ar/") {
                            td.innerHTML = `${data[x][`${this.unique_key}_arabic`]
                                .split("_")
                                .join(" ")}`;
                        } else {
                            td.innerHTML = `${data[x][this.unique_key]
                                .split("_")
                                .join(" ")}`;
                        }
                    } else {
                        if ("/" + slug.pathname.split("/")[1] + "/" == "/ar/") {
                            td.innerHTML = `${data[x][`${this.unique_key}_arabic`]}`;
                        } else {
                            td.innerHTML = `${data[x][this.unique_key]}`;
                        }
                    }

                    tr.appendChild(td);
                }

                // add the buttons column
                td5 = document.createElement("td");
                td5.classList.add(`col-${this.table_head_tds.length}`);

                if (data[x].guidence_plan) {
                    td5.innerHTML = ` <a href=${data[x].guidence_plan_url} class="guidance-plan" target="_blank"><button><span>Guidance Plan</span><span>{% include "svgs/pdf-icon.html" %}</span></button></a>
                    <a href="${data[x].apply_now}" class="apply" target="_blank"><button>Apply now</button></a>`;
                }
                tr.appendChild(td5);

                this.table_body.appendChild(tr);
            }
            if (data.length > 5) {
                this.seeMore();
            }
            let programs_acc = new Accordion();
            programs_acc.activate_accordion();
        }

        UpdteMobileContent(data) {
            this.m_div.innerHTML = "";
            let accordion_div;
            // loop over the data resulted from an api
            for (let x = 0; x < data.length; x++) {
                accordion_div = document.createElement("div");
                accordion_div.classList.add("accordion-div");
                accordion_div.classList.add("displayed-tr");

                let inner_button = document.createElement("button");
                inner_button.classList.add("accordion");
                // inner_button.setAttribute("id", `${data[x].hash_id}`);
                inner_button.innerHTML = `<span>${data[x].program_name}</span><span class='accordion-icon'>{% include 'svgs/accordion_downarrow.html' %}</span>`;
                let inner_div = document.createElement("div");
                inner_div.classList.add("panel");

                accordion_div.appendChild(inner_button);
                // add selected displayed columns data
                for (let y = 1; y < this.table_head_tds.length - 1; y++) {
                    let div_2_spans = document.createElement("div");
                    this.unique_key = this.table_head_tds[y].getAttribute("value").toLowerCase();

                    let span1 = document.createElement("span");
                    span1.innerHTML = `${this.unique_key[0].toUpperCase() + this.unique_key.substring(1)
                        }`;
                    let span2 = document.createElement("span");

                    if (this.unique_key == "degree" || this.unique_key == "school") {
                        if ("/" + slug.pathname.split("/")[1] + "/" == "/ar/") {
                            span2.innerHTML = `${data[x][`${this.unique_key}_arabic`]
                                .split("_")
                                .join(" ")}`;
                        } else {
                            span2.innerHTML = `${data[x][`${this.unique_key}`]
                                .split("_")
                                .join(" ")}`;
                        }
                    } else {
                        if ("/" + slug.pathname.split("/")[1] + "/" == "/ar/") {
                            span2.innerHTML = `${data[x][`${this.unique_key}_arabic`]}`;
                        } else {
                            span2.innerHTML = `${data[x][`${this.unique_key}`]}`;
                        }
                    }

                    div_2_spans.appendChild(span1);
                    div_2_spans.appendChild(span2);
                    inner_div.appendChild(div_2_spans);
                }

                // add the buttons column
                let span3 = document.createElement("span");

                span3.innerHTML = ` <a href="{{program.guidance_plan.url}}" class="guidance-plan" target="_blank"><button><span>Guidance Plan</span><span>{% include "svgs/pdf-icon.html" %}</span></button></a>
            <a href="{{program.apply_now_link.cta_link_url}}" class="apply" target="_blank"><button>Apply now</button></a>`;
                inner_div.appendChild(span3);

                accordion_div.appendChild(inner_div);
                this.m_div.appendChild(accordion_div);
            }
            if (data.length > 5) {
                this.seeMore();
            }
            let programs_acc = new Accordion();
            programs_acc.activate_accordion();
        }

        uncheckAllTheCheckBoxes() {
            for (let a = 0; a < this.filter_form.length; a++) {
                let checkboxs = this.filter_form[a].querySelectorAll(
                    'input[type="checkbox"]'
                );
                for (let i = 0; i < checkboxs.length; i++) {
                    checkboxs[i].checked = false;
                }
            }
        }
        searchEvent(e) {
            e.preventDefault();
            this.setGlobalFilter();
            this.uncheckAllTheCheckBoxes();
            let search = e.target.search.value;
            this.global_filter["search"] = search;
            this.getDataAndUpdateTable(true);
        }

        FilterEvent(e, checkboxs, i, a) {
            let filter_by, label;
            if (checkboxs[i].checked) {
                filter_by = e.target.value;
                label = e.target.parentElement.textContent.trim();

                if (filter_by == "all") {
                    filter_by = "";
                }
            } else {
                filter_by = "";
            }
            //remove search when filter
            this.global_filter["search"] = "";
            this.search_input.value = "";

            for (let j = 0; j < checkboxs.length; j++) {
                if (checkboxs[j] != checkboxs[i]) {
                    checkboxs[j].checked = false;
                }
            }
            if (this.filter_form[a].classList.contains("location-form")) {
                this.global_filter["location"] = filter_by;
                this.global_arabic_filter["location"] = label;
                this.getDataAndUpdateTable();
            } else if (this.filter_form[a].classList.contains("degree-form")) {
                this.global_filter["degree"] = filter_by;
                this.global_arabic_filter["degree"] = label;
                this.getDataAndUpdateTable();
            } else if (this.filter_form[a].classList.contains("timing-form")) {
                this.global_filter["timing"] = filter_by;
                this.global_arabic_filter["timing"] = label;

                this.getDataAndUpdateTable();
            } else if (this.filter_form[a].classList.contains("school-form")) {
                this.global_filter["school"] = filter_by;
                this.global_arabic_filter["school"] = label;

                this.getDataAndUpdateTable();
            }
            if (page_obj.isMobile()) {
                this.filter_form[a].classList.remove("box-appear");
            }
        }
        HideAllFilterForms() {
            for (let i = 0; i < this.filter_form.length; i++) {
                if (page_obj.isMobile()) {
                    this.filter_form[i].classList.remove("box-appear-flex");
                }
                else {
                    this.filter_form[i].classList.remove("box-appear");
                }
            }
        }
        FilterButtonsActivation() {
            for (let a = 0; a < this.filter_form.length; a++) {
                let checkboxs = this.filter_form[a].querySelectorAll(
                    'input[type="checkbox"]'
                );
                for (let i = 0; i < checkboxs.length; i++) {
                    checkboxs[i].addEventListener("click", (e) => {
                        this.FilterEvent(e, checkboxs, i, a)

                        this.filter_form[a].style.animation = 'disappearAnimation linear 250ms'

                        setTimeout(() => {
                            this.HideAllFilterForms()
                            this.filter_form[a].style.animation = 'appearAnimation linear 250ms'
                        }, 250)
                    }
                    );
                }
            }
        }

        ActivateFilterButtons() {
            let key;
            for (let fi = 0; fi < this.filter_form.length; fi++) {
                key = this.filter_form[fi].classList[1].split("-")[0]; //eg : degree from degree-form
                if (this.global_filter[key] != "") {
                    if (page_obj.isArabic()) {
                        this.filter_buttons[
                            fi
                        ].innerHTML = `${this.global_arabic_filter[key]}`;
                    } else {
                        this.filter_buttons[fi].innerHTML = `${this.global_filter[key]
                            .split("_")
                            .join(" ")} ${this.filter_icon}`;
                    }

                    if (!this.filter_buttons[fi].classList.contains("active")) {
                        this.filter_buttons[fi].classList.add("active");
                    }
                } else {
                    if (this.filter_buttons[fi].classList.contains("active")) {
                        if (
                            this.filter_buttons[fi].classList.contains("location-button")
                        ) {
                            this.filter_buttons[
                                fi
                            ].innerHTML = `campus  ${this.filter_icon}`;
                        } else {
                            this.filter_buttons[fi].innerHTML = `${key.charAt(0).toUpperCase() + key.slice(1)
                                }  ${this.filter_icon}`;
                        }

                        this.filter_buttons[fi].classList.remove("active");
                    }
                }
            }
        }

        getDataAndUpdateTable(is_search = false) {
            this.getProgramData().then((data) => {
                if (page_obj.isMobile()) {
                    this.UpdteMobileContent(data);
                } else {
                    this.UpdateTable(data);
                }
                this.ActivateFilterButtons();
                this.updateResult(data.length, is_search);
            });
        }
        async getProgramSearch(user_input) {
            let result = this.getPrograms(
                `/api/programs?search=${user_input}&school=${global_filter["school"]}`
            );

            return result;
        }
        TableHeadStyle() {
            for (let ti = 0; ti < this.table_head_tds.length; ti++) {
                this.table_head_tds[ti].classList.add(
                    `col-${this.table_head_tds.length}`
                );
            }
        }
        activateSection() {
            this.setGuidancePlanText();
            this.setApplyNowText();
            this.setTableFor();
            this.setGlobalFilter();
            this.setGlobalArabicFilter();
            this.setGlobalKeys();
            this.setSearchInput();
            if (page_obj.isMobile()) {
                this.mobileInterface();
            }
            this.attachFilterButtonListeners();
            this.renderProgramsWithoutUpdateResult();
            this.TableHeadStyle();
            this.search_form.addEventListener("submit", (e) => {
                this.searchEvent(e);
            });
            this.FilterButtonsActivation();
        }
    }

    class ColorSocialMedia {
        constructor() {
            this.footer_sm = document.querySelectorAll(".footer-social-media a");
            this.footer_sm_icon = document.querySelectorAll(".footer-sm");
            this.header_sm = document.querySelectorAll(".mobile-nav-socialM a");
            this.header_sm_icon = document.querySelectorAll(".header-sm");
        }
        colorHeader() {
            if (this.header_sm_icon.length === this.header_sm.length) {
                for (let i = 0; i < this.header_sm_icon.length; i++) {
                    // Create a closure to capture the current values of header_sm[i] and header_sm_icon[i]
                    ((index) => {
                        this.header_sm_icon[index].addEventListener("load", () => {
                            this.colorSocialMedia(
                                this.header_sm[index],
                                "",
                                this.header_sm_icon[index],
                                "black"
                            );
                            this.header_sm[index].addEventListener("click", (e) => {
                                this.colorSocialMedia(
                                    this.header_sm[index],
                                    "black-background",
                                    this.header_sm_icon[index],
                                    "white"
                                );
                            });
                        });
                    })(i);
                }
            }

        }

        colorFooter() {
            if (this.footer_sm_icon) {
                for (let i = 0; i < this.footer_sm_icon.length; i++) {
                    this.footer_sm_icon[i].addEventListener("load", (e) => {
                        this.footer_sm[i].addEventListener("mouseover", (e) => {
                            this.colorSocialMedia(
                                this.footer_sm[i],
                                "white-background",
                                this.footer_sm_icon[i],
                                "black"
                            );
                        });
                        this.footer_sm[i].addEventListener("mouseout", () => {
                            this.colorSocialMedia(
                                this.footer_sm[i],
                                "white-background",
                                this.footer_sm_icon[i],
                                "white"
                            );
                        });
                    });
                }
            }

        }

        colorSocialMedia(a_tag, a_color, icon, icon_color) {
            if (a_color !== "") {
                a_tag.classList.toggle(a_color);
            }
            var icon_doc = icon.contentDocument;
            if (icon_doc) {
                let icon_paths = icon_doc.querySelectorAll("path");
                for (let i = 0; i < icon_paths.length; i++) {
                    icon_paths[i].style.fill = icon_color;
                }
            }
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
                    if (page_obj.isEnglish()) {
                        this.englishSliding(e, i);
                    } else if (page_obj.isArabic()) {
                        this.arabicSliding(e, i);
                    }
                });
            }
        }

        englishSliding(e, i) {
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

        arabicSliding(e, i) {
            let scroll_width = scroll_divs[i].offsetWidth;

            if (
                e.target.scrollLeft <= -scroll_width + window.innerWidth &&
                this.scroll_side[i] != "left"
            ) {
                this.left_arrows[i].classList.add("hide");
                this.scroll_side[i] = "left";
            } else if (
                e.target.scrollLeft >= -scroll_width + window.innerWidth &&
                e.target.scrollLeft <= -50 &&
                this.scroll_side[i] != "center"
            ) {
                this.left_arrows[i].classList.remove("hide");
                this.right_arrows[i].classList.remove("hide");
                this.scroll_side[i] = "center";
            } else if (e.target.scrollLeft >= -50 && this.scroll_side[i] != "right") {
                this.right_arrows[i].classList.add("hide");
                this.scroll_side[i] = "right";
            }
        }

        hideArrow(slider, scroll_i, right, left) {
            if (slider.classList.contains("left")) {
                left.classList.toggle("hide", page_obj.isEnglish());
                right.classList.toggle("hide", page_obj.isArabic());
            } else if (slider.classList.contains("right")) {
                slider.scrollLeft = page_obj.isEnglish()
                    ? scroll_i - 0.5 * window.innerWidth
                    : -scroll_i + 0.5 * window.innerWidth;
                left.classList.toggle("hide", page_obj.isArabic());
                right.classList.toggle("hide", page_obj.isEnglish());
            } else if (slider.classList.contains("center")) {
                slider.scrollLeft = page_obj.isEnglish()
                    ? 0.5 * scroll_i - 0.5 * window.innerWidth
                    : -0.5 * scroll_i + 0.5 * window.innerWidth;
            }
        }

        hideArrowByCaroselType() {
            for (let i = 0; i < this.sliders.length; i++) {
                let scroll_width = this.scroll_divs[i].offsetWidth;
                this.hideArrow(this.sliders[i], scroll_width, this.right_arrows[i], this.left_arrows[i]);
            }
        }

        handelProgramSlider(program) {
            console.log(program);
            // remove the "active" class from all
            this.target = program.getAttribute("data-target");
            this.carosel_active = document.querySelector(`#${this.target}`);
            this.cardset_inner = this.carosel_active.querySelector(".cardset");
            this.left_program_button = document.querySelector(`.programs-left-arrow.${this.target}`);
            this.right_program_button = document.querySelector(`.programs-right-arrow.${this.target}`);

            this.cards.forEach((cardset) => {
                cardset.classList.remove("active");
            });
            this.programs.forEach((program) => program.classList.remove("active"));
            this.left_arrow_program.forEach((button) => {
                button.classList.remove("active");
                if (!button.classList.contains("hide")) {
                    button.classList.add("hide");
                }
            });
            this.right_arrow_program.forEach((button) => {
                button.classList.remove("active");
                if (!button.classList.contains("hide")) {
                    button.classList.add("hide");
                }
            });
            // add the "active" class to the cardset with the matching ID
            this.left_program_button.classList.remove("hide");
            this.right_program_button.classList.remove("hide");
            this.hideArrow(
                this.carosel_active,
                this.cardset_inner.scrollWidth,
                this.right_program_button,
                this.left_program_button
            );

            this.cardset_inner.classList.add("active");
            this.cardset_inner.style.display = this.cardset_inner.getAttribute(
                "data-original-display"
            );

            program.classList.add("active");
            this.carosel_active.scrollTo({
                left: 0,
                behavior: "instant",
            });
        }

    }

    // CALLING IS HERE vvvvvvv
    // header
    let header_obj = new Header();
    let page_obj = new Page();
    header_obj.activateHeader(page_obj);

    // color social media in footer and header
    let social_media_obj = new ColorSocialMedia()
    social_media_obj.colorHeader()
    social_media_obj.colorFooter()

    // programs table veiw
    let program_section = new ProgramManager();
    if (program_section.table_body) {
        program_section.activateSection();
    }

    // news and events
    let news_section = new NewsManager();
    if (news_section.category_form) {
        news_section.activateNewsSection();
    }

    // career 
    let career_section = new CareerManager()
    if (career_section.career_list_body) {
        career_section.activatecareersSection();
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


    function scrollBottomOnLoadEvent() {
        let side_nav_banner = document.querySelector(".side-nav #banner");
        if (side_nav_banner) {
            window.addEventListener("load", () => {
                window.scrollTo({
                    top: side_nav_banner.clientHeight,
                    behavior: "instant",
                });
            });
        }
    }

    let iframe = document.getElementsByTagName('iframe')
    scrollBottomOnLoadEvent()

    let main_acc = new Accordion();
    if (main_acc.acc && !program_section.table_body) {
        main_acc.activate_accordion();
    }
    // try {
    //   window.addEventListener("click", (e) => {
    //     for (let i = 0; i < filter_form.length; i++) {
    //       detectBoxEdges(e, filter_form[i], filter_buttons[i])
    //     }
    //     if (category_form) {
    //       detectBoxEdges(e, category_form, category_button)
    //     }
    //     if (location_form) {
    //       detectBoxEdges(e, location_form, location_button)
    //     }
    //   });
    // } catch (e) {
    //   //
    // }
});
