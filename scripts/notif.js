    function initnoif() {
       // URL copy and notification functionality
        function showNotification(message) {
            const container = document.querySelector('.notification-container');
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = `
                <svg viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                </svg>
                <p>${message}</p>
            `;
            container.appendChild(notification);
            
            // Trigger animation
            setTimeout(() => notification.classList.add('show'), 10);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }

        // Add click handlers to all URL previews
        document.querySelectorAll('.url-preview').forEach(preview => {
            const url = preview.querySelector('span').textContent;
            // Add tooltip
            preview.setAttribute('data-tooltip', url);
            
            preview.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(url);
                    showNotification('URL copied to clipboard!');
                } catch (err) {
                    showNotification('Failed to copy URL');
                }
            });
        });
        
        function updateThemeIcons(theme) {
            if (theme === 'dark') {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
        }
    }

    // Initialize theme when DOM is loaded
    document.addEventListener('DOMContentLoaded', initnoif);
    
    export { initnoif };