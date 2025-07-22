
        function showSection(sectionId) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });

            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });

            const target = document.getElementById(sectionId);
            if (target) target.classList.add('active');

            document.querySelectorAll('.nav-item').forEach(item => {
                if (item.getAttribute('onclick') === `showSection('${sectionId}')`) {
                    item.classList.add('active');
                }
            });
        }
    

