// const asac_programs = require("./programs.json");
// import asac_programs from "./programs.json";
document.addEventListener("DOMContentLoaded", () => {
    let slug = window.location;
    let pdf_icon = `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.3219 1.48926L21.3211 5.65801V21.5108H6.38184V21.5625H21.3721V5.71048L17.3219 1.48926Z" fill="#909090"/>
    <path d="M17.2726 1.4375H6.33105V21.5107H21.3213V5.65872L17.2726 1.4375Z" fill="#F4F4F4"/>
    <path d="M6.22074 2.51562H1.62793V7.42253H16.0748V2.51562H6.22074Z" fill="#7A7B7C"/>
    <path d="M16.152 7.33921H1.72168V2.42871H16.152V7.33921Z" fill="#DD2025"/>
    <path d="M6.50581 3.25893H5.56641V6.70893H6.30528V5.54527L6.46844 5.55462C6.62697 5.55189 6.78402 5.52349 6.93347 5.47052C7.0645 5.42546 7.18504 5.35431 7.28781 5.26137C7.39239 5.17283 7.47484 5.06109 7.52859 4.93506C7.60068 4.72554 7.62643 4.50287 7.60406 4.28243C7.59957 4.12496 7.57197 3.969 7.52213 3.81955C7.47675 3.71168 7.40942 3.61442 7.32441 3.53399C7.23939 3.45356 7.13857 3.3917 7.02834 3.35237C6.93304 3.31787 6.83458 3.29283 6.73438 3.27762C6.65849 3.26591 6.58187 3.25966 6.50509 3.25893M6.36925 4.90774H6.30528V3.84399H6.444C6.50522 3.83958 6.56666 3.84898 6.62376 3.87149C6.68086 3.89401 6.73217 3.92907 6.77391 3.97409C6.86039 4.08982 6.90658 4.23068 6.90544 4.37515C6.90544 4.55196 6.90544 4.71224 6.74588 4.82509C6.63092 4.88831 6.50008 4.9175 6.36925 4.90774ZM9.00778 3.24959C8.928 3.24959 8.85038 3.25534 8.79575 3.25749L8.62469 3.2618H8.06406V6.71181H8.72388C8.97603 6.71872 9.22709 6.67598 9.46275 6.58602C9.65244 6.51079 9.82041 6.3895 9.9515 6.23312C10.079 6.07532 10.1705 5.89159 10.2196 5.69477C10.2761 5.47187 10.3036 5.24262 10.3015 5.01268C10.3155 4.74111 10.2945 4.46887 10.239 4.20265C10.1864 4.00669 10.0878 3.82609 9.9515 3.6758C9.84455 3.55445 9.71362 3.45656 9.56697 3.38831C9.44103 3.33003 9.30855 3.28707 9.17238 3.26037C9.11822 3.25142 9.06338 3.24733 9.0085 3.24815M8.87769 6.07787H8.80581V3.87562H8.81516C8.96333 3.85857 9.11326 3.8853 9.24641 3.95252C9.34391 4.03038 9.42337 4.12847 9.47928 4.24002C9.53962 4.35742 9.57441 4.48627 9.58134 4.61809C9.58781 4.77621 9.58134 4.90559 9.58134 5.01268C9.58427 5.13604 9.57633 5.25943 9.55763 5.3814C9.53547 5.50663 9.49452 5.62779 9.43616 5.74077C9.3701 5.84582 9.28084 5.93434 9.17525 5.99952C9.08657 6.05688 8.98156 6.08364 8.87625 6.07571M12.5275 3.2618H10.7809V6.71181H11.5198V5.3433H12.4542V4.70218H11.5198V3.90293H12.5261V3.2618" fill="#464648"/>
    <path d="M15.655 14.5582C15.655 14.5582 17.9464 14.1428 17.9464 14.9255C17.9464 15.7082 16.5268 15.3898 15.655 14.5582ZM13.9609 14.6179C13.5968 14.6983 13.2421 14.8161 12.9022 14.9693L13.1897 14.3225C13.4772 13.6756 13.7755 12.7937 13.7755 12.7937C14.1185 13.3711 14.5177 13.9132 14.9671 14.4123C14.6282 14.4628 14.2923 14.532 13.9609 14.6193V14.6179ZM13.0538 9.94599C13.0538 9.2639 13.2745 9.07774 13.4463 9.07774C13.6181 9.07774 13.8114 9.1604 13.8179 9.75265C13.7619 10.3482 13.6372 10.9352 13.4463 11.5021C13.1847 11.0262 13.0494 10.4912 13.0531 9.94815L13.0538 9.94599ZM9.71237 17.5044C9.00943 17.0839 11.1865 15.7894 11.5811 15.7477C11.579 15.7485 10.4484 17.9442 9.71237 17.5044ZM18.6155 15.0182C18.6083 14.9463 18.5437 14.1507 17.1277 14.1845C16.5375 14.175 15.9476 14.2166 15.3646 14.3088C14.7999 13.7398 14.3135 13.0981 13.9185 12.4005C14.1674 11.6814 14.318 10.9319 14.3663 10.1724C14.3454 9.3099 14.1392 8.8154 13.4779 8.82259C12.8167 8.82977 12.7203 9.40837 12.8073 10.2694C12.8925 10.8481 13.0532 11.413 13.2853 11.9499C13.2853 11.9499 12.9798 12.9008 12.5759 13.8466C12.1719 14.7925 11.8959 15.2885 11.8959 15.2885C11.1935 15.5171 10.5323 15.8568 9.93734 16.2947C9.34509 16.846 9.10431 17.2693 9.41624 17.6927C9.68506 18.0578 10.6259 18.1405 11.4668 17.0386C11.9137 16.4695 12.3219 15.8711 12.6887 15.2475C12.6887 15.2475 13.971 14.896 14.3699 14.7997C14.7688 14.7034 15.2511 14.6272 15.2511 14.6272C15.2511 14.6272 16.4219 15.8052 17.5511 15.7636C18.6802 15.7219 18.6256 15.0886 18.6184 15.0196" fill="#DD2025"/>
    <path d="M17.2168 1.49292V5.71414H21.2655L17.2168 1.49292Z" fill="#909090"/>
    <path d="M17.2725 1.4375V5.65872H21.3212L17.2725 1.4375Z" fill="#F4F4F4"/>
    <path d="M6.45113 3.20351H5.51172V6.65351H6.25347V5.49057L6.41734 5.49992C6.57588 5.49719 6.73292 5.46879 6.88237 5.41582C7.0134 5.37074 7.13393 5.29959 7.23672 5.20667C7.34051 5.11789 7.42221 5.00617 7.47534 4.88035C7.54743 4.67084 7.57318 4.44817 7.55081 4.22773C7.54632 4.07026 7.51872 3.9143 7.46887 3.76485C7.4235 3.65697 7.35617 3.55972 7.27116 3.47929C7.18614 3.39886 7.08532 3.337 6.97509 3.29767C6.87936 3.26283 6.7804 3.23755 6.67969 3.2222C6.60381 3.21049 6.52718 3.20424 6.45041 3.20351M6.31456 4.85232H6.25059V3.78857H6.39003C6.45125 3.78416 6.51269 3.79356 6.56979 3.81607C6.62689 3.83859 6.67821 3.87365 6.71994 3.91867C6.80642 4.0344 6.85261 4.17526 6.85147 4.31973C6.85147 4.49654 6.85147 4.65682 6.69191 4.76967C6.57695 4.83289 6.44611 4.86136 6.31528 4.8516M8.95309 3.19417C8.87331 3.19417 8.79569 3.19992 8.74106 3.20207L8.57216 3.20639H8.01153V6.65638H8.67134C8.9235 6.6633 9.17455 6.62056 9.41022 6.5306C9.59991 6.45537 9.76788 6.33408 9.89897 6.1777C10.0264 6.0199 10.1179 5.83617 10.1671 5.63935C10.2235 5.41645 10.2511 5.1872 10.249 4.95726C10.2629 4.68569 10.2419 4.41345 10.1865 4.14723C10.1338 3.95127 10.0353 3.77067 9.89897 3.62039C9.79201 3.49903 9.66109 3.40114 9.51444 3.33289C9.3885 3.27461 9.25602 3.23165 9.11984 3.20495C9.06569 3.196 9.01085 3.19191 8.95597 3.19273M8.82516 6.02245H8.75328V3.8202H8.76263C8.9108 3.80315 9.06073 3.82989 9.19388 3.8971C9.29138 3.97496 9.37084 4.07305 9.42675 4.1846C9.48709 4.302 9.52188 4.43085 9.52881 4.56267C9.53528 4.72079 9.52881 4.85017 9.52881 4.95726C9.53174 5.08062 9.5238 5.20401 9.50509 5.32598C9.48294 5.45121 9.44199 5.57237 9.38363 5.68535C9.31757 5.7904 9.22831 5.87892 9.12272 5.9441C9.03404 6.00146 8.92903 6.02822 8.82372 6.02029M12.4728 3.20639H10.7263V6.65638H11.4651V5.28788H12.3995V4.64676H11.4651V3.84751H12.4714V3.20639" fill="white"/>
    </svg>`

    let accordion_downarrow = `
    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.710051 1.71L3.30005 4.3C3.69005 4.69 4.32005 4.69 4.71005 4.3L7.30005 1.71C7.93005 1.08 7.48005 0 6.59005 0H1.41005C0.520051 0 0.0800515 1.08 0.710051 1.71Z" />
    </svg>
    `
    let body = document.querySelector('body')
    class Header {
        constructor() {
            this.header = document.querySelector("header");
            // this.drop_down_language_a = document.querySelector(
            //     ".drop-down-language a"
            // );
            // // this.burger_menu_icon = document.querySelector(".burger-menu-icon");
            // this.dropdown = document.querySelectorAll(".dropdown");
            // // this.nav_close_btn = document.querySelector(".nav-close-btn");
            // this.navbar = document.querySelector("#navbar");
            // this.drop_down_lang = document.querySelector(".drop-down-language");
            // this.drop_down_lang_inside = document.querySelector(
            //     ".drop-down-lang-inside"
            // );
            // this.language_code = document.querySelector(".language-code");
            // this.language_code_inside = document.querySelector(
            //     ".language-code-inside"
            // );
            // this.home_icon = document.querySelector(".home-icon");
            // this.header_icon_svg = null;
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

        // checkIcon(icon, header_is_colored) {
        //     if (icon) {
        //         let icon_paths = icon.querySelectorAll("path");
        //         for (let i = 0; i < icon_paths.length; i++) {
        //             if (header_is_colored == false) {
        //                 this.addClass(icon_paths[i], "black-color");
        //                 this.removeClass(icon_paths[i], "white-color");
        //             } else {
        //                 this.addClass(icon_paths[i], "white-color");
        //                 this.removeClass(icon_paths[i], "black-color");
        //             }
        //         }
        //     }
        // }

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
                // this.checkIcon(this.home_icon, this.header_is_colored);
                this.header_is_colored = true;
            }
            if (window.scrollY <= 30 && this.header_is_colored == true) {
                this.mainToggle();
                // this.checkIcon(this.home_icon, this.header_is_colored);
                this.header_is_colored = false;
            }
        }

        navToggle(e) {
            if (!this.open_flag) {
                window.removeEventListener("scroll", (e) => { this.mobileScrollEvent(e) });
                this.open_flag = true;

                // if (this.home_icon) {
                //     let icon_paths = this.home_icon.querySelectorAll("path");
                //     for (let i = 0; i < icon_paths.length; i++) {
                //         this.addClass(icon_paths[i], "black-color");
                //         this.removeClass(icon_paths[i], "white-color");
                //     }
                // }
            } else {
                // window.addEventListener("scroll", (e) => { this.mobileScrollEvent(e) });
                // window.addEventListener("scroll", (e) => { this.desktopScrollEvent(e) });
                this.open_flag = false;
            }
            this.navbar.classList.toggle("hide-mobile-nav");
        }

        // openDropDownOnMobile() {
        //     if (window.innerWidth <= 1023) {
        //         for (let i = 0; i < this.dropdown.length; i++) {
        //             this.dropdown[i].addEventListener("click", () => {
        //                 this.dropdown[i].classList.toggle("active");
        //             });
        //         }
        //     }
        // }

        // showLanguageBox() {
        //     this.language_code.addEventListener("click", () => {
        //         this.toggleClass(this.drop_down_lang, "appear");
        //     });

        //     this.language_code_inside.addEventListener("click", () => {
        //         this.toggleClass(this.drop_down_lang_inside, "hide");
        //         this.toggleClass(this.drop_down_lang_inside, "show-flex");
        //     });
        // }

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
            // if (this.language_code) {
            //     this.showLanguageBox();
            // }
            this.headerMove();
            // this.openDropDownOnMobile();

            if (!page_obj.banner) {
                this.addClass(this.header, "active");
            }
            window.addEventListener("resize", this.headerMove);
            // this.nav_close_btn.addEventListener("click", (e) => { 
            //     this.navToggle(e);
            //     body.classList.remove('mobile-menu-open');

            //  });
            // this.burger_menu_icon.addEventListener("click", (e) => { 
            //     this.navToggle(e);
            //     body.classList.add('mobile-menu-open');
            //  });
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
            return true
        }
        isArabic() {
            return false
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

    // class CareerManager {
    //     constructor() {
    //         this.career_detail_page = document.querySelector(".career");
    //         this.global_location_career = "";
    //         this.url = null;
    //         this.career_list_body = document.querySelector(".career-list-body");
    //         this.career_see_more = document.querySelector("#career-see-more");
    //         this.location_button = document.querySelector(".location-button");
    //         this.location_form = document.querySelector(".location-form");

    //         this.location_checkboxes = null;
    //         this.career_cards = null;
    //         this.num_rows = 6;
    //         this.counter = null;
    //         this.start_counter = 6;
    //         this.filter_icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //          <path d="M11.0003 20C10.7169 20 10.4793 19.904 10.2873 19.712C10.0953 19.52 9.99959 19.2827 10.0003 19V13L4.20025 5.6C3.95025 5.26667 3.91259 4.91667 4.08725 4.55C4.26192 4.18333 4.56625 4 5.00025 4H19.0003C19.4336 4 19.7379 4.18333 19.9133 4.55C20.0886 4.91667 20.0509 5.26667 19.8003 5.6L14.0003 13V19C14.0003 19.2833 13.9043 19.521 13.7123 19.713C13.5203 19.905 13.2829 20.0007 13.0003 20H11.0003Z" />
    //          </svg>
    //        `;
    //         this.filter_result = document.querySelector(".result");
    //         this.search_form = document.querySelector(".search-form");
    //         this.career_search = ''

    //     }
    //     setLocationCheckboxes() {
    //         this.location_checkboxes = this.location_form.querySelectorAll(
    //             'input[type="checkbox"]'
    //         );
    //     }
    //     uncheckAllTheCheckBoxes() {

    //         for (let i = 0; i < this.location_checkboxes.length; i++) {
    //             this.location_checkboxes[i].checked = false;
    //         }
    //     }
    //     setSearchInput() {
    //         this.search_input = this.search_form.querySelector("input");
    //     }
    //     searchEvent(e) {
    //         e.preventDefault();
    //         this.uncheckAllTheCheckBoxes();
    //         let search = e.target.search.value;
    //         this.career_search = search;
    //         this.renderCareerLocation(true);
    //     }
    //     updateResult(num, is_search) {
    //         let filterd = false;
    //         if (this.global_location_career != "") {
    //             filterd = true;
    //         }

    //         if (filterd || is_search) {
    //             if (page_obj.isArabic()) {
    //                 this.filter_result.innerHTML = `${num} نتيجة`;
    //             } else {
    //                 this.filter_result.innerHTML = `${num} result found`;
    //             }
    //         } else {
    //             this.filter_result.innerHTML = "";
    //         }
    //     }
    //     async getMethod(url) {
    //         const response = await fetch(url, {
    //             method: "GET", // *GET, POST, PUT, DELETE, etc.
    //             mode: "cors", // no-cors, *cors, same-origin
    //             cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //             credentials: "same-origin", // include, *same-origin, omit
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 // 'Content-Type': 'application/x-www-form-urlencoded',
    //             },
    //             redirect: "follow", // manual, *follow, error
    //             referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //         });
    //         return response.json();
    //     }
    //     async getListCareer() {
    //         let url;
    //         if (page_obj.isArabic()) {
    //             url = `/careers/ar?location=${this.global_location_career}&search=${this.career_search}`;
    //         } else {
    //             url = `/careers/en?location=${this.global_location_career}&search=${this.career_search}`;
    //         }
    //         let data = await this.getMethod(url);
    //         return data;
    //     }

    //     seeMoreEventHandler() {
    //         if (this.career_see_more.getAttribute("see-more") === "true") {
    //             for (let i = this.start_counter; i < this.counter; i++) {
    //                 if (this.career_cards[i]) {
    //                     this.career_cards[i].classList.remove("hidden-tr");
    //                     this.career_cards[i].classList.add("displayed-career-card");
    //                 }
    //             }
    //             // Update the counters
    //             this.start_counter += 6;
    //             this.counter += 6;

    //             if (this.start_counter >= this.career_cards.length) {
    //                 this.career_see_more.textContent = "See Less";
    //                 this.career_see_more.setAttribute("see-more", "false");
    //             }
    //         } else {
    //             // Hide the extra rows
    //             this.start_counter = 6;
    //             this.counter = this.career_cards.length;
    //             for (let i = this.start_counter; i <= this.counter; i++) {
    //                 if (this.career_cards[i]) {
    //                     this.career_cards[i].classList.add("hidden-tr");
    //                     this.career_cards[i].classList.remove("displayed-career-card");
    //                 }
    //             }
    //             this.counter = this.start_counter + 6;

           
    //             if (this.start_counter <= this.num_rows) {
    //                 this.career_see_more.textContent = "See More ...";
    //                 this.career_see_more.setAttribute("see-more", "true");
    //             }
    //         }
    //     }

    //     async renderCareerLocationWithoutUpdate() {
    //         const data = await this.getListCareer();
    //         this.updateCareerList(data);
    //         this.ActivateLocationButton();
    //     }
    //     async renderCareerLocation(is_search = false) {

    //         const data = await this.getListCareer();
    //         this.updateCareerList(data);
    //         this.updateResult(data.length, is_search);
    //         this.ActivateLocationButton();

    //     }
    //     careerSeeMore() {
    //         this.counter = this.num_rows + 5;

    //         this.career_cards = this.career_list_body.querySelectorAll(".career-card");
    //         for (let i = 0; i < this.num_rows; i++) {
    //             this.career_cards[i].classList.add("displayed-career-card");
    //             this.career_cards[i].classList.remove("hidden-tr");
    //         }
    //         for (let i = this.num_rows; i < this.career_cards.length; i++) {
    //             this.career_cards[i].classList.add("hidden-tr");
    //             this.career_cards[i].classList.remove("displayed-career-card");
    //         }
    //     }

    //     seeMoreActivation() {
    //         if (this.career_see_more) {
    //             this.career_see_more.addEventListener("click", (e) => {
    //                 this.seeMoreEventHandler();
    //             });
    //         }
    //     }
    //     updateCareerList(data) {
    //         this.career_list_body.innerHTML = "";
    //         for (let i = 0; i < data.length; i++) {
    //             let career_list_card = document.createElement("div");
    //             career_list_card.classList.add("career-card");
    //             let career_card_title = document.createElement("h2");
    //             let career_card_info = document.createElement("div");
    //             let career_location = document.createElement("span");
    //             let career_type = document.createElement("span");
    //             let career_p = document.createElement("p");
    //             let career_button_a = document.createElement("a");
    //             let career_button = document.createElement("button");
    //             let career_button_text = document.createElement("span");
    //             let career_button_icon = document.createElement("span");

    //             career_card_title.innerHTML = `${data[i].title}`;
    //             career_location.innerHTML = `${data[i].job_location}`;
    //             career_type.innerHTML = `${data[i].job_type}`;
    //             career_p.innerHTML = `${data[i].job_introduction}`;
    //             career_button_a.href = `${data[i].url}`;
    //             career_button_text.innerHTML = "Read More";
    //             career_button_icon.innerHTML = ">";

    //             career_button.appendChild(career_button_text);
    //             career_button.appendChild(career_button_icon);
    //             career_button_a.appendChild(career_button);

    //             career_card_info.appendChild(career_location);
    //             career_card_info.appendChild(career_type);

    //             career_list_card.appendChild(career_card_title);
    //             career_list_card.appendChild(career_card_info);
    //             career_list_card.appendChild(career_p);
    //             career_list_card.appendChild(career_button_a);

    //             this.career_list_body.appendChild(career_list_card);
    //         }
    //         if (data.length > 6) {
    //             this.career_see_more.style.display = 'flex'

    //             this.careerSeeMore();
    //         }
    //         else {

    //             this.career_see_more.style.display = 'none'
    //         }
    //     }


    //     updateCareerResult(num, is_search = false) {
    //         let filterd = false;
    //         if (this.global_location_career != "") {
    //             filterd = true;
    //         }

    //         if (filterd || is_search) {
    //             if (page_obj.isArabic()) {
    //                 this.filter_result.innerHTML = `${num} نتيجة`;
    //             } else {
    //                 this.filter_result.innerHTML = `${num} result found`;
    //             }
    //         } else {
    //             this.filter_result.innerHTML = "";
    //         }
    //     }

    //     toggleFilterBoxAppearance(clickedIndex) {
    //         this.location_button.addEventListener('click', (e) => {
    //             if (page_obj.isMobile()) {
    //                 this.location_form.classList.toggle("box-appear-flex");
    //             }
    //             else {
    //                 this.location_form.classList.toggle("box-appear");

    //             }

    //         })
    //     }
    //     ActivateLocationButton() {
    //         if (this.global_location_career == "") {
    //             this.location_button.innerHTML = `Location ${this.filter_icon}`;
    //             this.location_button.classList.remove("active");
    //         } else {
    //             this.location_button.classList.add("active");
    //             this.location_button.innerHTML = `${this.global_location_career.charAt(0).toUpperCase() + this.global_location_career.slice(1)
    //                 } ${this.filter_icon}`;
    //         }
    //     }
    //     updateGlobalLocationAndRender() {

    //         for (let i = 0; i < this.location_checkboxes.length; i++) {
    //             this.location_checkboxes[i].addEventListener("click", (e) => {
    //                 if (this.location_checkboxes[i].checked) {
    //                     this.global_location_career = e.target.value;
    //                     if (this.location_checkboxes[i].value == "all") {
    //                         this.global_location_career = "";
    //                     }
    //                 } else {
    //                     this.global_location_career = "";
    //                 }
    //                 for (let j = 0; j < this.location_checkboxes.length; j++) {
    //                     if (this.location_checkboxes[j] != this.location_checkboxes[i]) {
    //                         this.location_checkboxes[j].checked = false;
    //                     }
    //                 }
    //                 this.renderCareerLocation();
    //             });
    //         }
    //     }

    //     hiring_message() {
    //         if (this.career_list_body || this.career_detail_page) {
    //             this.create_hiring_message();
    //         }
    //     }
    //     create_hiring_message() {
    //         let body = document.querySelector("body");
    //         let hiring_message = document.createElement("span");
    //         hiring_message.classList.add("hiring-message");
    //         hiring_message.innerHTML = "We are hiring";
    //         body.prepend(hiring_message);

    //         // Set a timeout to fade out and remove the message after a certain time (e.g., 3000 milliseconds = 3 seconds)
    //         setTimeout(function () {
    //             hiring_message.classList.add("hide");
    //             setTimeout(function () {
    //                 hiring_message.remove();
    //             }, 500); // Time for fade-out animation (half of the transition duration)
    //         }, 3000); // Adjust the time as needed
    //     }
    //     async activatecareersSection() {
    //         this.setLocationCheckboxes();
    //         this.updateGlobalLocationAndRender()

    //         this.seeMoreActivation();
    //         this.toggleFilterBoxAppearance()

    //         this.renderCareerLocationWithoutUpdate();
    //         this.hiring_message()
    //         this.search_form.addEventListener("submit", (e) => {
    //             this.searchEvent(e);
    //         });
    //     }



    // }

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
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            });
            return response.json();
        }
  
        async getLatestNews() {
         
            try{
                let data = await fetch("./news.json")
                data = await data.json()
                return data.data.slice(0,3)
            } catch(err){
                console.log(err.message);
            }
        }

        createLatestNews(latest_news){
            // this.latest_section.classList.add("s-cards");

            let inner_latest_section = document.createElement("div");

            for (let i = 0; i < latest_news.length; i++) {
                let news_div = document.createElement("div"); //card
                news_div.classList.add("latest-card");

                let news_div_link = document.createElement("a");
                news_div_link.href = `${latest_news[i].url}`;

                let news_image = document.createElement("img");
                if (latest_news[i].image ){
                    news_image.src = `${latest_news[i].image}`;
                }
                else{
                    news_image.src = `./assets/images/OIG.jpg`;
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

    //     async getListNews() {
    //         let url;
    //         if (page_obj.isArabic()) {
    //             url = `/news/ar?category=${this.global_category}&search=${this.news_search}`;
    //         } else {
    //             url = `/news/en?category=${this.global_category}&search=${this.news_search}`;
    //         }
    //         let latest_news = await this.getNews(url);
    //         return latest_news;
    //     }

    //     seeMoreEventHandler() {
    //         if (this.category_see_more.getAttribute("see-more") === "true") {
    //             // Show the next 5 rows
    //             for (let i = this.news_start_counter; i < this.news_counter; i++) {
    //                 if (this.news_rows[i]) {
    //                     this.news_rows[i].classList.remove("hidden-tr");
    //                     this.news_rows[i].classList.add("displayed-news-a");
    //                 }
    //             }
    //             // Update the counters
    //             this.news_start_counter += 5;
    //             this.news_counter += 5;

    //             if (this.news_start_counter >= this.news_rows.length) {
    //                 this.category_see_more.textContent = "See Less";
    //                 this.category_see_more.setAttribute("see-more", "false");
    //             }
    //         } else {
    //             // Hide the extra rows
    //             this.news_start_counter = 3;
    //             this.news_counter = this.news_rows.length;
    //             for (let i = this.news_start_counter; i <= this.news_counter; i++) {
    //                 if (this.news_rows[i]) {
    //                     this.news_rows[i].classList.add("hidden-tr");
    //                     this.news_rows[i].classList.remove("displayed-news-a");
    //                 }
    //             }
    //             this.news_counter = this.news_start_counter + 5;

    //             // // Update the counters
    //             // news_start_counter -= 5;
    //             // news_counter -= 5;

    //             if (this.news_start_counter <= this.news_num_rows) {
    //                 this.category_see_more.textContent = "See More ...";
    //                 this.category_see_more.setAttribute("see-more", "true");
    //             }
    //         }
    //     }

    //     uncheckAllTheCheckBoxes() {

    //         let checkboxs = this.category_form.querySelectorAll(
    //             'input[type="checkbox"]'
    //         );
    //         for (let i = 0; i < checkboxs.length; i++) {
    //             checkboxs[i].checked = false;
    //         }
    //     }
    //     searchEvent(e) {
    //         e.preventDefault();
    //         this.uncheckAllTheCheckBoxes();
    //         let search = e.target.search.value;
    //         this.news_search = search;
    //         this.renderNewsCategory(true);
    //     }


    //     async renderNewsCategoryWithoutUpdate() {
    //         const data = await this.getListNews();
    //         this.updateNewsList(data);
    //         this.ActivateCategoryButton();
    //     }
    //     async renderNewsCategory(is_searsh = false) {

    //         const data = await this.getListNews();
    //         this.updateNewsList(data);
    //         this.updateCategoryResult(data.length, is_searsh);
    //         this.ActivateCategoryButton();

    //     }
    //     news_see_more() {
    //         this.news_counter = this.news_num_rows + 5;

    //         this.news_rows = this.news_list_body.querySelectorAll("a");
    //         for (let i = 0; i < this.news_num_rows; i++) {
    //             this.news_rows[i].classList.add("displayed-news-a");
    //             this.news_rows[i].classList.remove("hidden-tr");
    //         }
    //         for (let i = this.news_num_rows; i < this.news_rows.length; i++) {
    //             this.news_rows[i].classList.add("hidden-tr");
    //             this.news_rows[i].classList.remove("displayed-news-a");
    //         }
    //     }

    //     seeMoreActivation() {
    //         if (this.category_see_more) {
    //             this.category_see_more.addEventListener("click", (e) => {
    //                 this.seeMoreEventHandler();
    //             });
    //         }
    //     }
    //     updateNewsList(data) {
    //         this.news_list_body.innerHTML = "";
    //         for (let i = 0; i < data.length; i++) {
    //             let news_list_card = document.createElement("a");
    //             news_list_card.classList.add("displayed-news-a");
    //             let news_list_card_inner = document.createElement("div");
    //             let news_list_card_inner_inner = document.createElement("div");
    //             let news_list_span = document.createElement("span");
    //             let news_list_title = document.createElement("h2");
    //             news_list_span.innerHTML = `${data[i].publish_date}`;
    //             news_list_title.innerHTML = `${data[i].title}`;

    //             let news_list_image = document.createElement("img");
    //             news_list_image.src = `${data[i].news_banner_img.url}`;

    //             news_list_card.href = `${data[i].url}`;

    //             news_list_card_inner_inner.appendChild(news_list_span);
    //             news_list_card_inner_inner.appendChild(news_list_title);
    //             news_list_card_inner.appendChild(news_list_card_inner_inner);
    //             news_list_card_inner.appendChild(news_list_image);
    //             news_list_card.appendChild(news_list_card_inner);
    //             this.news_list_body.appendChild(news_list_card);
    //         }
    //         if (data.length > 5) {
    //             this.category_see_more.style.display = 'flex'

    //             this.news_see_more();
    //         }
    //         else {

    //             this.category_see_more.style.display = 'none'
    //         }
    //     }

    //     updateCategoryResult(num, is_search = false) {
    //         let filterd = false;
    //         if (this.global_category != "") {
    //             filterd = true;
    //         }

    //         if (filterd || is_search) {
    //             if (page_obj.isArabic()) {
    //                 this.filter_result.innerHTML = `${num} نتيجة`;
    //             } else {
    //                 this.filter_result.innerHTML = `${num} result found`;
    //             }
    //         } else {
    //             this.filter_result.innerHTML = "";
    //         }
    //     }

    //     ActivateCategoryButton() {
    //         if (this.global_category == "") {
    //             this.category_button.innerHTML = `Category ${this.filter_icon}`;
    //             this.category_button.classList.remove("active");
    //         } else {
    //             this.category_button.classList.add("active");
    //             this.category_button.innerHTML = `${this.global_category.charAt(0).toUpperCase() + this.global_category.slice(1)
    //                 } ${this.filter_icon}`;
    //         }
    //     }
    //     updateGlobalCategoryAndRender() {

    //         for (let i = 0; i < this.category_checkboxes.length; i++) {
    //             this.category_checkboxes[i].addEventListener("click", (e) => {
    //                 if (this.category_checkboxes[i].checked) {
    //                     this.global_category = e.target.value;
    //                     if (this.category_checkboxes[i].value == "all") {
    //                         this.global_category = "";
    //                     }
    //                 } else {
    //                     this.global_category = "";
    //                 }
    //                 for (let j = 0; j < this.category_checkboxes.length; j++) {
    //                     if (this.category_checkboxes[j] != this.category_checkboxes[i]) {
    //                         this.category_checkboxes[j].checked = false;
    //                     }
    //                 }
    //                 this.renderNewsCategory();
    //             });
    //         }
    //     }
        async activateNewsSection() {
    //         this.setCategoryCheckboxes();
    //         this.updateGlobalCategoryAndRender()
    //         this.seeMoreActivation();
    //         this.setSearchInput()
    //         this.toggleFilterBoxAppearance()

    //         let trendy_news = await this.getTrendyNews();
    //         this.createTrendyNews(trendy_news);

            // let latest_news = await this.getLatestNews();

            let latest_news = await this.getLatestNews();

            this.createLatestNews(latest_news);

    //         this.renderNewsCategoryWithoutUpdate();
    //         this.search_form.addEventListener("submit", (e) => {
    //             this.searchEvent(e);
    //         });
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
                        console.log('filer');
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
        async getPrograms() {
            try{
                let data = await fetch("../programs.json")
                data = data.json()
                console.log(data);
                return data
            } catch(err){
                console.log(err.message)
            }

        }
        async getProgramData() {

            let data = await this.getPrograms()
            console.log("data :", data);
            let result = data
            for (let i = 0; i < this.global_keys.length; i++) {
                result = result.filter(item => {
                    if (this.global_filter[this.global_keys[i]] == '' || this.global_filter[this.global_keys[i]] == "All") {
                        return true
                    }
                    return item[this.global_keys[i]] == this.global_filter[this.global_keys[i]]
                })
            }

            return result
        }

        async renderProgramsWithoutUpdateResult() {
            const data = await this.getProgramData();
            // console.log("result: ", data);
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
                td1.classList.add(`column-${this.table_head_tds.length}`);
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
                    td.classList.add(`column-${this.table_head_tds.length}`);
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
                td5.classList.add(`column-${this.table_head_tds.length}`);

                if (data[x].guidence_plan) {
                    td5.innerHTML = ` 
                    <a href=${data[x].guidence_plan} class="guidance-plan" target="_blank">
                    <button>
                    <span>Guidance Plan</span>
                    <span>${pdf_icon}</span>
                    </button>
                    </a>`;
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
                inner_button.innerHTML = `
                <span>${data[x].program_name}</span>
                <span class='accordion-icon'>${accordion_downarrow}</span>`;
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

                span3.innerHTML = ` 
                <a href="${data[x].guidence_plan}" class="guidance-plan" target="_blank">
                <button>
                <span>Guidance Plan</span>
                <span>${pdf_icon}</span>
                </button>
                </a>`;
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
            // this.global_filter["search"] = "";
            // this.search_input.value = "";

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
                    `column-${this.table_head_tds.length}`
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
            // this.setSearchInput();
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
                    if (true) {
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
                left.classList.toggle("hide", true);
                right.classList.toggle("hide", page_obj.isArabic());
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
            for (let i = 0; i < this.sliders.length; i++) {
                let scroll_width = this.scroll_divs[i].offsetWidth;
                this.hideArrow(this.sliders[i], scroll_width, this.right_arrows[i], this.left_arrows[i]);
            }
        }

        handelProgramSlider(program) {
            // console.log(program);
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
