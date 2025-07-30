function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = element.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            const mobileNav = document.getElementById('mobileNav');
            mobileNav.classList.remove('active');
        }

        function openGoogleForm() {
            const formUrl = "https://forms.gle/MKDcJmxuSntcJDCh9";
            window.open(formUrl, "_blank");
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            const mobileNav = document.getElementById('mobileNav');
            mobileNav.classList.toggle('active');
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const mobileMenu = document.querySelector('.mobile-menu');
            const mobileNav = document.getElementById('mobileNav');
            
            if (!mobileMenu.contains(event.target) && !mobileNav.contains(event.target)) {
                mobileNav.classList.remove('active');
            }
        });

        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We\'ll get back to you soon.');
        });

        // Add scroll effect to header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(15, 15, 30, 0.95)';
            } else {
                header.style.background = 'rgba(15, 15, 30, 0.9)';
            }
        });

        // Animate elements on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.feature-card, .pricing-card');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }

        // Initialize animations
        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll('.feature-card, .pricing-card');
            elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            });
        });

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);