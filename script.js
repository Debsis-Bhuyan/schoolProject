
$(document).ready(function() {
    // loadPage('./pages/home.html'); // Load the home page by default

    function loadPage(page) {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                // Parse the HTML content
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');

                // Extract and append the script elements
                const scripts = doc.querySelectorAll('script');
                scripts.forEach(script => {
                    const newScript = document.createElement('script');
                    newScript.textContent = script.textContent;
                    document.body.appendChild(newScript);
                });

                // Insert the HTML content (excluding script elements) into the #content div
                $('.content').html(doc.querySelector('body').innerHTML);
            })
            .catch(error => {
                console.error('Error loading page:', error);
            });
    }
});
        document.addEventListener("DOMContentLoaded", function() {
           

            // Handle navigation clicks
            var navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(function(link) {
                link.addEventListener('click', function(event) {
                    event.preventDefault(); // Prevent default link behavior
                    var page = this.getAttribute('href');
                    loadPage(page);
                });
            });
        });

    
        
        
        document.addEventListener("DOMContentLoaded", function() {
            // Function to scroll the text horizontally
            function scrollText() {
                var scrollingElement = document.querySelector('.row'); 
                scrollingElement.scrollLeft += 1; // Adjust speed by changing the increment value
                if (scrollingElement.scrollLeft >= scrollingElement.scrollWidth - scrollingElement.clientWidth) {
                    scrollingElement.scrollLeft = 0; // Reset to the beginning once reached the end
                }
            }
    
            // Call the scrollText function every 20 milliseconds (adjust for desired speed)
            setInterval(scrollText, 20);
        });




   
        const contentIndex = [
            { page: './pages/about/aboutSchool.html', content: 'Content of About School page' },
            { page: './pages/about/principal.html', content: 'Content of Principal page' },
            { page: './pages/about/coOrdinator.html', content: 'Content of Co-ordinator page' },
            { page: './pages/about/teachingStaff.html', content: 'Teaching staff page' },
            { page: './pages/home.html', content: 'Home page' },
            { page: './pages/ourSchool/guidlineStudent.html', content: 'Guidline page' },
            { page: './pages/ourSchool/schoolTiming.html', content: 'Schooltiming page' },
            { page: './pages/ourSchool/schoolUniform.html', content: 'Uniform page' },
            { page: './pages/ourSchool/visitingHour.html', content: 'Visiting  page' },
            { page: './pages/ourSchool/leaveRule.html', content: 'Leave page' },
            { page: './pages/ourSchool/schoolfeeFine.html', content: 'Fees and fine page' },

            { page: './pages/rules/rules.html', content: 'Rules page' },
            { page: './pages/facilities/schoolLibrary.html', content: 'Library page' },
            { page: './pages/facilities/scout.html', content: 'Scout and guide page' },
            { page: './pages/facilities/otherFacilities.html', content: 'Other facilities page' },
            { page: './pages/admissionEnquiry/admissionEnquiry.html', content: 'Admission enquiry page' },
            { page: './pages/notice/importantNotice.html', content: 'Notice page' },
            { page: './pages/notice/commonNotice.html', content: 'common Notice page' },
            { page: './pages/notice/parentNotice.html', content: 'Parent Notice page' },
            { page: './pages/contactUs/contactUs.html', content: 'Contact Us page' },
           
           
        ];
        
        document.getElementById('searchForm').addEventListener('submit', function(event) {
            event.preventDefault(); 
            const searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();
            if (searchQuery !== '') {
                const results = searchContent(searchQuery);
                displayResults(results);
                document.getElementById('searchInput').value = ''; // Clear search input after displaying results
            } else {
                alert('Please enter a search query');
            }
        });
        
        function searchContent(query) {
            const results = [];
            contentIndex.forEach(item => {
                if (item.content.toLowerCase().includes(query)) {
                    results.push(item);
                }
            });
            return results;
        }
        
        function displayResults(results) {
            const resultList = document.getElementById('searchResults');
            resultList.innerHTML = ''; // Clear existing content
            if (results.length > 0) {
                // Automatically navigate to the first search result
                window.location.href = results[0].page;
            } else {
                const listItem = document.createElement('li');
                listItem.textContent = 'No results found';
                resultList.appendChild(listItem);
            }
        }
        




        document.addEventListener("DOMContentLoaded", function() {
            // Function to load page content into the .content div
            function loadPage(page) {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.querySelector('.content').innerHTML = this.responseText;
                    }
                };
                xhttp.open("GET", page, true);
                xhttp.send();
            }
        
            // Handle navigation clicks
            var navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(function(link) {
                link.addEventListener('click', function(event) {
                    event.preventDefault(); // Prevent default link behavior
                    var page = this.getAttribute('href');
                    loadPage(page);
                });
            });
        
            // Slideshow functionality
            const interval = 3000; // Change image every 3 seconds
            let currentIndex = 0;
            const slides = document.querySelectorAll(".carousel-item");
            const totalSlides = slides.length;
            const prevButton = document.querySelector(".carousel-control-prev");
            const nextButton = document.querySelector(".carousel-control-next");
        
            function showSlide(index) {
                slides.forEach((slide) => {
                    slide.classList.remove("active");
                });
                slides[index].classList.add("active");
            }
        
            function nextSlide() {
                clearInterval(slideInterval); // Clear interval before changing slide
                currentIndex = (currentIndex + 1) % totalSlides;
                showSlide(currentIndex);
                slideInterval = setInterval(nextSlide, interval); // Restart interval
            }
        
            function prevSlide() {
                clearInterval(slideInterval); // Clear interval before changing slide
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                showSlide(currentIndex);
                slideInterval = setInterval(nextSlide, interval); // Restart interval
            }
        
            let slideInterval = setInterval(nextSlide, interval);
        
            document.querySelector(".carousel").addEventListener("mouseover", function() {
                clearInterval(slideInterval);
            });
        
            document.querySelector(".carousel").addEventListener("mouseout", function() {
                slideInterval = setInterval(nextSlide, interval);
            });
        
            nextButton.addEventListener("click", function() {
                nextSlide();
            });
        
            prevButton.addEventListener("click", function() {
                prevSlide();
            });
        
            // Student details functionality
            const students = [
                {
                    name: "CHINMAYA PANDA",
                    rank: 4,
                    classYear: "CL-V 2016-17",
                    imageUrl: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlN19waG90b2dyYXBoeV9vZl9oYXBweV9pbmRpYW5fa2lkX3ByaW1hcnlfZWxlbWVudF9mNjg5YjljMC1kZTY3LTQxZGUtOTdlOC0yNTc0ZjNjMzA2MzhfMS5wbmc.png",
                },
                {
                    name: "PANDA",
                    rank: 9,
                    classYear: "CL-V 2016-10",
                    imageUrl: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsb2ZmaWNlMTlfcGhvdG9fb2ZfaW5kaWFuX2NoaWxkcmVuX2JveV93aXRoX2dsYXNzZXNfaG9sZF8wMjQ2MGRiMi0zMGVlLTQ4NGUtOTk2NC1kYWUxM2NkZTk0MDMucG5n.png",
                },
                {
                    name: "CHINMAYA",
                    rank: 0,
                    classYear: "CL-VI 2010-17",
                    imageUrl: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlN19waG90b2dyYXBoeV9vZl9oYXBweV9pbmRpYW5fa2lkX3ByaW1hcnlfZWxlbWVudF80NDBkNWQ5YS0wNTY1LTRhZDEtOTRhYS1iYzc4Nzg4ODczZTFfMS5wbmc.png",
                },
                {
                    name: "CHINMAYA ROUT",
                    rank: 4,
                    classYear: "CL-V 2016-10",
                    imageUrl: "https://w7.pngwing.com/pngs/548/984/png-transparent-student-child-learning-course-curriculum-write-the-little-boy-english-pencil-people.png",
                },
                // Other student data...
            ];
        
            let currentIndexStudent = 0;
        
            async function changeStudentDetails() {
                try {
                    const currentStudent = students[currentIndexStudent];
        
                    document.getElementById("studentImg").src = currentStudent.imageUrl;
                    document.getElementById("rankNumber").textContent = currentStudent.rank;
                    document.getElementById("studentName").textContent = currentStudent.name;
                    document.getElementById("classYear").textContent = currentStudent.classYear;
        
                    currentIndexStudent = (currentIndexStudent + 1) % students.length;
                } catch (error) {
                    console.error("An error occurred while updating student details:", error);
                }
            }
        
            async function updateStudentDetails() {
                while (true) {
                    await changeStudentDetails();
                    await new Promise(resolve => setTimeout(resolve, 2000)); // Delay between updates (2 seconds)
                }
            }
        
            updateStudentDetails();
        });
        

        const marquee = document.querySelector('.notices marquee');

        marquee.addEventListener('mouseover', function() {
            marquee.stop();
        });

        marquee.addEventListener('mouseout', function() {
            marquee.start();
        });
