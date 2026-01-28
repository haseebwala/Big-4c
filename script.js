document.addEventListener('DOMContentLoaded', () => {
    const serviceHeaders = document.querySelectorAll('.service-header');

    serviceHeaders.forEach(header => {
        header.addEventListener('click', (event) => {
            // 1. Identify the clicked item and its parent
            const clickedHeader = event.currentTarget;
            const currentItem = clickedHeader.parentElement;
            const isCurrentlyActive = currentItem.classList.contains('active');

            // 2. Close ALL items (Exclusive Accordion Behavior)
            // This ensures that when we open a new one, the others collapse.
            document.querySelectorAll('.service-item').forEach(item => {
                item.classList.remove('active');
                const btn = item.querySelector('.service-header');
                btn.setAttribute('aria-expanded', 'false');
            });

            // 3. If the clicked item was NOT active, open it now.
            // If it WAS active, step 2 already closed it, so we do nothing 
            // (effectively allowing a toggle close).
            if (!isCurrentlyActive) {
                currentItem.classList.add('active');
                clickedHeader.setAttribute('aria-expanded', 'true');
            }
        });
    });
});
