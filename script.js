const faqs = document.querySelectorAll('.tournerdanslavide');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        const icon = faq.querySelector('.iconlevide i');
        const fullbox = faq.querySelector('.tournerdanslavide h4');
        if (icon.className === 'active'){
            icon.className = 'notactive';
            fullbox.style.fontWeight =400; 
        }
        else{
            icon.className = 'active';
            fullbox.style.fontWeight =700; 
        }

    })
})

